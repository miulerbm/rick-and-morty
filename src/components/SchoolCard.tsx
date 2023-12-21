"use client";

import { useRouter } from "next/navigation";

interface SchoolCardProps {
  schoolName: string;
  imageUrl: string;
  schoolDescription?: string; //Si deseo opcional: poner ?
  id: number;
}

const SchoolCard = (props: SchoolCardProps) => {
  const { schoolName, imageUrl, schoolDescription, id } = props;
  // DEESTRUCTURAR ES ESTO, LO CONTRARIO A ESTRUCTURAR
  // Acá sacas lo que necesitas del argumento de entrada a tu elemento definido.

  const router = useRouter();

  const handleClick = () => {
    // const ruta = "/school/"+id;
    router.push(`/school/${id}`); //Así insertamos variables dentro de un string.
  };

  return (
    <div className="flex flex-col w-[200px] items-center border-4 border-red-800 rounded-lg p-4 gap-4">
      <h4 className="text-2xl font-bold text-yellow-500">{schoolName}</h4>
      <img src={imageUrl} alt="Imagen de un colegio." />
      <p className="text-center">{schoolDescription}</p>
      <button onClick={handleClick}>Visitar</button>
    </div>
  );
};

export default SchoolCard;
