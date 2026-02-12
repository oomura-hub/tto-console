// TTO マニュアルデータ（8章構成）
const MANUAL_DATA = [
    {
        chapter: "第1章 Webマーケティングの原理原則",
        sections: [
            {
                id: "ch1-1", title: "1-1 マーケティングとは", html: `<h2>1-1 マーケティングとは</h2>
<div class="alert-box">
    <b>マーケティングを一言で言うと？</b><br>
    → <b>「需要と供給を繋ぐこと」</b><br>
    → 需要がわかれば、良い供給を作れる。
</div>

<h3>供給によって顧客が得たいものとは？</h3>
<p>→ <b>ベネフィット（理想の未来）</b></p>
<div class="tip-box">
    顧客は「モノ」そのものではなく、その先の「変化した自分」を求めています。
</div>

<h3>需要とは具体的にどういうものか？</h3>
<p>→ 欲求から生まれた、商品やサービスを欲しいと思う気持ち</p>

<h3>需要が生まれるメカニズム</h3>
<div class="flow-container">
    <div class="flow-step"><span><b>現状</b><br>課題がある状態</span></div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step"><span><b>ベネフィットの認知</b><br>外部情報で理想が顕在化</span></div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step"><span><b>欲求の発生</b><br>現状との差分で欲求が生まれる</span></div>
    <div class="flow-arrow">↓</div>
    <div class="flow-step"><span><b>需要の発生</b><br>解決策を探し始める</span></div>
</div>

<div class="comparison-grid">
    <div class="comp-box comp-success comp-full">
        <h4>基本概念の整理</h4>
        <ul>
            <li><b>ベネフィット：</b> 自分の理想の姿</li>
            <li><b>欲求：</b> ベネフィットを実現したいと思う気持ち</li>
            <li><b>需要：</b> 欲求から生まれた商品やサービスを欲しいと思う気持ち</li>
            <li><b>供給：</b> 顧客の需要を満たすサービス</li>
        </ul>
    </div>
</div>

<h3>最重要ポイント：顧客理解</h3>
<div class="alert-box">
    <b>マーケティングでは顧客を理解することが最重要</b><br>
    顧客の現状とベネフィットを踏まえて、どのような欲求が生まれているかを深く理解することが、全ての設計の起点となります。
</div>

<div class="tip-box">
    💡 詳細はPDF資料「<a href="https://drive.google.com/file/d/15UaXFEmXI1OGb55TKRRS04b9KpEwPEHh/view" target="_blank">マーケティング1日目.pdf</a>」を参照してください。
</div>` },
            {
                id: "ch1-2", title: "1-2 SNSマーケティングの特性", html: `<h2>1-2 SNSマーケティングの特性</h2>
<div class="alert-box">
    SNSマーケティングとは、従来の<b>「一方的な広告」</b>ではなく、ユーザーとの<b>「双方向のつながり」</b>を軸とした次世代のマーケティング手法です。
</div>

![SNSマーケティングの特性イメージ](sns_marketing_traits_1770880909877.png)

<h3>1. 従来の広告（Web/リスティング）との根本的な違い</h3>
<p>SNSと検索エンジン（Google等）では、利用するユーザーの<b>心理状態</b>が全く異なります。</p>

<div class="comparison-grid">
    <div class="comp-box comp-risk">
        <h4>検索/リスティング広告</h4>
        <p><b>【顕在ニーズ / 目的あり】</b><br>
        「これを買いたい」「これを調べたい」という明確な目的を持って検索する層。効率は良いが、パイが限られる。</p>
    </div>
    <div class="comp-box comp-success">
        <h4>SNS（TikTok等）</h4>
        <p><b>【潜在ニーズ / セレンディピティ】</b><br>
        「何か面白いものないかな」というリラックスした状態で閲覧。偶然の出会いから新しい欲求が生まれる（発見性）。</p>
    </div>
</div>

<h3>2. SNSマーケティングを定義する3大特性</h3>
<div class="check-grid">
    <div class="check-item">
        🔄 <b>圧倒的な拡散力（二次拡散）：</b><br>
        投稿がシェア（レコメンド）されることで、フォロワー以外の不特定多数へ爆発的に広がります。
    </div>
    <div class="check-item">
        🤝 <b>双方向コミュニケーション：</b><br>
        コメントやDMを通じて顧客と直接つながり、「ファン」を育成できます。信頼（ロイヤルティ）が購買に直結します。
    </div>
    <div class="check-item">
        🎨 <b>UGC（ユーザー生成コンテンツ）：</b><br>
        企業の発信よりも「一般ユーザーのリアルな感想」が最も信頼されるのがSNSの世界です。
    </div>
</div>

<h3>3. 重要用語：UGCとは？</h3>
<div class="tip-box">
    <b>UGC (User Generated Content)：</b><br>
    ユーザーによって作られたコンテンツ（投稿、レビュー、動画等）のことです。<br>
    今の時代、ユーザーは広告を嫌います。しかし、<b>「自分と似た誰かの本音」</b>には強く反応します。TTO（オーガニック投稿）の目的は、このUGCに近い自然な形での認知獲得です。
</div>

<div class="alert-box">
    <b>インターン生へのメッセージ：</b><br>
    「売ろうとするな、つながろうとせよ」。SNSでは広告感が出た瞬間にスワイプされます。ユーザーの日常に溶け込み、共感や発見を生むことが成功の鍵です。
</div>` },
            { id: "ch1-3", title: "1-3 アルゴリズムという概念", html: `<h2>1-3 アルゴリズムという概念</h2><div class="alert-box">プラットフォームが「何を」「誰に」届けるかを決めている仕組み。YouTube・Instagram・TikTokそれぞれで異なるアルゴリズムが動いている。</div><div class="tip-box">📘 このセクションは現在執筆中です。</div>` },
            { id: "ch1-4", title: "1-4 基本指標（CVR・CTR・CPA等）", html: `<h2>1-4 基本指標（CVR・CTR・CPA等）</h2><div class="alert-box">Webマーケティングで日常的に使われるKPIの意味と読み方を理解する。</div><div class="check-grid"><div class="check-item">📊 <b>CVR（コンバージョン率）：</b> 訪問者のうち購入に至った割合</div><div class="check-item">📊 <b>CTR（クリック率）：</b> 表示されたうちクリックされた割合</div><div class="check-item">📊 <b>CPA（顧客獲得単価）：</b> 1件の購入を獲得するためにかかったコスト</div></div><div class="tip-box">📘 TTOではCPA＝0円。これがオーガニック施策の最大の強み。</div>` }
        ]
    },
    {
        chapter: "第2章 TikTokという媒体の理解",
        sections: [
            { id: "ch2-1", title: "2-1 TikTokのアルゴリズム", html: `<h2>2-1 TikTokのアルゴリズム</h2><div class="alert-box">TikTokのアルゴリズムは「滞在時間」を最重要視しています。SNSはユーザーの可処分時間の奪い合いであり、長く見られる投稿こそが正義です。</div><div class="check-grid"><div class="check-item">★★★ <b>滞在時間</b>（離脱させない）</div><div class="check-item">★★ いいね・保存・シェア</div><div class="check-item">★ コメント（ただし議論を呼ぶものは強力）</div></div><div class="tip-box">💡 フォロワー0のアカウントでも100万再生される。これがTikTokの最大の特徴であり、TTOが成立する理由。</div>` },
            { id: "ch2-2", title: "2-2 ユーザーの行動心理", html: `<h2>2-2 ユーザーの行動心理</h2><div class="alert-box">TikTokユーザーの脳は「死んでいる」状態で見ています。難しい内容は処理できません。相手の脳処理負担を最小限に抑え、直感的に理解できる設計が不可欠です。</div><div class="check-grid"><div class="check-item">⏱️ スワイプ判断は<b>0.5秒以内</b></div><div class="check-item">🧠 「暇つぶし」が起点。能動的に情報を探していない</div><div class="check-item">📱 ほとんどの人が<b>1秒以内にスワイプする</b></div></div>` },
            { id: "ch2-3", title: "2-3 投稿フォーマット", html: `<h2>2-3 投稿フォーマット（動画 / 画像スライド）</h2><div class="comparison-grid"><div class="comp-box comp-success"><h4>画像スライド</h4><p>・EC商材との相性が良い<br>・制作コストが低い<br>・情報量を詰め込みやすい<br>・Canvaで制作可能</p></div><div class="comp-box comp-success"><h4>動画</h4><p>・感情に訴えやすい<br>・冒頭のインパクトが重要<br>・CapCutで編集<br>・制作コストは高いがリターンも大きい</p></div></div>` },
            { id: "ch2-4", title: "2-4 TikTok Shop / アフィリエイト", html: `<h2>2-4 TikTok Shop / アフィリエイトの仕組み</h2><div class="alert-box">TikTok上で商品リンクを設置し、ユーザーが購入するとコミッションが発生する仕組み。</div><div class="tip-box">📘 このセクションは現在執筆中です。</div>` }
        ]
    },
    {
        chapter: "第3章 TTOの原理原則",
        sections: [
            {
                id: "ch3-1", title: "3-1 TTOとは？（TTPの精神）", html: `<h2>3-1 TTOとは？（TTPの精神）</h2>
<div class="alert-box"><b>TTO（TikTok Organic）</b>とは、広告費をかけずにTikTok上で投稿を行い、バズらせることで多くの人に見てもらい、弊社商品を購入してもらうことを目的とした取り組みです。</div>
<h3>初級編のゴール</h3>
<div class="check-grid"><div class="check-item">✅ TTO基礎知識のインプットが完了する</div><div class="check-item">✅ 他社投稿のTTP（徹底的にパクる）が正しくできるようになる</div></div>
<p>正しく他社のバズ投稿をパクれるようになれば、<b>10本投稿すれば1個以上はバズれる</b>ようになると思います。</p>
<h3>実績例</h3>
<div class="feature-grid"><div class="feature-card"><div class="card-icon">📊</div><div><div class="card-title">75万再生の投稿実績</div><div class="card-desc">再生回数：75万回 / 購入数：約200件<br>→ 約3,750再生ごとに1件の購入が発生<br>→ 商品単価3,500円 × 200件 ＝ 約70万円の売上<br>→ <b>広告費ゼロのため、投稿ひとつで60~70万円の純利益</b></div></div></div></div>
<p><a href="https://www.tiktok.com/@sgttiatekh0/photo/7554748004327083282" target="_blank">▶ 参考投稿を見る</a></p>
<div class="comparison-grid"><div class="comp-box comp-risk comp-full"><h4>バズらない投稿からは一切売上が発生しない</h4><p>→ まず最初に身につけるべきは「投稿をバズらせる力」<br>→ バズを再現できるようになった段階で、購入率を高める施策に取り組んでいく</p></div></div>` },
            { id: "ch3-2", title: "3-2 収益モデル", html: `<h2>3-2 収益モデル</h2><div class="alert-box">再生数 × CVR × 単価 ＝ 売上。これがTTOの収益公式。</div><div class="feature-grid"><div class="feature-card"><div class="card-icon">💰</div><div><div class="card-title">収益シミュレーション</div><div class="card-desc">10万再生 × CVR 0.5% × 報酬500円 ＝ <b>25万円</b><br>30万再生 × CVR 0.5% × 報酬500円 ＝ <b>75万円</b><br><br>広告費ゼロのため、ほぼ全額が利益になる</div></div></div></div>` },
            { id: "ch3-3", title: "3-3 商品選定の考え方", html: `<h2>3-3 商品選定の考え方</h2><div class="tip-box">📘 このセクションは現在執筆中です。売れる商品の条件、市場性とCVRのバランスについて追記予定。</div>` },
            { id: "ch3-4", title: "3-4 アカウント設計", html: `<h2>3-4 アカウント設計</h2><div class="tip-box">📘 このセクションは現在執筆中です。ジャンル特化 vs 雑記、プロフィール構成について追記予定。</div>` },
            {
                id: "ch3-5", title: "3-5 KPI・状態目標", html: `<h2>3-5 KPI・状態目標</h2>
<h3>KPI</h3>
<div class="feature-grid"><div class="feature-card"><div class="card-icon">🎯</div><div><div class="card-title">1ヶ月の間に30万再生の投稿を1~2個生み出す</div><div class="card-desc">これが入社後1ヶ月の定量目標です。</div></div></div></div>
<h3>状態目標</h3>
<div class="check-grid"><div class="check-item">📈 <b>バズ構造を理解する：</b> 成功事例からバズる投稿の構造的な理解を深める</div><div class="check-item">🔍 <b>自力で正しくバズを分析できる：</b> 成功要因を言語化・パターン化できるようになる</div><div class="check-item">🚀 <b>一定自走して投稿作成が出来るようになる：</b> 企画から実行/改善まで一貫して担当できるようになる</div></div>` },
            {
                id: "ch3-6", title: "3-6 入社後ロードマップ", html: `<h2>3-6 入社後ロードマップ</h2>
<div class="alert-box">入社1ヶ月は以下のようなロードマップで業務をしてもらいます。</div>
<div class="flow-container"><div class="flow-step"><span class="step-number">1W</span><span><b>1週目：</b> マニュアル理解（TTO基礎理解）/ リサーチ業務（バズの感覚理解）/ 投稿画像制作補助（Canvaの使い方や画像制作への慣れ）</span></div><div class="flow-arrow">↓</div><div class="flow-step"><span class="step-number">2W</span><span><b>2週目：</b> リサーチ業務（バズの感覚理解）/ 投稿画像制作補助 / 自身で投稿制作開始（企画や構成作成は大村が担当）</span></div><div class="flow-arrow">↓</div><div class="flow-step"><span class="step-number">3W+</span><span><b>3週目以降：</b> 投稿画像制作補助 / 自身で企画〜構成案作成開始 / 動画投稿制作開始</span></div></div>
<div class="tip-box">💡 <b>つまり...</b><br>①基礎的なTTOの理解をする<br>②同時並行して他者のバズ投稿を量産する<br>③量をこなす中で、徐々に自身で考えてバズらせるための仮説を投稿内容に盛り込んでいく</div>` },
            {
                id: "ch3-7", title: "3-7 業務内容の全体像", html: `<h2>3-7 業務内容の全体像</h2>
<div class="feature-grid"><div class="feature-card"><div class="card-icon">📖</div><div><div class="card-title">マニュアルインプット</div><div class="card-desc">スライド / スプレッドシート / Slackログなどを参照し、TTO関連知識をインプット</div></div></div><div class="feature-card"><div class="card-icon">🔎</div><div><div class="card-title">リサーチ業務</div><div class="card-desc">新しくアカウントを作成し、おすすめ欄に文脈が似てる投稿が流れてくるようにする → バズ投稿を沢山見て、成功要因を分析する</div></div></div><div class="feature-card"><div class="card-icon">🖼️</div><div><div class="card-title">画像投稿を作成する</div><div class="card-desc">Canvaを使用してカルーセル画像を作成。参考動画をTTPし、構成案に基づいて制作。</div></div></div></div>` }
        ]
    },
    {
        chapter: "第4章 バズの原理原則",
        sections: [
            {
                id: "ch4-1", title: "4-1 バズの本質", html: `<h2>4-1 バズの本質</h2>
<div class="alert-box"><b>どんな投稿がバズるか？ = 滞在時間が長い投稿。</b>これが最も重要。<br>その他いいね・保存・共有などのエンゲージメントも評価項目にはあるが、アルゴリズムが最も重視するのは「どれだけ長く見られたか」。<br><br>SNSはユーザーの可処分時間の奪い合い。滞在時間が長い投稿をプラットフォームは優遇する。</div>
<h3>バズの3段階</h3>
<div class="flow-container"><div class="flow-step"><span class="step-number">01</span><span><b>指を止める：</b> 1枚目。0.5秒でスワイプを止めさせる</span></div><div class="flow-arrow">↓</div><div class="flow-step"><span class="step-number">02</span><span><b>見る（興味を持つ）：</b> 2枚目。常識の破壊・新情報・物議で離脱を防ぐ</span></div><div class="flow-arrow">↓</div><div class="flow-step"><span class="step-number">03</span><span><b>見続ける：</b> 3枚目以降。信憑性や読む価値がないと見続けてくれない。このグラデーションの繊細な部分が重要</span></div></div>
<div class="tip-box">💡 この3段階が<b>すべて揃って</b>初めてバズが発生する。どれか1つでも欠けると伸びない。</div>` },
            {
                id: "ch4-2", title: "4-2 バズ確率を上げる7つの要素", html: `<h2>4-2 バズ確率を上げる7つの要素</h2>
<div class="check-grid">
<div class="check-item">🔄 <b>①参考動画を真似すること（TTP）：</b> 何においてもうまいものをパクるのが上手くなる/成果を出す上では大事。なるべくバズった要因であろう部分（変数）は動かさず、＋αのアイディアを乗っける</div>
<div class="check-item">🔥 <b>②トレンドが超大事：</b> ユーザーの興味関心を引きやすく、アルゴリズム上も優遇されやすい。季節やイベント、大衆認知のある旬のニュースなど</div>
<div class="check-item">👁️ <b>③TikTok上での視認性：</b> ユーザーは見る気がない状態でアプリを開いているため、視認性が悪いと見てもらえない</div>
<div class="check-item">✨ <b>④目新しさ：</b> CR（クリエイティブ）は枯れない。枯れるのはCRの見栄えや素材が飽きられるから。同じ内容でもフォーマット・演出を変えれば再び伸びることがある</div>
<div class="check-item">🧠 <b>⑤わかりやすさ：</b> TikTok見てる時は脳は死んでる。難しい解説を入れても大衆からは見られない。ただしユーザーが見る姿勢になっていれば長文は読まれ、滞在時間が増えてバズる。ケースバイケース</div>
<div class="check-item">🎯 <b>⑥パイ（反応できる人数）が大きいテーマ：</b> 投稿の反響（IMPや再生数）は「投稿の内容に反応できる人数」に依存する。バズを狙う上では入り口を狭めすぎてはいけない</div>
<div class="check-item">⏱️ <b>⑦滞在時間を伸ばす仕掛け：</b> 診断要素を入れる、視聴者参加型の方程式を入れる（例：水の適性摂取量は身長×XX）など</div>
</div>
<div class="tip-box">⚠️ <b>ターゲットを絞りすぎるとバズらない</b><br>例：男磨きの投稿で「マッチョになりたい人」をターゲットにすると、マッチョに興味がない人は0.5秒でスワイプしてしまう。<br>相席屋＜＜マッチングアプリ　くらいのパイの違いをイメージ。<br><b>全員が「見たい」と思えるような面白い投稿を作る</b></div>` },
            {
                id: "ch4-3", title: "4-3 情報密度とわかりやすさ", html: `<h2>4-3 情報密度とわかりやすさ</h2>
<div class="alert-box">世の中には短期快楽コンテンツが溢れている。何かを伝えたい時は<b>相手の脳処理負担を抑えること</b>が大事。</div>
<h3>情報密度を高めるポイント</h3>
<div class="check-grid">
<div class="check-item">📝 視聴者の「思考コストを最小にしてあげる」意識 ≒ わかりやすいタイトルにする</div>
<div class="check-item">✂️ 不要なものはとにかく削って情報密度を最大まで高める</div>
<div class="check-item">🖼️ 画像を効果的に使って視認性を上げる</div>
<div class="check-item">📏 文章が長すぎたり情報量が多すぎて離脱されるのはよくある話</div>
</div>
<div class="comparison-grid"><div class="comp-box comp-success"><h4>わかりやすさのテクニック</h4><p>・画像を適切に使う<br>・視認性の良いビジュアルにする<br>・いらない文を省き短くする<br>・TikTok上で見やすいフォントサイズ</p></div><div class="comp-box comp-risk"><h4>ありがちな失敗</h4><p>・文章が長すぎて読む気が失せる<br>・難しい専門用語の多用<br>・画像なしのテキストだらけ<br>・情報の優先順位がない</p></div></div>` },
            {
                id: "ch4-4", title: "4-4 1枚目（フック）の原則", html: `<h2>4-4 1枚目（フック）の原則</h2>
<div class="alert-box"><b>目的：ユーザーのスワイプを止めて、まず見てもらうこと（指を止める）</b></div>
<h3>画像選定の優先順位</h3>
<div class="comparison-grid"><div class="comp-box comp-success comp-full" style="text-align:center"><h4>トレンド画像 ＞＞＞＞ 女性画像 ＞ 男性画像 ＝ アニメ画像</h4></div></div>
<div class="check-grid">
<div class="check-item">🔥 <b>トレンド画像：</b> TikTokで短期的にバズった人、芸能人のニュース、旬のトレンドなど。<b>最も有効</b></div>
<div class="check-item">👩 <b>女性画像：</b> マスの男性に刺すなら爆美女より<b>可愛い系</b>（手に届きそう感）が良い。エロを想起する画像、彼女感のある画像。フォロワー10〜20万人ほどの女性インフルエンサー、AV女優、TikTokで有名な女性など</div>
<div class="check-item">👨 <b>男性画像：</b> 「こうなりたい」層に刺さるビジュアル。男磨きやモテに関する投稿時に使用</div>
<div class="check-item">🎌 <b>アニメ画像：</b> 認知度の高い作品やキャラクターのかっこいい画像</div>
</div>
<div class="tip-box">⚠️ <b>NG：</b> 六本木のキャバ嬢のようなニッチな美女ではなく、<b>フォロワー数が多いアイドルの超可愛い画像</b>のような「大衆ウケ」するものを選ぶ</div>` },
            {
                id: "ch4-5", title: "4-5 2枚目（興味引き）の原則", html: `<h2>4-5 2枚目（興味引き）の原則</h2>
<div class="alert-box"><b>目的：見て興味を持ってもらう</b><br>その後の内容を見るかどうかを決めるため、重要度が高い。</div>
<h3>効果的なテクニック</h3>
<div class="check-grid">
<div class="check-item">🚫 <b>常識の破壊：</b> 「9割が勘違いしている」「実は逆効果」など。当たり前のことを言ってもバズらない。おもしろくないから。</div>
<div class="check-item">📢 <b>新情報の提示：</b> 誰も知らない事実、隠された真実</div>
<div class="check-item">⚔️ <b>物議を醸す内容 ≒ 炎上させにいく：</b> 大衆が良いと思うものを悪く言い、悪いと思うものを良いと言う。論争が起こるような話題</div>
<div class="check-item">💋 <b>エロ：</b> 性的な興味を引く要素</div>
<div class="check-item">🔥 <b>トレンド：</b> 旬の話題を2枚目にも活用</div>
</div>
<div class="tip-box">💡 <b>実例：</b> 「筋トレが大事」= OUT。競合はドーパミンドバドバの面白い投稿。その中で見てもらわないといけない。<br>→「筋トレだけしても一生モテない理由」と突きつける方がスワイプが止まる。</div>` },
            {
                id: "ch4-6", title: "4-6 3枚目以降（離脱防止）の原則", html: `<h2>4-6 3枚目以降（離脱防止）の原則</h2>
<div class="alert-box"><b>目的：ユーザーを退屈させずに離脱を防ぐ</b></div>
<div class="check-grid">
<div class="check-item">📚 <b>有益性：</b> 読んで得になる・役に立つ情報</div>
<div class="check-item">😂 <b>面白さ：</b> エンタメ性、意外性</div>
<div class="check-item">✨ <b>目新しさ：</b> 見たことない切り口・演出</div>
<div class="check-item">🔒 <b>信憑性：</b> 根拠やデータがあると読み続けてもらえる</div>
</div>
<div class="tip-box">💡 見続けてもらうためには、信憑性だったり読む価値がないと見てくれない。このグラデーションの部分が繊細だが、重要。</div>` },
            {
                id: "ch4-7", title: "4-7 構成テンプレート（黄金の8枚）", html: `<h2>4-7 構成テンプレート（黄金の8枚構成）</h2>
<div class="flow-container"><div class="flow-step"><span>1枚目：違和感・分断（常識の否定）</span></div><div class="flow-arrow">↓</div><div class="flow-step"><span>2枚目：問題の明文化（当事者化）</span></div><div class="flow-arrow">↓</div><div class="flow-step"><span>3枚目：意外な真因（認知破壊）</span></div><div class="flow-arrow">↓</div><div class="flow-step"><span>4枚目：構造の提示（理屈の説明）</span></div><div class="flow-arrow">↓</div><div class="flow-step"><span>5枚目：具体例（Before/After）</span></div><div class="flow-arrow">↓</div><div class="flow-step"><span>6枚目：再現条件（誰でもできる）</span></div><div class="flow-arrow">↓</div><div class="flow-step"><span>7枚目：要約・圧縮（箇条書き）</span></div><div class="flow-arrow">↓</div><div class="flow-step"><span>8枚目：行動誘導（議論を生む質問）</span></div></div>` },
            {
                id: "ch4-8", title: "4-8 既視感の排除", html: `<h2>4-8 既視感の排除</h2>
<div class="check-grid">
<div class="check-item">🔢 <b>素数の技術：</b> 5選や10選といったキリの良い数字は「人工的な広告臭」を感じさせる。<b>「7選」「11選」</b>などの素数の方がスワイプが止まりやすい</div>
<div class="check-item">🔄 <b>フォーマットの過剰露出を避ける：</b> 同じFMTを擦りすぎると、中身以前に「またこの系統か」という判断で弾かれる</div>
<div class="check-item">🎨 <b>あらゆる角度から既視感を最小にする：</b> CRは枯れない。枯れるのは見栄えや素材が飽きられるから。同じ内容でもフォーマット・演出を変えれば再び伸びる</div>
</div>` },
            {
                id: "ch4-9", title: "4-9 コメント欄の設計", html: `<h2>4-9 コメント欄の設計</h2>
<div class="alert-box">コメント欄は商品購入に繋げるための重要なパート。ユーザーはコメント欄を見て「この商品、良さそう」と感じ、購入を検討する。</div>
<h3>Point</h3>
<div class="check-grid"><div class="check-item">📊 <b>訴求開始基準：</b> 5000再生を超えたら入れ始める。1000再生あたりの動画に入れてもあまり意味なし</div><div class="check-item">📌 <b>コメント量：</b> 上位5〜10個が自社コメントにできればOK</div><div class="check-item">⏰ <b>タイミング：</b> 初期に入れることでいいねがつきやすく上位表示されやすい</div></div>
<div class="comparison-grid"><div class="comp-box comp-success"><h4>やるべきこと</h4><p>・Amazon関連のワードを1~2個入れる<br>・一番大事なのは<b>想像を掻き立てるコメント</b><br>・投稿内容に関連する・共感されやすい内容と絡める</p></div><div class="comp-box comp-risk"><h4>やってはいけないこと</h4><p>・<b>PR感を出さないことが重要</b><br>・必要以上に商品名を言わない<br>・ステマっぽいコメントをしない</p></div></div>
<p><a href="https://docs.google.com/spreadsheets/d/17b68JYL6FaWy45uXoeZz4LyrCMQczGqbC2Eth3_oCGQ/edit?gid=1143172260#gid=1143172260" target="_blank">▶ コメント管理シートを見る</a></p>` },
            { id: "ch4-10", title: "4-10 分析と改善", html: `<h2>4-10 分析と改善</h2><div class="tip-box">📘 このセクションは現在執筆中です。KPIの読み方、何を見て次の投稿を改善するか、再生数vs保存率のマトリクスで投稿を分類する方法について追記予定。</div>` }
        ]
    },
    {
        chapter: "第5章 実務オペレーション",
        sections: [
            {
                id: "ch5-1", title: "5-1 競合リサーチの方法", html: `<h2>5-1 競合リサーチの方法</h2>
<div class="alert-box">TTOではリサーチ業務はかなり重要。既存のバズ投稿をTTP/正しくパクることでバズる確度が上がる。</div>
<h3>リサーチアカウント作成</h3>
<div class="flow-container"><div class="flow-step"><span class="step-number">01</span><span>TikTokで新規アカウントを作成</span></div><div class="flow-arrow">↓</div><div class="flow-step"><span class="step-number">02</span><span>検索欄で弊社と類似投稿を見まくり、おすすめ欄に訴求を行っている投稿が自然と流れてくるようにする</span></div><div class="flow-arrow">↓</div><div class="flow-step"><span class="step-number">03</span><span>バズっている投稿を保存していき、普段の投稿に活かす（<b>最低10万再生以上の投稿を参考にする</b>）</span></div></div>
<div class="tip-box">⚠️ <b>注意：</b> 普段のノリで自分の興味のある動画を見ていたら、おすすめ欄が自身の興味関心に寄っていくので注意！<br><br><a href="https://docs.google.com/spreadsheets/d/17b68JYL6FaWy45uXoeZz4LyrCMQczGqbC2Eth3_oCGQ/edit?gid=1809422533#gid=1809422533" target="_blank">▶ 参考スプレッドシート</a></div>` },
            {
                id: "ch5-2", title: "5-2 日次リサーチ業務", html: `<h2>5-2 日次リサーチ業務</h2>
<div class="flow-container"><div class="flow-step"><span class="step-number">①</span><span>リサーチ用アカウントで商品の訴求を行なっているバズ動画を集める</span></div><div class="flow-arrow">↓</div><div class="flow-step"><span class="step-number">②</span><span>簡潔に「バズのポイント」をまとめる</span></div><div class="flow-arrow">↓</div><div class="flow-step"><span class="step-number">③</span><span><b>毎日4つ程度</b>スプレッドシートに記載し、TTO_CR分析というCWチャンネルで田村さんをメンションし、FBをもらう</span></div></div>
<div class="check-grid"><div class="check-item">📊 <a href="https://docs.google.com/spreadsheets/d/17b68JYL6FaWy45uXoeZz4LyrCMQczGqbC2Eth3_oCGQ/edit?gid=1340404750#gid=1340404750" target="_blank">▶ リサーチ用スプレッドシート</a></div><div class="check-item">💬 <a href="https://www.chatwork.com/#!rid409600795-2017450376420401152" target="_blank">▶ Chatwork参考投稿</a></div></div>` },
            { id: "ch5-3", title: "5-3 企画立案のプロセス", html: `<h2>5-3 企画立案のプロセス</h2><div class="tip-box">📘 このセクションは現在執筆中です。リサーチ結果→コンセプト決め→構成作成の流れについて追記予定。</div>` },
            { id: "ch5-4", title: "5-4 投稿スケジュールと運用", html: `<h2>5-4 投稿スケジュールと運用</h2><div class="tip-box">📘 このセクションは現在執筆中です。投稿頻度、時間帯、複数アカウント運用について追記予定。</div>` },
            {
                id: "ch5-5", title: "5-5 データ振り返り・学習報告", html: `<h2>5-5 データ振り返り・学習報告</h2>
<div class="alert-box">上長が手取り足取りTTOを教える社内リソースはないため、以下TTO関連マニュアルを参考に自発的に学習に取り組んでください。</div>
<p>※見ただけにならず理解を深めるために、学んだことを以下FMTを参考にテキストにまとめること</p>
<div class="comparison-grid"><div class="comp-box comp-success comp-full"><h4>■ 学習報告FMT（一例）</h4><p>マニュアル：〇〇<br><br><b>【学んだこと】</b><br>xxx<br><br><b>【印象に残ったこと / 自分で考えたこと】</b><br>xxx<br><br><b>【今後に活かすこと】</b><br>xxx</p></div></div>
<p><a href="https://uiui-hq.slack.com/archives/C09E99GGMMW/p1762398757825159?thread_ts=1762164072.669279&cid=C09E99GGMMW" target="_blank">▶ Slackでの報告例を見る</a></p>` }
        ]
    },
    {
        chapter: "第6章 AI活用",
        sections: [
            { id: "ch6-1", title: "6-1 AIに任せること・任せないこと", html: `<h2>6-1 AIに任せること・任せないこと</h2><div class="comparison-grid"><div class="comp-box comp-success"><h4>AIに任せる（作業）</h4><p>・テキスト構成の生成<br>・競合投稿の分析<br>・概要欄テキストの作成<br>・コメント文案の生成</p></div><div class="comp-box comp-risk"><h4>人が判断する（戦略）</h4><p>・ペルソナ設計<br>・商品選定<br>・最終的なクリエイティブ判断<br>・投稿のGo/NoGo</p></div></div>` },
            { id: "ch6-2", title: "6-2 プロンプトの基本", html: `<h2>6-2 プロンプトの基本</h2><div class="tip-box">📘 このセクションは現在執筆中です。AIに正確にやらせるための指示の出し方について追記予定。</div>` },
            { id: "ch6-3", title: "6-3 TTO統合コンソールの使い方", html: `<h2>6-3 TTO統合コンソールの使い方</h2><div class="tip-box">📘 このセクションは現在執筆中です。ジェネレーター・チャット・リサーチの各機能の操作手順について追記予定。</div>` },
            { id: "ch6-4", title: "6-4 AIでリサーチを加速する", html: `<h2>6-4 AIでリサーチを加速する</h2><div class="tip-box">📘 このセクションは現在執筆中です。画像添付→「このバズ投稿の構成を分析して」の活用法について追記予定。</div>` }
        ]
    },
    {
        chapter: "第7章 画像投稿作成",
        sections: [
            {
                id: "ch7-1", title: "7-1 投稿作成の流れ", html: `<h2>7-1 投稿作成の流れ</h2>
<div class="alert-box">再現性を持ってバズを生み出すことを目的とし、毎回の投稿を記録し、分析・改善を繰り返す仕組みとしてスプレッドシートで投稿を管理しています。</div>
<h3>投稿管理シートの使い方</h3>
<div class="comparison-grid"><div class="comp-box comp-success"><h4>投稿前</h4><p>・参考動画URLをG列に記載<br>・投稿時にE列に「バズらせるために意識したこと」を記載</p></div><div class="comp-box comp-success"><h4>投稿後</h4><p>・効果/投稿URLを記載<br>・FB内容を確認<br>・FB内容を踏まえて今後に活かすことをF列「ネクストアクション」に記載</p></div></div>
<h3>投稿作成の流れ</h3>
<div class="flow-container"><div class="flow-step"><span class="step-number">①</span><span>リサーチして参考元のバズ動画を探す</span></div><div class="flow-arrow">↓</div><div class="flow-step"><span class="step-number">②</span><span>バズ動画をTTP（徹底的にパクる）or ＋αをして、投稿案を作成する</span></div></div>
<div class="tip-box">⚠️ <b>投稿案作成の鉄則</b><br>・なるべくバズった要因であろう部分（変数）は動かさない<br>・その上でバズらせるために＋αのアイディアを乗っける<br>・全てパクったものをあげてもバズ投稿よりバズることはほぼない<br>・<b>最初はなるべく変数は変えずにパクるのが◯。</b>外しにくくなるから。変に弄ると、自身の仮説でバズ要素を消す可能性がある。</div>` },
            {
                id: "ch7-2", title: "7-2 概要欄・ハッシュタグ・音楽", html: `<h2>7-2 概要欄・ハッシュタグ・音楽</h2>
<h3>概要欄</h3>
<div class="check-grid"><div class="check-item">📝 作り込む必要性はそこまで高くない</div><div class="check-item">📄 投稿のトピックに関する長文（<b>500〜800字</b>）を記載するとOK</div><div class="check-item">⏱️ 概要欄を読む人が長文を読むことで<b>滞在時間が長くなり、投稿が伸びやすくなる</b></div></div>
<h3>ハッシュタグ</h3>
<div class="tip-box">🏷️ 投稿内容に関するタグを他者投稿を参考に選定する<br><br>例（男磨き投稿）：<b>#男磨き #垢抜け #モテ男 #モテ男の特徴</b><br><br>・選んだハッシュタグによって配信先が決まっていくイメージ<br>・<b>投稿件数が多いものを選び、届けたいユーザーに合わせて設計する</b></div>
<h3>音楽</h3>
<div class="check-grid"><div class="check-item">🎵 選定した音楽で著しく投稿の効果がよくなる、ということは基本ない</div><div class="check-item">📈 今トレンドの音楽を選ぶことで、多少動画が伸びやすくなる可能性はある</div><div class="check-item">🔄 トピックによってもよく使われる音楽がある程度決まっているので、他者の音楽を参考にしてOK</div></div>` },
            {
                id: "ch7-3", title: "7-3 コメントブロック設定", html: `<h2>7-3 コメントブロック設定</h2>
<div class="alert-box">以下の流れで特定のコメントをブロックすることができます。<b>販売にマイナスとなり得るワードを含むコメントを非表示にすること</b>が目的です。</div>
<div class="tip-box">🛡️ TikTokの設定画面からNGワードを設定し、「ステマ」「詐欺」「案件」「PR」などの販売に悪影響を与えるコメントが表示されないようにすること。</div>` }
        ]
    },
    {
        chapter: "第8章 動画投稿作成",
        sections: [
            {
                id: "ch8-1", title: "8-1 冒頭0〜1秒のルール", html: `<h2>8-1 冒頭0〜1秒のルール</h2>
<div class="alert-box">0秒目に魅力的なシーンを置く意識を強める。<b>冒頭2秒が大事＝△ 冒頭0〜1秒が大事＝◎</b></div>
<p>ほとんどの人が、TikTokを見る際<b>1秒以内にスワイプする</b>。</p>
<h3>悪い例</h3>
<div class="check-grid"><div class="check-item">❌ <a href="https://www.tiktok.com/@katougumo8t/video/7583763444269059346" target="_blank">悪い例①</a> — 出だしが魅力的ではないが故の離脱多そう。</div><div class="check-item">❌ <a href="https://www.tiktok.com/@sukininatyadame/video/7578307994190990612" target="_blank">悪い例②</a> — 同上</div></div>
<p><a href="https://x.com/4610_hotel/status/2008797372273619150" target="_blank">▶ 冒頭0秒の重要性について（X参考ポスト）</a></p>` },
            {
                id: "ch8-2", title: "8-2 台本・シーン設計", html: `<h2>8-2 台本・シーン設計</h2>
<h3>To do</h3>
<div class="check-grid"><div class="check-item">🎬 編集で、動画内で<b>最も面白い / 感情が揺さぶられる / 足が止まりそうなシーンを先頭に持ってくる</b></div><div class="check-item">📝 最初の台本 / シーン設計 / 演技などを意図的に魅力的なものにする</div></div>
<div class="tip-box">🎯 <b>続きが気になる内容で離脱させない</b><br>（ナンパだったら成功するのか？という期待で離脱しない）</div>` },
            {
                id: "ch8-3", title: "8-3 DR.CHILLの動画訴求", html: `<h2>8-3 DR.CHILLの動画訴求</h2>
<div class="check-grid"><div class="check-item">🔄 <b>見せ方 / 訴求 / 台本を変え続ける。</b></div><div class="check-item">🎭 <b>演技感が少なく、広告感もない内容にしたい</b></div></div>
<div class="tip-box">💡 <b>メモ：</b> バズる動画ができたら、プロフを明確にしてシリーズ化を行いフォローするきっかけを作る。単発で面白いが、今後が気になるような設計ができるとフォロワー数も増えてくる。</div>` }
        ]
    },
    {
        chapter: "付録 外部マニュアル・リンク集",
        sections: [
            {
                id: "ch9-1", title: "ツール・ログイン情報", html: `<h2>ツール・ログイン情報</h2>
<div class="alert-box">TTOで使用するツールは以下の通り。特にCanvaは画像作成する際に頻繁に使用するので、使い方を一通りマスターすること。</div>
<div class="feature-grid"><div class="feature-card"><div class="card-icon">📱</div><div><div class="card-title">TikTokアカウント</div><div class="card-desc">投稿用アカウントとリサーチアカウントの<b>最低2つ</b>を作成すること。<br>※メールアドレスがあればアカウント量産できる</div></div></div><div class="feature-card"><div class="card-icon">🎨</div><div><div class="card-title">Canva</div><div class="card-desc">以下Googleアカウントにログイン<br>メアド：y.ad.ymha@gmail.com<br>PW：ayumu1372<br>→Canvaにログイン</div></div></div><div class="feature-card"><div class="card-icon">🎬</div><div><div class="card-title">CapCut</div><div class="card-desc">スマホで動画編集をする際に各自ログイン</div></div></div></div>
<h3>Canva操作Tips</h3>
<div class="check-grid"><div class="check-item">📋 <b>投稿のコピー：</b> 左上ファイル→コピー（一枚をコピーする時はcommand＋CでOK）</div><div class="check-item">🔲 <b>背景透過：</b> 画像を選択したら上に表示が出てくるので実行</div><div class="check-item">🔍 <b>画像の解像度を上げる場合：</b> 画像選択→編集→アプリ→image Upscaler</div></div>` },
            {
                id: "ch9-2", title: "TTO関連マニュアル", html: `<h2>TTO関連マニュアル</h2>
<div class="feature-grid"><div class="feature-card"><div class="card-icon">📑</div><div><div class="card-title">オーガニックアフィリエイト</div><div class="card-desc"><a href="https://docs.google.com/presentation/d/1FnIq56orlS4nrYDsUcQECs62uOYmuWa6tKXePX6qdrc/edit" target="_blank">▶ 資料を開く</a></div></div></div><div class="feature-card"><div class="card-icon">📈</div><div><div class="card-title">オーガニックアフィ伸ばし方</div><div class="card-desc"><a href="https://note.com/preview/nb9748f6bbf7e?prev_access_key=776094c0c1e0a5c573da36b9c46a48b4" target="_blank">▶ noteを開く</a></div></div></div><div class="feature-card"><div class="card-icon">📊</div><div><div class="card-title">TTOインハウス資料</div><div class="card-desc"><a href="https://docs.google.com/spreadsheets/d/17b68JYL6FaWy45uXoeZz4LyrCMQczGqbC2Eth3_oCGQ/edit" target="_blank">▶ スプレッドシートを開く</a></div></div></div></div>
<h3>社内コミュニケーション</h3>
<div class="check-grid"><div class="check-item">💬 <b>Slackログ：</b> Slack「vape-tikオーガニック」チャンネル参照</div><div class="check-item">💬 <b>チャットワークログ：</b> チャットワーク「TTOコンサル【Dr.Chill】、TTO_CR分析」参照</div></div>` },
            {
                id: "ch9-3", title: "マーケティング関連資料", html: `<h2>マーケティング関連資料</h2>
<div class="alert-box">TTOはマーケティング施策全体の中での1つの施策でしかありません。WEBマーケティングの関連マニュアルも空き時間で読み、マーケターとして成長してください。</div>
<div class="feature-grid"><div class="feature-card"><div class="card-icon">🎥</div><div><div class="card-title">広告動画制作マニュアル</div><div class="card-desc"><a href="https://docs.google.com/presentation/d/1Z0IO5ygDKJq4i0eRFouVwxM7vjpY2YLyWUl8pRQPxJU/edit" target="_blank">▶ 資料を開く</a></div></div></div><div class="feature-card"><div class="card-icon">🧠</div><div><div class="card-title">マインドセットなど</div><div class="card-desc"><a href="https://docs.google.com/presentation/d/1-4cO1YJFQdLpM4G4TIc-CHUevuH2p4HzGxGz0eRmlz0/edit" target="_blank">▶ 資料を開く</a></div></div></div><div class="feature-card"><div class="card-icon">📚</div><div><div class="card-title">マーケティング資料</div><div class="card-desc"><a href="https://drive.google.com/file/d/15UaXFEmXI1OGb55TKRRS04b9KpEwPEHh/view" target="_blank">▶ 資料を開く</a></div></div></div></div>` },
            {
                id: "ch9-4", title: "Appendix（参考アカウント）", html: `<h2>Appendix（参考アカウント）</h2>
<div class="alert-box">ショート動画制作に強そうな人、TTOに知見がある人、マーケティングに強い人のXアカウント等を参考にしてください。</div>
<div class="tip-box" style="background: linear-gradient(135deg, rgba(15,23,42,1), rgba(30,41,59,1)); color: #fff; border-color: rgba(255,255,255,0.1);">🚀 <b>最後に</b><br><br>このマニュアルは完成ではありません。日々の実務で得た「バズの発見」や「効率化のコツ」を追記し、最強の組織マニュアルを一緒に作り上げていきましょう。</div>` }
        ]
    }
];
