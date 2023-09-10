import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub,FaLinkedin,FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import LinkedInProfilePic from '../assets/LinkedInProfilePic.jpeg'
import {Link} from 'react-scroll'


export const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between text-center items-center px-8 bg-[#0a192f] text-gray-300 rounded-xl'>
        <div>
            {/* <img src={LinkedInProfilePic} alt = 'Profile img' style= {{width: '50px'}}/> */}
        </div>
    {/*Menu */}
        
            <ul className='hidden md:flex text-right'>
                <li>
                <Link  to="home" mooth={true}  duration={500} >
                Home </Link>
         </li>
                <li><Link  to="about" mooth={true}  duration={500} >
                About </Link></li>
                <li><Link  to="skills" mooth={true}  duration={500} >
                Skills </Link></li>
                <li><Link  to="work" mooth={true}  duration={500} >
                Projects </Link></li>
                {/* <li>Resume</li> */}
                <li>Music</li>
                <li><Link  to="contact" mooth={true}  duration={500} >
                Contact </Link></li>

            </ul>

    {/* Hamburger */}
        {/* Anything less than medium will hide */}

     <div onClick={handleClick} className='nd:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}
    </div>

    {/* Mobile */}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-right'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" mooth={true}  duration={500} >
                Home </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" mooth={true}  duration={500} >
                About </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}  to="skills" mooth={true}  duration={500} >
                Skills </Link></li>
                <li className='py-6 text-4xl'><Link nClick={handleClick} to="work" mooth={true}  duration={500} >
                Projects </Link></li>
            {/* <li className='py-6 text-4xl'>Resume</li> */}
            <li className='py-6 text-4xl'>Music</li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}  to="contact" mooth={true}  duration={500} >
                Contact </Link></li>


        </ul>

    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
    <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://linkedin.com/nirahulan-puvanenthira">
                Linkedin <FaLinkedin size = {30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/Nirahulan">
                Github <FaGithub size = {30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="mailto:nirahulanp@gmail.com">
                Email <HiOutlineMail size = {30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="Nirahulan_Word_Resume_May28.pdf">
                Resume <BsFillPersonLinesFill size = {30}/>
            </a>
        </li>
    </ul>
    </div>

    </div>
  )
}

export default Navbar