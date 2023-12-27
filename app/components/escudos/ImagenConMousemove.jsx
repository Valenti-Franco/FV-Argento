"use client";
import React from "react";
import style from "./index.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

import BocaPng from "../../../assets/img/escudos/Boca.png";
import IndependientePng from "../../../assets/img/escudos/Independiente.png";
import SanLorenzoPng from "../../../assets/img/escudos/SanLorenzo.png";
import NewellsPng from "../../../assets/img/escudos/Newells.png";
import RiverPng from "../../../assets/img/escudos/River.png";
import RacingPng from "../../../assets/img/escudos/Racing.png";
import EstudiantesPng from "../../../assets/img/escudos/Estudiantes.png";
import CentralPng from "../../../assets/img/escudos/Central.png";
import Link from "next/link";
// import { useHistory } from "react-router-dom";
function ImagenConMousemove(props) {
  const [transform, setTransform] = useState("");
  // const history = useHistory();

  function handleEscudo(id) {
    // const newPath = `/${id}`;

    // // Cambiar manualmente el path de la URL sin cambiar el estado
    // history.push(newPath);

    props.setEscudo(id);
  }
  // Actualiza el estado y luego cambia la ruta

  function handleMouseMove(e) {
    const { clientHeight: height1, clientWidth: width1 } = e.currentTarget;
    const { layerX, layerY } = e.nativeEvent;
    const xRotation = ((layerY - height1 / 2) / height1) * 4;
    const yRotation = ((layerX - width1 / 2) / width1) * 10;
    if (!props.Escudo) {
    }
    const stringCuadro = `perspective(100px) scale(1.14) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    setTransform(stringCuadro);
  }
  function handleMouseLeave() {
    setTransform("");
  }
  const getEscudoImage = (escudoName) => {
    switch (escudoName) {
      case "Boca":
        return BocaPng.src;
      case "Independiente":
        return IndependientePng.src;
      case "SanLorenzo":
        return SanLorenzoPng.src;
      case "Newells":
        return NewellsPng.src;
      case "River":
        return RiverPng.src;
      case "Racing":
        return RacingPng.src;
      case "Estudiantes":
        return EstudiantesPng.src;
      case "Central":
        return CentralPng.src;
      default:
        return null;
    }
  };
  return (
    <motion.div
      initial={{ y: 100, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ x: "300%", opacity: 1, scale: 0.1 }}
      style={{ display: "flex" }}
    >
      {/* <Link to={`/${props.id}`} className={style.link}> */}

      <img
        transition={{ duration: 0.2 }}
        className={props.Escudo ? style.itemImgSelect : style.itemImg}
        src={getEscudoImage(props.Escudo)}
        alt={props.alt}
        style={{ transform, zIndex: 1000000000000000 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        id={props.id}
        onClick={() => handleEscudo(props.id)}
      />

      {/* </Link> */}
    </motion.div>
  );
}
export default ImagenConMousemove;
