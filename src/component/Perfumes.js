import React, { useState } from 'react'
import './Perfumes.css'
import { data1 } from './data1'
import Cardper from './Cardper'
import Makeup from './Makeup'
import { motion } from 'framer-motion'
const Perfumes = () => {
  const[search,setsearch]=useState('');
   const showdata=data1.filter((el)=>{
    return search==''?el : el.name.includes(search)
   }).map((el)=><Cardper name={el.name} type={el.type} price={el.price} image={el.image}/>)
  return (
    <div className='perfume' id='perfume'>
      <div className='container content1'>
            <motion.h2 initial={{x:-200}}
        whileInView={{x:0}} transition={{duration:1}}>THIS IS US PERFUMES</motion.h2>
            <form>
              <input type='text' placeholder='search' className='form-control' onChange={(e)=>setsearch(e.target.value)}/>
            </form>
        </div>
  {showdata}
  <Makeup/>
      </div>
      
        
  )
}

export default Perfumes
