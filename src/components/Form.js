import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    number: "",
    title: "",
    description: "",
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-bold mb-2" htmlFor="number">
          Número
        </label>
        <input
          type="text"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          className="w-full border-gray-300 rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
          Título
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border-gray-300 rounded p-2"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
          Descrição
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border-gray-300 rounded p-2"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Salvar Pregação
      </button>
    </form>
  );
}
