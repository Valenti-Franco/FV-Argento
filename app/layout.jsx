import "./style.css";
import { Lato } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: "FV Argento",
  description:
    "Bienvenido a FV Argento, la plataforma definitiva para los fanáticos del fútbol argentino. Con ocho equipos icónicos, incluyendo Newell's, Central, San Lorenzo, Boca, River, Racing, Independiente y Estudiantes, este proyecto está diseñado con React y Three.js para una experiencia visualmente impresionante.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        {/* <NextUIProvider>{children}</NextUIProvider> */}
      </body>
    </html>
  );
}
