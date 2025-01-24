import { Sidebar } from "./Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Menu lateral fixo */}
      <Sidebar />
      {/* Conteúdo principal */}
      <main className="flex-1 ml-64 bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
};
