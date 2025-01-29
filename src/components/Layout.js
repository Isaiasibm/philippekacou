import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar fixa */}
      <Sidebar />

      {/* Conteúdo principal */}
      <main className="flex-1 bg-gray-100 p-4 md:p-6 ml-0 md:ml-64 transition-all">
        {children}
      </main>
    </div>
  );
};

export default Layout;
