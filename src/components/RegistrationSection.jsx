import { useState, useEffect } from "react"
import { X, Check, ArrowRight, BarChart3, Globe2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { GodRays, MeshGradient } from "@paper-design/shaders-react"

export default function RegistrationSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [formStep, setFormStep] = useState("idle")

  const handleExpand = () => setIsExpanded(true)

  const handleClose = () => {
    setIsExpanded(false)
    setTimeout(() => setFormStep("idle"), 500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStep("submitting")
    setTimeout(() => {
      setFormStep("success")
    }, 1500)
  }

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isExpanded])

  return (
    <>
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <GodRays
            colorBack="#00000000"
            colors={["#1d4ed840", "#3b82f640", "#22c55e40", "#6366f140"]}
            colorBloom="#60a5fa"
            offsetX={0.85}
            offsetY={-1}
            intensity={0.55}
            spotty={0.45}
            midSize={10}
            midIntensity={0}
            density={0.4}
            bloom={0.35}
            speed={0.5}
            scale={1.6}
            frame={3332042.82}
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 text-center sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-sm font-medium text-slate-200 backdrop-blur-sm"
          >
            <span className="mr-2 flex h-2 w-2 rounded-full bg-emerald-400" />
            Registration now open for SAiNTS 2026
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl md:text-6xl"
          >
            Secure your place at{" "}
            <span className="bg-gradient-to-br from-blue-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              SAiNTS&nbsp;2026
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl px-4 text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl"
          >
            Join global researchers and practitioners shaping sustainable futures across natural and technological sciences.
          </motion.p>

          <AnimatePresence initial={false}>
            {!isExpanded && (
              <motion.div className="relative mt-4 inline-block">
                <motion.div
                  style={{ borderRadius: "100px" }}
                  layout
                  layoutId="registration-cta-card"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600"
                />
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  layout={false}
                  onClick={handleExpand}
                  className="relative flex h-14 items-center gap-2 px-8 py-3 text-lg font-medium tracking-wide text-white transition-opacity hover:opacity-90"
                >
                  Open registration form
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4">
            <motion.div
              layoutId="registration-cta-card"
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              style={{ borderRadius: "24px" }}
              layout
              className="relative flex h-full w-full overflow-hidden bg-blue-700 shadow-2xl sm:rounded-[24px]"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-none absolute inset-0"
              >
                <MeshGradient
                  speed={0.6}
                  colors={["#1d4ed8", "#1e40af", "#172554", "#1e3a8a"]}
                  distortion={0.8}
                  swirl={0.1}
                  grainMixer={0.15}
                  grainOverlay={0}
                  style={{ height: "100%", width: "100%" }}
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleClose}
                className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
              >
                <X className="h-5 w-5" />
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col overflow-y-auto lg:flex-row lg:overflow-hidden"
              >
                <div className="flex flex-1 flex-col justify-center gap-8 p-8 text-white sm:p-12 lg:p-16">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                      Register for SAiNTS 2026
                    </h2>
                    <p className="max-w-md text-lg text-blue-100">
                      Share your details and we&apos;ll reach out with registration confirmation and next steps.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm">
                        <BarChart3 className="h-6 w-6 text-blue-200" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Keynotes &amp; Tracks</h3>
                        <p className="mt-1 text-sm leading-relaxed text-blue-100/80">
                          Explore emergent materials, sustainable technologies, and data-driven futures across curated tracks.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm">
                        <Globe2 className="h-6 w-6 text-blue-200" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Global Community</h3>
                        <p className="mt-1 text-sm leading-relaxed text-blue-100/80">
                          Connect with collaborators from leading universities and institutes around the world.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-center bg-black/10 p-4 backdrop-blur-sm sm:p-12 lg:bg-transparent lg:p-16 lg:backdrop-blur-none">
                  <div className="w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                    {formStep === "success" ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex h-[360px] flex-col items-center justify-center space-y-6 text-center"
                      >
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30">
                          <Check className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <h3 className="mb-2 text-2xl font-bold text-white">Registration request received!</h3>
                          <p className="text-blue-100">
                            Our team will contact you shortly with confirmation and further details.
                          </p>
                        </div>
                        <button
                          onClick={handleClose}
                          className="rounded-lg bg-white/20 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/30"
                        >
                          Back to site
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1">
                          <h3 className="text-xl font-semibold text-white">Registration form</h3>
                          <p className="text-sm text-blue-200">
                            Fill in your details and we&apos;ll follow up with the official registration link.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="name"
                              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-blue-200"
                            >
                              Full name
                            </label>
                            <input
                              required
                              type="text"
                              id="name"
                              placeholder="Jane Doe"
                              className="w-full rounded-lg border border-blue-300/20 bg-blue-950/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-400"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-blue-200"
                            >
                              Email
                            </label>
                            <input
                              required
                              type="email"
                              id="email"
                              placeholder="you@example.com"
                              className="w-full rounded-lg border border-blue-300/20 bg-blue-950/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-400"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label
                                htmlFor="affiliation"
                                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-blue-200"
                              >
                                Affiliation
                              </label>
                              <input
                                type="text"
                                id="affiliation"
                                placeholder="University / Institute"
                                className="w-full rounded-lg border border-blue-300/20 bg-blue-950/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-400"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="track"
                                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-blue-200"
                              >
                                Track interest
                              </label>
                              <select
                                id="track"
                                className="w-full cursor-pointer appearance-none rounded-lg border border-blue-300/20 bg-blue-950/40 px-4 py-3 text-sm text-white outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-400"
                              >
                                <option className="bg-blue-900">Track 1: Emergent Materials</option>
                                <option className="bg-blue-900">Track 2: Smart &amp; Sustainable World</option>
                                <option className="bg-blue-900">Both tracks</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="message"
                              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-blue-200"
                            >
                              Notes
                            </label>
                            <textarea
                              id="message"
                              rows={3}
                              placeholder="Share any additional details or questions..."
                              className="w-full resize-none rounded-lg border border-blue-300/20 bg-blue-950/40 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-blue-400"
                            />
                          </div>
                        </div>

                        <button
                          disabled={formStep === "submitting"}
                          type="submit"
                          className="mt-2 flex w-full items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-50 focus:ring-4 focus:ring-blue-500/30 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {formStep === "submitting" ? (
                            <span className="flex items-center gap-2">
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                              Sending...
                            </span>
                          ) : (
                            "Submit registration interest"
                          )}
                        </button>

                        <p className="mt-4 text-center text-xs text-blue-200/60">
                          By submitting, you agree to be contacted with information about SAiNTS 2026 registration.
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

