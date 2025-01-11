import PriceCard from '@/components/PriceCard';
const Pricing = () => {
  const prices = [
    {
      title: 'Стандарт',
      price: 150,
      description: 'Отличный выбор для обычной игры',
      features: ['Игровой PC', 'Комфортное кресло', 'Доступ к Steam/Epic'],
    },
    {
      title: 'PRO Gaming',
      price: 200,
      description: 'Для настоящих геймеров',
      features: ['Топовый PC с RTX 4090', 'NVIDIA G-Sync монитор', 'Премиум периферия'],
      popular: true,
    },
    {
      title: 'PlayStation 5',
      price: 180,
      description: 'Консольный гейминг',
      features: ['PS5', '4K HDR TV', 'Все новинки игр'],
    },
  ];
  return (
    <div className="py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-white">Наши тарифы</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {prices.map((price, index) => (
          <PriceCard key={index} {...price} />
        ))}
      </div>
    </div>
  );
};
export default Pricing;
