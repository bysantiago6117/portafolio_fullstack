
import React from 'react';
import { Box } from '@mui/material';
import Style from './Projects.module.scss';

export default function Projects({ innerRef }) {
  const mainprojects = [
    {
      id: 1,
      title: "Expediente Digital",
      description: "Aplicación web con el fin de gestionar expedientes digitales de forma centralizada, permitiendo el seguimiento y control de procesos legales en Colombia.",
      label: "Monolegal",
      type: "company", 
      responsibilities: [
        "Implementación del registro automático de procesos con comunicación en tiempo real (SignalR)",
        "Desarrollo del módulo de notificaciones orientado al usuario",
        "Refactorización y mejoras continuas de mantenibilidad del sistema"
        ],
      techStack: [".NET", "React", "MongoDb", "SignalR", "Chakra-UI"]
    },
   {
    id: 2,
    title: "Generación de informes en Excel",
    description: "Complemento de Excel para centralizar información de procesos legales y facilitar la generación y el intercambio de informes entre distintas bases de datos.",
    label: "Monolegal",
    type: "company",
    responsibilities: [
        "Implementación del informe consolidado de todos los procesos registrados",
        "Desarrollo de filtros por rango de fechas para generación de informes históricos",
        "Optimización del rendimiento en la generación de informes para reducir tiempos de procesamiento"
    ],
    techStack: [".NET", "Excel Add-in", "MongoDb", "Javascript"]
    }
  ];


   const otherProjects = [
   {
        id: 4,
        title: "Onboarding de usuarios",
        description: "Sistema de onboarding automatizado basado en acciones del usuario y ventanas de tiempo, con envío de correos personalizados durante el periodo de prueba.",
        label: "Monolegal",
        type: "company",
        techStack: [".NET", "MongoDB", "Email Services"]
    },
    {
    id: 5,
    title: "Aplicación móvil",
    description: "Implementación de dos pestañas funcionales en aplicación móvil, utilizadas por usuarios reales para la gestión básica de información.",
    label: "Monolegal",
    type: "company",
    techStack: ["Flutter", "Dart", "REST API"]
    },
    {
    id: 6,
    title: "API de gestión de planes de acción",
    description: "API REST para la gestión de planes de acción con autenticación JWT, control de roles y documentación para consumo de clientes internos.",
    label: "U. del Magdalena",
    type: "company",
    techStack: [".NET", "JWT", "MySQL", "Swagger"]
    }
  ];

  return (
       <Box
      ref={innerRef}
      id="projects"
      className={Style.projectsContainer}
    >
      {/* Proyectos Principales */}
      <div className={Style.projectsGrid}>
        {mainprojects.map((project) => (
          <div key={project.id} className={Style.projectCard}>
            {/* Header with title and label */}
            <div className={Style.cardHeader}>
              <h3 className={Style.title}>{project.title}</h3>
              <span className={`${Style.label} ${Style[project.type]}`}>
                {project.label}
              </span>
            </div>

            {/* Content */}
            <div className={Style.cardContent}>
              <p className={Style.description}>{project.description}</p>

              {/* Responsibilities */}
              {project.responsibilities && (
                <div className={Style.responsibilitiesSection}>
                  <h4 className={Style.sectionTitle}>Responsabilidades:</h4>
                  <ul className={Style.responsibilitiesList}>
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className={Style.techStack}>
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className={Style.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Otros Proyectos */}
      <div className={Style.otherProjectsSection}>
        <h2 className={Style.sectionHeading}>Otros Proyectos</h2>
        <div className={Style.otherProjectsGrid}>
          {otherProjects.map((project) => (
            <div key={project.id} className={Style.smallCard}>
              {/* Header */}
              <div className={Style.smallCardHeader}>
                <h3 className={Style.smallTitle}>{project.title}</h3>
                <span className={`${Style.smallLabel} ${Style[project.type]}`}>
                  {project.label}
                </span>
              </div>

              {/* Description */}
              <p className={Style.smallDescription}>{project.description}</p>

              {/* Tech Stack */}
              <div className={Style.smallTechStack}>
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className={Style.smallTechTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}