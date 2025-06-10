import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold neon-text">
          SHADOWQUANT DYNAMICS
        </h1>
        <p className="mt-4 text-purple-500">
          Full-Stack FinTech + AI + Trading Empire
        </p>
      </motion.div>
    </main>
  )
}
