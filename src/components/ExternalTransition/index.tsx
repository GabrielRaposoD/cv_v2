import { motion } from 'framer-motion'

const ExternalTransition: React.FC = ({ children }) => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      transition={{ duration: 0.4 }}
      variants={{
        pageInitial: {
          width: '100%',
          position: 'absolute',
          right: 200,
          opacity: 0,
        },
        pageAnimate: {
          position: 'absolute',
          right: 0,
          opacity: 1,
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default ExternalTransition
