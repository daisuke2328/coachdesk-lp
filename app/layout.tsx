import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoachDesk | ICFコーチの業務管理をオールインワンに",
  description:
    "副業・個人コーチのICFログ集計・請求書作成・セッション記録をひとつのツールへ。月末2〜3時間の手作業から解放される。",
  openGraph: {
    title: "CoachDesk | ICFコーチの業務管理をオールインワンに",
    description:
      "副業・個人コーチのICFログ集計・請求書作成・セッション記録をひとつのツールへ。月末2〜3時間の手作業から解放される。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoachDesk | ICFコーチの業務管理をオールインワンに",
    description:
      "副業・個人コーチのICFログ集計・請求書作成・セッション記録をひとつのツールへ。月末2〜3時間の手作業から解放される。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
