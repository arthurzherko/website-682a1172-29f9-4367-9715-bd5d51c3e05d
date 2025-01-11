const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-purple-500">GameZone</h3>
            <p className="text-sm text-zinc-400">Ваше премиальное игровое пространство</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Режим работы</h4>
            <p className="text-sm text-zinc-400">Ежедневно: 10:00 - 23:00</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Контакты</h4>
            <p className="text-sm text-zinc-400">
              Тел: +7 (999) 123-45-67
              <br />
              Email: info@gamezone.ru
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Соцсети</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-purple-500">
                VK
              </a>
              <a href="#" className="text-zinc-400 hover:text-purple-500">
                Telegram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-400">
          © 2024 GameZone. Все права защищены.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
