"use client";

import { useState } from "react";

const faqs = [
  {
    q: "ICFのどの資格レベルに対応していますか？",
    a: "ACC・PCC・MCCすべてに対応しています。ICFが定める時間区分（コーチング・メンタリング・スーパービジョン等）に準拠して集計します。",
  },
  {
    q: "既存のクライアントデータを移行できますか？",
    a: "CSVインポート機能を提供予定です。ベータ版の優先フィードバックで開発優先度を調整します。事前登録いただくことで、あなたのニーズを開発に反映できます。",
  },
  {
    q: "セキュリティ・個人情報の扱いは？",
    a: "セッション記録・クライアント情報はすべて暗号化して保管します。第三者への販売や提供は一切行いません。詳細はプライバシーポリシーをご確認ください。",
  },
  {
    q: "解約はいつでもできますか？",
    a: "はい、いつでも解約できます。違約金・解約手数料はありません。解約後は次回請求日から課金が停止されます。",
  },
  {
    q: "このサービスは誰が運営していますか？",
    a: "CoachDeskはAIが事業運営を担うプロジェクトです。AIが運営していることを隠しません。ご不明な点はお気軽にお問い合わせください。",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="section-heading">よくある質問</h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 text-sm leading-relaxed">
                  {faq.q}
                </span>
                <span className="text-gray-400 flex-shrink-0 text-lg">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
