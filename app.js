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
        if (url) {
            // URLがある場合はAI分析モード
            const prompt = `@web 以下の動画URLの内容を読み込み、バズの要因を解剖した上で構成案を作成してください。
URL: ${url}
指定FMT: ${fmt === 'auto' ? '動画に最適な形式' : fmt}

【分析と構成の指示】
1. まず、動画の構成（1枚目タイトル、各スライドのトピック、画像案、背景など）を詳しく文字起こし・分析してください。
2. その分析に基づき、プロのマーケターとして「横展開」可能な新しい構成案を3パターン（Pattern A, B, C）作成してください。
3. インターン生が「なぜこの構成が良いのか」を学べるよう、解説を含めてください。`;

            const response = await callChatAPI('openai/gpt-4o', [{ role: 'user', content: prompt }]);
            renderUnifiedResults(response, result);
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
    return text
        .replace(/\&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\n\n/g, '<br><br>')
        .replace(/\n/g, '<br>')
        .replace(/「/g, '<b>「')
        .replace(/」/g, '」</b>')
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
}

async function callChatAPI(model, messages) {
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
            max_tokens: 3500
        })
    });

    const data = await res.json();
    if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
    return data.choices?.[0]?.message?.content || '';
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
    'openai/gpt-4o': { name: 'GPT-4o', provider: 'OpenAI' },
    'openai/gpt-4o-mini': { name: 'GPT-4o Mini', provider: 'OpenAI' },
    'anthropic/claude-3.5-sonnet': { name: 'Claude 3.5 Sonnet', provider: 'Anthropic' },
    'google/gemini-2.0-flash-001': { name: 'Gemini 2.0 Flash', provider: 'Google' },
    'deepseek/deepseek-chat': { name: 'DeepSeek V3', provider: 'DeepSeek' }
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
        modelSelector.value = 'openai/gpt-4o-mini';
    }

    let conversationHistory = [];

    function addMessage(text, isAi) {
        const div = document.createElement('div');
        div.classList.add('message', isAi ? 'ai-message' : 'user-message');
        if (isAi) {
            div.innerHTML = formatAiText(text);
        } else {
            div.textContent = text;
        }
        chatMessages.appendChild(div);
        chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
    }

    async function handleSend() {
        const text = chatInput.value.trim();
        const model = modelSelector?.value || 'openai/gpt-4o-mini';
        if (!text) return;

        addMessage(text, false);
        chatInput.value = '';
        chatInput.style.height = 'auto';

        conversationHistory.push({ role: 'user', content: text });

        const thinking = document.createElement('div');
        thinking.classList.add('message', 'ai-message');
        thinking.id = 'thinking';
        thinking.textContent = `思考中...`;
        chatMessages.appendChild(thinking);

        try {
            const manualText = getManualText();
            const systemPrompt = `あなたは株式会社SOCIAL GREEN TECHの優秀なAIアシスタントです。
TikTok Organic（TTO）の専門家として回答してください。

【TTOマニュアル】
${manualText}

【ルール】
Markdown記法は禁止。箇条書きは「・」を使用。日本語で回答。`;

            const messages = [{ role: 'system', content: systemPrompt }, ...conversationHistory];
            const response = await callChatAPI(model, messages);

            if (document.getElementById('thinking')) document.getElementById('thinking').remove();
            addMessage(response, true);
            conversationHistory.push({ role: 'assistant', content: response });
            if (conversationHistory.length > 20) conversationHistory = conversationHistory.slice(-16);
        } catch (e) {
            if (document.getElementById('thinking')) document.getElementById('thinking').remove();
            addMessage(`エラー: ${e.message}`, true);
        }
    }

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

    sendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keydown', (e) => {
        if (!e.isComposing && e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    });
}

// ------- 初期化 -------
document.addEventListener('DOMContentLoaded', () => {
    initManual();
    initManualSearch();
    initChat();
    initMemo();
});
