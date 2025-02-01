import { useState } from "react";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado do menu

  return (
    <div className="flex">
      {/* Passamos o estado para a Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Conteúdo principal, ajustando margem com base no estado da Sidebar */}
      <main className={`flex-1 p-4 md:p-6 transition-all duration-300 ${isOpen ? "ml-64" : "ml-0 md:ml-64"}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
