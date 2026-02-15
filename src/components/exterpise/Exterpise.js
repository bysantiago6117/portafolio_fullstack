import React from 'react';
import { Box } from '@mui/material';
import Style from './Expertise.module.scss';
import { FaReact, FaServer } from 'react-icons/fa';

export default function Expertise({ innerRef }) {
  const expertiseData = [
    {
      icon: <FaReact size={60} />,
      title: "Desarrollo Frontend",
      description: "Desarrollo interfaces modernas y escalables con React, enfocadas en experiencia de usuario y rendimiento. He implementado funcionalidades en tiempo real, definido estándares técnicos y promovido buenas prácticas dentro del equipo frontend. Mi enfoque combina arquitectura limpia, mantenibilidad y alineación con objetivos de producto.",
    
      techStack: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Next.js",
        "Chakra-UI",
        "Flutter"
      ]
    },
    {
      icon: <FaServer size={60} />,
      title: "Desarrollo Backend",
      description: "Diseño y desarrollo soluciones backend robustas con .NET, enfocadas en arquitectura limpia, escalabilidad y alineación con producto. He construido proyectos desde cero, liderado decisiones técnicas, implementado sistemas de reportería y participado en cambios de infraestructura críticos para la organización.",
    
      techStack: [
        ".NET",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "SQL",
        "SOLID",
        "Docker",
        "REST APIs",
        "Microservicios"
      ]
    }
  ];

  return (
    <Box
      ref={innerRef}
      id="expertise"
      className={Style.expertise}
    >


      <div className={Style.expertiseGrid}>
        {expertiseData.map((area, index) => (
          <div key={index} className={Style.expertiseCard}>
            {/* Icon */}
            <div className={Style.iconContainer}>
              {area.icon}
            </div>

            {/* Title */}
            <h2 className={Style.cardTitle}>{area.title}</h2>

            {/* Description */}
            <p className={Style.description}>{area.description}</p>


            {/* Tech Stack */}
            <div className={Style.techSection}>
              <h3 className={Style.sectionTitle}>Tecnologias:</h3>
              <div className={Style.techTags}>
                {area.techStack.map((tech, idx) => (
                  <span key={idx} className={Style.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );

}