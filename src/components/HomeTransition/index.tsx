import { motion } from 'framer-motion'

const HomeTransition: React.FC = ({ children }) => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      transition={{ min: 0, max: 100, bounceDamping: 8, duration: 0.6 }}
      variants={{
        pageInitial: {
          width: '100%',
          position: 'absolute',
          left: 200,
          opacity: 0,
        },
        pageAnimate: {
          position: 'absolute',
          left: 0,
          opacity: 1,
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default HomeTransition
