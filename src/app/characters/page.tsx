"use client";

import ButtonComponent from "@/components/Button";
import CharacterCard from "@/components/CharacterCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface CharacterProps {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

// ESTOS SON DOS SUB OBJETS
export interface Location {
  name: string;
  url: string;
}

const CharactersPage = () => {
  // Función para Añadir Escuela
  const router = useRouter();

  // Despues de un useRouter se puede definir los estados
  const [dataCharacters, setDataCharacters] = useState<CharacterProps[]>([]);

  const handleAddCharacter = () => {
    router.push(`/character/create`);
  };

  const getCharacters = async () => {
    await fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => response.json())
      .then((data) => {
        setDataCharacters(data.results);
        console.log(data.results);
      });
  };

  // Usando un useEffect
  // Un hook para llamar a ciertas funciones al inicio del renderizado.
  // Se ejecuta cuando se renderiza la página. [] -> 1vez / [estado,const,var] -> se renderiza cada
  // que alguna variable entre los corchetes cambie.

  // useEffect(() => {}, []) -> Esto es para ejecutar las funciones la primera vez que se renderiza un comp
  // useEffect(() => {}) -> Cada vez que cambia cualquier elemento del componente, se ejecuta el useEffect
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="flex flex-col gap-12 p-12">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-black">Personajes</h1>
        <ButtonComponent onClick={handleAddCharacter}>
          Añadir Personajes
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
          {dataCharacters.length > 0 &&
            dataCharacters.map((character) => (
              <CharacterCard
                characterName={character.name}
                imageUrl={character.image}
                id={character.id}
                key={character.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;
