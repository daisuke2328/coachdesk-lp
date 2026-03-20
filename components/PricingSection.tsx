import RegistrationForm from "@/components/RegistrationForm";

export default function PricingSection() {
  return (
    <section className="py-20 px-4 bg-blue-50" id="pricing">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="section-heading">シンプルな料金プラン</h2>
        <p className="section-subheading">
          月末の手作業2〜3時間（時間コスト換算: 月3,000〜5,000円）を、月1,980円で解放します
        </p>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 px-8 py-8 text-white">
            <div className="text-sm font-medium mb-1 opacity-80">CoachDesk スタンダード</div>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-black">¥1,980</span>
              <span className="text-lg opacity-80">/ 月（税込）</span>
            </div>
          </div>

          {/* Features */}
          <div className="px-8 py-6">
            <ul className="space-y-3 text-left mb-8">
              {[
                "ICFログ自動集計（ACC / PCC / MCC 対応）",
                "ワンクリック請求書生成・PDF出力",
                "統合カレンダー + 自動リマインダー",
                "クライアント記録・セッションノート",
                "ICF認定ダッシュボード",
                "データの暗号化保管",
                "いつでも解約可能（違約金なし）",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-500 font-bold mt-0.5">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Early Access Badge */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-center">
              <p className="font-bold text-amber-800 text-sm">
                🎁 事前登録者限定特典
              </p>
              <p className="text-amber-700 text-sm mt-1">
                正式リリース時に優先案内 + <strong>初月無料</strong>
              </p>
            </div>

            {/* CTA Form */}
            <RegistrationForm />

            <p className="text-xs text-gray-400 mt-3 text-center">
              30日間返金保証 · スパムは送りません
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
