import React from 'react'
import './Home.css';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <div className='home' id='home'>
      <div className='container'>
      <div className='row'>
        <div className='col-lg-12 co-md-12 content'>
          <motion.h1 initial={{x:-50}} whileInView={{x:0}} transition={{duration:1}}>MOTHHELA FOR PERFUMES</motion.h1>
          <motion.h2 initial={{x:50}} whileInView={{x:0}} transition={{duration:1}}>PERFUMES MOTHHELA it's BEST PERFUMES ALSO THE MAKEUP</motion.h2>
          <p>us perfumes and makeup it's best prouduct</p>
          <h5>in order see us services click here</h5>
          <button className='btn btn-dark'><a href='#services' style={{color:'#fff'}}>viwe</a></button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home