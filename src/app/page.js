"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from "framer-motion"

// Icons
import about from '../assets/about-icon.svg'
import project from '../assets/project-icon.svg'
import github from '../assets/github-icon.svg'
import linkedin from '../assets/linkedin-icon.svg'
import contact from '../assets/email-icon.svg'

// Components
import Main from '@/components/structure/Main'





// Framer Motion Stuff

export default function Home() {
  return (
    <Main>
      <div className="flex flex-col text-center sm:text-left">
        <motion.h3 initial={{opacity: 0}} animate={{ opacity: 1, scale: 1}} transition={{duration: 0.7}} className="text-[color:var(--secondary-color)] font-medium text-2xl sm:text-3xl ">
          Good Afternoon, I'm
        </motion.h3>
        <motion.h1 initial={{scale: 0.8, x: -300, opacity: 0}} animate={{scale: 1, x:0, opacity: 1}} transition={{opacity: {duration: 1, delay: 0.5}, x: {type: 'linear', duration: 0.4, delay: 0.5}, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}} className="text-[color:var(--primary-color)] font-bold text-5xl sm:text-7xl">
          Josh Pickard
        </motion.h1>
        <motion.h2 initial={{opacity: 0, y: -65}} animate={{opacity: 1, y:0}} transition={{ duration: 0.6, delay: 1}} className="text-[color:var(--secondary-color)] font-bold text-xl sm:text-4xl lg:text-6xl">
          Apprentice Software Engineer
        </motion.h2>
        <div className="flex items-center flex-col gap-4 mt-8 sm:flex-row sm:flex-wrap">
         <Link href='/about'><motion.button whileHover={{scale: 1.1, rotateZ: 3, transition: {ease: 'linear', duration: 0.1}}} initial={{y: 35, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{y: {duration: 0.7, delay: 1.4}, opacity:{duration: 0.7, delay: 1.4}}} className="flex flex-row gap-2 bg-[color:var(--secondary-color)] text-[color:var(--background-color)] p-3 rounded-md font-bold hover:cursor-pointer"> <Image src={about}></Image>About Me</motion.button></Link> 
         <Link href='/projects'><motion.button whileHover={{scale: 1.1, rotateZ: -3, transition: {ease: 'linear', duration: 0.1}}} initial={{y: 35, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{y: {duration: 0.7, delay: 1.6}, opacity:{duration: 0.7, delay: 1.6}}} className="flex flex-row gap-2 bg-[color:var(--secondary-color)] text-[color:var(--background-color)] p-3 rounded-md font-bold hover:cursor-pointer"> <Image src={project}></Image> Projects</motion.button></Link> 
          <a href="https://github.com/joshpickardme" target='_blank'><motion.button whileHover={{scale: 1.1, rotateZ: 3, transition: {ease: 'linear', duration: 0.1}}} initial={{y: 35, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{y: {duration: 0.7, delay: 1.8}, opacity:{duration: 0.7, delay: 1.8}}} className="flex flex-row gap-2 bg-[color:var(--secondary-color)] text-[color:var(--background-color)] p-3 rounded-md font-bold hover:cursor-pointer"> <Image src={github}></Image> GitHub</motion.button></a>
          <a href="https://www.linkedin.com/in/joshpickardme/" target='_blank'><motion.button whileHover={{scale: 1.1, rotateZ: -3, transition: {ease: 'linear', duration: 0.1}}} initial={{y: 35, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{y: {duration: 0.7, delay: 2}, opacity:{duration: 0.7, delay: 2}}} className="flex flex-row gap-2 bg-[color:var(--secondary-color)] text-[color:var(--background-color)] p-3 rounded-md font-bold hover:cursor-pointer"> <Image src={linkedin}></Image> LinkedIn</motion.button></a>
          <a href = "mailto: hello@joshpickard.me"><motion.button whileHover={{scale: 1.1, rotateZ: 3, transition: {ease: 'linear', duration: 0.1}}} initial={{y: 35, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{y: {duration: 0.7, delay: 2.2}, opacity:{duration: 0.7, delay: 2.2}}} className="flex flex-row gap-2 bg-[color:var(--secondary-color)] text-[color:var(--background-color)] p-3 rounded-md font-bold hover:cursor-pointer"> <Image src={contact}></Image> Contact</motion.button></a>
        </div>
      </div>
    </Main>
  )
}
