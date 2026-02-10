// TTO マニュアルデータ（HTMLから抽出・構造化）
const MANUAL_DATA = [
    {
        chapter: "① TTOの基礎",
        sections: [
            {
                id: "sec1",
                title: "資料の目的・ゴール",
                html: `<h2>① TTOの基礎</h2>
                <div class="alert-box">本マニュアルでは、弊社ブランドの商品を広告費に頼らず、TikTok上で自然に拡散・認知・購入へとつなげていくため、以下のゴールを達成することを目的としています。</div>
                <h3>資料の目的</h3>
                <div class="check-grid">
                    <div class="check-item">✅ TTOの基礎を理解し、仮説立案 → 実行 → 検証 → 改善のPDCAを自走できるようになる</div>
                    <div class="check-item">✅ バズの構造を理解し、一定の確率で再現性のあるバズ投稿を継続的に創出できるようになる</div>
                </div>
                <div class="tip-box">📘 マニュアルを参考に、実際に投稿を作り、投稿し、数字を見て、また戻ってくる。その往復の中で、必要な部分を何度も見直してください！<br><br>例えば野球でも、本を読むだけでは上達しないですよね。正しいフォームを知り、実際にバットを振り、打ってみて初めて成長します。TikTok運用も同じで、正しい型を理解し、実際に投稿し、改善を重ねることで成長していきましょう。</div>`
            },
            {
                id: "sec1-2",
                title: "TTOとは？（TTPの精神）",
                html: `<h2>① TTOとは？（TTPの精神）</h2>
                <div class="alert-box"><b>TTO（TikTok Organic）</b>とは、広告費をかけずにTikTok上で投稿を行い、バズらせることで多くの人に見てもらい、弊社商品を購入してもらうことを目的とした取り組みです。</div>
                <h3>初級編のゴール</h3>
                <div class="check-grid">
                    <div class="check-item">✅ TTO基礎知識のインプットが完了する</div>
                    <div class="check-item">✅ 他社投稿のTTP（徹底的にパクる）が正しくできるようになる</div>
                </div>
                <p>正しく他社のバズ投稿をパクれるようになれば、<b>10本投稿すれば1個以上はバズれる</b>ようになると思います。</p>
                <h3>実績例</h3>
                <div class="feature-grid">
                    <div class="feature-card">
                        <div class="card-icon">📊</div>
                        <div><div class="card-title">75万再生の投稿実績</div>
                        <div class="card-desc">再生回数：75万回 / 購入数：約200件<br>→ 約3,750再生ごとに1件の購入が発生<br>→ 商品単価3,500円 × 200件 ＝ 約70万円の売上<br>→ <b>広告費ゼロのため、投稿ひとつで60~70万円の純利益</b></div></div>
                    </div>
                </div>
                <p><a href="https://www.tiktok.com/@sgttiatekh0/photo/7554748004327083282" target="_blank">▶ 参考投稿を見る</a></p>
                <h3>重要な前提</h3>
                <div class="comparison-grid"><div class="comp-box comp-risk comp-full"><h4>バズらない投稿からは一切売上が発生しない</h4><p>→ まず最初に身につけるべきは「投稿をバズらせる力」<br>→ バズを再現できるようになった段階で、コメント設計や動画訴求、A/Bテストなど、購入率を高める施策に取り組んでいく</p></div></div>`
            },
            {
                id: "sec1-3",
                title: "入社後ロードマップ",
                html: `<h2>① 入社後ロードマップ</h2>
                <div class="alert-box">入社1ヶ月は以下のようなロードマップで業務をしてもらいます。TTOの基礎を理解し、PDCAを回すことで一定自走しながらバズ投稿を生み出せるようになってもらいます。</div>
                <div class="flow-container">
                    <div class="flow-step"><span class="step-number">1W</span><span><b>1週目：</b> マニュアル理解（TTO基礎理解）/ リサーチ業務（バズの感覚理解）/ 投稿画像制作補助（Canvaの使い方や画像制作への慣れ）</span></div>
                    <div class="flow-arrow">↓</div>
                    <div class="flow-step"><span class="step-number">2W</span><span><b>2週目：</b> リサーチ業務（バズの感覚理解）/ 投稿画像制作補助 / 自身で投稿制作開始（企画や構成作成は大村が担当）</span></div>
                    <div class="flow-arrow">↓</div>
                    <div class="flow-step"><span class="step-number">3W+</span><span><b>3週目以降：</b> 投稿画像制作補助 / 自身で企画〜構成案作成開始 / 動画投稿制作開始</span></div>
                </div>
                <div class="tip-box">💡 <b>つまり...</b><br>①基礎的なTTOの理解をする<br>②同時並行して他者のバズ投稿を量産する<br>③量をこなす中で、徐々に自身で考えてバズらせるための仮説を投稿内容に盛り込んでいく</div>`
            },
            {
                id: "sec1-4",
                title: "KPI・状態目標",
                html: `<h2>① KPI・状態目標</h2>
                <h3>KPI</h3>
                <div class="feature-grid"><div class="feature-card"><div class="card-icon">🎯</div><div><div class="card-title">1ヶ月の間に30万再生の投稿を1~2個生み出す</div><div class="card-desc">これが入社後1ヶ月の定量目標です。</div></div></div></div>
                <h3>状態目標</h3>
                <div class="check-grid">
                    <div class="check-item">📈 <b>バズ構造を理解する：</b> 成功事例からバズる投稿の構造的な理解を深める</div>
                    <div class="check-item">🔍 <b>自力で正しくバズを分析できる：</b> 成功要因を言語化・パターン化できるようになる</div>
                    <div class="check-item">🚀 <b>一定自走して投稿作成が出来るようになる：</b> 企画から実行/改善まで一貫して担当できるようになる</div>
                </div>`
            },
            {
                id: "sec1-5",
                title: "業務内容の全体像",
                html: `<h2>① 業務内容の全体像</h2>
                <h3>主要業務</h3>
                <div class="feature-grid">
                    <div class="feature-card"><div class="card-icon">📖</div><div><div class="card-title">マニュアルインプット</div><div class="card-desc">スライド / スプレッドシート / Slackログなどを参照し、TTO関連知識をインプット</div></div></div>
                    <div class="feature-card"><div class="card-icon">🔎</div><div><div class="card-title">リサーチ業務</div><div class="card-desc">新しくアカウントを作成し、おすすめ欄に文脈が似てる投稿が流れてくるようにする → バズ投稿を沢山見て、成功要因を分析する → 真似しやすそうなものを参考動画にする</div></div></div>
                    <div class="feature-card"><div class="card-icon">🖼️</div><div><div class="card-title">画像投稿を作成する</div><div class="card-desc">Canvaを使用してカルーセル画像を作成。参考動画をTTPし、構成案に基づいて制作。</div></div></div>
                </div>`
            }
        ]
    },
    {
        chapter: "② バズの科学",
        sections: [
            {
                id: "sec2",
                title: "本質とアルゴリズム",
                html: `<h2>② バズの科学：本質とアルゴリズム</h2>
                <div class="alert-box"><b>バズの定義：20〜30万再生以上</b><br>TikTokのアルゴリズムは「滞在時間」を最重要視しています。SNSはユーザーの可処分時間の奪い合いであり、長く見られる投稿こそが正義です。</div>
                <h3>評価指標（推定優先度）</h3>
                <div class="check-grid">
                    <div class="check-item">★★★ <b>滞在時間</b>（離脱させない）</div>
                    <div class="check-item">★★ いいね・保存・シェア</div>
                    <div class="check-item">★ コメント（ただし議論を呼ぶものは強力）</div>
                </div>
                <h3>バズの3ステップ</h3>
                <div class="flow-container">
                    <div class="flow-step"><span class="step-number">01</span><span><b>指を止める：</b> 1枚目。0.5秒でスワイプを止めさせる（トレンド画像・インパクト）</span></div>
                    <div class="flow-arrow">↓</div>
                    <div class="flow-step"><span class="step-number">02</span><span><b>興味を持つ：</b> 2枚目。常識の破壊・新情報・物議を醸す内容で離脱を防ぐ</span></div>
                    <div class="flow-arrow">↓</div>
                    <div class="flow-step"><span class="step-number">03</span><span><b>見続ける：</b> 3枚目以降。情報密度を高め、「最後まで見ないと気持ち悪い」構造を作る</span></div>
                </div>
                <div class="tip-box">💡 <b>TikTokユーザーの心理：</b> ユーザーの脳は「死んでいる」状態で見ています。難しい内容は処理できません。相手の脳処理負担を最小限に抑え、直感的に理解できる設計が不可欠です。</div>`
            },
            {
                id: "sec2-2",
                title: "画像選定の優先順位",
                html: `<h2>② 画像選定の優先順位</h2>
                <div class="alert-box">1枚目で指を止めるための「画像選定」には明確な序列が存在します。</div>
                <div class="comparison-grid"><div class="comp-box comp-success comp-full" style="text-align:center"><h4>トレンド画像 ＞＞＞＞ 女性画像 ＞ 男性画像 ＝ アニメ画像</h4></div></div>
                <div class="check-grid">
                    <div class="check-item">🔥 <b>トレンド画像：</b> 旬のニュース、芸能人のスキャンダル、TikTokで話題の人物。</div>
                    <div class="check-item">👩 <b>女性画像：</b> 「爆美女」より「可愛い系/彼女感」。大衆男性ウケが重要。</div>
                    <div class="check-item">👨 <b>男性画像：</b> 「こうなりたい」と思わせる清潔感・憧れ（男磨き系向け）。</div>
                    <div class="check-item">🎌 <b>アニメ画像：</b> 認知度の高い作品（鬼滅、呪術、ワンピ等）の強烈なシーン。</div>
                </div>
                <div class="tip-box">⚠️ <b>NG：</b> 六本木のキャバ嬢のようなニッチな美女ではなく、フォロワー数が多いアイドルのような「大衆ウケ」する画像を選んでください。</div>`
            },
            {
                id: "sec2-3",
                title: "常識の破壊と物議",
                html: `<h2>② 常識の破壊と物議</h2>
                <div class="alert-box">「当たり前のこと」を言う投稿は、ドーパミン溢れるTikTokでは一瞬でスルーされます。</div>
                <h3>2枚目。認知を破壊するテクニック</h3>
                <div class="check-grid">
                    <div class="check-item">🚫 <b>常識の否定：</b> 「9割が勘違いしている」「実は逆効果」など</div>
                    <div class="check-item">📢 <b>新情報の提示：</b> 誰も知らない事実、隠された真実</div>
                    <div class="check-item">⚔️ <b>物議を醸す：</b> 大衆が良いと思うものを否定し、悪いと思うものを肯定する</div>
                </div>
                <div class="tip-box">💡 <b>実例：</b> 「筋トレが大事」という当たり前の話ではなく、「筋トレだけしても一生モテない理由」と突きつけることで手を止めさせます。</div>`
            },
            {
                id: "sec2-4",
                title: "既視感を消す「素数」",
                html: `<h2>② 既視感を消す「素数」の技術</h2>
                <div class="tip-box">🔢 <b>素数の方がユーザー反応が良い：</b><br>5選や10選といったキリの良い数字は「人工的な広告臭」を感じさせます。<br><b>「7選」「11選」</b>などの素数は、脳が「なぜこの数字？」と一瞬思考するため、スワイプが止まりやすくなります。</div>`
            },
            {
                id: "sec2-5",
                title: "黄金の8枚構成",
                html: `<h2>② 黄金の8枚構成</h2>
                <div class="flow-container">
                    <div class="flow-step"><span>1枚目：違和感・分断（常識の否定）</span></div><div class="flow-arrow">↓</div>
                    <div class="flow-step"><span>2枚目：問題の明文化（当事者化）</span></div><div class="flow-arrow">↓</div>
                    <div class="flow-step"><span>3枚目：意外な真因（認知破壊）</span></div><div class="flow-arrow">↓</div>
                    <div class="flow-step"><span>4枚目：構造の提示（理屈の説明）</span></div><div class="flow-arrow">↓</div>
                    <div class="flow-step"><span>5枚目：具体例（Before/After）</span></div><div class="flow-arrow">↓</div>
                    <div class="flow-step"><span>6枚目：再現条件（誰でもできる）</span></div><div class="flow-arrow">↓</div>
                    <div class="flow-step"><span>7枚目：要約・圧縮（箇条書き）</span></div><div class="flow-arrow">↓</div>
                    <div class="flow-step"><span>8枚目：行動誘導（議論を生む質問）</span></div>
                </div>`
            }
        ]
    },
    {
        chapter: "③ 競合リサーチ",
        sections: [
            {
                id: "sec3",
                title: "リサーチの重要性",
                html: `<h2>③ リサーチの重要性</h2><div class="alert-box">TTOではリサーチ業務はかなり重要。なぜなら初心者が0→1でバズを生み出すことは難しく、既存のバズ投稿をTTP/正しくパクることでバズる確度が上がるためです。</div>`
            },
            {
                id: "sec3-2",
                title: "リサーチアカウント作成",
                html: `<h2>③ リサーチアカウント作成</h2>
                <h3>手順</h3>
                <div class="flow-container">
                    <div class="flow-step"><span class="step-number">01</span><span>TikTokで新規アカウントを作成</span></div><div class="flow-arrow">↓</div>
                    <div class="flow-step"><span class="step-number">02</span><span>検索欄で弊社と類似投稿を見まくり、おすすめ欄に訴求を行っている投稿が自然と流れてくるようにする</span></div><div class="flow-arrow">↓</div>
                    <div class="flow-step"><span class="step-number">03</span><span>バズっている投稿を保存していき、普段の投稿に活かす（<b>最低10万再生以上の投稿を参考にする</b>）</span></div>
                </div>
                <div class="tip-box">⚠️ <b>注意：</b> 普段のノリで自分の興味のある動画を見ていたら、おすすめ欄が自身の興味関心に寄っていくので注意！<br><br>アフィリエイトを行っている商材を検索すると良い。<br><a href="https://docs.google.com/spreadsheets/d/17b68JYL6FaWy45uXoeZz4LyrCMQczGqbC2Eth3_oCGQ/edit?gid=1809422533#gid=1809422533" target="_blank">▶ 参考スプレッドシート</a></div>`
            },
            {
                id: "sec3-3",
                title: "日次リサーチ業務",
                html: `<h2>③ 日次リサーチ業務</h2>
                <div class="flow-container">
                    <div class="flow-step"><span class="step-number">①</span><span>リサーチ用アカウントで商品の訴求を行なっているバズ動画を集める</span></div><div class="flow-arrow">↓</div>
                    <div class="flow-step"><span class="step-number">②</span><span>簡潔に「バズのポイント」をまとめる</span></div><div class="flow-arrow">↓</div>
                    <div class="flow-step"><span class="step-number">③</span><span><b>毎日4つ程度</b>スプレッドシートに記載し、TTO_CR分析というCWチャンネルで田村さんをメンションし、FBをもらう</span></div>
                </div>
                <div class="check-grid">
                    <div class="check-item">📊 <a href="https://docs.google.com/spreadsheets/d/17b68JYL6FaWy45uXoeZz4LyrCMQczGqbC2Eth3_oCGQ/edit?gid=1340404750#gid=1340404750" target="_blank">▶ リサーチ用スプレッドシート</a></div>
                    <div class="check-item">💬 <a href="https://www.chatwork.com/#!rid409600795-2017450376420401152" target="_blank">▶ Chatwork参考投稿</a></div>
                </div>`
            },
            {
                id: "sec3-4",
                title: "学習FMT・報告方法",
                html: `<h2>③ 学習FMT・報告方法</h2>
                <div class="alert-box">上長が手取り足取りTTOを教える社内リソースはないため、以下TTO関連マニュアルを参考に自発的に学習に取り組んでください。</div>
                <p>※見ただけにならず理解を深めるために、学んだことを以下FMTを参考にテキストにまとめること</p>
                <div class="comparison-grid"><div class="comp-box comp-success comp-full"><h4>■ 学習報告FMT（一例）</h4><p>マニュアル：〇〇<br><br><b>【学んだこと】</b><br>xxx<br><br><b>【印象に残ったこと / 自分で考えたこと】</b><br>xxx<br><br><b>【今後に活かすこと】</b><br>xxx</p></div></div>
                <p><a href="https://uiui-hq.slack.com/archives/C09E99GGMMW/p1762398757825159?thread_ts=1762164072.669279&cid=C09E99GGMMW" target="_blank">▶ Slackでの報告例を見る</a></p>`
            }
        ]
    },
    {
        chapter: "④ 画像・カルーセル投稿",
        sections: [
            {
                id: "sec4",
                title: "投稿作成の流れ",
                html: `<h2>④ 投稿作成の流れ</h2>
                <div class="alert-box">再現性を持ってバズを生み出すことを目的とし、毎回の投稿を記録し、分析・改善を繰り返す仕組みとしてスプレッドシートで投稿を管理しています。</div>
                <h3>投稿管理シートの使い方</h3>
                <div class="comparison-grid">
                    <div class="comp-box comp-success"><h4>投稿前</h4><p>・参考動画URLをG列に記載<br>・投稿時にE列に「バズらせるために意識したこと」を記載</p></div>
                    <div class="comp-box comp-success"><h4>投稿後</h4><p>・効果/投稿URLを記載<br>・FB内容を確認<br>・FB内容を踏まえて今後に活かすことをF列「ネクストアクション」に記載</p></div>
                </div>
                <h3>投稿作成の流れ</h3>
                <div class="flow-container">
                    <div class="flow-step"><span class="step-number">①</span><span>リサーチして参考元のバズ動画を探す</span></div><div class="flow-arrow">↓</div>
                    <div class="flow-step"><span class="step-number">②</span><span>バズ動画をTTP（徹底的にパクる）or ＋αをして、投稿案を作成する</span></div>
                </div>
                <div class="tip-box">⚠️ <b>最初はなるべく変数は変えずにパクるのが◯。</b>外しにくくなるから。変に弄ると、自身の仮説でバズ要素を消す可能性がある。</div>`
            },
            {
                id: "sec4-2",
                title: "コメント設計",
                html: `<h2>④ コメント設計</h2>
                <div class="alert-box">コメント欄は商品購入に繋げるための重要なパート。ユーザーはコメント欄を見て「この商品、良さそう」と感じ、Amazonなどの販売ページへ遷移し、購入を検討してもらう。</div>
                <h3>Point</h3>
                <div class="check-grid">
                    <div class="check-item">📊 <b>訴求開始基準：</b> 5000再生を超えたら入れ始める。1000再生あたりの動画に入れてもあまり意味なし</div>
                    <div class="check-item">📌 <b>コメント量：</b> 上位5〜10個が自社コメントにできればOK</div>
                    <div class="check-item">⏰ <b>タイミング：</b> 初期に入れることでいいねがつきやすくなり、上位表示されやすい</div>
                </div>
                <h3>コメント内容のルール</h3>
                <div class="comparison-grid">
                    <div class="comp-box comp-success"><h4>やるべきこと</h4><p>・Amazon関連のワードを1~2個入れる<br>・一番大事なのは<b>想像を掻き立てるコメント</b><br>（例：香水だと「匂い良すぎて女の子からモテる」とか）<br>・投稿内容に関連する・共感されやすい内容と絡める</p></div>
                    <div class="comp-box comp-risk"><h4>やってはいけないこと</h4><p>・<b>PR感を出さないことが重要</b><br>・必要以上にドクターチル7000って言わない<br>・ステマっぽいコメントをしない</p></div>
                </div>
                <p><a href="https://docs.google.com/spreadsheets/d/17b68JYL6FaWy45uXoeZz4LyrCMQczGqbC2Eth3_oCGQ/edit?gid=1143172260#gid=1143172260" target="_blank">▶ コメント管理シートを見る</a></p>`
            },
            {
                id: "sec4-3",
                title: "概要欄・ハッシュタグ・音楽",
                html: `<h2>④ 概要欄・ハッシュタグ・音楽</h2>
                <h3>概要欄</h3>
                <div class="check-grid">
                    <div class="check-item">📝 作り込む必要性はそこまで高くない</div>
                    <div class="check-item">📄 投稿のトピックに関する長文（<b>500〜800字</b>）を記載するとOK</div>
                    <div class="check-item">⏱️ 概要欄を読む人が長文を読むことで<b>滞在時間が長くなり、投稿が伸びやすくなる</b></div>
                </div>
                <h3>ハッシュタグ</h3>
                <div class="tip-box">🏷️ 投稿内容に関するタグを他者投稿を参考に選定する<br><br>例（男磨き投稿）：<b>#男磨き #垢抜け #モテ男 #モテ男の特徴</b><br><br>・選んだハッシュタグによって配信先が決まっていくイメージ<br>・<b>投稿件数が多いものを選び、届けたいユーザーに合わせて設計する</b></div>
                <h3>音楽</h3>
                <div class="check-grid">
                    <div class="check-item">🎵 選定した音楽で著しく投稿の効果がよくなる、ということは基本ない</div>
                    <div class="check-item">📈 今トレンドの音楽を選ぶことで、多少動画が伸びやすくなる可能性はある</div>
                    <div class="check-item">🔄 トピックによってもよく使われる音楽がある程度決まっているので、他者の音楽を参考にしてOK</div>
                </div>`
            },
            {
                id: "sec4-4",
                title: "コメントブロック設定",
                html: `<h2>④ コメントブロック設定</h2>
                <div class="alert-box">以下の流れで特定のコメントをブロックすることができます。<b>販売にマイナスとなり得るワードを含むコメントを非表示にすること</b>が目的です。</div>
                <div class="tip-box">🛡️ TikTokの設定画面からNGワードを設定し、「ステマ」「詐欺」「案件」「PR」などの販売に悪影響を与えるコメントが表示されないようにすること。</div>`
            }
        ]
    },
    {
        chapter: "⑤ 動画投稿",
        sections: [
            {
                id: "sec5",
                title: "冒頭0〜1秒のルール",
                html: `<h2>⑤ 冒頭0〜1秒のルール</h2>
                <div class="alert-box">0秒目に魅力的なシーンを置く意識を強める。<b>冒頭2秒が大事＝△ 冒頭0〜1秒が大事＝◎</b></div>
                <p>ほとんどの人が、TikTokを見る際<b>1秒以内にスワイプする</b>。</p>
                <h3>悪い例</h3>
                <div class="check-grid">
                    <div class="check-item">❌ <a href="https://www.tiktok.com/@katougumo8t/video/7583763444269059346" target="_blank">悪い例①</a> — 出だしが魅力的ではないが故の離脱多そう。</div>
                    <div class="check-item">❌ <a href="https://www.tiktok.com/@sukininatyadame/video/7578307994190990612" target="_blank">悪い例②</a> — 同上</div>
                </div>
                <p><a href="https://x.com/4610_hotel/status/2008797372273619150" target="_blank">▶ 冒頭0秒の重要性について（X参考ポスト）</a></p>`
            },
            {
                id: "sec5-2",
                title: "台本・シーン設計",
                html: `<h2>⑤ 台本・シーン設計</h2>
                <h3>To do</h3>
                <div class="check-grid">
                    <div class="check-item">🎬 編集で、動画内で<b>最も面白い / 感情が揺さぶられる / 足が止まりそうなシーンを先頭に持ってくる</b></div>
                    <div class="check-item">📝 最初の台本 / シーン設計 / 演技などを意図的に魅力的なものにする</div>
                </div>
                <h3>Point</h3>
                <div class="tip-box">🎯 <b>続きが気になる内容で離脱させない</b><br>（ナンパだったら成功するのか？という期待で離脱しない）</div>`
            },
            {
                id: "sec5-3",
                title: "DR.CHILLの動画訴求",
                html: `<h2>⑤ DR.CHILLの動画訴求</h2>
                <div class="check-grid">
                    <div class="check-item">🔄 <b>見せ方 / 訴求 / 台本を変え続ける。</b></div>
                    <div class="check-item">🎭 <b>演技感が少なく、広告感もない内容にしたい</b></div>
                </div>
                <div class="tip-box">💡 <b>メモ：</b> バズる動画ができたら、プロフを明確にしてシリーズ化を行いフォローするきっかけを作る。単発で面白いが、今後が気になるような設計ができるとフォロワー数も増えてくる。</div>`
            }
        ]
    },
    {
        chapter: "⑥ 外部マニュアル・リンク集",
        sections: [
            {
                id: "sec6",
                title: "ツール・ログイン情報",
                html: `<h2>⑥ ツール・ログイン情報</h2>
                <div class="alert-box">TTOで使用するツールは以下の通り。特にCanvaは画像作成する際に頻繁に使用するので、使い方を一通りマスターすること。</div>
                <div class="feature-grid">
                    <div class="feature-card"><div class="card-icon">📱</div><div><div class="card-title">TikTokアカウント</div><div class="card-desc">投稿用アカウントとリサーチアカウントの<b>最低2つ</b>を作成すること。<br>※メールアドレスがあればアカウント量産できる</div></div></div>
                    <div class="feature-card"><div class="card-icon">🎨</div><div><div class="card-title">Canva</div><div class="card-desc">以下Googleアカウントにログイン<br>メアド：y.ad.ymha@gmail.com<br>PW：ayumu1372<br>→Canvaにログイン</div></div></div>
                    <div class="feature-card"><div class="card-icon">🎬</div><div><div class="card-title">CapCut</div><div class="card-desc">スマホで動画編集をする際に各自ログイン</div></div></div>
                </div>
                <h3>Canva操作Tips</h3>
                <div class="check-grid">
                    <div class="check-item">📋 <b>投稿のコピー：</b> 左上ファイル→コピー（一枚をコピーする時はcommand＋CでOK）</div>
                    <div class="check-item">🔲 <b>背景透過：</b> 画像を選択したら上に表示が出てくるので実行</div>
                    <div class="check-item">🔍 <b>画像の解像度を上げる場合：</b> 画像選択→編集→アプリ→image Upscaler</div>
                </div>`
            },
            {
                id: "sec6-2",
                title: "TTO関連マニュアル",
                html: `<h2>⑥ TTO関連マニュアル</h2>
                <div class="feature-grid">
                    <div class="feature-card"><div class="card-icon">📑</div><div><div class="card-title">オーガニックアフィリエイト</div><div class="card-desc"><a href="https://docs.google.com/presentation/d/1FnIq56orlS4nrYDsUcQECs62uOYmuWa6tKXePX6qdrc/edit" target="_blank">▶ 資料を開く</a></div></div></div>
                    <div class="feature-card"><div class="card-icon">📈</div><div><div class="card-title">オーガニックアフィ伸ばし方</div><div class="card-desc"><a href="https://note.com/preview/nb9748f6bbf7e?prev_access_key=776094c0c1e0a5c573da36b9c46a48b4" target="_blank">▶ noteを開く</a></div></div></div>
                    <div class="feature-card"><div class="card-icon">📊</div><div><div class="card-title">TTOインハウス資料</div><div class="card-desc"><a href="https://docs.google.com/spreadsheets/d/17b68JYL6FaWy45uXoeZz4LyrCMQczGqbC2Eth3_oCGQ/edit" target="_blank">▶ スプレッドシートを開く</a></div></div></div>
                </div>
                <h3>社内コミュニケーション</h3>
                <div class="check-grid">
                    <div class="check-item">💬 <b>Slackログ：</b> Slack「vape-tikオーガニック」チャンネル参照</div>
                    <div class="check-item">💬 <b>チャットワークログ：</b> チャットワーク「TTOコンサル【Dr.Chill】、TTO_CR分析」参照</div>
                </div>`
            },
            {
                id: "sec6-3",
                title: "マーケティング関連資料",
                html: `<h2>⑥ マーケティング関連資料</h2>
                <div class="alert-box">TTOはマーケティング施策全体の中での1つの施策でしかありません。WEBマーケティングの関連マニュアルも空き時間で読み、マーケターとして成長してください。</div>
                <div class="feature-grid">
                    <div class="feature-card"><div class="card-icon">🎥</div><div><div class="card-title">広告動画制作マニュアル</div><div class="card-desc"><a href="https://docs.google.com/presentation/d/1Z0IO5ygDKJq4i0eRFouVwxM7vjpY2YLyWUl8pRQPxJU/edit" target="_blank">▶ 資料を開く</a></div></div></div>
                    <div class="feature-card"><div class="card-icon">🧠</div><div><div class="card-title">マインドセットなど</div><div class="card-desc"><a href="https://docs.google.com/presentation/d/1-4cO1YJFQdLpM4G4TIc-CHUevuH2p4HzGxGz0eRmlz0/edit" target="_blank">▶ 資料を開く</a></div></div></div>
                    <div class="feature-card"><div class="card-icon">📚</div><div><div class="card-title">マーケティング資料</div><div class="card-desc"><a href="https://drive.google.com/file/d/15UaXFEmXI1OGb55TKRRS04b9KpEwPEHh/view" target="_blank">▶ 資料を開く</a></div></div></div>
                </div>
                <p>※その他、社内マーケティング関連書籍も活用すること</p>`
            },
            {
                id: "sec6-4",
                title: "Appendix（参考アカウント）",
                html: `<h2>⑥ Appendix（参考アカウント）</h2>
                <div class="alert-box">ショート動画制作に強そうな人、TTOに知見がある人、マーケティングに強い人のXアカウント等を参考にしてください。</div>
                <div class="tip-box" style="background: linear-gradient(135deg, rgba(15,23,42,1), rgba(30,41,59,1)); color: #fff; border-color: rgba(255,255,255,0.1);">🚀 <b>最後に</b><br><br>このマニュアルは完成ではありません。日々の実務で得た「バズの発見」や「効率化のコツ」を追記し、最強の組織マニュアルを一緒に作り上げていきましょう。</div>`
            }
        ]
    }
];
