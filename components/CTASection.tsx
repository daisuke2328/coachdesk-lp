import RegistrationForm from "@/components/RegistrationForm";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-blue-600 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          月末のコーチング時間集計を、
          <br />
          ゼロ分に。
        </h2>
        <p className="text-blue-100 text-lg mb-10">
          事前登録で正式リリース時に優先案内 + 初月無料
        </p>

        <div className="bg-white rounded-2xl p-6 max-w-md mx-auto">
          <RegistrationForm />
          <p className="text-xs text-gray-400 mt-3 text-center">
            30日間返金保証 · スパムは送りません
          </p>
        </div>
      </div>
    </section>
  );
}
