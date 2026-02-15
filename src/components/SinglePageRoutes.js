import Home from "./home/Home";
import About from "./about/About";
import Expertise from "./exterpise/Exterpise";
import { Box } from "@mui/material";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";

export default function SinglePageRoutes({refs}) {
    return (<Box mt={'3rem'}>
        <Home innerRef={refs.refHome}/>
        <About innerRef={refs.refAbout}/>
        <Expertise innerRef={refs.refAbout}/> 
        <Experience innerRef={refs.refPortfolio} />
        <Projects innerRef={refs.refPortfolio}/>
    </Box>)
}