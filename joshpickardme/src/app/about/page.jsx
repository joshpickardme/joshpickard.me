"use client"

// Imports
import { motion, useAnimation } from "framer-motion"

import Image from "next/image"
import Link from "next/link"

// Components
import Main from "@/components/structure/Main"


// Icons
import Arrow from "../../assets/arrow.svg"



export default function about() {
    return (
        <Main>
            <div className="flex  flex-col text-left max-w-3xl gap-3">
                <motion.h1 initial={{opacity: 0, x: -60}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0}} className="text-[color:var(--secondary-color)] font-bold text-3xl max-w-fit">About Me.</motion.h1>
                <motion.p initial={{opacity: 0, x: -60}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.2}} className="font-medium text-lg text-slate-200">
                    I'm an Apprentice Software Engineer with the privilege of working at <motion.a whileHover={{color: "#0072c9", y: -30, transition: {duration: 0.2} }} className="font-bold underline underline-offset-4" href="https://www.sky.com/" target="_blank">Sky</motion.a>. I've long aspired to become a full stack web developer where I get to create awesome and innovative things on the internet using tech stacks like MERN and MEVN. I'm making great progress towards this goal and I couldn't be more excited!
                </motion.p>

                <motion.p initial={{opacity: 0, x: -60}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.4}} className="font-medium text-lg text-slate-200">
                I'm a believer in self-learning/development and I enjoy creating personal projects to challenge myself. This includes this very webpage (built with React, Next & Framer Motion). If you're bored, check out <motion.a whileHover={{color: "#0088FF", transition: {duration: 0.2} }} className="font-bold underline underline-offset-4" href="https://joshpickardme.github.io/10sums/" target="_blank">10Sums</motion.a> which was one of my earlier projects.
                </motion.p>

                <motion.p initial={{opacity: 0, x: -60}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.6}} className="font-medium text-lg text-slate-200">
                When I'm not staring at an IDE and/or Stack Overflow, you can find me reading or watching <motion.a whileHover={{color: "#CB2F3D", transition: {duration: 0.2} }} className="font-bold underline underline-offset-4" href="https://www.youtube.com/@TomScottGo" target="_blank">Tom Scott</motion.a>
                </motion.p>
                
                <motion.span initial={{opacity: 0, x: -60}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.8}}><Link className="max-w-fit m-0 pt-0" href="/"><motion.button initial={{borderRadius: '8px'}} whileHover={{borderRadius: "15px", transition: {duration: 0.2}}} className="mt-4 flex font-bold text-[color:var(--background-color)] gap-2 max-w-fit p-2 bg-[color:var(--secondary-color)]"><Image src={Arrow}/></motion.button></Link></motion.span>
                
            </div>
        </Main>
        
    )
}