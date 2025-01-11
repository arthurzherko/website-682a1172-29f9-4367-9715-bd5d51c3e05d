import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/75">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-purple-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </svg>
          GameZone
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link to="/pricing">
            <Button variant="ghost">Цены</Button>
          </Link>
          <Link to="/equipment">
            <Button variant="ghost">Оборудование</Button>
          </Link>
          <Link to="/booking">
            <Button variant="ghost">Бронирование</Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost">Контакты</Button>
          </Link>
          <Button className="bg-purple-600 hover:bg-purple-700">Забронировать</Button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
