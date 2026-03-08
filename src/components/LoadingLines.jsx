import { motion } from "framer-motion"

export default function LoadingLines() {
  const lines = [0, 1, 2, 3]

  return (
    <div className="fixed inset-0 z-[500] flex flex-col items-center justify-center gap-8 bg-slate-950">
      <motion.h1
        className="text-3xl md:text-5xl font-semibold tracking-[0.3em] text-slate-100"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        SAINTS
      </motion.h1>

      <div className="w-[280px] space-y-3">
        {lines.map((line) => (
          <motion.div
            key={line}
            className="h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-orange-400 via-blue-400 to-cyan-300"
            initial={{ scaleX: 0, opacity: 0.25 }}
            animate={{ scaleX: [0, 1, 0], opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
              repeat: Infinity,
              delay: line * 0.16,
            }}
          />
        ))}
      </div>
    </div>
  )
}
