// ジェネレーター用FMTテンプレートデータ
const PRODUCT = "KINUI";

const GENERATOR_TEMPLATES = {
    score: {
        name: "点数診断系",
        analysis: "損失回避性とツァイガルニク効果を利用。「10点超えたらやばい」という強いフックで最後まで見せ、コメント欄で計算結果を競わせる構成。",
        slides: [
            { num: 1, role: '指止め', title: `10点超えたらアウト ${PRODUCT}が必要な男の習慣`, reason: "美女画像＋強い言葉で指を止める", img: "美女画像（呆れ顔）" },
            { num: 2, role: '診断①', title: "洗顔方法", reason: "常識破壊で2枚目離脱を防ぐ", img: "洗顔シーン" },
            { num: 3, role: '診断②', title: "飲み物", reason: "ターゲットの日常と接続", img: "水 vs エナドリ" },
            { num: 4, role: '診断③', title: "趣味", reason: "サウナ回避のロジック", img: "筋トレ・サウナ" },
            { num: 5, role: '拡散', title: "共有→LINE2番目", reason: "LINE共有を促すギミック", img: "共有画面" },
            { num: 6, role: '商品', title: `${PRODUCT}の威力`, reason: "診断で不安になった後に解決策として提示", img: "商品画像" },
            { num: 7, role: '効果', title: "30日後の変化", reason: "未来の期待感を持たせる", img: "BeforeAfter" },
            { num: 8, role: '行動', title: "合計何点だった？👇", reason: "点数を書かせてコメント率を最大化", img: "美女の微笑み" }
        ]
    },
    binary: {
        name: "二項対立",
        analysis: "A or Bの極端な選択を迫ることで、ユーザーの当事者意識を最大化。視覚的に左右で比較するため脳死状態でも理解可能な構成。",
        slides: [
            { num: 1, role: '指止め', title: "モテる男 vs モテない男", reason: "左右に神とゴミの対比。0.5秒で理解させる", img: "美女が○×札を持つ" },
            { num: 2, role: '対比①', title: "朝のルーティン", reason: "身近な行動で自分事化", img: "朝の比較" },
            { num: 3, role: '対比②', title: "食事・水分", reason: "意外な差を見せる", img: "食事比較" },
            { num: 4, role: '対比③', title: "スキンケア", reason: "商品へのブリッジ", img: "肌比較" },
            { num: 5, role: '転換', title: "この差はたった1つ", reason: "1つの要素に集約して説得力を出す", img: "ドラマチック演出" },
            { num: 6, role: '解決', title: `なぜ${PRODUCT}か？`, reason: "プロの視点でロジカルに解説", img: "成分イメージ" },
            { num: 7, role: '効果', title: "30日後の変化", reason: "未来の期待感を持たせる", img: "BeforeAfter" },
            { num: 8, role: '行動', title: "君はどっち派？👇", reason: "意見をコメントさせる", img: "美女の手招き" }
        ]
    },
    ranking: {
        name: "ランキング形式",
        analysis: "『知って得する』有益性を前面に出し、保存率を高める構成。上位に行くほど意外性を高めることで視聴維持に繋げる。",
        slides: [
            { num: 1, role: '指止め', title: "女子が引く...清潔感終了の男 5選", reason: "負のランキングで不安を煽る", img: "美女の冷ややかな目" },
            { num: 2, role: '5位', title: "5位：枕カバー放置", reason: "身に覚えのある内容で引き込む", img: "汚い枕" },
            { num: 3, role: '4位', title: "4位：乾燥ケア無視", reason: "見落としがちな要素", img: "カサカサ肌" },
            { num: 4, role: '3位', title: "3位：洗顔の温度ミス", reason: "常識破壊系の要素", img: "シャワー" },
            { num: 5, role: '2位', title: "2位：エナドリ常飲", reason: "ターゲットの習慣を刺す", img: "エナドリ" },
            { num: 6, role: '1位', title: "1位：角質の詰まり", reason: "最大の原因を提示", img: "毛穴汚れ" },
            { num: 7, role: '解決', title: `救世主：${PRODUCT}`, reason: "ランキングの全不満を解消する存在として紹介", img: "商品画像" },
            { num: 8, role: '行動', title: "あてはまる人いた？👇", reason: "保存とコメントを促す", img: "美女が優しく指差す" }
        ]
    }
};
