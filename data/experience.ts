// Define the structure of a Job object for better coding safety
export interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export const jobs: Job[] = [
  {
    company: "Independiente",
    role: "Consultor externo",
    period: "2025 — Actualidad",
    description: "Experiencia en la identificación y priorización de carteras de proyectos estratégicos para organismos federales (SEDATU, SICT, BANOBRAS). Análisis de datos demográficos y socioeconómicos para la detección de zonas vulnerables. Experiencia en diseño y programación de herramientas mediante IA Generativa para la toma de decisiones en desarollo urbano, mitigación de islas de calor urbanas y gestión de residuos sólidos.",
    tech: ["Liderazgo y persuasión", "Pensamiento Estratégico", "Adaptabilidad e Innovación","QGIS", "Python"]
  },
  {
    company: "CAPSUS",
    role: "Especialista en Planificación Urbana",
    period: "2023 — 2025",
    description: "Análisis geoespacial avanzado y elaboración de modelos para orientar proyectos y políticas públicas de crecimiento urbano y adaptación climática. Sólida capacidad en el desarrollo de escenarios de crecimiento urbano para orientar inversiones de alto impacto y climáticamente inteligentes. Análisis de brechas y alineación estratégica entre stakeholders mediante talleres y mesas de trabajo.",
    tech: ["Liderazgo y persuasión", "QGIS", "RStudio","Pensamiento Estratégico"]
  },
  {
    company: "Local y Global Ideas",
    role: "Consultor Jr. en Movilidad Urbana",
    period: "2022",
    description: "Fortalecimiento de capacidades a nivel municipal para la actualización de planes de desarrollo urbano. Experiencia en la estructuración de metodologías de análisis urbano (barrio, personas y continuo municipal) a nivel local",
    tech: ["Liderazgo y persuasión", "QGIS", "RStudio","Pensamiento Estratégico"]
  },
   {
    company: "Coord. de Desarrollo Urbano Alc. Álvaro Obregón",
    role: "Asistente Técnico",
    period: "2021 - 2022",
    description: "Análisis técnico normativo de expedientes y trabajos de obra menor. Experiencia en la optimización de sistemas de gestión de información. Capacidad de vinculación institucional, con distintos departamentos de la alcaldía.",
    tech: ["Organización y gestión de proyectos", "Google Workspace", "Adaptabilidad e Innovación"]
  }, 
  {
    company: "Departamento de Planeación Urbana Fellbach",
    role: "Practicante",
    period: "2021",
    description: "Análisis espacial en temas de movilidad, vivienda y diseño urbano. Sólida capacidad de gestión de logística y contenido del proyecto internacional IBA27 («Agriculture meets Manufacturing»). Comunicación efectiva con diversas partes interesadas de la comunidad y el sector industrial.",
    tech: ["Fortalecimiento de capacidades", "QGIS", "Gestión con Stakeholders", "Adaptabilidad e Innovación"]
  },
  {
    company: "Universidad Bauhaus Weimar, Weimar",
    role: "Asistente de Investigación",
    period: "2020",
    description: "Experiencia en el entorno de investigación europeo dentro del Bauhaus.Mobility Lab. Modelación de la infraestructura de movilidad urbana para el proyecto 'FraMo: Mobility as a Service' (MaaS). Facilitación de sesiones de capacitación especializada en QGIS y análisis de redes para estandarizar el uso de herramientas geoespaciales en proyectos de movilidad urbana.",
    tech: ["Fortalecimiento de capacidades", "QGIS","Adaptabilidad e Innovación","Investigación aplicada"]
  },
  {
    company: "Cal y Mayor y Asociados",
    role: "Consultor Jr. en Movilidad Urbana",
    period: "2018 - 2019",
    description: "Análisis de datos para la estructuración de sistemas de transporte público. Evaluacion de indicadores clave de rendimiento (KPIs) y patrones de movilidad mediante el uso avanzado de QGIS y Excel. Generación de inputs para modelos de transporte público.",
    tech: [ "QGIS","Pensamiento Estratégico","Adaptabilidad e Innovación","Excel"]
  },
  {
    company: "Laboratorio de Movilidad Urbana e Infraestructura Verde",
    role: "Consultor Jr. en Movilidad Urbana",
    period: "2018",
    description: "Liderazgo operativo para la recolección de datos de microsimulación y auditorías de espacio público.",
    tech: ["QGIS","Excel","Adaptabilidad e Innovación","Investigación aplicada"]
  },
    {
    company: "Transconsult México",
    role: "Consultor Jr. en Desarrollo Urbano",
    period: "2017 - 2017",
    description: "Experiencia en la formulación de Planes Integrales de Movilidad Urbana Sostenible (PIMUS) en Latinoamérica (México y Bolivia). Especialista en definir estrategias de movilidad no motorizada y diseño vial de alto impacto. Elaboración de estándares de diseño urbano para mejorar la accesibilidad peatonal y ciclista en corredores de alto flujo.",
    tech: ["QGIS", "RStudio","Pensamiento Estratégico","Adaptabilidad e Innovación","Excel","Autocad"]
  }
  
];