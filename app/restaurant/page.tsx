'use client';

import { useEffect, useState } from 'react';

export default function Restaurant() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 font-sans dark:from-zinc-900 dark:via-zinc-800 dark:to-black">
      <main className="max-w-7xl mx-auto py-12 md:py-20 px-6 md:px-8">
        {/* ヒーローセクション */}
        <div 
          className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-700 via-red-600 to-red-800 dark:from-red-400 dark:via-red-500 dark:to-red-400 bg-clip-text text-transparent mb-6 tracking-tight">
            lecette
          </h1>
          <p className="text-2xl md:text-4xl text-red-700 dark:text-red-300 mb-4 font-serif italic font-light">
            イタリアンレストラン
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent dark:via-red-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* メインコンテンツ */}
        <div className="space-y-16 md:space-y-20">
          {/* コンセプト・ストーリー */}
          <section 
            className={`bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 border border-white/20 dark:border-zinc-800 transition-all duration-700 hover:shadow-3xl hover:scale-[1.01] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-8 text-center bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
              レストランのコンセプト
            </h2>
            <div className="prose prose-lg max-w-none text-zinc-700 dark:text-zinc-300">
              <p className="leading-relaxed mb-6 text-lg md:text-xl">
                lecette（レチェッテ）は、イタリア語で「小さな場所」を意味します。私たちは、本格的なイタリア料理を気軽に楽しんでいただける、<span className="font-semibold text-red-600 dark:text-red-400">温かみのある空間</span>を提供しています。
              </p>
              <p className="leading-relaxed text-lg md:text-xl">
                イタリア各地から厳選した食材と、伝統的なレシピを守りながらも現代的なアレンジを加えた料理をお楽しみいただけます。シェフが心を込めて作る一品一品が、皆様の特別なひとときを彩ります。
              </p>
            </div>
          </section>

          {/* 営業時間・アクセス情報 */}
          <div className="grid md:grid-cols-2 gap-8">
            <section 
              className={`bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-white/20 dark:border-zinc-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-8 flex items-center">
                <span className="text-3xl mr-3">🕐</span>
                <span className="bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
                  営業時間
                </span>
              </h3>
              <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
                <div className="p-4 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border border-red-100 dark:border-red-900/50">
                  <p className="font-bold mb-2 text-red-700 dark:text-red-400">ランチ</p>
                  <p className="text-lg">11:30 - 15:00（L.O. 14:30）</p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border border-red-100 dark:border-red-900/50">
                  <p className="font-bold mb-2 text-red-700 dark:text-red-400">ディナー</p>
                  <p className="text-lg">17:30 - 22:00（L.O. 21:00）</p>
                </div>
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                  <p className="font-semibold mb-2">定休日</p>
                  <p className="text-lg">毎週火曜日</p>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">
                    ※年末年始は営業時間が変更になる場合がございます
                  </p>
                </div>
              </div>
            </section>

            <section 
              className={`bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-white/20 dark:border-zinc-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-8 flex items-center">
                <span className="text-3xl mr-3">📍</span>
                <span className="bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
                  アクセス
                </span>
              </h3>
              <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
                <div>
                  <p className="font-bold mb-3 text-zinc-800 dark:text-zinc-100">住所</p>
                  <p className="leading-relaxed text-lg">
                    〒100-0001<br/>
                    東京都千代田区千代田1-1-1<br/>
                    レストラン街2F
                  </p>
                </div>
                <div>
                  <p className="font-bold mb-3 text-zinc-800 dark:text-zinc-100">最寄り駅</p>
                  <p className="text-lg">JR東京駅 徒歩5分</p>
                  <p className="text-lg">東京メトロ丸ノ内線 東京駅 徒歩3分</p>
                </div>
                <div>
                  <p className="font-bold mb-3 text-zinc-800 dark:text-zinc-100">駐車場</p>
                  <p className="text-lg">近隣にコインパーキングあり（要予約）</p>
                </div>
              </div>
            </section>
          </div>

          {/* メニュー紹介 */}
          <section 
            className={`bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 border border-white/20 dark:border-zinc-800 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-12 text-center bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
              メニュー
            </h3>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* コースメニュー */}
              <div>
                <h4 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-6 pb-3 border-b-2 border-red-300 dark:border-red-700">
                  コースメニュー
                </h4>
                <div className="space-y-6">
                  {[
                    {
                      name: 'シェフおまかせコース',
                      desc: '前菜、パスタ、メイン、デザート、ドリンク付き',
                      price: '¥8,800'
                    },
                    {
                      name: 'プレミアムコース',
                      desc: '特別な日のための豪華コース',
                      price: '¥12,800'
                    },
                    {
                      name: 'ランチコース',
                      desc: 'パスタ、サラダ、ドリンク付き',
                      price: '¥2,200'
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-gradient-to-br from-white to-red-50/50 dark:from-zinc-800 dark:to-red-950/20 border border-red-100 dark:border-red-900/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-red-300 dark:hover:border-red-700"
                    >
                      <p className="font-bold text-lg text-zinc-800 dark:text-zinc-100 mb-2">
                        {item.name}
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                        {item.desc}
                      </p>
                      <p className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-700 dark:from-red-400 dark:to-red-500 bg-clip-text text-transparent">
                        {item.price}（税込）
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* おすすめ料理 */}
              <div>
                <h4 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-6 pb-3 border-b-2 border-red-300 dark:border-red-700">
                  おすすめ料理
                </h4>
                <div className="space-y-5">
                  {[
                    {
                      name: 'トマトとモッツァレラのカプレーゼ',
                      desc: 'イタリア産の新鮮なトマトとモッツァレラチーズ',
                      price: '¥1,800'
                    },
                    {
                      name: '自家製パスタ アマトリチャーナ',
                      desc: '伝統的なローマの味、パンチェッタとトマトのパスタ',
                      price: '¥2,400'
                    },
                    {
                      name: 'ミラノ風カツレツ',
                      desc: '仔牛のカツレツ、レモンとルッコラ添え',
                      price: '¥3,800'
                    },
                    {
                      name: 'ティラミス',
                      desc: 'シェフ特製の伝統的なティラミス',
                      price: '¥1,200'
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-gradient-to-br from-white to-orange-50/50 dark:from-zinc-800 dark:to-orange-950/20 border border-orange-100 dark:border-orange-900/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-orange-300 dark:hover:border-orange-700"
                    >
                      <p className="font-bold text-zinc-800 dark:text-zinc-100 mb-1">
                        {item.name}
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                        {item.desc}
                      </p>
                      <p className="text-lg font-bold text-red-600 dark:text-red-400">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-700 text-center">
              <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">
                ※メニューは季節により変更になる場合がございます
              </p>
            </div>
          </section>

          {/* シェフ紹介 */}
          <section 
            className={`bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 border border-white/20 dark:border-zinc-800 transition-all duration-700 hover:shadow-3xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-12 text-center bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
              シェフ紹介
            </h3>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <div className="w-40 h-40 bg-gradient-to-br from-red-300 via-red-400 to-red-500 dark:from-red-700 dark:via-red-800 dark:to-red-900 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl shadow-xl ring-4 ring-red-200 dark:ring-red-900/50">
                  👨‍🍳
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-3">
                  マルコ・ロッシ
                </h4>
                <p className="text-lg text-red-600 dark:text-red-400 font-semibold mb-6">
                  エグゼクティブシェフ
                </p>
              </div>
              <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-5 text-lg">
                <p>
                  イタリア・トスカーナ地方出身。ミラノの名門レストランで10年間の修行を積み、その後、日本でイタリア料理の普及に努めてきました。
                </p>
                <p>
                  「食材の持つ本来の味を最大限に引き出すこと」を信条とし、季節の食材を活かした料理を提供しています。伝統的なレシピを大切にしながらも、日本の食材との融合にも挑戦しています。
                </p>
              </div>
            </div>
          </section>

          {/* レストランの特徴 */}
          <section 
            className={`bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 border border-white/20 dark:border-zinc-800 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-12 text-center bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
              レストランの特徴
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: '🍝',
                  title: '厳選されたイタリア産食材',
                  desc: 'パルミジャーノ・レッジャーノ、バルサミコ酢、オリーブオイルなど、本場イタリアから直接輸入した食材を使用しています。'
                },
                {
                  icon: '👨‍🍳',
                  title: '伝統と革新の融合',
                  desc: '伝統的なレシピを守りながらも、現代的なアレンジを加えた、独自の料理をお楽しみいただけます。'
                },
                {
                  icon: '🍷',
                  title: '豊富なワインセレクション',
                  desc: 'イタリア各地のワインを厳選し、料理に合わせたワインペアリングをご提案いたします。'
                },
                {
                  icon: '💝',
                  title: '特別な日の演出',
                  desc: '記念日やお祝いの席にも最適。ご要望に応じて特別な演出も承ります。'
                }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-5 p-6 rounded-2xl bg-gradient-to-br from-white to-red-50/30 dark:from-zinc-800 dark:to-red-950/20 border border-red-100 dark:border-red-900/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-red-300 dark:hover:border-red-700"
                >
                  <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg text-zinc-800 dark:text-zinc-100 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 予約・お問い合わせ */}
          <section 
            className={`bg-gradient-to-br from-red-600 via-red-700 to-red-800 dark:from-red-800 dark:via-red-900 dark:to-red-950 rounded-3xl shadow-2xl p-8 md:p-16 text-white transition-all duration-700 hover:shadow-3xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1400ms' }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              ご予約・お問い合わせ
            </h3>
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="text-center">
                <p className="text-xl mb-8 opacity-95">
                  ご予約・お問い合わせはお電話またはメールにて承っております。
                </p>
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <p className="font-bold mb-2 text-lg">電話番号</p>
                    <p className="text-3xl font-bold mb-2">03-1234-5678</p>
                    <p className="text-sm opacity-90">受付時間：10:00 - 20:00</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <p className="font-bold mb-2 text-lg">メール</p>
                    <p className="text-2xl">info@lecette.jp</p>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-white/20 text-center">
                <p className="text-lg opacity-95">
                  皆様のご来店を心よりお待ちしております。
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
