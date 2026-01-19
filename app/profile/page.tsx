export default function Profile() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-2xl flex-col items-center justify-center py-24 px-8 bg-white dark:bg-black">
        <h1 className="text-3xl font-bold text-black dark:text-zinc-50 mb-4">プロフィール</h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
          こんにちは、私は田中太郎です。<br/>
          Web開発が好きで、ReactやNext.jsを使っています。<br/>
          趣味は読書とハイキングです。<br/>
          よろしくお願いします！
        </p>
      </main>
    </div>
  );
}