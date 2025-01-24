import Link from "next/link";
import { useState } from "react";

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
      <h1 className="text-3xl font-bold mb-6">Novo Capítulo</h1>

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
        <div className="flex items-center space-x-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Salvar Pregação
          </button>

          {/* Botão para voltar à lista */}
          <Link href="/Chapters">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Voltar à Lista
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
