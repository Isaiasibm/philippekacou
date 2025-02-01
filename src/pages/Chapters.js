import { useState, useMemo } from "react";
import Link from "next/link";
import { Plus, MoreVertical, Edit, Trash, Search, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Chapters() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(5);
  const [pageIndex, setPageIndex] = useState(0);

  const data = useMemo(() => [
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
      {
        number: "Kacou 4",
        title: "As sete eras da Igreja e os sete selos",
        description: "Pregada no domingo...",
      },
      {
        number: "Kacou 5",
        title: "Cumprimento de Mateus 25:6",
        description:
          "Pregada no domingo 10 de Novembro de 2002, em Locodjro, Abidjan - Costa do Marfim",
      },
      {
        number: "Kacou 6",
        title: "Revelação sobre Mateus 25:6",
        description:
          "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
      },
      {
        number: "Kacou 7",
        title: "Comparação entre Darby e Louis Segond",
        description: "Pregada no domingo...",
      },
      {
        number: "Kacou 8",
        title: "O encontro ecuménico",
        description:
          "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
      },
      {
        number: "Kacou 9",
        title: "O ministério da mulher",
        description:
          "Pregada no domingo 04 de Maio de 2003, em Locodjro, Abidjan - Costa do Marfim",
      },
      {
        number: "Kacou 10",
        title: "Revelação sobre os filhos do diabo",
        description: "Pregada no domingo...",
      },
      {
        number: "Kacou 11",
        title: "Fale Agora",
        description:
          "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
      },
      {
        number: "Kacou 12",
        title: "A igreja e o estado",
        description:
          "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
      },
      {
        number: "Kacou 13",
        title: "Pregação sobre o Islão",
        description: "Pregada no domingo...",
      },
      {
        number: "Kacou 14",
        title: "O batismo do Espírito Santo",
        description:
          "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
      },
      {
        number: "Kacou 15",
        title: "O que Deus espera de nós",
        description:
          "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
      },
      {
        number: "Kacou 16",
        title: "Chamada à evangelização",
        description: "Pregada no domingo...",
      },
      {
        number: "Kacou 17",
        title: "A Confissão pública",
        description:
          "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
      },
      {
        number: "Kacou 18",
        title: "Perguntas e respostas primeira parte",
        description:
          "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
      },
      {
        number: "Kacou 19",
          title: "Aqui está a voz de Mateus 26:6",
          description: "Pregada no domingo...",
        },
        {
          number: "Kacou 20",
          title: "Pronuncia o Julgamento",
          description:
            "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
        },
        {
          number: "Kacou 21",
          title: "Um profeta enviado de Deus",
          description:
            "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
        },
        {
          number: "Kacou 22",
          title: "As sete eras da Igreja e os sete selos",
          description: "Pregada no domingo...",
        },
        {
          number: "Kacou 23",
          title: "Cumprimento de Mateus 25:6",
          description:
            "Pregada no domingo 10 de Novembro de 2002, em Locodjro, Abidjan - Costa do Marfim",
        },
        {
          number: "Kacou 24",
          title: "Revelação sobre Mateus 25:6",
          description:
            "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
        },
        {
          number: "Kacou 25",
          title: "Comparação entre Darby e Louis Segond",
          description: "Pregada no domingo...",
        },
        {
          number: "Kacou 26",
          title: "O encontro ecuménico",
          description:
            "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
        },
        {
          number: "Kacou 27",
          title: "O ministério da mulher",
          description:
            "Pregada no domingo 04 de Maio de 2003, em Locodjro, Abidjan - Costa do Marfim",
        },
        {
          number: "Kacou 28",
          title: "Revelação sobre os filhos do diabo",
          description: "Pregada no domingo...",
        },
        {
          number: "Kacou 29",
          title: "Fale Agora",
          description:
            "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
        },
        {
          number: "Kacou 30",
          title: "A igreja e o estado",
          description:
            "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
        },
        {
          number: "Kacou 31",
          title: "Pregação sobre o Islão",
          description: "Pregada no domingo...",
        },
        {
          number: "Kacou 32",
          title: "O batismo do Espírito Santo",
          description:
            "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
        },
        {
          number: "Kacou 33",
          title: "O que Deus espera de nós",
          description:
            "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
        },
        {
          number: "Kacou 34",
          title: "Chamada à evangelização",
          description: "Pregada no domingo...",
        },
        {
          number: "Kacou 35",
          title: "A Confissão pública",
          description:
            "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
        },
        {
          number: "Kacou 36",
          title: "Perguntas e respostas primeira parte",
          description:
            "Pregada no domingo 20 de outubro de 2002, em Locodjro, Abidjan - Costa do Marfim",
        },
  ], []);

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter((item) =>
      Object.values(item).some((value) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data]);

  const columns = useMemo(() => [
    { accessorKey: "number", header: "Número" },
    { accessorKey: "title", header: "Título" },
    { accessorKey: "description", header: "Descrição" }
  ], []);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  // Gera os botões de paginação reduzidos
  const generatePagination = () => {
    const pages = [];
    const maxPagesToShow = 3; // Exibir no máximo 3 números visíveis
    const leftMostPage = Math.max(0, pageIndex - 1);
    const rightMostPage = Math.min(totalPages - 1, pageIndex + 1);

    if (leftMostPage > 0) pages.push(0);
    if (leftMostPage > 1) pages.push("...");

    for (let i = leftMostPage; i <= rightMostPage; i++) {
      pages.push(i);
    }

    if (rightMostPage < totalPages - 2) pages.push("...");
    if (rightMostPage < totalPages - 1) pages.push(totalPages - 1);

    return pages;
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-3xl font-bold mb-6">Capítulos do Livro</h1>

      {/* Campo de busca e botão de adicionar */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar capítulo..."
            className="border rounded px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-500" size={20} />
        </div>

        <div className="flex justify-end">
          <Link href="/add-preaching">
            <Button className="bg-gray-800 text-white hover:bg-gray-700">
              <Plus className="mr-2" /> Adicionar Capítulo
            </Button>
          </Link>
        </div>
      </div>

      {/* Tabela */}
      <Table className="w-full bg-white shadow-md rounded-md">
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={col.accessorKey}>{col.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize).map((row, index) => (
            <TableRow key={index}>
              {columns.map((col) => (
                <TableCell key={col.accessorKey}>{row[col.accessorKey]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Controle de Página */}
      <div className="flex justify-between mt-4 items-center">
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="border rounded px-2 py-1"
        >
          {[5, 10, 20].map((size) => (
            <option key={size} value={size}>{size} por página</option>
          ))}
        </select>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => setPageIndex((prev) => Math.max(0, prev - 1))}
            disabled={pageIndex === 0}
          >
            <ChevronLeft /> Anterior
          </Button>

          {generatePagination().map((p, i) => (
            <Button
              key={i}
              variant={p === pageIndex ? "solid" : "outline"}
              onClick={() => typeof p === "number" && setPageIndex(p)}
              className={p === pageIndex ? "bg-gray-800 text-white" : ""}
            >
              {p === "..." ? "..." : p + 1}
            </Button>
          ))}

          <Button
            variant="outline"
            onClick={() => setPageIndex((prev) => Math.min(totalPages - 1, prev + 1))}
            disabled={pageIndex >= totalPages - 1}
          >
            Próximo <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
