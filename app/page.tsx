export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black text-center">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-6">My Website</h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-10">
          こんにちは、私のウェブサイトへようこそ！
        </p>

        {/* リンクセクション（アニメーション控えめ） */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <a
            href="/profile"
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 hover:shadow-md transition-colors duration-200"
          >
            <h2 className="text-xl font-semibold text-black dark:text-zinc-100 mb-1">プロフィール</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">自己紹介ページはこちら</p>
          </a>

          <a
            href="/restaurant"
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 hover:shadow-md transition-colors duration-200"
          >
            <h2 className="text-xl font-semibold text-black dark:text-zinc-100 mb-1">レストラン</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">モダンなレストランLP</p>
          </a>

          <a
            href="/project"
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4 hover:shadow-md transition-colors duration-200"
          >
            <h2 className="text-xl font-semibold text-black dark:text-zinc-100 mb-1">プロジェクト</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">制作実績の一覧</p>
          </a>
        </div>
      </main>
    </div>
  );
}