import self from "../img/self.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = true;



export const info = {
    firstName: "Santiago",
    lastName: "Manrique",
    initials: "Sm", 
    position: "Desarrollador FullStack",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
    {
        emoji: '☕',
        text: 'impulsado por café'
    },
    {
        emoji: '🌎',
        text: 'LATAM · abierto a trabajo remoto'
    },
    {
        emoji: '🧠',
        text: 'Ingeniero de Sistemas'
    },
    {
        emoji: '📧',
        text: 'santiagomanriq.lopez@gmail.com'
    }
    ],
    socials: [
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/bysantiago6117",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/santiago-andres-manrique-lopez-0b0817212/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

    ]
}