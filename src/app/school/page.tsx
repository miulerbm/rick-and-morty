"use client";

import ButtonComponent from "@/components/Button";
import SchoolCard from "@/components/SchoolCard";
import { useRouter } from "next/navigation";

const data = [
  {
    schoolName: "San Juan",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Sesquicentenario_Colegio_Nacional_de_San_Juan.jpg",
    schoolDescription: "Es un colegio lleno de trolasaaas.",
    id: 1,
  },
  {
    schoolName: "Escuela Libertad",
    imageUrl: "https://example.com/libertad.jpg",
    id: 2,
  },
  {
    schoolName: "Colegio del Sol",
    imageUrl: "https://example.com/sol.jpg",
    schoolDescription: "Donde brillan las mentes y se cultiva el conocimiento.",
    id: 3,
  },
  {
    schoolName: "Instituto Esperanza",
    imageUrl: "https://example.com/esperanza.jpg",
    id: 4,
  },
  {
    schoolName: "Academia Aurora",
    imageUrl: "https://example.com/aurora.jpg",
    id: 5,
  },
  {
    schoolName: "Centro Educativo Luna",
    imageUrl: "https://example.com/luna.jpg",
    schoolDescription:
      "Donde cada estudiante es una luz en la oscuridad del desconocimiento.",
    id: 6,
  },
  {
    schoolName: "Escuela Estelar",
    imageUrl: "https://example.com/estelar.jpg",
    id: 7,
  },
  {
    schoolName: "Instituto Montaña",
    imageUrl: "https://example.com/montana.jpg",
    schoolDescription: "Caminando juntos hacia la cima del conocimiento.",
    id: 8,
  },
  {
    schoolName: "Colegio Rio",
    imageUrl: "https://example.com/rio.jpg",
    id: 9,
  },
  {
    schoolName: "Escuela Arcoiris",
    imageUrl: "https://example.com/arcoiris.jpg",
    schoolDescription:
      "Un lugar lleno de colores y diversidad en la educación.",
    id: 10,
  },
];

const SchoolPage = () => {
  // Función para Añadir Escuela
  const router = useRouter();

  const handleAddSchool = () => {
    router.push(`/school/create`);
  };

  return (
    <div className="flex flex-col gap-12 p-12">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-black">Escuela</h1>
        <ButtonComponent onClick={handleAddSchool}>
          Añadir Escuela
        </ButtonComponent>
      </div>
      <div className="flex flex-col gap-4">
        <p>
          Es una institución educativa que brinda educación formal a
          estudiantes, generalmente en edades comprendidas entre la infancia y
          la adolescencia. En su función principal, un colegio proporciona un
          ambiente estructurado y organizado donde los estudiantes pueden
          adquirir conocimientos académicos, habilidades sociales y valores
          éticos.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Escuelas cercanas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((school) => (
            <SchoolCard
              schoolName={school.schoolName}
              imageUrl={school.imageUrl}
              schoolDescription={school?.schoolDescription} //Puede que exista: ? o no.
              id={school.id}
              key={school.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolPage;
