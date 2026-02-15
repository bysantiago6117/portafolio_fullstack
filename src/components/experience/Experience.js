import React from 'react';
import { Box } from '@mui/material';
import Style from './Experience.module.scss';

export default function Experience({ innerRef }) {
  const experiences = [
    {
      id: 1,
      position: "Desarrollador Senior",
      company: "Monolegal",
      period: "Nov 2025 - Actualidad"
    },
    {
      id: 2,
      position: "Desarrollador Especialista",
      company: "Monolegal",
      period: "Oct 2024 - Oct 2025"
    },
    {
      id: 3,
      position: "Desarrollador Full Stack",
      company: "Monolegal",
      period: "Ene 2024 - Oct 2024"
    },
    {
      id: 4,
      position: "Desarrollador Backend",
      company: "Universidad de Magdalena",
      period: "Ene 2023 - Dic 2023"
    }
  ];

  return (
    <Box
      ref={innerRef}
      id="experience"
      className={Style.experienceContainer}
    >
       <div className={Style.titleContainer}>
        <h1 className={Style.title}>
          Experiencia y Proyectos
        </h1>

        <div className={Style.titleUnderline}></div>
      </div>
      {/* Timeline horizontal */}
      <div className={Style.timeline}>
        {/* Línea horizontal */}
        <div className={Style.timelineLine}></div>

        {/* Items */}
        <div className={Style.timelineItems}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={Style.timelineItem}>
              {/* Dot */}
              <div className={Style.dot}></div>

              {/* Card */}
              <div className={Style.card}>
                <h3 className={Style.position}>{exp.position}</h3>
                <p className={Style.company}>{exp.company}</p>
                <p className={Style.period}>{exp.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}