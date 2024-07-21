import { Dribbble, Github, Instagram } from 'lucide-react'
import React from 'react'

const Social = () => {
  return (
    <div className="home__social ">
        <a href="https://www.instagram.com/blackwalker_mara" className="home__social-icon hover:rotate-3 " target='_blank'><Instagram className='dark:text-white' /></a>
        <a href="https://www.dribbble.com/" className="home__social-icon hover:rotate-3" target='_blank'><Dribbble className='dark:text-white' /> </a>
        <a href="https://github.com/maran-tn" className="home__social-icon hover:rotate-3" target='_blank'><Github className='dark:text-white' /></a>
    </div>
  )
}

export default Social