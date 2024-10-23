import React from 'react'
import { github } from '../assets';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { styles } from '../styles';


const Works = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My Work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>

    <div className='w-full flex'>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]' >

      </motion.p>
    </div>

   </>
  )
}

export default  SectionWrapper(Works,"");