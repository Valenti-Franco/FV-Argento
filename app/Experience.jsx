"use client";
import { animate } from "framer-motion";
import { useMotionValue } from "framer-motion";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useFrame } from "react-three-fiber";
import { Estudiantes } from "../assets/estadios/Estudiantes";
import { Central } from "../assets/estadios/Rc";
import { SanLorenzo } from "../assets/estadios/Sl";
import { Boca } from "../assets/estadios/Boca";
import { Newells } from "../assets/estadios/Newells";
import { Racing } from "../assets/estadios/Racing";
import { Independiente } from "../assets/estadios/Independiente";
import { River } from "../assets/estadios/River";
import { useScroll } from "@react-three/drei";
import { framerMotionConfig } from "./config";
import gsap from "gsap";

const Experience = ({
  isOrbit,
  Escudo,
  section,
  setSection,
  enableControls,
  setEnableControls,
  isScrollAnimate,
  setIsScrollAnimate,
}) => {
  const cameraPositionX = useMotionValue();
  const cameraPositionY = useMotionValue();
  const cameraPositionZ = useMotionValue();
  const cameraRotationZ = useMotionValue();
  const cameraRotationX = useMotionValue();
  const cameraRotationY = useMotionValue();
  // const camera = useMotionValue();

  const data = useScroll();

  const cameraLookAtX = useMotionValue();
  useEffect(() => {
    // console.log(section);
    if (enableControls) {
      if (section === 0) {
        const currentRotationY = cameraRotationY.get();
        const newRotationY = 4.24; // Girar 180 grados en el eje Y (Math.PI radianes)

        animate(cameraRotationY, newRotationY, {
          type: "tween",
          duration: 0, // Duración de la animación en segundos
          // Otras opciones de animación aquí
        });
        animate(cameraRotationX, 2.3, {
          type: "tween",
          duration: 0.1, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
        const currentRotationZ = cameraRotationZ.get();
        const newRotationZ = 2.3; // Girar 180 grados en el eje Y (Math.PI radianes)

        animate(cameraRotationZ, newRotationZ, {
          type: "spring",
          duration: 0, // Duración de la animación en segundos
          // Otras opciones de animación aquí
        });

        const currentPositionX = cameraPositionX.get();
        const newPositionX = -233; // Girar 180 grados en el eje Y (Math.PI radianes)

        animate(cameraPositionX, newPositionX, {
          type: "spring",
          duration: 4.1, // Duración de la animación en segundos
          // Otras opciones de animación aquí
        });

        animate(cameraPositionY, 50, {
          type: "spring",
          duration: 1.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });

        animate(cameraPositionZ, -10, {
          type: "spring",
          duration: 1.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
      }
      if (section === 1 || section === 2) {
        const currentRotationY = cameraRotationY.get();
        const newRotationY = 5.04; // Girar 180 grados en el eje Y (Math.PI radianes)

        animate(cameraRotationY, newRotationY, {
          type: "spring",
          duration: 1.0, // Duración de la animación en segundos
        });

        const currentRotationZ = cameraRotationZ.get();
        const newRotationZ = -3.3; // Girar 180 grados en el eje Y (Math.PI radianes)

        animate(cameraRotationZ, newRotationZ, {
          type: "spring",
          duration: 0.0, // Duración de la animación en segundos
          // Otras opciones de animación aquí
        });

        const currentPositionX = cameraPositionX.get();
        const newPositionX = -303; // Girar 180 grados en el eje Y (Math.PI radianes)

        animate(cameraPositionX, newPositionX, {
          type: "tween",
          duration: 0, // Duración de la animación en segundos
          // Otras opciones de animación aquí
        });
        const currentPositionZ = cameraPositionZ.get();
        const newPositionZ = -103; // Girar 180 grados en el eje Y (Math.PI radianes)

        animate(cameraPositionZ, newPositionZ, {
          type: "tween",
          duration: 1.0, // Duración de la animación en segundos
          // Otras opciones de animación aquí
        });
        animate(cameraPositionY, 80, {
          type: "tween",
          duration: 1.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });

        animate(cameraRotationX, 3, {
          type: "tween",
          duration: 0.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
      }
      if (section === 3) {
        animate(cameraRotationZ, 0.6, {
          type: "tween",
          duration: 1.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });

        animate(cameraRotationX, 0.9, {
          type: "tween",
          duration: 11.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
        animate(cameraRotationY, 3.4, {
          type: "tween",
          duration: 1.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
        animate(cameraPositionX, -248, {
          type: "tween",
          duration: 3.8, // Duración de la animación en segundos (puedes ajustarla)
        });
        animate(cameraPositionY, 538, {
          type: "tween",
          duration: 3.8, // Duración de la animación en segundos (puedes ajustarla)
        });
        animate(cameraPositionZ, -460, {
          type: "tween",
          duration: 10.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
      }
    } else {
      if (section === 0) {
        animate(cameraPositionX, 180, {
          type: "spring",
          duration: 1.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
        animate(cameraRotationZ, -2.3, {
          type: "spring",
          duration: 1.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
        animate(cameraRotationY, 1.3, {
          type: "spring",
          duration: 1.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
        animate(cameraRotationX, 2.3, {
          type: "spring",
          duration: 0.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
        animate(cameraPositionZ, -10, {
          type: "spring",
          duration: 1.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
        animate(cameraPositionY, 50, {
          type: "spring",
          duration: 1.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
      }
      if (section === 1 || section === 2) {
        animate(cameraRotationZ, -3.1, {
          type: "tween",
          duration: 1.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
        animate(cameraRotationY, 2.1, {
          type: "tween",
          duration: 1.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
        animate(cameraRotationX, 3, {
          type: "tween",
          duration: 0.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
        animate(cameraPositionX, 250, {
          type: "tween",
          duration: 0.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
        animate(cameraPositionZ, 180, {
          type: "tween",
          duration: 0.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
        animate(cameraPositionY, 80, {
          type: "tween",
          duration: 1.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
      }
      if (section === 3) {
        animate(cameraRotationZ, -3.1, {
          type: "tween",
          duration: 1.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });

        animate(cameraRotationX, 2.1, {
          type: "tween",
          duration: 11.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
        animate(cameraRotationY, 2.8, {
          type: "tween",
          duration: 1.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
        animate(cameraPositionX, 118, {
          type: "tween",
          duration: 3.8, // Duración de la animación en segundos (puedes ajustarla)
        });
        animate(cameraPositionY, 538, {
          type: "tween",
          duration: 3.8, // Duración de la animación en segundos (puedes ajustarla)
        });
        animate(cameraPositionZ, 410, {
          type: "tween",
          duration: 10.5, // Tipo de animación
          // Tipo de animación
          ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
        });
        // Animación "tween" de cameraLookAtX desde el valor actual hasta -29
      }
    }
  }, [section, enableControls]);

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);
    if (!isScrollAnimate) {
      curSection = curSection;
      // console.log(curSection)
      if (curSection > 3) {
        curSection = 3;
      }
      if (curSection !== section) {
        setSection(curSection);
      }
    } else {
      // console.log("first");
      if (curSection === 0) {
        setIsScrollAnimate(false);
      }
      setSection(0);
    }
    // // Configurar la posición y el punto de mira para la sección 0

    if (!isOrbit) {
      state.camera.position.x = cameraPositionX.get();
      state.camera.position.y = cameraPositionY.get();
      state.camera.position.z = cameraPositionZ.get();
      state.camera.rotation.z = cameraRotationZ.get();
      state.camera.rotation.x = cameraRotationX.get();
      state.camera.rotation.y = cameraRotationY.get();
    }

    state.camera.far = 5000;
    // // state.camera = camera.get();
    // // state.camera.lookAt(cameraLookAtX.get(), -1, 22);
    // // Restaurar el zoom a su valor predeterminado para otras secciones diferentes de 1
    // state.camera.zoom = 1;
    // state.camera.updateProjectionMatrix();
  });
  return (
    <>
      {Escudo.id === "Boca" ? (
        <Boca />
      ) : Escudo.id === "Racing" ? (
        <Racing />
      ) : Escudo.id === "Independiente" ? (
        <Independiente />
      ) : Escudo.id === "River" ? (
        <River />
      ) : Escudo.id === "Estudiantes" ? (
        <Estudiantes />
      ) : Escudo.id === "Central" ? (
        <Central />
      ) : Escudo.id === "SanLorenzo" ? (
        <SanLorenzo />
      ) : Escudo.id === "Newells" ? (
        <Newells />
      ) : null}
    </>
  );
};

export default Experience;
