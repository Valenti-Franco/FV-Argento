"use client";
import React, { useEffect, useRef } from "react";
import style from "./index.module.css";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import "./styles.css";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import json from "../../../public/info.json";
import {
  EffectCoverflow,
  Navigation,
  Mousewheel,
  Pagination,
  Keyboard,
} from "swiper/modules";
import BocaPng from "../../../assets/img/escudos/Boca.png";
import IndependientePng from "../../../assets/img/escudos/Independiente.png";
import SanLorenzoPng from "../../../assets/img/escudos/SanLorenzo.png";
import NewellsPng from "../../../assets/img/escudos/Newells.png";
import RiverPng from "../../../assets/img/escudos/River.png";
import RacingPng from "../../../assets/img/escudos/Racing.png";
import EstudiantesPng from "../../../assets/img/escudos/Estudiantes.png";
import CentralPng from "../../../assets/img/escudos/Central.png";

const ContainerEscudos = ({ Escudos, enableControls, setEnableControls }) => {
  const [swiperReady, setSwiperReady] = useState(true);
  let initialNumberEscudos;
  try {
    initialNumberEscudos = window.localStorage.getItem("Number");
  } catch (error) {
    initialNumberEscudos = 0; // Valor predeterminado en caso de error
  }
  const [numberEscudos, setNumberEscudos] = useState(initialNumberEscudos);

  const [activeSlider, setActiveSlider] = useState(initialNumberEscudos);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [activeEsc, setActiveEsc] = useState(Escudos[initialNumberEscudos]);
  const [estilo, setEstilo] = useState({
    background: `-webkit-radial-gradient(center center,rgb(255 255 255 / 100%), ${json.equipos[0]?.coloresPrincipales[0]}, ${json.equipos[0]?.coloresPrincipales[1]},#000000)`,
  });
  const [estilopilar, setEstiloPilar] = useState({
    background: `${json.equipos[0]?.coloresPrincipales[0]}`,
  });
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    localStorage.setItem("Number", activeIndex);
    setNumberEscudos(activeIndex);
    setActiveSlider(activeIndex);
    setActiveEsc(Escudos[activeIndex]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSwiperReady(true);
    }, 1000);
    const equipoInfo = json.equipos.find(
      (equipo) => equipo.nombre === activeEsc
    );

    if (equipoInfo) {
      setEstilo({
        background: `-webkit-radial-gradient(center center,rgb(255 255 255 / 100%), ${equipoInfo.coloresPrincipales[0]}, ${equipoInfo.coloresPrincipales[1]},#000000)`,
      });
      setEstiloPilar({
        background: equipoInfo.coloresPrincipales[0],
      });
    }
  }, [activeEsc]);

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
  const swiperRef = useRef();

  const slideNext = () => {
    console.log(swiper);
  };
  return (
    <>
      {swiperReady && (
        <motion.div
          initial={{ opacity: 0 }} // Opacidad inicial (invisible)
          animate={{ opacity: 1 }} // Opacidad final (visible)
          transition={{ duration: 0.5 }} // Duración de la transición
          id="drag-container"
        >
          <Swiper
            loop={false}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
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
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            style={{
              maxWidth: "50vw",

              overflow: "visible",
            }}
            keyboard={{
              enabled: true,
            }}
            initialSlide={activeSlider}
            mousewheel={true}
            navigation={true}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            modules={[EffectCoverflow, Keyboard, Mousewheel, Navigation]}
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
                    <img
                      className=" w-[400]"
                      src={getEscudoImage(esc)}
                      alt={esc}
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </div>
            <div className={style.containerArrow} style={estilo} id="ground">
              <svg
                onClick={() => swiperRef.current.slidePrev()}
                className={style.arrow}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    opacity="1"
                    d="M20 12.75C20.4142 12.75 20.75 12.4142 20.75 12C20.75 11.5858 20.4142 11.25 20 11.25V12.75ZM20 11.25H4V12.75H20V11.25Z"
                    fill="#fff"
                  ></path>{" "}
                  <path
                    d="M10 6L4 12L10 18"
                    stroke="#fff"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <svg
                onClick={() => swiperRef.current.slideNext()}
                className={style.arrow}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    opacity="1.5"
                    d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75V11.25ZM4 12.75H20V11.25H4V12.75Z"
                    fill="#fff"
                  ></path>{" "}
                  <path
                    d="M14 6L20 12L14 18"
                    stroke="#fff"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div style={{ zIndex: "1" }}>
              <div style={estilo} id="ground1"></div>
              <div style={estilopilar} id="ground3"></div>
              <div style={estilopilar} id="ground4"></div>
              <div style={estilopilar} id="ground5"></div>
              <div style={estilopilar} id="ground6"></div>
              <div id="ground2"></div>
            </div>
          </Swiper>
        </motion.div>
      )}
    </>
  );
};

export default ContainerEscudos;
