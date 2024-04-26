"use server";
import style from "./index.module.css";

import ContainerEscudos from "./components/escudos/ContainerEscudos";
export default async function Home() {
  const Escudos = [
    "Boca",
    "Independiente",
    "SanLorenzo",
    "Newells",
    "River",
    "Racing",
    "Estudiantes",
    "Central",
  ];

  return (
    <div className={style.main + " " + style.dia}>
      <ContainerEscudos Escudos={Escudos} />
    </div>
  );
}
