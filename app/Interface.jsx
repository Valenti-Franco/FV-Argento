"use client";

import React, { useEffect, useState } from "react";
// import ImagenConMousemove from "./app/escudos/ImagenConMousemove";
import ImagenConMousemove from "./components/escudos/ImagenConMousemove";
import { AnimatePresence, motion } from "framer-motion";
import style from "./interface.module.css";
import json from "../public/info.json";

// import { GoogleMap } from "react-google-maps";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
// import Chart from "react-apexcharts";

const sectionStyle = {
  height: "100vh",
  width: "100vw",

  maxWidth: "1920px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const Section = (props) => {
  const { children } = props;

  return <section style={sectionStyle}>{children}</section>;
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100vw",
};

const Interface = ({ section, Escudo, setSection, noText }) => {
  Escudo = Escudo.id;

  const equipoInfo = json.equipos.find((equipo) => equipo.nombre === Escudo);

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  // useEffect(() => {
  //   console.log(equipoInfo);
  // }, [section]);
  const Estilo = {
    color: equipoInfo.coloresPrincipales[2],
    WebkitTextStrokeWidth: "1px", // Ancho del contorno
    WebkitTextStrokeColor: equipoInfo.coloresPrincipales[1] || "black",
    background: `linear-gradient(to right, ${equipoInfo.coloresPrincipales[0]}, ${equipoInfo.coloresPrincipales[1]})`,
    margin: "15px",
    padding: "15px",
    width: "fit-content",
    display: "flex",
  };
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [state, setState] = useState({
    options: {
      theme: {
        mode: "dark",
        palette: "palette",
        monochrome: {
          enabled: false,
          color: "#000",
          shadeTo: "dark",
          shadeIntensity: 0.65,
        },
      },

      dataLabels: {
        style: {
          fontSize: "54px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: "bold",
          colors: undefined,
          color: "#fff",
        },
        background: {
          enabled: true,
          foreColor: equipoInfo.coloresPrincipales[1],
          padding: 4,
          borderRadius: 2,
          borderWidth: 1,
          borderColor: "#fff",
          opacity: 0.9,
          dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: "#000",
            opacity: 0.45,
          },
        },
      },

      colors: [
        equipoInfo.coloresPrincipales[0],
        equipoInfo.coloresPrincipales[1],
        "#546E7A",
        "#E91E63",
        "#FF9800",
      ],
      chart: {
        id: "basic-bar",
        zoom: {
          enabled: true,
        },
      },
      xaxis: {
        categories: [
          "Primera División",
          "Titulos Nacionales",
          equipoInfo.Internacionales.length > 0 ? "Titulos Internaciones" : "",
        ],
        dataLabels: {
          style: {
            fontSize: "44px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold",
            colors: undefined,
            color: "#fff",
          },
        },
      },
    },
    series: [
      {
        name: "CANTIDAD",
        data: [
          equipoInfo.PrimeraDivision.length,
          equipoInfo.titulosNacionales.length,
          equipoInfo.Internacionales.length > 0
            ? equipoInfo.Internacionales.length
            : null,
        ],
      },
    ],
  });
  const ruta = `../assets/img/escudos/${Escudo}.png`;
  return (
    <div style={containerStyle}>
      <AnimatePresence>
        <Section>
          <AnimatePresence>
            {!noText ? (
              <motion.div transition={spring} className={style.container}>
                {" "}
                <ImagenConMousemove
                  key={Escudo}
                  Escudo={Escudo}
                  id={Escudo}
                  src={ruta}
                />
                <motion.h1
                  animate={{ x: 0 }}
                  exit={{ x: "-200%" }}
                  initial={{ x: "-100%" }}
                  transition={spring}
                  style={Estilo}
                  className={style.fullname}
                >
                  {equipoInfo.nombreCompleto}{" "}
                </motion.h1>
                <motion.p
                  exit={{ x: "-200%" }}
                  animate={{ x: 0 }}
                  initial={{ x: "-100%" }}
                  transition={spring}
                  style={Estilo}
                  className={style.fundation}
                >
                  Fundado en {equipoInfo.fundacion}{" "}
                </motion.p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </Section>
        <Section>
          <AnimatePresence>
            {!noText ? (
              <div className={style.contCancha}>
                <div className={style.nameCancha}>
                  <section>
                    <motion.p
                      exit={{ x: "-200%" }}
                      animate={{ x: 0 }}
                      initial={{ x: "-100%" }}
                      style={Estilo}
                      className={style.fullname}
                    >
                      Cancha:
                    </motion.p>
                    <motion.p
                      exit={{ x: "-200%" }}
                      animate={{ x: 0 }}
                      initial={{ x: "-100%" }}
                      style={Estilo}
                      className={style.fundation}
                    >
                      {equipoInfo.cancha}
                    </motion.p>
                  </section>
                  <section>
                    <motion.p
                      exit={{ x: "-200%" }}
                      animate={{ x: 0 }}
                      initial={{ x: "-100%" }}
                      style={Estilo}
                      className={style.fullname}
                    >
                      Fecha de Inaguración:
                    </motion.p>
                    <motion.p
                      exit={{ x: "-200%" }}
                      animate={{ x: 0 }}
                      initial={{ x: "-100%" }}
                      style={Estilo}
                      className={style.fundation}
                    >
                      {equipoInfo.FechaInauguración}
                    </motion.p>
                  </section>
                </div>
                <div style={Estilo}>
                  <motion.iframe
                    exit={{ x: "200%" }}
                    animate={{ x: 0 }}
                    initial={{ x: "100%" }}
                    src={equipoInfo.mapa}
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={style.map} // Agrega la propiedad className aquí
                  ></motion.iframe>
                </div>
              </div>
            ) : null}
          </AnimatePresence>
        </Section>
        <Section></Section>

        <Section>
          <AnimatePresence>
            {!noText ? (
              <>
                <motion.h1
                  exit={{ x: "200%" }}
                  animate={{ x: 0 }}
                  initial={{ x: "100%" }}
                  style={Estilo}
                  className={style.titleCopas}
                >
                  TITULOS
                </motion.h1>
                <motion.div
                  exit={{ x: "200%" }}
                  animate={{ x: 0 }}
                  initial={{ x: "100%" }}
                >
                  <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="1500"
                  />
                </motion.div>
              </>
            ) : null}
          </AnimatePresence>
        </Section>
        <Section>
          {!noText ? (
            <motion.p style={Estilo} className={style.fullname}>
              Capacidad: {equipoInfo.capacidad}
              <svg
                width={40}
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
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke={equipoInfo.coloresPrincipales[0]}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                    stroke={equipoInfo.coloresPrincipales[0]}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </motion.p>
          ) : null}
        </Section>
      </AnimatePresence>
    </div>
  );
};

export default Interface;

const AboutSection = () => {
  return (
    <Section>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", lineHeight: "1.2" }}>
        Hi, I am
        <br />
        <span
          style={{
            backgroundColor: "white",
            padding: "0.1rem",
            fontStyle: "italic",
          }}
        >
          Franco Valenti
        </span>
      </h1>
      <p style={{ fontSize: "1rem", color: "gray", marginTop: "1rem" }}>
        I make Youtube videos to help developers
        <br />
        learn how to build 3d apps
      </p>
      <button
        style={{
          backgroundColor: "indigo",
          color: "white",
          padding: "1rem 2rem",
          borderRadius: "0.5rem",
          fontWeight: "bold",
          fontSize: "1rem",
          marginTop: "2.5rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        Contact Me
      </button>
    </Section>
  );
};

const ProgressBar3 = () => {
  return (
    <div style={{ width: "100%", padding: "1rem", maxWidth: "50%" }}>
      <div style={{ marginBottom: "1rem" }}>
        <div
          style={{
            backgroundColor: "lightgray",
            position: "relative",
            height: "1rem",
            borderRadius: "1rem",
          }}
        >
          <div
            style={{
              backgroundColor: "blue",
              position: "absolute",
              top: "0",
              left: "0",
              height: "100%",
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "1rem",
              fontSize: "0.75rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            50%
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <div
          style={{
            backgroundColor: "lightgray",
            position: "relative",
            height: "1rem",
            borderRadius: "1rem",
          }}
        >
          <div
            style={{
              backgroundColor: "blue",
              position: "absolute",
              top: "0",
              left: "0",
              height: "100%",
              width: "75%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "1rem",
              fontSize: "0.75rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            75%
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "lightgray",
            position: "relative",
            height: "1rem",
            borderRadius: "1rem",
          }}
        >
          <div
            style={{
              backgroundColor: "blue",
              position: "absolute",
              top: "0",
              left: "0",
              height: "100%",
              width: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "1rem",
              fontSize: "0.75rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            90%
          </div>
        </div>
      </div>
    </div>
  );
};
