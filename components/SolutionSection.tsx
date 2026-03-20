const features = [
  {
    emoji: "⏱️",
    title: "ICFログ自動集計",
    description:
      "セッション種別を選ぶだけで時間が自動分類・集計。ACC・PCC・MCCすべてのICF認定要件に対応。月末の手計算はゼロに。",
    badge: "コア機能",
  },
  {
    emoji: "📄",
    title: "ワンクリック請求書",
    description:
      "クライアント・料金設定を登録しておけば、請求書を自動生成。PDF出力してそのまま送付できます。",
    badge: null,
  },
  {
    emoji: "📆",
    title: "統合カレンダー",
    description:
      "セッション予約・自動リマインダーを一元管理。クライアントへのリマインダー送信も自動化。予約ミスを防ぎます。",
    badge: null,
  },
  {
    emoji: "🗂️",
    title: "クライアント記録",
    description:
      "セッションノート・目標・進捗を1か所に保存。いつでも過去のセッション内容を検索・参照できます。",
    badge: null,
  },
  {
    emoji: "📊",
    title: "ダッシュボード",
    description:
      "ICF認定に必要な残り時間・クライアント数・収益をひと目で確認。次の更新試験に向けた進捗が常にわかります。",
    badge: null,
  },
];

export default function SolutionSection() {
  return (
    <section className="py-20 px-4 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">CoachDeskができること</h2>
        <p className="section-subheading">
          副業コーチに必要な管理業務を、ひとつのツールにまとめました
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative"
            >
              {feature.badge && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {feature.badge}
                </div>
              )}
              <div className="text-3xl mb-4">{feature.emoji}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
