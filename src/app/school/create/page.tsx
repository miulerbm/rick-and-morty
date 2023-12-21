"use client";

import ButtonComponent from "@/components/Button";
import { useState } from "react";

const CreatePage = () => {
  const [schoolName, setSchoolName] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [schoolDescription, setSchoolDescription] = useState<string>("");
  //   console.log(schoolName);

  const handleSave = () => {
    // Generar un objeto JSON y guardarlo en data
    const formData = {
      schoolName,
      imageUrl,
      schoolDescription,
    };

    //
  };
  return (
    <div className="flex flex-col p-12 gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-black">Registrar Escuela</h1>
        <ButtonComponent onClick={handleSave}>Guardar</ButtonComponent>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p>Nombre del Colegio: </p>
          <input
            onChange={(e) => {
              setSchoolName(e.target.value);
            }}
          />
        </div>

        <div>
          <p>Imagen: </p>
          <input
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
        </div>

        <div>
          <p>Descripción: </p>
          <textarea
            rows={5}
            onChange={(e) => {
              setSchoolDescription(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
