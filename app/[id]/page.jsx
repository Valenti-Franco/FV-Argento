import React from "react";

import Cancha from "../components/cancha/Cancha";

const page = async () => {
  function esperarTresSegundos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000); // 3000 milisegundos = 3 segundos
    });
  }

  async function miFuncionAsync() {
    console.log("Inicio de la función");

    // Esperar 3 segundos
    await esperarTresSegundos();

    console.log("Después de esperar 3 segundos");
  }

  // Llamar a la función asíncrona
  miFuncionAsync();
  return <Cancha />;
};

export default page;
