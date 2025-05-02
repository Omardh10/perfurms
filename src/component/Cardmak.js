import { motion } from 'framer-motion'
import React from 'react'
const Cardmak = (props) => {
  return (
    <div
      className='she'>
      <motion.div initial={{opacity:0, scale: 0 }}
        whileInView={{ opacity: 1,scale: 1 }} transition={{duration:1}} style={{
        backgroundImage: `url(${props.image})`,
        backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', width: '400px', height: '400px',borderRadius:"30px"
      }}></motion.div>
      <div>
        <motion.h3 initial={{opacity:0, scale: 0 }}
        whileInView={{ opacity: 1,scale: 1 }} transition={{duration:1}}>Name: {props.name}</motion.h3>
        <motion.h5 initial={{opacity:0, scale: 0 }}
        whileInView={{ opacity: 1,scale: 1 }} transition={{duration:1}}>Type: {props.type}</motion.h5>
        <div className='df'>
          <motion.button initial={{opacity:0, scale: 0 }}
        whileInView={{ opacity: 1,scale: 1 }} transition={{duration:1}} className='btn btn-danger'>Order Now</motion.button>
        </div>
      </div>
    </div>
  )
}

export default Cardmak
