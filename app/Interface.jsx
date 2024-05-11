"use client";

import React, { useEffect, useRef, useState } from "react";
import ImagenConMousemove from "./components/escudos/ImagenConMousemove";
import { AnimatePresence, color, motion, useInView } from "framer-motion";
import style from "./interface.module.css";
import json from "../public/info.json";
import liga from "../public/liga.png";
import campo from "../public/campo.webp";
import logo from "../public/logo.webp";

// import { GoogleMap } from "react-google-maps";
import dynamic from "next/dynamic";
import { Lato } from "next/font/google";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
  Tooltip,
  User,
  useDisclosure,
} from "@nextui-org/react";
import Shirts from "./Shirts";
import Image from "next/image";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const Section = (props) => {
  const { children } = props;
  const ref = useRef(null);
  return (
    <section ref={ref} className={lato.className}>
      {children}
    </section>
  );
};
const containerStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
};

const Interface = ({ section, Escudo, setSection, noText, setNoText }) => {
  Escudo = Escudo.id;

  const equipoInfo = json.equipos.find((equipo) => equipo.nombre === Escudo);

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  const [selected, setSelected] = React.useState("photos");
  const ruta = `../assets/img/escudos/${Escudo}.png`;
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onOpenChange: onOpenChange1,
  } = useDisclosure();

  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onOpenChange: onOpenChange2,
  } = useDisclosure();
  return (
    <div className="dark" style={containerStyle}>
      <AnimatePresence>
        <Section>
          <Section>
            <AnimatePresence>
              {!noText ? (
                <motion.div
                  animate={{ x: 0 }}
                  exit={{ x: "-200%" }}
                  initial={{ x: "-100%" }}
                  // transition={spring}
                  className={style.contCancha}
                >
                  <button
                    className=" absolute right-0"
                    onClick={() => setNoText(!noText)}
                  >
                    <Tooltip showArrow={true} content="Cerrar">
                      <svg
                        width="34px"
                        height="34px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
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
                            d="M5 12H19M5 12L11 6M5 12L11 18"
                            stroke="#fff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </Tooltip>
                  </button>
                  <Tabs
                    className="  w-max self-center  "
                    aria-label="Options"
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                    variant="bordered"
                    color="primary"
                  >
                    <Tab
                      className=" w-full h-full z-10  "
                      key="photos"
                      title="Club"
                    >
                      <Card className="bg-transparent  h-full ">
                        <CardBody className=" overflow-hidden h-full flex items-center   text-white">
                          <div
                            className={
                              style.club +
                              " flex justify-around h-full w-full flex-col "
                            }
                          >
                            <div className="flex flex-col gap-2 ">
                              <ImagenConMousemove
                                key={Escudo}
                                Escudo={Escudo}
                                id={Escudo}
                                src={ruta}
                              />

                              <div className={style.nameCancha}>
                                <motion.h1
                                  animate={{ x: 0 }}
                                  exit={{ x: "-200%" }}
                                  initial={{ x: "-100%" }}
                                  transition={spring}
                                  // style={Estilo}
                                  className=" text-xl md:text-2xl text-center  font-extrabold m-2 p-2 "
                                >
                                  {equipoInfo.nombreCompleto}{" "}
                                </motion.h1>
                              </div>
                            </div>
                            <CardBody className="flex justify-center">
                              <Table
                                color={"primary"}
                                selectionMode="single"
                                defaultSelectedKeys={["2"]}
                                aria-label="Example static collection table"
                              >
                                <TableHeader>
                                  <TableColumn>Club</TableColumn>
                                  <TableColumn>Descripción</TableColumn>
                                </TableHeader>
                                <TableBody>
                                  <TableRow key="1">
                                    <TableCell>Apodo</TableCell>
                                    <TableCell>{equipoInfo.Apodo}</TableCell>
                                  </TableRow>
                                  <TableRow key="2">
                                    <TableCell>Hinchada</TableCell>
                                    <TableCell>{equipoInfo.Hinchada}</TableCell>
                                  </TableRow>
                                  <TableRow key="3">
                                    <TableCell>Rivalidad</TableCell>
                                    <TableCell>
                                      {equipoInfo.Rivalidades}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow key="4">
                                    <TableCell>
                                      <Divider className="my-0" />
                                    </TableCell>
                                    <TableCell>
                                      <Divider className="my-0" />{" "}
                                    </TableCell>
                                  </TableRow>
                                  <TableRow key="6">
                                    <TableCell>Estadio</TableCell>
                                    <TableCell> {equipoInfo.cancha}</TableCell>
                                  </TableRow>
                                  <TableRow key="5">
                                    <TableCell>Ubicación</TableCell>
                                    <TableCell> {equipoInfo.Lugar}</TableCell>
                                  </TableRow>
                                  <TableRow key="7">
                                    <TableCell>Capacidad</TableCell>
                                    <TableCell>
                                      {" "}
                                      {equipoInfo.capacidad} Personas
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </CardBody>
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab
                      className={
                        style.club +
                        " w-full h-full z-10    justify-around flex flex-col   "
                      }
                      key="titulos"
                      title="Titulos"
                    >
                      <div className="flex w-full flex-col">
                        <div className="flex w-full  justify-center">
                          <div className="flex justify-center items-center flex-col">
                            <svg
                              className="w-12"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              viewBox="0 0 455 455"
                              xmlSpace="preserve"
                              fill="#000000"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g>
                                  <polygon
                                    style={{ fill: "#F2EBD9" }}
                                    points="246.832,205.02 208.172,205.02 208.152,277.41 246.852,277.41 "
                                  ></polygon>
                                  <path
                                    style={{ fill: "#FFCC75" }}
                                    d="M246.852,267.41c26.72,8.27,46.15,33.16,46.15,62.59L227.5,350l-65.498-20 c0-29.43,19.43-54.32,46.15-62.59H246.852z"
                                  ></path>
                                  <path
                                    style={{ fill: "#FFCC75" }}
                                    d="M305.173,159.159H149.827c-26.671,0-51.535-14.829-70.011-41.756 C61.933,91.34,52.084,56.798,52.084,20.14v-7.5h49.223l1.795,10.809c2.33,14.025,16.309,25.875,30.527,25.875h187.743 c14.218,0,28.197-11.849,30.527-25.875l1.794-10.808h49.223v7.5c0,36.658-9.849,71.201-27.732,97.264 C356.708,144.33,331.844,159.159,305.173,159.159z M67.233,27.64c2.595,64.908,38.648,116.52,82.594,116.52h155.346 c43.945,0,79.999-51.612,82.594-116.52h-21.398c-4.307,20.383-24.112,36.683-44.997,36.683H133.628 c-20.885,0-40.69-16.301-44.997-36.683H67.233z M149.822,151.66l-15.76-94.91L124.642,0h205.72l-9.43,56.75l-15.76,94.91 c-5.14,30.94-28.3,55.78-58.34,63.36c-6.18,1.56-12.66,2.39-19.33,2.39s-13.15-0.83-19.33-2.39 C178.132,207.44,154.962,182.6,149.822,151.66z"
                                  ></path>
                                  <rect
                                    x="129.072"
                                    y="330"
                                    style={{ fill: "#FF6E1D" }}
                                    width="196.86"
                                    height="125"
                                  ></rect>
                                  <rect
                                    x="159.072"
                                    y="360"
                                    style={{ fill: "#F2EBD9" }}
                                    width="136.86"
                                    height="65"
                                  ></rect>
                                </g>
                              </g>
                            </svg>
                            <b>{equipoInfo.Internacionales.length} </b>
                            <p>Internacionales</p>
                          </div>
                        </div>
                        <div className="flex w-full  justify-around">
                          <div className="flex justify-center items-center flex-col">
                            <svg
                              className="w-12"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              viewBox="0 0 455 455"
                              xmlSpace="preserve"
                              fill="#000000"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g>
                                  <polygon
                                    style={{ fill: "#bfbfbf" }}
                                    points="246.832,205.02 208.172,205.02 208.152,277.41 246.852,277.41 "
                                  ></polygon>
                                  <path
                                    style={{ fill: "#bfbfbf" }}
                                    d="M246.852,267.41c26.72,8.27,46.15,33.16,46.15,62.59L227.5,350l-65.498-20 c0-29.43,19.43-54.32,46.15-62.59H246.852z"
                                  ></path>
                                  <path
                                    style={{ fill: "#bfbfbf" }}
                                    d="M305.173,159.159H149.827c-26.671,0-51.535-14.829-70.011-41.756 C61.933,91.34,52.084,56.798,52.084,20.14v-7.5h49.223l1.795,10.809c2.33,14.025,16.309,25.875,30.527,25.875h187.743 c14.218,0,28.197-11.849,30.527-25.875l1.794-10.808h49.223v7.5c0,36.658-9.849,71.201-27.732,97.264 C356.708,144.33,331.844,159.159,305.173,159.159z M67.233,27.64c2.595,64.908,38.648,116.52,82.594,116.52h155.346 c43.945,0,79.999-51.612,82.594-116.52h-21.398c-4.307,20.383-24.112,36.683-44.997,36.683H133.628 c-20.885,0-40.69-16.301-44.997-36.683H67.233z M149.822,151.66l-15.76-94.91L124.642,0h205.72l-9.43,56.75l-15.76,94.91 c-5.14,30.94-28.3,55.78-58.34,63.36c-6.18,1.56-12.66,2.39-19.33,2.39s-13.15-0.83-19.33-2.39 C178.132,207.44,154.962,182.6,149.822,151.66z"
                                  ></path>
                                  <rect
                                    x="129.072"
                                    y="330"
                                    style={{ fill: "#aaf" }}
                                    width="196.86"
                                    height="125"
                                  ></rect>
                                  <rect
                                    x="159.072"
                                    y="360"
                                    style={{ fill: "#ccc" }}
                                    width="136.86"
                                    height="65"
                                  ></rect>
                                </g>
                              </g>
                            </svg>
                            <b>{equipoInfo.titulosNacionales.length} </b>
                            <p>Nacionales</p>
                          </div>
                          <div className="flex justify-center items-center flex-col">
                            <img src={liga.src} className="w-8" alt="" />
                            <b>{equipoInfo.PrimeraDivision.length} </b>
                            <p>Primera División</p>
                          </div>
                        </div>
                      </div>

                      <Accordion>
                        <AccordionItem
                          key="1"
                          aria-label="Titulos Internacionales"
                          title="Titulos Internacionales"
                        >
                          <div className="flex gap-2 flex-col">
                            <span></span>
                            <b className="text-2xl text-center border-b-1">
                              {equipoInfo.Internacionales.length}{" "}
                            </b>
                            <ol className=" max-h-[55vh] overflow-auto">
                              {equipoInfo.Internacionales.map((copa, index) => (
                                <li key={index}>
                                  <p>
                                    {index + 1}. {copa}
                                  </p>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </AccordionItem>
                        <AccordionItem
                          key="2"
                          aria-label="Titulos Nacionales"
                          title="Titulos Nacionales"
                        >
                          <div className="flex gap-2 flex-col">
                            <span></span>
                            <b className="text-2xl text-center border-b-1">
                              {equipoInfo.titulosNacionales.length}{" "}
                            </b>
                            <ol className=" max-h-[55vh] overflow-auto">
                              {equipoInfo.titulosNacionales.map(
                                (copa, index) => (
                                  <li key={index}>
                                    <p>
                                      {index + 1}. {copa}
                                    </p>
                                  </li>
                                )
                              )}
                            </ol>
                          </div>
                        </AccordionItem>
                        <AccordionItem
                          key="3"
                          aria-label="Primera División"
                          title="Primera División"
                        >
                          <div className="flex  gap-2 flex-col">
                            <span></span>
                            <b className="text-2xl text-center border-b-1">
                              {equipoInfo.PrimeraDivision.length}{" "}
                            </b>
                            <ol className=" h-24 md:h-auto mb-4 max-h-[45vh] overflow-auto">
                              {equipoInfo.PrimeraDivision.map((copa, index) => (
                                <li key={index}>
                                  <p>
                                    {index + 1}. {copa}
                                  </p>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </AccordionItem>
                      </Accordion>
                    </Tab>
                    <Tab
                      className="w-full h-full flex  flex-col  "
                      key="plantel"
                      title="Plantel"
                    >
                      <div
                        className={
                          style.club +
                          " " +
                          " w-full h-[85vh] flex  justify-around flex-col items-center"
                        }
                      >
                        <div
                          className={
                            style.plantel +
                            " h-full w-full max-w-[400px] max-h-[500px]  rounded-xl flex items-end bg-center  bg-contain bg-no-repeat"
                          }
                          style={{ backgroundImage: `url(${campo.src})` }}
                        >
                          <div className=" h-5/6 w-full flex  roun  justify-around flex-col items-stretch">
                            <div className="w-full  h-12 flex justify-evenly">
                              {equipoInfo.playersTitular?.delantero?.map(
                                (player, index) => (
                                  <>
                                    <div
                                      key={index}
                                      className={
                                        style.player +
                                        " w-12  relative h-12 flex justify-center items-center"
                                      }
                                    >
                                      <Popover
                                        className=" bg-transparent"
                                        placement="bottom"
                                        offset={20}
                                        showArrow
                                      >
                                        <PopoverTrigger>
                                          <Button className="bg-transparent">
                                            <Shirts name={equipoInfo.nombre} />
                                            <p className="text-white drop-shadow-2xl font-extrabold bg-black  bg-opacity-30  rounded-full absolute">
                                              {player.number}
                                            </p>
                                          </Button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                          <User
                                            name={player.name}
                                            description={player.number}
                                            avatarProps={{
                                              src: player.img,
                                            }}
                                          />
                                        </PopoverContent>
                                      </Popover>
                                      <p className="text-white m-2   drop-shadow-2xl  top-8 font-extrabold bg-black  bg-opacity-30  rounded-full absolute">
                                        {player.name}
                                      </p>
                                    </div>
                                  </>
                                )
                              )}
                            </div>
                            <div className="w-full  h-12 flex justify-evenly">
                              {equipoInfo.playersTitular?.mediocampo?.map(
                                (player, index) => (
                                  <>
                                    <div
                                      key={index}
                                      className={
                                        style.player +
                                        " w-12  relative h-12 flex justify-center items-center"
                                      }
                                    >
                                      <Popover
                                        className=" bg-transparent"
                                        placement="bottom"
                                        offset={20}
                                        showArrow
                                      >
                                        <PopoverTrigger>
                                          <Button
                                            unselectable="true"
                                            className="bg-transparent"
                                          >
                                            <Shirts name={equipoInfo.nombre} />
                                            <p className="text-white drop-shadow-2xl font-extrabold bg-black  bg-opacity-30  rounded-full absolute">
                                              {player.number}
                                            </p>
                                          </Button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                          <User
                                            name={player.name}
                                            description={player.number}
                                            avatarProps={{
                                              src: player.img,
                                            }}
                                          />
                                        </PopoverContent>
                                      </Popover>
                                      <p className="text-white m-2  drop-shadow-2xl  top-8 font-extrabold bg-black  bg-opacity-30  rounded-full absolute">
                                        {player.name}
                                      </p>
                                    </div>
                                  </>
                                )
                              )}
                            </div>

                            <div className="w-full  h-12 flex justify-evenly">
                              {equipoInfo.playersTitular?.defensores?.map(
                                (player, index) => (
                                  <>
                                    <div
                                      key={index}
                                      className={
                                        style.player +
                                        " w-12  relative h-12 flex justify-center items-center"
                                      }
                                    >
                                      <Popover
                                        className=" bg-transparent"
                                        placement="bottom"
                                        offset={20}
                                        showArrow
                                      >
                                        <PopoverTrigger>
                                          <Button className="bg-transparent">
                                            <Shirts name={equipoInfo.nombre} />
                                            <p className="text-white drop-shadow-2xl font-extrabold bg-black  bg-opacity-30  rounded-full absolute">
                                              {player.number}
                                            </p>
                                          </Button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                          <User
                                            name={player.name}
                                            description={player.number}
                                            avatarProps={{
                                              src: player.img,
                                            }}
                                          />
                                        </PopoverContent>
                                      </Popover>
                                      <p className="text-white m-2   drop-shadow-2xl  top-8 font-extrabold bg-black  bg-opacity-30  rounded-full absolute">
                                        {player.name}
                                      </p>
                                    </div>
                                  </>
                                )
                              )}
                            </div>
                            <div className="w-full  h-12 flex justify-evenly">
                              <div
                                className={
                                  style.player +
                                  " w-12  relative h-12 flex justify-center items-center"
                                }
                              >
                                <Popover
                                  className=" bg-transparent"
                                  placement="bottom"
                                  offset={20}
                                  showArrow
                                >
                                  <PopoverTrigger>
                                    <Button className="bg-transparent">
                                      <Shirts name={equipoInfo.nombre} />
                                      <p className="text-white drop-shadow-2xl font-extrabold bg-black  bg-opacity-30  rounded-full absolute">
                                        {
                                          equipoInfo.playersTitular?.arquero
                                            .number
                                        }
                                      </p>
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent>
                                    <User
                                      name={
                                        equipoInfo.playersTitular?.arquero.name
                                      }
                                      description={
                                        equipoInfo.playersTitular?.arquero
                                          .number
                                      }
                                      avatarProps={{
                                        src: equipoInfo.playersTitular?.arquero
                                          .img,
                                      }}
                                    />
                                  </PopoverContent>
                                </Popover>
                                <p className="text-white m-2   drop-shadow-2xl  top-8 font-extrabold bg-black  bg-opacity-30  rounded-full absolute">
                                  {equipoInfo.playersTitular?.arquero.name}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button color="primary" onPress={onOpen2}>
                          Ver Todo el Plantel
                        </Button>
                      </div>

                      <Modal
                        className="dark text-white"
                        scrollBehavior={"inside"}
                        isOpen={isOpen2}
                        onOpenChange={onOpenChange2}
                      >
                        <ModalContent>
                          {(onClose2) => (
                            <>
                              <ModalHeader className="flex flex-col gap-1">
                                Plantel de {equipoInfo.nombreCompleto}
                              </ModalHeader>
                              <ModalBody>
                                <Table
                                  classNames={{
                                    base: "max-h-[520px]  ",
                                    table: "min-h-[420px]",
                                  }}
                                  isHeaderSticky
                                  aria-label="Example static collection table"
                                >
                                  <TableHeader>
                                    <TableColumn>Nombre</TableColumn>
                                    <TableColumn>Posición</TableColumn>
                                    <TableColumn>Edad</TableColumn>
                                  </TableHeader>
                                  <TableBody>
                                    {equipoInfo.plantel.map(
                                      (jugador, index) => (
                                        <TableRow key="index">
                                          <TableCell>
                                            {jugador.nombre}
                                          </TableCell>
                                          <TableCell>
                                            {jugador.numero}
                                          </TableCell>
                                          <TableCell>{jugador.edad}</TableCell>
                                        </TableRow>
                                      )
                                    )}
                                  </TableBody>
                                </Table>
                              </ModalBody>
                              <ModalFooter>
                                <Button
                                  color="danger"
                                  variant="light"
                                  onPress={onClose2}
                                >
                                  Close
                                </Button>
                              </ModalFooter>
                            </>
                          )}
                        </ModalContent>
                      </Modal>
                    </Tab>
                    <Tab
                      className=" w-full h-full z-10  "
                      key="info"
                      title="Info"
                    >
                      <Card className=" bg-transparent">
                        <CardHeader className=" bg-transparent text-2xl text-white flex flex-col gap-1">
                          FV Argento
                        </CardHeader>
                        <CardBody className=" h-dvh   pb-40 md:pb-0  overflow-y-auto">
                          <Image
                            width={400}
                            height={400}
                            src={logo.src}
                            alt=""
                          />
                          <div className="text-white text-lg">
                            <p>
                              {" "}
                              <b>Bienvenidos a FV Argento </b>
                            </p>
                            La plataforma definitiva para los fanáticos del
                            fútbol argentino.
                            <p>
                              Con ocho equipos icónicos:
                              <b> Newells old Boys, </b>
                              <b>Central, </b>
                              <b>San Lorenzo, </b>
                              <b>Boca, </b>
                              <b>River, </b>
                              <b>Racing, </b>
                              <b>Independiente, </b>
                              <b>Estudiantes. </b>
                            </p>
                            Este proyecto está diseñado con NextJS y Three.js
                            para una experiencia visualmente impresionante.
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </Section>
        </Section>
      </AnimatePresence>
    </div>
  );
};

export default Interface;
