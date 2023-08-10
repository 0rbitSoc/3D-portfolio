import React from 'react'
import { Sectionwrapper } from '../rules/SectionWrapper'
import { technologies } from '../constants/index'
import { BallCanvas } from './canvas'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center
      gap-10
    '>
        {technologies.map((technology) => (
          <div
            className='w-28 h-28'
            key={technology.name}
          >
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
    </div>
  )
}

const wrappedTech = Sectionwrapper(Tech, "tech")

export default wrappedTech
