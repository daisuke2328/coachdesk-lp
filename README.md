# CoachDesk LP

ICFコーチ向けオールインワン業務管理ツール「CoachDesk」のランディングページ。

## セットアップ手順

```bash
cd lp
npm install
npm run dev
```

## デプロイ手順（オーナーが実施）

1. **GitHubリポジトリ作成**: 別リポジトリ（例: `coachdesk-lp`）を作成し、このディレクトリをプッシュ
2. **Googleフォーム作成**: 事前登録用フォームを作成し、以下のファイルのURLを差し替える
   - `components/HeroSection.tsx`: `GOOGLE_FORM_URL`
   - `components/PricingSection.tsx`: `GOOGLE_FORM_URL`
   - `components/CTASection.tsx`: `GOOGLE_FORM_URL`
3. **Vercel接続**: GitHubリポジトリをVercelに接続してCI/CDを設定
4. **環境変数設定**: `GITHUB_REPO`・`VERCEL_PROJECT` を `.env` に記入

## TODO（オーナー対応が必要な項目）

- [ ] Googleフォーム作成（事前登録メール収集）
- [ ] Googleフォームの埋め込みURLをコードに反映
- [ ] GitHubリポジトリ作成とコードプッシュ
- [ ] Vercelプロジェクト作成・GitHub接続
- [ ] ドメイン取得（gate_invest承認後）
- [ ] 事前登録者数カウンターの実データ連携

## 技術スタック

- Next.js 15 (App Router)
- Tailwind CSS
- TypeScript
- Vercel（ホスティング予定）
