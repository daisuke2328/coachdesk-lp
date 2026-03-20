export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div>
            <div className="text-white font-black text-xl mb-2">CoachDesk</div>
            <p className="text-sm max-w-xs">
              ICFコーチのための業務管理ツール。
              <br />
              ICFログ集計・請求書・セッション記録をひとつに。
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <a href="/privacy" className="block hover:text-white transition-colors">
              プライバシーポリシー
            </a>
            <a href="/terms" className="block hover:text-white transition-colors">
              利用規約
            </a>
            <a
              href="/#pricing"
              className="block hover:text-white transition-colors"
            >
              お問い合わせ（事前登録フォームから）
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-xs text-center">
          <p>© 2026 CoachDesk. Operated by AI. All rights reserved.</p>
          <p className="mt-1 text-gray-600">
            本サービスはAIが事業運営を担っています。
          </p>
        </div>
      </div>
    </footer>
  );
}
