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
    // active切替
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    if (navEl) navEl.classList.add('active');

    // コンテンツ表示
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

// マニュアル検索
function initManualSearch() {
    const input = document.getElementById('manualSearch');
    if (!input) return;

    input.addEventListener('input', () => {
        const q = input.value.toLowerCase().trim();
        document.querySelectorAll('.nav-item').forEach(item => {
            const match = !q || item.textContent.toLowerCase().includes(q);
            item.style.display = match ? '' : 'none';
        });
        // 検索時は全チャプターを開く
        if (q) {
            document.querySelectorAll('.nav-items').forEach(ni => ni.style.display = '');
            document.querySelectorAll('.nav-chapter').forEach(nc => nc.classList.add('open'));
        }
    });
}

// ------- ジェネレーター -------
function generateStructure() {
    const fmt = document.getElementById('fmtSelector').value;
    const template = GENERATOR_TEMPLATES[fmt];
    if (!template) return;

    const result = document.getElementById('genResult');
    let html = `<div class="gen-analysis"><b>${template.name}</b><br><br>${template.analysis}</div>`;

    template.slides.forEach((slide, i) => {
        html += `<div class="gen-card" style="animation-delay: ${i * 0.05}s">
            <div class="gen-card-num">SLIDE ${slide.num}</div>
            <div class="gen-card-role">${slide.role}</div>
            <div class="gen-card-title">${slide.title}</div>
            <div class="gen-card-reason">${slide.reason}</div>
            <div class="gen-card-img">📷 ${slide.img}</div>
        </div>`;
    });
    result.innerHTML = html;
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

// ------- AI Chat (OpenRouter 統合) -------
const OPENROUTER_KEY = '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';

// 利用可能モデル一覧
const AI_MODELS = {
    // --- OpenAI ---
    'openai/gpt-4.1': { name: 'GPT-4.1', provider: 'OpenAI' },
    'openai/gpt-4.1-mini': { name: 'GPT-4.1 Mini', provider: 'OpenAI' },
    'openai/gpt-4.1-nano': { name: 'GPT-4.1 Nano（最速）', provider: 'OpenAI' },
    'openai/gpt-4o': { name: 'GPT-4o', provider: 'OpenAI' },
    'openai/gpt-4o-mini': { name: 'GPT-4o Mini', provider: 'OpenAI' },
    'openai/o3-mini': { name: 'o3-mini（推論）', provider: 'OpenAI' },
    // --- Anthropic ---
    'anthropic/claude-sonnet-4': { name: 'Claude Sonnet 4', provider: 'Anthropic' },
    'anthropic/claude-3.5-sonnet': { name: 'Claude 3.5 Sonnet', provider: 'Anthropic' },
    'anthropic/claude-3.5-haiku': { name: 'Claude 3.5 Haiku（高速）', provider: 'Anthropic' },
    // --- Google ---
    'google/gemini-2.5-pro-preview': { name: 'Gemini 2.5 Pro', provider: 'Google' },
    'google/gemini-2.5-flash-preview': { name: 'Gemini 2.5 Flash', provider: 'Google' },
    'google/gemini-2.0-flash-001': { name: 'Gemini 2.0 Flash', provider: 'Google' },
    // --- DeepSeek ---
    'deepseek/deepseek-r1': { name: 'DeepSeek R1（推論）', provider: 'DeepSeek' },
    'deepseek/deepseek-chat': { name: 'DeepSeek V3', provider: 'DeepSeek' },
};

function initChat() {
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatMessages = document.getElementById('chatMessages');

    // モデルセレクタを動的に生成
    const modelSelector = document.getElementById('modelSelector');
    if (modelSelector) {
        modelSelector.innerHTML = '';
        let currentProvider = '';
        for (const [id, info] of Object.entries(AI_MODELS)) {
            if (info.provider !== currentProvider) {
                const optgroup = document.createElement('optgroup');
                optgroup.label = info.provider;
                // 同じプロバイダーのモデルを全て追加
                for (const [subId, subInfo] of Object.entries(AI_MODELS)) {
                    if (subInfo.provider === info.provider) {
                        const opt = document.createElement('option');
                        opt.value = subId;
                        opt.textContent = subInfo.name;
                        optgroup.appendChild(opt);
                    }
                }
                modelSelector.appendChild(optgroup);
                currentProvider = info.provider;
            }
        }
        // デフォルトをGPT-4.1に
        modelSelector.value = 'openai/gpt-4.1-mini';
    }

    // 会話履歴
    let conversationHistory = [];

    function addMessage(text, isAi) {
        const div = document.createElement('div');
        div.classList.add('message', isAi ? 'ai-message' : 'user-message');
        if (isAi) {
            const sanitized = text
                .replace(/\&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/\n\n/g, '<br><br>')
                .replace(/\n/g, '<br>');
            div.innerHTML = sanitized;
        } else {
            div.textContent = text;
        }
        chatMessages.appendChild(div);
        chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
    }

    function getSystemPrompt() {
        let manualText = '';
        if (typeof MANUAL_DATA !== 'undefined') {
            MANUAL_DATA.forEach(ch => {
                ch.sections.forEach(sec => {
                    const tmp = document.createElement('div');
                    tmp.innerHTML = sec.html;
                    manualText += tmp.innerText + '\n';
                });
            });
        }
        manualText = manualText.slice(0, 15000);

        return `あなたは株式会社SOCIAL GREEN TECHの優秀なAIアシスタントです。
TikTok Organic（TTO）に関する専門知識を持っていますが、それ以外の一般的な質問にも丁寧に回答できます。

【TTO専門知識（参考マニュアル）】
${manualText}

【回答ルール】
1. TTO・TikTok・マーケティング・投稿に関する質問には、上記マニュアルの知識を活用して具体的に答えること。
2. 一般的な質問には、マニュアルに縛られず普通に回答すること。
3. 読みやすい日本語の文章で書くこと。
4. Markdown記法は絶対に使わないこと。
5. 箇条書きには「・」「→」や数字を使うこと。
6. 段落の区切りには空行を入れ、読みやすさを最優先にすること。
7. 太字にしたい場合は「」で囲むこと。
8. AIっぽい前置き、逃げ文句、定型句は使わないこと。`;
    }

    async function handleSend() {
        const text = chatInput.value.trim();
        const model = modelSelector?.value || 'openai/gpt-4.1-mini';
        if (!text) return;

        addMessage(text, false);
        chatInput.value = '';
        chatInput.style.height = 'auto';

        // 会話履歴に追加
        conversationHistory.push({ role: 'user', content: text });

        const thinking = document.createElement('div');
        thinking.classList.add('message', 'ai-message');
        thinking.id = 'thinking';
        const modelName = AI_MODELS[model]?.name || model;
        thinking.textContent = `${modelName} が思考中...`;
        chatMessages.appendChild(thinking);
        chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });

        try {
            const response = await callOpenRouter(model);
            if (document.getElementById('thinking')) document.getElementById('thinking').remove();
            addMessage(response, true);
            // AIの返答を履歴に追加
            conversationHistory.push({ role: 'assistant', content: response });
            // 履歴が長くなりすぎないよう制限
            if (conversationHistory.length > 20) {
                conversationHistory = conversationHistory.slice(-16);
            }
        } catch (e) {
            console.error('OpenRouter Error:', e);
            if (document.getElementById('thinking')) document.getElementById('thinking').remove();
            addMessage(`エラー: ${e.message}`, true);
        }
    }

    async function callOpenRouter(model) {
        const systemPrompt = getSystemPrompt();

        const messages = [
            { role: 'system', content: systemPrompt },
            ...conversationHistory
        ];

        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENROUTER_KEY}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': window.location.href,
                'X-Title': 'TTO Console'
            },
            body: JSON.stringify({
                model: model,
                messages: messages,
                temperature: 0.7,
                max_tokens: 2000
            })
        });

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error.message || JSON.stringify(data.error));
        }

        if (data.choices && data.choices[0]?.message?.content) {
            return data.choices[0].message.content;
        }

        throw new Error('AIからの応答を取得できませんでした。');
    }

    sendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleSend();
    });
    chatInput.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
}

// ------- 設定 -------
function openSettings() {
    const current = localStorage.getItem('gemini_api_key') || '';
    const key = prompt('Gemini APIキーを入力してください:', current);
    if (key !== null) {
        localStorage.setItem('gemini_api_key', key.trim());
        alert('APIキーを保存しました。');
    }
}

// ------- 初期化 -------
document.addEventListener('DOMContentLoaded', () => {
    initManual();
    initManualSearch();
    initChat();
    initMemo();
});
