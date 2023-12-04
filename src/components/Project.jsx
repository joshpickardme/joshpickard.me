import { motion } from "framer-motion"


export default function Project({title, description, languages, link}) {
    return(
    <motion.a className="outline outline-3 rounded-sm outline-slate-500" whileHover={{ scale: 1.02}} href={link} target="_blank">
        <div className="flex flex-col gap-3 max-w-lg p-3">
            <h3 className="text-white font-bold">{title}</h3>
            <p className="text-slate-300">{description}</p>
            <div className="flex gap-2">{languages.map(language => <p className="text-white font-semibold">{language}</p>)}</div>
        </div>
    </motion.a>

    )

}