import React, { useState } from 'react'
import './Makeup.css'
import { Data2 } from './Data2';
import Cardmak from './Cardmak';
import Services from './Services';
import { motion } from 'framer-motion';
const Makeup = () => {
  const[search,setsearch]=useState('');
  const datashow=Data2.filter((el)=>{
    return search==''?el : el.name.includes(search)
  }).map((el)=><Cardmak name={el.name} type={el.type} image={el.image} />)
  return (
    <div className='makeup' id='makeup'>
      <div className='container klam'>
        <motion.h2 initial={{x:-200}}
        whileInView={{x:0}} transition={{duration:1}} className='hh'>THIS IS US MAKEUPS</motion.h2>
        <form>
              <input type='text' placeholder='search' className='form-control' onChange={(e)=>setsearch(e.target.value)}/>
            </form>
      </div>
      {datashow}
      <Services/>
    </div>
  )
}

export default Makeup
