import Link from "next/link";
import { Home, Settings, User, BookOpen } from "lucide-react";

export const Sidebar = () => (
  <div className="h-screen w-64 bg-gray-800 text-white fixed">
    <div className="p-4 text-xl font-bold">Dashboard</div>
    <nav className="mt-6">
      <ul>
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <Home className="mr-2" />
          <Link href="/">Home</Link>
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <BookOpen className="mr-2" />
          <Link href="/Chapters">Capítulos</Link>
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <User className="mr-2" />
          <Link href="/profile">Usuário</Link>
        </li>
       
        <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
          <Settings className="mr-2" />
          <Link href="/add-preaching">Settings</Link>
        </li>
      </ul>
    </nav>
  </div>
);
