const rows = [
  {
    feature: "ICFログ自動集計",
    coachdesk: { label: "✅ 自動", positive: true },
    excel: { label: "❌ 手作業", positive: false },
    coachvantage: { label: "△ 機能あり", positive: null },
  },
  {
    feature: "日本語完全対応",
    coachdesk: { label: "✅ 完全対応", positive: true },
    excel: { label: "△ 部分対応", positive: null },
    coachvantage: { label: "❌ 英語のみ", positive: false },
  },
  {
    feature: "月額コスト",
    coachdesk: { label: "1,980円", positive: true },
    excel: { label: "無料〜（時間コスト大）", positive: null },
    coachvantage: { label: "約4,300円（$29）", positive: false },
  },
  {
    feature: "ICFコーチ専用設計",
    coachdesk: { label: "✅ 専用", positive: true },
    excel: { label: "❌ 汎用ツール", positive: false },
    coachvantage: { label: "✅ 専用", positive: true },
  },
  {
    feature: "初期設定の手間",
    coachdesk: { label: "✅ 10分で完了", positive: true },
    excel: { label: "❌ 5時間以上", positive: false },
    coachvantage: { label: "△ 英語設定が必要", positive: null },
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">なぜCoachDesk？</h2>
        <p className="section-subheading">
          「ExcelやNotionで自作できる」——でも初期設定に5時間以上かかり、ICF集計の精度も保証できません
        </p>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-6 py-4 text-sm font-bold text-gray-500 w-1/4">機能</th>
                <th className="px-6 py-4 text-center w-1/4">
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-black text-blue-600">CoachDesk</span>
                    <span className="text-xs text-blue-500 font-medium">おすすめ</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-500 w-1/4">
                  Excel / Notion
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-500 w-1/4">
                  CoachVantage
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">{row.feature}</td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`text-sm font-bold ${
                        row.coachdesk.positive === true
                          ? "text-blue-600"
                          : row.coachdesk.positive === false
                          ? "text-red-500"
                          : "text-gray-500"
                      }`}
                    >
                      {row.coachdesk.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`text-sm ${
                        row.excel.positive === true
                          ? "text-green-600"
                          : row.excel.positive === false
                          ? "text-red-500"
                          : "text-gray-500"
                      }`}
                    >
                      {row.excel.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`text-sm ${
                        row.coachvantage.positive === true
                          ? "text-green-600"
                          : row.coachvantage.positive === false
                          ? "text-red-500"
                          : "text-gray-500"
                      }`}
                    >
                      {row.coachvantage.label}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-400 text-center mt-4">
          ※ 比較情報は2026年3月時点の調査に基づきます
        </p>
      </div>
    </section>
  );
}
