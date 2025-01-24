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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Adicionar Novo Capítulo</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="capitulo">
            Número
          </label>
          <input
            type="text"
            id="capitulo"
            name="capitulo"
            value={formData.capitulo}
            onChange={handleChange}
            className="w-full border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="titulo">
            Título
          </label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className="w-full border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="descricao">
            Descrição
          </label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            className="w-full border-gray-300 rounded p-2"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          {/* Botão Salvar Pregação */}
          <button
            type="submit"
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            <Save className="mr-2" /> Salvar Pregação
          </button>

          {/* Botão Voltar à Lista */}
          <Link href="/Chapters">
            <button
              type="button"
              className="flex items-center bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              <ArrowLeft className="mr-2" /> Voltar à Lista
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
