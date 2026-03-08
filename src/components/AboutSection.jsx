import { motion } from "framer-motion"
import { ShimmerButton } from "./ui/ShimmerButton"

export default function AboutSection() {
  return (
    <section className="relative w-full bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-15%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute left-[-12%] bottom-[-18%] h-[30rem] w-[30rem] rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute right-[28%] bottom-[-16%] h-[24rem] w-[24rem] rounded-full bg-orange-500/15 blur-[110px]" />
      </div>

      <div className="border-y border-slate-700/60 bg-slate-900/70 py-14 md:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center text-5xl md:text-6xl font-light tracking-wide text-slate-100"
        >
          About
        </motion.h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/50 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -1.2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="border-[10px] border-blue-500/60 bg-slate-900/90 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.45)]"
            >
              <div className="border-2 border-slate-500/70 px-5 py-7 text-center text-slate-100">
                <p className="text-6xl md:text-7xl tracking-[0.14em] font-serif text-slate-100">SAiNTS</p>
                <p className="mt-2 inline-block bg-blue-600/80 px-5 py-1 text-sm md:text-base tracking-[0.35em] text-white">
                  2026
                </p>
                <div className="mt-6 bg-blue-600/75 py-2">
                  <p className="text-3xl md:text-5xl font-light tracking-[0.1em] text-slate-100">
                    IMPORTANT DATES
                  </p>
                </div>

                <div className="mt-7 space-y-5 text-slate-200">
                  <p>
                    <span className="block text-3xl md:text-4xl font-semibold">Abstract Submission</span>
                    <span className="block text-3xl md:text-4xl">18 December 2025</span>
                  </p>
                  <p>
                    <span className="block text-3xl md:text-4xl font-semibold">Final Acceptance Notification</span>
                    <span className="block text-3xl md:text-4xl">20 December 2025</span>
                  </p>
                  <p>
                    <span className="block text-3xl md:text-4xl font-semibold">Full Manuscript Submission</span>
                    <span className="block text-3xl md:text-4xl">30 December 2025</span>
                  </p>
                  <p className="pt-2 text-3xl md:text-4xl font-bold">
                    Conference Dates: 7 - 9 January 2026
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
              className="pt-2 md:pt-6 text-slate-200"
            >
              <h3 className="text-5xl md:text-7xl font-medium tracking-wide text-slate-100">SAiNTS - 2026</h3>
              <p className="mt-7 text-xl md:text-3xl leading-relaxed">
                Prioritizing sustainable research is essential to tackle global challenges like climate
                change and resource depletion. Fostering innovation that balances economic, social, and
                environmental needs is needed to bolster long-term well-being for all.
              </p>
              <p className="mt-6 text-xl md:text-3xl leading-relaxed">
                In this regard, CHRIST (Deemed to be University) is happy to welcome you to the international
                conference on Scientific Advances In Natural and Technological Sciences (SAiNTS - 2026),
                providing an excellent platform for experts and researchers to share knowledge and exchange ideas.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 max-w-xl"
          >
            <ShimmerButton
              shimmerColor="#bfdbfe"
              shimmerSize="0.05em"
              shimmerDuration="3s"
              borderRadius="100px"
              background="rgb(30 64 175)"
              className="w-full text-xl md:text-2xl font-medium py-4"
            >
              Registration Form
            </ShimmerButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
