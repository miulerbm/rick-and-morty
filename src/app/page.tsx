"use client";

import ButtonComponent from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    // const ruta = "/school/"+id;
    router.push(`/school/`); //Así insertamos variables dentro de un string.
  };

  return (
    <>
      <h1>Hola Mundo</h1>
      <ButtonComponent onClick={handleClick}>Visitar colegios</ButtonComponent>
    </>
  );
}
