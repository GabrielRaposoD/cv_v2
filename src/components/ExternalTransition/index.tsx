import { motion } from 'framer-motion'

const ExternalTransition: React.FC = ({ children }) => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      exit={{ x: -1000, opacity: 0 }}
      transition={{ min: 0, max: 100, bounceDamping: 8 }}
      variants={{
        pageInitial: {
          x: -1000,
          opacity: 0,
        },
        pageAnimate: {
          x: 0,
          opacity: 1,
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default ExternalTransition
