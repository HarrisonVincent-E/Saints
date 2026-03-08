import { motion } from "framer-motion"

export default function ConferenceThemes() {
  return (
    <section className="relative w-full bg-slate-950 border-t border-slate-800 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-18%] top-[-10%] h-[26rem] w-[26rem] rounded-full bg-blue-500/25 blur-[130px]" />
        <div className="absolute right-[-12%] bottom-[-18%] h-[28rem] w-[28rem] rounded-full bg-purple-500/25 blur-[140px]" />
        <div className="absolute left-[20%] bottom-[-14%] h-[22rem] w-[22rem] rounded-full bg-emerald-500/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20 space-y-12">
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-semibold tracking-[0.25em] text-slate-100 uppercase"
          >
            Conference Themes
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
            className="space-y-1"
          >
            <p className="text-sm md:text-base tracking-[0.35em] text-blue-300 uppercase">
              Science Without Borders
            </p>
            <p className="text-lg md:text-2xl text-slate-200">
              Bridging Disciplines for a Sustainable Future
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-slate-900/60 to-indigo-500/20 blur-xl opacity-80" />
            <div className="relative h-full rounded-3xl border border-slate-700/70 bg-slate-900/80 p-6 md:p-7 shadow-[0_22px_60px_rgba(15,23,42,0.7)] backdrop-blur-xl">
              <p className="text-xs font-semibold tracking-[0.35em] text-blue-300 uppercase">
                Track 1
              </p>
              <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-100">
                Emergent Materials for a Sustainable Future
              </h3>

              <ul className="mt-6 space-y-3 text-sm md:text-base text-slate-100">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                  <p>
                    <span className="font-semibold">Energy Materials:</span>{" "}
                    Batteries, Supercapacitors, Fuel cells, Hydrogen, Solar cells
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                  <p>
                    <span className="font-semibold">Biomaterials:</span>{" "}
                    Biopolymers, Biosensors, Environmental Remediation
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                  <p>
                    <span className="font-semibold">Polymer Nanocomposites:</span>{" "}
                    Health, Energy and Environment
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                  <p>
                    <span className="font-semibold">Low-Dimensional Materials:</span>{" "}
                    Nanomaterials, Thin Films
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                  <p>
                    Sensors and Actuators
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-slate-900/60 to-cyan-500/20 blur-xl opacity-80" />
            <div className="relative h-full rounded-3xl border border-slate-700/70 bg-slate-900/80 p-6 md:p-7 shadow-[0_22px_60px_rgba(15,23,42,0.7)] backdrop-blur-xl">
              <p className="text-xs font-semibold tracking-[0.35em] text-emerald-300 uppercase">
                Track 2
              </p>
              <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-100">
                Innovations for Tomorrow: Science Empowering a Smart and Sustainable World
              </h3>

              <ul className="mt-6 space-y-3 text-sm md:text-base text-slate-100">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                  <p>Innovation and Infrastructure for Sustainable Development</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                  <p>Integration of AI in IoT, Drones, and AR/VR for Smart Manufacturing</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                  <p>Digital Twin Technologies for Infrastructure Maintenance and Planning</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                  <p>Cybersecurity and Data Privacy in Emerging Tech Ecosystems</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                  <p>Mathematics and Data Science for Global Sustainability</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                  <p>Sustainable Futures through Computational Mathematics, Models, and Machines</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

