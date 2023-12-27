"use client";
import React, { useEffect } from "react";
import style from "./index.module.css";
import { useState } from "react";
import Cancha from "../cancha/Cancha";
import ImagenConMousemove from "./ImagenConMousemove";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import json from "../../../public/info.json";
import { EffectCoverflow, Pagination } from "swiper/modules";

import BocaPng from "../../../assets/img/escudos/Boca.png";
import IndependientePng from "../../../assets/img/escudos/Independiente.png";
import SanLorenzoPng from "../../../assets/img/escudos/SanLorenzo.png";
import NewellsPng from "../../../assets/img/escudos/Newells.png";
import RiverPng from "../../../assets/img/escudos/River.png";
import RacingPng from "../../../assets/img/escudos/Racing.png";
import EstudiantesPng from "../../../assets/img/escudos/Estudiantes.png";
import CentralPng from "../../../assets/img/escudos/Central.png";

const ContainerEscudos = ({ Escudos, enableControls, setEnableControls }) => {
  const [Escudo, setEscudo] = useState("");
  const [activeSlider, setActiveSlider] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(true);
  const nextImage = () => {
    if (currentIndex < Escudos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const [activeEsc, setActiveEsc] = useState(Escudos[0]);
  // const [activeSlider, setActiveSlider] = useState(3);
  const [estilo, setEstilo] = useState({
    background: "-webkit-radial-gradient(center center, #cdc40ce7, #000000)",
  });
  const [estilopilar, setEstiloPilar] = useState({
    background: "-webkit-radial-gradient(center center, #cdc40ce7, #000000)",
  });
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSlideChange = (swiper) => {
    // Get the currently active slide's index
    // console.log(swiper.activeIndex);
    const activeIndex = swiper.activeIndex;
    // Update the activeEsc state with the corresponding value from Escudos
    // console.log(activeIndex);
    setActiveSlider(activeIndex);

    setActiveEsc(Escudos[activeIndex]);
    // console.log(activeEsc);
  };

  useEffect(() => {
    // console.log(activeEsc);
    const equipoInfo = json.equipos.find(
      (equipo) => equipo.nombre === activeEsc
    );

    if (equipoInfo) {
      // Update the background color based on equipoInfo.color
      setEstilo({
        background: `-webkit-radial-gradient(center center,rgb(255 255 255 / 100%), ${equipoInfo.coloresPrincipales[0]}, ${equipoInfo.coloresPrincipales[1]},#000000)`,
      });
      setEstiloPilar({
        background: equipoInfo.coloresPrincipales[0],
      });
    }
  }, [activeEsc, json]);

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
    <>
      {!Escudo ? (
        <>
          <div id="drag-container">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 40,
                stretch: 400,
                depth: 1000,
                modifier: 1,
                slideShadows: false,
              }}
              style={{
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                maxWidth: "50vw",
                // height: "100px", // Ajustamos la altura para que se ajuste al contenido
                // marginTop: "1rem",
                overflow: "visible", // Permitimos que el contenido se muestre fuera del contenedor
                // position: "absolute",
              }}
              initialSlide={activeSlider}
              loop={false}
              onSlideChange={(swiper) => handleSlideChange(swiper)}
              // pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination]}
            >
              <div id="spin-container">
                {Escudos.map((esc, index) => (
                  <SwiperSlide key={index}>
                    <Link
                      href={`/${esc}`}
                      key={"container" + esc}
                      id={"container" + esc}
                      className={style.Escudos + " " + style.item}
                    >
                      <motion.img
                        initial={{ scale: 0.8, filter: "blur(8px)" }}
                        animate={{ scale: 1, filter: "blur(0px)" }}
                        exit={{ scale: 0.8, filter: "blur(8px)" }}
                        src={getEscudoImage(esc)}
                        alt={esc}
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </div>
              <div style={estilo} id="ground"></div>
              <div style={{ zIndex: "1" }}>
                <div style={estilo} id="ground1"></div>
                <div style={estilopilar} id="ground3"></div>
                <div style={estilopilar} id="ground4"></div>
                <div style={estilopilar} id="ground5"></div>
                <div style={estilopilar} id="ground6"></div>
                <div id="ground2"></div>
              </div>
            </Swiper>
          </div>

          {/* <div className={style.ContainerEscudos}>
            <div className={style.ContainerRow}>
              {Escudos.map((esc, index) =>
                index >= 4 ? (
                  <Link
                    to={`/${esc}`}
                    key={"container" + esc}
                    id={"container" + esc}
                    className={style.Escudos + " " + style.item}
                  >
                    <ImagenConMousemove
                      Escudo={Escudo}
                      setEscudo={setEscudo}
                      key={esc}
                      id={esc}
                      src={"/src/assets/img/escudos/" + esc + ".png"}
                    />
                  </Link>
                ) : null
              )}
            </div>
          </div> */}
          {/* <button onClick={prevImage}>Anterior</button>
          <button onClick={nextImage}>Siguiente</button> */}
        </>
      ) : (
        <>
          <Cancha
            Escudo={Escudo}
            enableControls={enableControls}
            setEnableControls={setEnableControls}
            setEscudo={setEscudo}
          />
        </>
      )}
    </>
  );
};

export default ContainerEscudos;
