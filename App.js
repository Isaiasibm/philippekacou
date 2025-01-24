// App.js
import { Sidebar } from "components/Sidebar";


function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold">Benvindo à Dashboard</h1>
       
        {/* Adicione outros componentes aqui */}
      </main>
    </div>
  );
}

export default App;
