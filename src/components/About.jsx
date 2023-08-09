import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style'
import { services } from '../constants/index'
import { fadeIn, textVariant } from '../utils/motion'
import { Sectionwrapper } from '../rules/SectionWrapper';



// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-semibold text-center'>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdcution</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          I&apos;m a skilled software developer with experience in Typescript,
          Javascript, Rust and expertise in frameworks like React, NextJS, Three.Js,
          Jest, Remix and more! I&apos;m a quick learner and passionate developer. I can
          collaborate closely with clients and create efficient, scalable and user-friendly
          solutions that solve real world problems. Let&apos;s work together to bring ideas into life.
      </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
    </div>

    </>
  )
}

const wrappedAbout = Sectionwrapper(About, "about")

export default wrappedAbout
