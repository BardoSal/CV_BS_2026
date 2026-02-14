import { StaticImageData } from "next/image";
import planMaestroNayarit from "../projects/planMaestroNayarit.png";
import carl from "../projects/CARL.png";
import tacubaya from "../projects/Tacubaya.jpg";
import icu from "../projects/icu.png";
import placemaking from "../projects/Placemaking.jpg";
import pimus from "../projects/PIMUS.png";
import AmF from "../projects/agricultureMeetsManufacturing.png";
import PdlE from "../projects/patiosDeLaEstacion.jpg";
import merketal from "../projects/Merketal.jpg";
import extLineaA from "../projects/extLineaA.png";


export interface Project {
  title: string;
  description: string;
  link: string;
  doc?: string;
  github?: string;
  images?: (string | StaticImageData)[];
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Plan Maestro Riviera Nayarita",
    description: "Estrategia integral de desarrollo regional para el componente turístico y logístico de Nayarit.",
    link: "/Plan Maestro Nayarit.pdf",
    images: [planMaestroNayarit],
    tags: ["Adaptabilidad e Innovación","Pensamiento Estratégico","RStudio", "Investigación aplicada", "Análisis de Datos","Google Earth Engine","QGIS"]
  },
  {
    title: "Ciudades resilientes y bajas en carbono de Asia Central",
    description: "Recomendaciones estratégicas para un desarrollo urbano resiliente y bajo en carbono en ciudades de Asia Central.",
    link: "/CARL.pdf",
    doc: "/Reimagining Central Asian Cities for a Resilient and Low-Carbon Future.pdf",
    images: [carl],
    tags: ["Pensamiento Estratégico","Investigación aplicada", "Análisis de Datos","Google Earth Engine","QGIS","Gestión con Stakeholders"]
  },
    {
    title: "Mitigación de Islas de Calor en la Megalópolis de México",
    description: "Prototipo de herramienta para modelar acciones de mitigación de Islas de Calor Urbanas en la Megalópolis de México.",
    link: "/Proyecto Piloto Islas de Calor Urbanas en la Megalópolis.pdf",
    images: [icu],
    tags: ["RStudio", "Python", "Investigación aplicada", "Análisis de Datos","Google Earth Engine","QGIS"]
  },
  {
    title: "Escenarios de desarrollo urbano Merketal II ",
    description: "Evaluación energética de escenarios de desarrollo urbano para la zona Merketal II.",
    link: "/Merketal II.pdf",
    doc: "/IUDD_21_22_Bardo Salgado.pdf",
    images: [merketal],
    tags: ["Pensamiento Estratégico","Investigación aplicada", "Análisis de Datos", "Rhino+Grasshopper", "QGIS"]
  },
    {
    title: "Estrategia de regeneración urbana en Tacubaya",
    description: "Estrategia de intervención y cartera de proyectos para la regeneración urbana en Tacubaya.",
    link: "/Tacubaya.pdf",
    doc: "/Seminario de Titulación_BardoSalgado.pdf",
    images: [tacubaya],
    tags: ["Gestión con Stakeholders", "Análisis de Datos","Autocad","QGIS", "Pensamiento Estratégico","Investigación aplicada"]
  },
    {
    title: "PIMUS Morelia",
    description: "Diagnóstico y estrategia de  movilidad urbana para la ciudad de Morelia.",
    link: "/PIMUS Morelia.pdf",
    images: [pimus],
    tags: ["Gestión con Stakeholders","QGIS","Autocad","Pensamiento Estratégico"]
  },
    {
    title: "Placemaking en Zschochernplatz",
    description: "Análisis y propuestas de revitalización del entorno urbano del centro de Gera.",
    link: "/Placemaking.pdf",
    doc: "/Placemaking Report 24.04.pdf",
    images: [placemaking],
    tags: ["Gestión con Stakeholders", "Análisis de Datos","QGIS","ArcGIS","Rhino+Grasshopper","Pensamiento Estratégico"]
  },
  {
    title: "Patios de la Estación",
    description: "Diagnóstico colaborativo para la rehabilitación del asentamiento informal de Patios de la Estación.",
    link: "/Patios de la Estación.pdf",
    images: [PdlE],
    tags: ["Gestión con Stakeholders", "Análisis de Datos","QGIS", "Pensamiento Estratégico"]
  }
];