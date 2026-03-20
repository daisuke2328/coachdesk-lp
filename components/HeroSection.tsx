import RegistrationForm from "@/components/RegistrationForm";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span>🎯</span>
          <span>ICF認定を目指す副業・個人コーチ向け</span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
          ICF申請の時間集計、
          <br className="hidden md:block" />
          まだExcelで手計算していますか？
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
          副業コーチのICFログ集計・請求書作成・セッション記録を
          <br className="hidden md:block" />
          ひとつのツールへ。月末2〜3時間の手作業から解放される。
        </p>

        {/* CTA Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg mx-auto">
          {/* Early Access Badge */}
          <div className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 text-sm font-bold px-3 py-1.5 rounded-full mb-4">
            <span>🎁</span>
            <span>事前登録者限定：初月無料</span>
          </div>

          <RegistrationForm />

          <p className="text-xs text-gray-400 mt-3 text-center">
            スパムは送りません。いつでも解除できます。
          </p>
        </div>

        {/* P0-5: 「-- 名」カウンターを削除し、希少性訴求に差し替え */}
        <p className="text-sm text-gray-400 mt-6">
          先着 <span className="font-bold text-gray-600">50名</span> 限定で初月無料特典を提供
        </p>
      </div>
    </section>
  );
}
