import Link from "next/link";
import { Home, Settings, User, BookOpen, Menu } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      {/* Botão para abrir/fechar o menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 fixed top-4 left-4 bg-gray-800 text-white rounded z-50"
      >
        <Menu />
      </button>

      {/* Sidebar fixa em telas médias e grandes, retrátil em telas pequenas */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-64`}
      >
        <div className="text-xl font-bold mb-6">Dashboard</div>
        <nav>
          <ul className="space-y-2">
            <li className="flex items-center p-2 hover:bg-gray-700 rounded">
              <Home className="mr-2" />
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-700 rounded">
              <User className="mr-2" />
              <Link href="/profile" onClick={() => setIsOpen(false)}>Usuário</Link>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-700 rounded">
              <BookOpen className="mr-2" />
              <Link href="/Chapters" onClick={() => setIsOpen(false)}>Capítulos</Link>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-700 rounded">
              <Settings className="mr-2" />
              <Link href="/settings" onClick={() => setIsOpen(false)}>Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
