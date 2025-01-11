import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Добро пожаловать в<span className="text-purple-500"> GameZone</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-zinc-300">
            Погрузитесь в мир современных игр на самом современном оборудовании
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Забронировать место
            </Button>
            <Button size="lg" variant="outline">
              Узнать больше
            </Button>
          </div>
        </motion.div>
      </section>
      <section className="py-20">
        <div className="text-center">
          <h2 className="mb-12 text-3xl font-bold text-white">Наше оборудование</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
              <svg
                className="mx-auto mb-4 h-12 w-12 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <h3 className="mb-2 text-xl font-bold text-white">Мощные PC</h3>
              <p className="text-zinc-400">Intel Core i9 + RTX 4090</p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
              <svg
                className="mx-auto mb-4 h-12 w-12 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="mb-2 text-xl font-bold text-white">4K Мониторы</h3>
              <p className="text-zinc-400">240Hz + HDR</p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
              <svg
                className="mx-auto mb-4 h-12 w-12 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
              <h3 className="mb-2 text-xl font-bold text-white">PS5</h3>
              <p className="text-zinc-400">Все новинки игр</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-900/50 py-20">
        <div className="text-center">
          <h2 className="mb-12 text-3xl font-bold text-white">Почему выбирают нас</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-white">Современное оборудование</h3>
              <p className="text-zinc-400">Только лучшие компьютеры и консоли</p>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-white">Комфортная атмосфера</h3>
              <p className="text-zinc-400">Удобные кресла и кондиционеры</p>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-white">Большой выбор игр</h3>
              <p className="text-zinc-400">Все популярные новинки</p>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-white">Доступные цены</h3>
              <p className="text-zinc-400">Выгодные тарифы и акции</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
