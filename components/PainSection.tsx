const pains = [
  {
    emoji: "📊",
    title: "ICFログ時間の手集計",
    description:
      "更新試験のたびにコーチング時間をカテゴリ別に合計しなおしている。Excelのセルを数えながら「また間違えた…」",
  },
  {
    emoji: "🧾",
    title: "請求書作成の煩雑さ",
    description:
      "クライアントごとに異なる単価でExcelを毎月修正。「請求書作成に30分かけている」は当たり前になっていませんか？",
  },
  {
    emoji: "📅",
    title: "スケジュール調整の分散",
    description:
      "DM・メール・電話が混在して予約ミスが怖い。リマインダーを手動で送るのを忘れてドタキャンされた経験は？",
  },
  {
    emoji: "📝",
    title: "クライアント記録の散在",
    description:
      "セッション記録をメモ帳・Notion・紙など複数場所に保存。「あのクライアントと何を話したか」を探す時間が無駄。",
  },
  {
    emoji: "⏰",
    title: "副業との両立",
    description:
      "本業がある中で管理業務にかける時間が限られている。学習コストが高いツールは使えない。シンプルさが命。",
  },
];

export default function PainSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">こんな悩み、ありませんか？</h2>
        <p className="section-subheading">
          副業・個人コーチが抱える、よくある業務の課題
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="bg-red-50 border border-red-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{pain.emoji}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{pain.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pain.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
