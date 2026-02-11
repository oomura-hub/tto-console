// ===== TTO 統合コンソール - メインアプリケーション =====

// ------- ページナビゲーション -------
function navigateTo(page) {
    // ページ切替
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    const target = document.getElementById(`page-${page}`);
    if (target) target.style.display = '';

    // タブのactive切替
    document.querySelectorAll('.header-tab').forEach(t => t.classList.remove('active'));
    const tab = document.querySelector(`.header-tab[data-page="${page}"]`);
    if (tab) tab.classList.add('active');

    // マニュアルページの初期表示
    if (page === 'manual' && !document.querySelector('.nav-item.active')) {
        const first = document.querySelector('.nav-item');
        if (first) first.click();
    }
}

// 共通マニュアルテキスト取得関数
function getManualText() {
    let text = '';
    if (typeof MANUAL_DATA !== 'undefined') {
        MANUAL_DATA.forEach(ch => ch.sections.forEach(sec => {
            const tmp = document.createElement('div');
            tmp.innerHTML = sec.html;
            text += tmp.innerText + '\n';
        }));
    }
    return text.slice(0, 10000);
}

// ------- 構成案ジェネレーター (分析統合版) -------
async function runGenerator() {
    const url = document.getElementById('videoUrlUnified').value.trim();
    const fmt = document.getElementById('fmtSelectorUnified').value;
    const status = document.getElementById('unifiedGenStatus');
    const result = document.getElementById('unifiedGenResult');
    const statusText = document.getElementById('unifiedStatusText');

    if (!url && fmt === 'auto') {
        alert('URLを入力するか、出力形式(FMT)を選択してください。');
        return;
    }

    status.style.display = 'flex';
    result.innerHTML = ''; // クリア
    statusText.textContent = url ? 'バズ動画を分析中...' : '構成案を生成中...';

    try {
        const manualContext = getManualText();
        const systemPrompt = `あなたはSOCIAL GREEN TECH社のTTO（TikTok Organic）専門マーケターです。
以下のマニュアル内容を「絶対的な基準」として、動画分析と構成案作成を行ってください。

【SGT TTOマニュアル】
${manualContext}

【最重要ルール】
- 1枚目の「指を止める」画像選定の基準を遵守すること。
- 2枚目の「常識の破壊・物議」のロジックが組み込まれているか厳しくチェックすること。
- 提案する3つのパターンは、すべてこのマニュアルの「勝ちパターン」に沿ったものにすること。`;

        if (url) {
            // URLがある場合はAI分析モード
            const prompt = `以下の動画URLの内容を読み込み、弊社のTTOマニュアルに照らし合わせてバズの要因を解剖し、新しい構成案を作成してください。
URL: ${url}
指定FMT: ${fmt === 'auto' ? '動画に最適な形式' : fmt}

【指示】
1. SGT式TTOの視点で、動画の構成（1枚目〜最後）を詳しく分析・言語化してください。
2. その分析に基づき、マニュアルの「黄金の8枚構成」や「勝ちパターン」を適用した新しい構成案を3パターン（Pattern A, B, C）作成してください。
3. インターン生が「なぜこの構成がマニュアル的に正しいのか」を学べるよう、解説を含めてください。`;

            const result2 = await callChatAPI('openai/gpt-5.2-pro', [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: prompt }
            ]);
            renderUnifiedResults(result2.content, result);
        } else {
            // URLがない場合は従来のテンプレート生成（簡易版）
            await new Promise(r => setTimeout(r, 800)); // 演出用
            generateLegacyStructure(fmt, result);
        }
    } catch (e) {
        console.error('Generator Error:', e);
        alert('生成中にエラーが発生しました: ' + e.message);
    } finally {
        status.style.display = 'none';
    }
}

function renderUnifiedResults(rawText, container) {
    const sections = rawText.split(/(?=Pattern A|Pattern B|Pattern C|【パターン|【構成案)/i);
    const analysis = sections[0];
    const patterns = sections.slice(1);

    let html = `
        <div class="analysis-result-section">
            <h3 class="section-title">🔍 バズ投稿の解剖結果</h3>
            <div class="analysis-card">
                <div class="proposal-content">${formatAiText(analysis)}</div>
            </div>
        </div>
        
        <div class="proposal-header">
            <h3 class="section-title">💡 転用構成案（3パターン）</h3>
        </div>
        <div class="proposal-grid">
            ${patterns.map((p, i) => `
                <div class="proposal-card">
                    <span class="proposal-tag">PATTERN ${String.fromCharCode(65 + i)}</span>
                    <div class="proposal-content">${formatAiText(p)}</div>
                </div>
            `).join('')}
        </div>
    `;
    container.innerHTML = html;
}

function generateLegacyStructure(fmt, container) {
    const template = GENERATOR_TEMPLATES[fmt];
    if (!template) return;

    let html = `<div class="analysis-result-section">
        <h3 class="section-title">✨ ${template.name}の基本構成</h3>
        <div class="gen-analysis">${template.analysis}</div>
    </div>
    <div class="proposal-grid" style="margin-top:20px">`;

    template.slides.forEach((slide, i) => {
        html += `<div class="gen-card" style="animation-delay: ${i * 0.05}s; width:100%; grid-column: span 1">
            <div class="gen-card-num">SLIDE ${slide.num}</div>
            <div class="gen-card-role">${slide.role}</div>
            <div class="gen-card-title">${slide.title}</div>
            <div class="gen-card-reason">${slide.reason}</div>
            <div class="gen-card-img">📷 ${slide.img}</div>
        </div>`;
    });
    html += `</div>`;
    container.innerHTML = html;
}

// 共通フォーマット関数
function formatAiText(text) {
    // 1. まずリンク系を先に処理（HTMLエスケープ前に）
    // Markdownリンク [text](url) → プレースホルダー
    const links = [];
    text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, (_, label, url) => {
        links.push(`<a href="${url}" target="_blank" rel="noopener" class="ai-link">${label}</a>`);
        return `%%LINK${links.length - 1}%%`;
    });
    // 裸のURL → プレースホルダー
    text = text.replace(/(https?:\/\/[^\s<>"'）\)]+)/g, (url) => {
        links.push(`<a href="${url}" target="_blank" rel="noopener" class="ai-link">${url}</a>`);
        return `%%LINK${links.length - 1}%%`;
    });

    // 2. HTMLエスケープ
    text = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // 3. テキスト装飾
    text = text
        .replace(/\n\n/g, '<br><br>')
        .replace(/\n/g, '<br>')
        .replace(/「/g, '<b>「')
        .replace(/」/g, '」</b>')
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

    // 4. リンクのプレースホルダーを復元
    links.forEach((link, i) => {
        text = text.replace(`%%LINK${i}%%`, link);
    });

    return text;
}

async function callChatAPI(model, messages, webSearch = false) {
    const API_BASE = 'https://tto-console-api-293189845667.asia-northeast1.run.app';
    const res = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: model,
            messages: messages,
            temperature: 0.7,
            max_tokens: 3500,
            webSearch: webSearch
        })
    });

    const data = await res.json();
    if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));

    const msg = data.choices?.[0]?.message;
    return {
        content: msg?.content || '',
        annotations: msg?.annotations || []
    };
}

// ------- Web検索トグル -------
let webSearchEnabled = false;

function toggleWebSearch() {
    webSearchEnabled = !webSearchEnabled;
    const btn = document.getElementById('webSearchToggle');
    const chatInput = document.getElementById('chatInput');
    if (btn) {
        btn.classList.toggle('active', webSearchEnabled);
        btn.title = webSearchEnabled ? 'Web検索: ON（クリックでOFF）' : 'Web検索を有効にする';
    }
    if (chatInput) {
        chatInput.placeholder = webSearchEnabled
            ? '🔍 Web検索ON — 最新情報を検索して回答します...'
            : '質問を入力...';
    }
}

// ------- マニュアル -------
function initManual() {
    const nav = document.getElementById('manualNav');
    const content = document.getElementById('manualContent');
    if (!nav || !content) return;

    let navHTML = '';
    MANUAL_DATA.forEach((ch, ci) => {
        navHTML += `<div class="nav-chapter ${ci === 0 ? 'open' : ''}" onclick="toggleChapter(this)">${ch.chapter} <span class="arrow">▼</span></div>`;
        navHTML += `<div class="nav-items" style="${ci === 0 ? '' : 'display:none'}">`;
        ch.sections.forEach((sec, si) => {
            const isFirst = ci === 0 && si === 0;
            navHTML += `<div class="nav-item ${isFirst ? 'active' : ''}" data-id="${sec.id}" onclick="showManualSection('${sec.id}', this)">${sec.title}</div>`;
        });
        navHTML += '</div>';
    });
    nav.innerHTML = navHTML;

    // 最初のセクションを表示
    const firstSection = MANUAL_DATA[0].sections[0];
    content.innerHTML = `<div class="manual-article">${firstSection.html}</div>`;
}

function toggleChapter(el) {
    const items = el.nextElementSibling;
    if (!items) return;
    const isOpen = items.style.display !== 'none';
    items.style.display = isOpen ? 'none' : '';
    el.classList.toggle('open', !isOpen);
}

function showManualSection(sectionId, navEl) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    if (navEl) navEl.classList.add('active');

    const content = document.getElementById('manualContent');
    for (const ch of MANUAL_DATA) {
        for (const sec of ch.sections) {
            if (sec.id === sectionId) {
                content.innerHTML = `<div class="manual-article" style="animation: fadeUp 0.3s ease-out">${sec.html}</div>`;
                content.scrollTop = 0;
                return;
            }
        }
    }
}

function initManualSearch() {
    const input = document.getElementById('manualSearch');
    if (!input) return;

    input.addEventListener('input', () => {
        const q = input.value.toLowerCase().trim();
        document.querySelectorAll('.nav-item').forEach(item => {
            const match = !q || item.textContent.toLowerCase().includes(q);
            item.style.display = match ? '' : 'none';
        });
        if (q) {
            document.querySelectorAll('.nav-items').forEach(ni => ni.style.display = '');
            document.querySelectorAll('.nav-chapter').forEach(nc => nc.classList.add('open'));
        }
    });
}

// ------- サイドパネル切替 -------
function switchPanel(panel) {
    document.getElementById('panelChat').style.display = panel === 'chat' ? 'flex' : 'none';
    document.getElementById('panelMemo').style.display = panel === 'memo' ? 'flex' : 'none';
    document.getElementById('tabChat').classList.toggle('active', panel === 'chat');
    document.getElementById('tabMemo').classList.toggle('active', panel === 'memo');
}

// ------- メモ -------
function initMemo() {
    const area = document.getElementById('memoArea');
    const status = document.getElementById('memoStatus');
    if (!area) return;

    const saved = localStorage.getItem('tto_memo');
    if (saved) area.value = saved;

    let timer = null;
    area.addEventListener('input', () => {
        status.textContent = '保存中...';
        status.classList.add('saving');
        clearTimeout(timer);
        timer = setTimeout(() => {
            localStorage.setItem('tto_memo', area.value);
            status.textContent = '保存済み';
            status.classList.remove('saving');
        }, 500);
    });
}

// ------- AI Chat -------
const AI_MODELS = {
    // --- 🏆 2026 NEW FRONTIERS (ULTRA PERFORMANCE) ---
    'openrouter/pony-alpha': { name: 'Pony Alpha (SOTA reasoning/Coding)', provider: 'OpenRouter' },
    'openai/gpt-5.3-codex-preview': { name: 'GPT-5.3 Codex Preview', provider: 'OpenAI' },
    'openai/gpt-5.2-pro': { name: 'GPT-5.2 Pro (High reliability)', provider: 'OpenAI' },
    'anthropic/claude-opus-4.6': { name: 'Claude Opus 4.6 (Intelligence King)', provider: 'Anthropic' },
    'anthropic/claude-sonnet-4.5': { name: 'Claude Sonnet 4.5', provider: 'Anthropic' },

    // --- ⚡ LATEST EFFICIENCY & SPECIALIZED ---
    'google/gemini-3-pro-preview': { name: 'Gemini 3 Pro Preview (1M Context)', provider: 'Google' },
    'google/gemini-3-flash-preview': { name: 'Gemini 3 Flash Preview', provider: 'Google' },
    'deepseek/deepseek-v3.2': { name: 'DeepSeek V3.2 (Value King)', provider: 'DeepSeek' },
    'qwen/qwen3-max-thinking': { name: 'Qwen 3 Max (Thinking MoE)', provider: 'Alibaba' },
    'qwen/qwen3-coder-next': { name: 'Qwen 3 Coder Next', provider: 'Alibaba' },

    // --- 🚀 LEGACY FRONTIERS (FOR COMPARISON) ---
    'openai/o1': { name: 'OpenAI o1 (Original Reasoning)', provider: 'OpenAI' },
    'anthropic/claude-3.5-sonnet': { name: 'Claude 3.5 Sonnet', provider: 'Anthropic' },
    'google/gemini-2.0-flash-001': { name: 'Gemini 2.0 Flash', provider: 'Google' }
};

function initChat() {
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatMessages = document.getElementById('chatMessages');
    const modelSelector = document.getElementById('modelSelector');

    if (modelSelector) {
        let html = '';
        for (const [id, info] of Object.entries(AI_MODELS)) {
            html += `<option value="${id}">${info.name}</option>`;
        }
        modelSelector.innerHTML = html;
        modelSelector.value = 'openai/gpt-5.2-pro'; // 2026年現在の最強モデルをデフォルトに
    }

    let conversationHistory = [];

    function addMessage(text, isAi, options = {}) {
        const div = document.createElement('div');
        div.classList.add('message', isAi ? 'ai-message' : 'user-message');

        if (isAi && options.webSearch) {
            const badge = document.createElement('div');
            badge.classList.add('web-search-badge');
            badge.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> Web検索結果を含む回答`;
            div.appendChild(badge);
        }

        if (isAi) {
            const contentDiv = document.createElement('div');
            contentDiv.innerHTML = formatAiText(text);
            div.appendChild(contentDiv);

            // 出典リンク（annotations）の表示
            if (options.annotations && options.annotations.length > 0) {
                const sourcesDiv = document.createElement('div');
                sourcesDiv.classList.add('web-sources');
                sourcesDiv.innerHTML = '<div class="web-sources-title">📎 出典</div>';

                const seen = new Set();
                options.annotations.forEach(ann => {
                    if (ann.type === 'url_citation' && ann.url_citation) {
                        const url = ann.url_citation.url;
                        if (seen.has(url)) return;
                        seen.add(url);
                        const domain = new URL(url).hostname.replace('www.', '');
                        const title = ann.url_citation.title || domain;
                        const link = document.createElement('a');
                        link.classList.add('web-source-link');
                        link.href = url;
                        link.target = '_blank';
                        link.rel = 'noopener';
                        link.innerHTML = `<span class="web-source-domain">${domain}</span><span class="web-source-title">${title}</span>`;
                        sourcesDiv.appendChild(link);
                    }
                });
                if (seen.size > 0) div.appendChild(sourcesDiv);
            }
        } else {
            if (options.webSearch) {
                const badge = document.createElement('span');
                badge.classList.add('web-search-badge');
                badge.innerHTML = `🔍 Web`;
                badge.style.marginRight = '6px';
                div.appendChild(badge);
            }
            const textNode = document.createTextNode(text);
            div.appendChild(textNode);
        }
        chatMessages.appendChild(div);
        chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
    }

    async function handleSend() {
        const text = chatInput.value.trim();
        const model = modelSelector?.value || 'openai/gpt-5-mini';
        const isWebSearch = webSearchEnabled;
        if (!text) return;

        addMessage(text, false, { webSearch: isWebSearch });
        chatInput.value = '';
        chatInput.style.height = 'auto';

        conversationHistory.push({ role: 'user', content: text });

        const thinking = document.createElement('div');
        thinking.classList.add('message', 'ai-message');
        thinking.id = 'thinking';

        if (isWebSearch) {
            thinking.innerHTML = `<div class="web-search-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> Web検索中...</div><span class="thinking-step">🔍 検索しています...</span>`;
            const steps = [
                '🔍 検索しています...',
                '🧠 検索結果を分析中...',
                '✍️ 回答を生成しています...'
            ];
            let stepIdx = 0;
            const stepInterval = setInterval(() => {
                stepIdx = Math.min(stepIdx + 1, steps.length - 1);
                const stepEl = thinking.querySelector('.thinking-step');
                if (stepEl) stepEl.textContent = steps[stepIdx];
                else clearInterval(stepInterval);
            }, 3000);
            thinking._stepInterval = stepInterval;
        } else {
            thinking.textContent = '思考中...';
        }

        chatMessages.appendChild(thinking);
        chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });

        try {
            const manualText = getManualText();
            const systemPrompt = `あなたは株式会社SOCIAL GREEN TECHの優秀なAIアシスタントです。
TikTok Organic（TTO）の専門家として回答してください。

【TTOマニュアル】
${manualText}

【ルール】
箇条書きは「・」を使用。日本語で回答。参考URLがある場合は必ずリンクを含めてください。Markdownリンク形式 [サイト名](URL) での記載を推奨します。${isWebSearch ? '\nWeb検索結果が提供された場合、それを踏まえて最新かつ正確な情報に基づいて回答してください。必ず出典元のURLリンクを含めてください。' : ''}`;

            const messages = [{ role: 'system', content: systemPrompt }, ...conversationHistory];
            const result = await callChatAPI(model, messages, isWebSearch);

            const thinkingEl = document.getElementById('thinking');
            if (thinkingEl) { if (thinkingEl._stepInterval) clearInterval(thinkingEl._stepInterval); thinkingEl.remove(); }
            addMessage(result.content, true, { webSearch: isWebSearch, annotations: result.annotations });
            conversationHistory.push({ role: 'assistant', content: result.content });
            if (conversationHistory.length > 20) conversationHistory = conversationHistory.slice(-16);
        } catch (e) {
            const thinkingEl2 = document.getElementById('thinking');
            if (thinkingEl2) { if (thinkingEl2._stepInterval) clearInterval(thinkingEl2._stepInterval); thinkingEl2.remove(); }
            addMessage(`エラー: ${e.message}`, true);
        }
    }

    sendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keydown', (e) => {
        if (!e.isComposing && e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    });
}

// ------- TikTok競合リサーチ -------
const API_BASE_RESEARCH = 'https://tto-console-api-293189845667.asia-northeast1.run.app';

function formatNumber(n) {
    if (n >= 10000000) return (n / 10000000).toFixed(1) + '千万';
    if (n >= 10000) return (n / 10000).toFixed(1) + '万';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
    return String(n);
}

function formatDate(timestamp) {
    const d = new Date(timestamp * 1000);
    return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
}

async function runResearch() {
    const hashtagInput = document.getElementById('researchHashtags').value.trim();
    if (!hashtagInput) {
        alert('ハッシュタグを入力してください');
        return;
    }

    const hashtags = hashtagInput.split(/[,、\s]+/).map(h => h.replace(/^#/, '').trim()).filter(h => h);
    const minViews = parseInt(document.getElementById('researchMinViews').value);
    const postType = document.getElementById('researchPostType').value;
    const periodDays = parseInt(document.getElementById('researchPeriod').value);
    const maxResults = parseInt(document.getElementById('researchMaxResults').value);

    const status = document.getElementById('researchStatus');
    const statusText = document.getElementById('researchStatusText');
    const resultsDiv = document.getElementById('researchResults');
    const summaryDiv = document.getElementById('researchSummary');

    status.style.display = 'flex';
    resultsDiv.innerHTML = '';
    summaryDiv.style.display = 'none';

    // ステップ表示
    const steps = [
        '🔍 TikTok投稿を収集中...',
        '📊 フィルタリング中...',
        '🧠 データを分析中...'
    ];
    let stepIdx = 0;
    statusText.textContent = steps[0];
    const stepInterval = setInterval(() => {
        stepIdx = Math.min(stepIdx + 1, steps.length - 1);
        statusText.textContent = steps[stepIdx];
    }, 5000);

    try {
        const res = await fetch(`${API_BASE_RESEARCH}/api/tiktok-search`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ hashtags, minViews, postType, periodDays, maxResults })
        });

        const data = await res.json();
        clearInterval(stepInterval);
        status.style.display = 'none';

        if (data.error) {
            resultsDiv.innerHTML = `<div class="research-error">❌ エラー: ${data.error}</div>`;
            return;
        }

        if (!data.posts || data.posts.length === 0) {
            resultsDiv.innerHTML = `<div class="research-empty">条件に一致する投稿が見つかりませんでした。<br>ハッシュタグや再生数の条件を変えて再検索してみてください。</div>`;
            return;
        }

        // サマリー表示
        const avgSaveRate = (data.posts.reduce((s, p) => s + parseFloat(p.saveRate), 0) / data.posts.length).toFixed(2);
        const avgEngRate = (data.posts.reduce((s, p) => s + parseFloat(p.engagementRate), 0) / data.posts.length).toFixed(2);
        const totalViews = data.posts.reduce((s, p) => s + p.playCount, 0);

        summaryDiv.style.display = 'flex';
        summaryDiv.innerHTML = `
            <div class="summary-stat">
                <div class="summary-value">${data.posts.length}<span class="summary-unit">件</span></div>
                <div class="summary-label">ヒット数 (${data.total}件中)</div>
            </div>
            <div class="summary-stat">
                <div class="summary-value">${formatNumber(totalViews)}</div>
                <div class="summary-label">合計再生数</div>
            </div>
            <div class="summary-stat">
                <div class="summary-value">${avgSaveRate}<span class="summary-unit">%</span></div>
                <div class="summary-label">平均保存率</div>
            </div>
            <div class="summary-stat">
                <div class="summary-value">${avgEngRate}<span class="summary-unit">%</span></div>
                <div class="summary-label">平均エンゲージメント率</div>
            </div>
        `;

        // 投稿カード表示
        resultsDiv.innerHTML = data.posts.map(post => `
            <a href="${post.url}" target="_blank" rel="noopener" class="research-card">
                <div class="rc-thumbnail" style="background-image: url('${post.thumbnail}')">
                    ${post.isImage ? `<span class="rc-type-badge">📷 ${post.imageCount}枚</span>` : '<span class="rc-type-badge">🎥 動画</span>'}
                </div>
                <div class="rc-body">
                    <div class="rc-author">
                        <span class="rc-author-name">@${post.author}</span>
                        <span class="rc-date">${formatDate(post.createTime)}</span>
                    </div>
                    <div class="rc-caption">${post.caption.slice(0, 80)}${post.caption.length > 80 ? '...' : ''}</div>
                    <div class="rc-stats">
                        <span class="rc-stat">▶ ${formatNumber(post.playCount)}</span>
                        <span class="rc-stat">❤ ${formatNumber(post.diggCount)}</span>
                        <span class="rc-stat">💬 ${formatNumber(post.commentCount)}</span>
                        <span class="rc-stat">🔖 ${formatNumber(post.collectCount)}</span>
                    </div>
                    <div class="rc-kpis">
                        <span class="rc-kpi ${parseFloat(post.saveRate) >= 1 ? 'kpi-hot' : ''}">保存率 ${post.saveRate}%</span>
                        <span class="rc-kpi">Eng率 ${post.engagementRate}%</span>
                    </div>
                    <div class="rc-tags">${post.hashtags.slice(0, 5).map(h => `<span class="rc-tag">#${h}</span>`).join('')}</div>
                </div>
            </a>
        `).join('');

    } catch (e) {
        clearInterval(stepInterval);
        status.style.display = 'none';
        resultsDiv.innerHTML = `<div class="research-error">❌ 通信エラー: ${e.message}</div>`;
    }
}

// ------- 初期化 -------
document.addEventListener('DOMContentLoaded', () => {
    initManual();
    initManualSearch();
    initChat();
    initMemo();
});
