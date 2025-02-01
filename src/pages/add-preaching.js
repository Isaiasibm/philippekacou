import Link from "next/link";
import { useState } from "react";
import { Save, ArrowLeft } from "lucide-react"; // Ícones do ChadCN

export default function AddPreaching() {
  const [formData, setFormData] = useState({
    capitulo: "",
    titulo: "",
    descricao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    alert("Pregação adicionada com sucesso!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Adicionar Novo Capítulo</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo Número */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="capitulo">
            Número
          </label>
          <input
            type="text"
            id="capitulo"
            name="capitulo"
            value={formData.capitulo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Campo Título */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="titulo">
            Título
          </label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Campo Descrição */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="descricao">
            Descrição
          </label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 h-28"
            required
          ></textarea>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Botão Salvar Pregação */}
          <button
            type="submit"
            className="flex items-center justify-center w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-all"
          >
            <Save className="mr-2" /> Salvar
          </button>

          {/* Botão Voltar */}
          <Link href="/Chapters" className="w-full sm:w-auto">
            <button
              type="button"
              className="flex items-center justify-center w-full sm:w-auto bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition-all"
            >
              <ArrowLeft className="mr-2" /> Voltar
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
