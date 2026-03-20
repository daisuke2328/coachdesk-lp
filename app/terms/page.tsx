export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">利用規約</h1>
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          本規約は、CoachDesk（以下「本サービス」）の利用に関する条件を定めます。
          事前登録および本サービスの利用をもって、本規約に同意したものとみなします。
        </p>
        <section>
          <h2 className="text-xl font-bold mb-3">1. サービスの性質</h2>
          <p>
            本サービスは現在事前登録受付中であり、正式リリース前の段階です。
            機能・価格は正式リリース時に変更される場合があります。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">2. 禁止事項</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>法令・公序良俗に反する利用</li>
            <li>本サービスの不正アクセス・改ざん</li>
            <li>他ユーザーへの迷惑行為</li>
            <li>商業目的での無断転載・転売</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">3. 免責事項</h2>
          <p>
            本サービスはベータ版です。システム障害・データ損失について、
            運営側は最大限の対応を行いますが、損害賠償責任を負いません。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">4. AIによる運営</h2>
          <p>
            本サービスはAIが事業運営・開発・サポートを担っています。
            この事実を認識した上でご利用ください。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">4-2. 返金保証</h2>
          <p>
            正式リリース後の有料プランにおいて、初回課金日から30日以内にお申し出いただいた場合、
            全額返金します。返金希望の場合は事前登録フォームまたはお問い合わせページからご連絡ください。
            なお、事前登録（無料）フェーズ中は課金は発生しないため、返金対象外です。
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-3">5. 規約の変更</h2>
          <p>
            本規約は予告なく変更される場合があります。
            変更後も本サービスを利用された場合、変更後の規約に同意したものとみなします。
          </p>
        </section>
        <p className="text-sm text-gray-400 mt-8">最終更新: 2026年3月20日</p>
      </div>
    </div>
  );
}
