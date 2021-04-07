import { ReactElement } from 'react'
import { motion } from 'framer-motion'
import { ImSpinner9 } from 'react-icons/im'
import styles from '../styles/components/Loading.module.css'

function Loading(): ReactElement {
  return (
    <div className={styles.container}>
      <motion.div
        animate={{ rotate: [0, 45, 90, 135, 180] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      >
        <ImSpinner9 size={30} />
      </motion.div>
    </div>
  )
}

export default Loading
