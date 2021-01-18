import { motion } from 'framer-motion'

const ExternalTransition: React.FC = ({ children }) => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.6 }}
      variants={{
        pageInitial: {
          x: 300,
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
