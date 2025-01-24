import Link from "next/link";
import { Plus } from "lucide-react";

export default function Chapters() {
  const chapters = [
    {
      number: "Kacou 1",
      title: "Aqui está a voz de Mateus 26:6",
      description: "Pregada no domingo...",
    },
    {
      number: "Kacou 2",
      title: "Pronuncia o Julgamento",
      description:
        "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
    },
    {
      number: "Kacou 3",
      title: "Um profeta enviado de Deus",
      description:
        "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Capítulos do Livro</h1>

      <div className="flex justify-end">
        <Link href="add-preaching">
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 flex items-center">
            <Plus className="mr-2" />
            Adicionar Pregação
          </button>
        </Link>
      </div>

      {/* Lista de capítulos */}
      <div className="space-y-4">
        {chapters.map((chapter) => (
          <div
            key={chapter.number}
            className="flex items-start p-4 rounded-md shadow-sm bg-white"
          >
            <div className="text-lg font-semibold text-gray-700 mr-4">
              {chapter.number}
            </div>
            <div>
              <div className="text-lg font-bold">{chapter.title}</div>
              <div className="text-sm text-gray-500">{chapter.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
