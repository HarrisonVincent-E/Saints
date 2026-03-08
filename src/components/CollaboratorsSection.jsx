import { motion } from "framer-motion"
import { ScrollVelocity } from "./ui/ScrollVelocity"

const logosRowOne = [
  "https://via.placeholder.com/220x80?text=FSU",
  "https://via.placeholder.com/220x80?text=St+Petersburg+University",
  "https://via.placeholder.com/220x80?text=Brown",
  "https://via.placeholder.com/220x80?text=Niccolo+Cusano",
  "https://via.placeholder.com/220x80?text=Jagiellonian+University",
  "https://via.placeholder.com/220x80?text=University+of+Silesia",
  "https://via.placeholder.com/220x80?text=UCAS",
  "https://via.placeholder.com/220x80?text=James+Cook+University",
]

const logosRowTwo = [
  "https://via.placeholder.com/220x80?text=Siberian+Federal+University",
  "https://via.placeholder.com/220x80?text=Universita+di+Torino",
  "https://via.placeholder.com/220x80?text=Aldo+Moro+University",
  "https://via.placeholder.com/220x80?text=High+Pressure+Physics+Institute",
  "https://via.placeholder.com/220x80?text=QUT",
  "https://via.placeholder.com/220x80?text=Macquarie+University",
  "https://via.placeholder.com/220x80?text=UNSW+Sydney",
  "https://via.placeholder.com/220x80?text=Universite+de+Lorraine",
  "https://via.placeholder.com/220x80?text=JKU+Linz",
]

export default function CollaboratorsSection() {
  return (
    <section className="relative w-full overflow-hidden border-t border-slate-800 bg-slate-950">
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-[size:38px_38px]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-18%] top-[-16%] h-[26rem] w-[26rem] rounded-full bg-blue-500/25 blur-[130px]" />
        <div className="absolute left-[-14%] bottom-[-20%] h-[28rem] w-[28rem] rounded-full bg-purple-500/30 blur-[140px]" />
        <div className="absolute left-[20%] top-[40%] h-[20rem] w-[20rem] rounded-full bg-emerald-500/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20 space-y-10">
        <div className="space-y-3 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-semibold tracking-[0.25em] text-slate-100 uppercase"
          >
            Collaborators
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
            className="text-sm md:text-base tracking-[0.2em] text-slate-300 uppercase"
          >
            Global Universities &amp; Research Institutions
          </motion.p>
        </div>

        <div className="relative space-y-8 pb-6">
          <ScrollVelocity velocity={8} movable className="py-4">
            {logosRowOne.map((src, idx) => (
              <img
                key={src + idx}
                src={src}
                alt="Collaborating university placeholder"
                className="h-16 w-auto shrink-0 rounded-md bg-slate-900/40 object-contain px-4 py-2 shadow-[0_18px_45px_rgba(15,23,42,0.9)]"
              />
            ))}
          </ScrollVelocity>

          <ScrollVelocity velocity={-6} movable className="py-4">
            {logosRowTwo.map((src, idx) => (
              <img
                key={src + idx}
                src={src}
                alt="Collaborating university placeholder"
                className="h-16 w-auto shrink-0 rounded-md bg-slate-900/40 object-contain px-4 py-2 shadow-[0_18px_45px_rgba(15,23,42,0.9)]"
              />
            ))}
          </ScrollVelocity>
        </div>
      </div>
    </section>
  )
}

