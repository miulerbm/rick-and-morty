interface ParamsProps {
  // Interfaz es como se declara un tipado en TypeScript
  params: {
    id: string;
  };
}

const SpecificSchoolPage = ({ params }: ParamsProps) => {
  return <div>Hola School {params.id}</div>;
};

export default SpecificSchoolPage;
