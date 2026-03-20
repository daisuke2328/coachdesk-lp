"use client";

import { useState } from "react";
import { GOOGLE_FORM_URL, GOOGLE_FORM_EMAIL_ENTRY } from "@/lib/constants";

type RegistrationFormProps = {
  buttonLabel?: string;
  placeholderText?: string;
};

export default function RegistrationForm({
  buttonLabel = "先行アクセスに登録する →",
  placeholderText = "メールアドレスを入力",
}: RegistrationFormProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "opening" | "done">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // メールを事前入力したGoogleフォームを新しいタブで開く
    const formUrl = `${GOOGLE_FORM_URL}?${GOOGLE_FORM_EMAIL_ENTRY}=${encodeURIComponent(email)}`;
    window.open(formUrl, "_blank", "noopener,noreferrer");

    // フォームが開いたことをユーザーに伝える（送信完了ではない）
    setState("opening");
  };

  if (state === "opening") {
    return (
      <div className="py-4 text-center space-y-3">
        <div className="text-4xl">📋</div>
        <p className="font-bold text-gray-900 text-lg">
          Googleフォームが開きました
        </p>
        <p className="text-gray-500 text-sm leading-relaxed">
          新しいタブでフォームが開いています。
          <br />
          <strong>メールアドレスを送信してください</strong>で登録が完了します。
        </p>
        <button
          onClick={() => {
            setState("done");
          }}
          className="text-sm text-blue-600 underline"
        >
          送信しました ✓
        </button>
      </div>
    );
  }

  if (state === "done") {
    return (
      <div className="py-4 text-center">
        <div className="text-4xl mb-3">✅</div>
        <p className="font-bold text-gray-900 text-lg">登録ありがとうございます！</p>
        <p className="text-gray-500 text-sm mt-1">
          正式リリース時にメールでご案内します。
          <br />
          ベータ版（2026年4〜5月頃）は事前登録者に優先案内します。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholderText}
        required
        className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-base focus:outline-none focus:border-blue-500 transition-colors"
      />
      <button type="submit" className="w-full btn-primary">
        {buttonLabel}
      </button>
    </form>
  );
}
