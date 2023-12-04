"use client"

// Imports
import { motion, useAnimation } from "framer-motion"

import Image from "next/image"
import Link from "next/link"

// Components
import Main from "@/components/structure/Main"
import Project from "@/components/Project"


// Icons
import Arrow from "../../assets/arrow.svg"

// Data
const data = [
    {id: 1, title: '10Sums', description: 'A simple to play game where the player is tested against their ability to answer 10 quick random math questions.', languages: ['HTML', 'CSS', 'JavaScript', 'jQuery'], link: 'https://joshpickardme.github.io/10sums/'},
    {id: 2, title: 'Rock Paper Scissors', description: 'Another simple game where the title is quite self explanatory..', languages: ['HTML', 'CSS', 'JavaScript'], link: 'https://joshpickardme.github.io/Rock-Paper-Scissors-Project-Multiverse/'},
    {id: 3, title: 'Inventory App', description: 'A full stack inventory management system built for my Multiverse Level 4 Apprenticeship', languages: ['React', 'Sequelize', 'Express', 'Node'], link: 'https://github.com/zwhiteley-sky/inventory-app'}
]



export default function projects() {
    return (
        <Main>
            <div className="flex  flex-col text-left max-w-3xl gap-3">
                <h1 initial={{opacity: 0, x: -60}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0}} className="text-[color:var(--secondary-color)] font-bold text-3xl max-w-fit">Projects.</h1>
                {data.map(project => <Project key={project.id} title={project.title} description={project.description} languages={project.languages} link={project.link}></Project>)}
                <span><Link className="max-w-fit m-0 pt-0" href="/"><motion.button initial={{borderRadius: '8px'}} whileHover={{borderRadius: "15px", transition: {duration: 0.2}}} className="mt-4 flex font-bold text-[color:var(--background-color)] gap-2 max-w-fit p-2 bg-[color:var(--secondary-color)]"><Image src={Arrow}/></motion.button></Link></span>
                
            </div>
        </Main>
        
    )
}