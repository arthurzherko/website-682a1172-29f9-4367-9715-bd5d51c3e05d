import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const Contact = () => {
  return (
    <div className="py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-white">Контакты</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="bg-zinc-900/50">
          <CardHeader>
            <CardTitle>Наш адрес</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-zinc-300">
              ул. Примерная, д. 123
              <br />
              Москва, Россия
            </p>
            <div className="mt-4">
              <h3 className="mb-2 font-semibold text-white">Режим работы:</h3>
              <p className="text-zinc-300">
                Пн-Пт: 10:00 - 23:00
                <br />
                Сб-Вс: 09:00 - 00:00
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900/50">
          <CardHeader>
            <CardTitle>Связаться с нами</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="mb-1 font-semibold text-white">Телефон:</h3>
                <p className="text-zinc-300">+7 (999) 123-45-67</p>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">Email:</h3>
                <p className="text-zinc-300">info@gamezone.ru</p>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">Социальные сети:</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-purple-500 hover:text-purple-400">
                    VK
                  </a>
                  <a href="#" className="text-purple-500 hover:text-purple-400">
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Contact;
