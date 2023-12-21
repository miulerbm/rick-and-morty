"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Estructura del elemento para obtener el id de la URL
interface ParamsProps {
  params: {
    id: string;
  };
}

// Estructura del objeto extraido del API
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

const SpecificCharacterPage = ({ params }: ParamsProps) => {
  const getSpecificCharacter = async () => {
    await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setDataCharacter(data);
        console.log(data);
      });
  };

  const router = useRouter();

  // Se define el useState con su variable y su función a modificar.
  // dataCharacter almacena el objeto retornado por la API
  const [dataCharacter, setDataCharacter] = useState<CharacterProps>();

  useEffect(() => {
    getSpecificCharacter();
  }, []);

  return (
    <>
      {dataCharacter && (
        <div>
          <h1>{dataCharacter.name}</h1>
          <img
            src={dataCharacter.image}
            alt={`Imagen de ${dataCharacter.name}`}
          />
          <p>
            <strong>Status:</strong> {dataCharacter.status}
          </p>
          <p>
            <strong>Sexo:</strong> {dataCharacter.gender}
          </p>
        </div>
      )}
    </>
  );
};

export default SpecificCharacterPage;
