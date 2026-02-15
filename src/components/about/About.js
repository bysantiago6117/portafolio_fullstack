import React from 'react';
import Style from './About.module.scss';
import {Box} from "@mui/material";


export default function About({innerRef}) {

    return (
         <Box
      ref={innerRef}
      id="about"
      className={Style.about}
    >
  
      <div className={Style.titleContainer}>
        <h1 className={Style.title}>
          Acerca de mi
        </h1>

        <div className={Style.titleUnderline}></div>
      </div>

      <div className={Style.aboutText}>
        <p>
          Soy ingeniero de sistemas con experiencia en desarrollo de aplicaciones web.
          Trabajo principalmente con tecnologías modernas en frontend y backend.
          Me enfoco en construir soluciones claras, mantenibles y orientadas a negocio,
          buscando siempre que el impacto del producto sea tangible.
        </p>
      </div>
    </Box>
    )
}