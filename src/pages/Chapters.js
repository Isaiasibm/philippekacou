import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Plus, MoreVertical, Edit, Trash } from "lucide-react";

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

  // Estado para controlar qual menu está aberto
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    }

    // Adiciona o evento de clique ao documento
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove o evento ao desmontar o componente
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-3xl font-bold mb-6">Capítulos do Livro</h1>

      {/* Botão adicionar pregação */}
      <div className="flex justify-end mb-4">
        <Link href="add-preaching">
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 flex items-center">
            <Plus className="mr-2" />
            Adicionar Capítulo
          </button>
        </Link>
      </div>

      {/* Lista de capítulos */}
      <div className="space-y-4">
        {chapters.map((chapter, index) => (
          <div
            key={chapter.number}
            className="flex items-start p-4 rounded-md shadow-sm bg-white justify-between"
          >
            {/* Informações do capítulo */}
            <div>
              <div className="text-lg font-semibold text-gray-700 mr-4">
                {chapter.number}
              </div>
              <div className="text-lg font-bold">{chapter.title}</div>
              <div className="text-sm text-gray-500">{chapter.description}</div>
            </div>

            {/* Dropdown de Ações */}
            <div className="relative" ref={dropdownRef}>
              {/* Botão para abrir/fechar menu */}
              <button
                onClick={() =>
                  setDropdownOpen(dropdownOpen === index ? null : index)
                }
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
              >
                <MoreVertical />
              </button>

              {/* Menu Dropdown (inicialmente oculto) */}
              {dropdownOpen === index && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg border border-gray-200 z-10">
                  <ul className="divide-y divide-gray-200">
                    <li>
                      <button
                        onClick={() =>
                          alert(`Adicionar versículo em ${chapter.number}`)
                        }
                        className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left"
                      >
                        <Plus className="mr-2 text-green-500" />
                        Adicionar Versículo
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          alert(`Atualizar versículo em ${chapter.number}`)
                        }
                        className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left"
                      >
                        <Edit className="mr-2 text-blue-500" />
                        Atualizar Versículo
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          alert(`Eliminar versículo em ${chapter.number}`)
                        }
                        className="flex items-center px-4 py-2 hover:bg-gray-100 w-full text-left"
                      >
                        <Trash className="mr-2 text-red-500" />
                        Eliminar Versículo
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
