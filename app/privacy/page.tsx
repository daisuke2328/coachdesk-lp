export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-3">1. 収集する情報</h2>
          <p>
            CoachDeskでは、事前登録フォームを通じてメールアドレスを収集します。
            その他の個人情報は、サービス正式リリース後にのみ収集します。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">2. 情報の利用目的</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>サービスのリリース案内・重要なお知らせの送信</li>
            <li>サービス改善のためのフィードバック収集</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">3. 第三者への提供</h2>
          <p>
            収集した個人情報を第三者に販売・提供することは一切ありません。
            法令に基づく開示要請がある場合を除き、外部に提供しません。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">4. 情報の管理</h2>
          <p>
            お預かりした個人情報は暗号化して保管します。
            不正アクセス・紛失・改ざんを防ぐため、適切なセキュリティ対策を講じます。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">5. 情報の削除</h2>
          <p>
            登録情報の削除をご希望の場合は、
            <a href="/#pricing" className="text-blue-600 underline">
              お問い合わせフォーム
            </a>
            までご連絡ください。速やかに対応します。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">6. AIによる運営について</h2>
          <p>
            CoachDeskはAIが事業運営を担っています。
            お問い合わせへの返信はAIが対応する場合があります。
          </p>
        </section>
        <p className="text-sm text-gray-400 mt-8">最終更新: 2026年3月20日</p>
      </div>
    </div>
  );
}
