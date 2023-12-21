"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface CharacterCardProps {
  characterName: string;
  imageUrl: string;
  id: number;
}

const CharacterCard = (props: CharacterCardProps) => {
  const { characterName, imageUrl, id } = props;
  // DEESTRUCTURAR ES ESTO, LO CONTRARIO A ESTRUCTURAR
  // Acá sacas lo que necesitas del argumento de entrada a tu elemento definido.

  const router = useRouter();

  const handleClick = () => {
    // const ruta = "/character/"+id;
    router.push(`/characters/${id}`); //Así insertamos variables dentro de un string.
  };

  return (
    <div className="flex flex-col w-[200px] items-center border-4 border-red-800 rounded-lg p-4 gap-4">
      <h4 className="text-2xl font-bold text-yellow-500">{characterName}</h4>
      <img src={imageUrl} alt="Imagen de un personaje." />
      <button onClick={handleClick}>Ver personaje</button>
    </div>
  );
};

export default CharacterCard;
