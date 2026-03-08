import { motion, useSpring, useScroll } from "framer-motion"

export default function ScrollProgressBar({
  type = "bar",
  color = "#3b82f6",
  strokeSize = 4,
  className = "",
}) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  })

  if (type !== "bar") return null

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-[450] origin-left ${className}`}
      style={{
        scaleX,
        height: `${strokeSize}px`,
        backgroundColor: color,
      }}
      aria-hidden="true"
    />
  )
}
