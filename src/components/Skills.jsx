import React from 'react'

import Java from '../assets/java.png';
import Android from '../assets/android.png';
import Git from '../assets/git.png';
import MySQL from '../assets/mysql.png';
import Spring from '../assets/spring1.png';
import react from '../assets/react.png';
import Angular from '../assets/angular1.png';
import Azure from '../assets/azure1.png';


const Skills = () => {
  return (
    <div name ='skills' className='w-full h-screen bg-skills bg-center text-gray-300'>
        {/* container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
         <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
            <p className='py-4'> These are a few technologies i've worked with</p>
         </div>
        
        <div className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

            <div className='shadow-md shadow-[#1e2b3b] hover:scale-110 duration-500 backdrop-blur-lg'>
                <img className='w-40 mx-auto' src={Java} alt="Java Icon" />
                {/* <p>Java</p> */}
            </div>
            <div className='shadow-md shadow-[#1e2b3b] hover:scale-110 duration-500 backdrop-blur-lg'>
                <img className='py-14 w-40 mx-auto' src={Spring} alt="Java Icon" />
                {/* <p>SPRING</p> */}
            </div>
            <div className='shadow-md shadow-[#1e2b3b] hover:scale-110 duration-500 backdrop-blur-lg'>
                <img className='w-40 mx-auto' src={MySQL} alt="Java Icon" />
                {/* <p>MYSQL</p> */}
            </div>
            <div className='shadow-md shadow-[#1e2b3b] hover:scale-110 duration-500 backdrop-blur-lg'>
                <img className='py-2 w-32 mx-auto' src={Android} alt="Java Icon" />
                <p>ANDROID</p>
            </div>
            <div className='shadow-md shadow-[#1e2b3b] hover:scale-110 duration-500 backdrop-blur-lg'>
                <img className='py-16 w-40 mx-auto' src={Git} alt="Java Icon" />
                {/* <p>GIT</p> */}
            </div>
            <div className='shadow-md shadow-[#1e2b3b] hover:scale-110 duration-500 backdrop-blur-lg'>
                <img className='py-14 w-52 mx-auto' src={Azure} alt="Java Icon" />
                {/* <p>SPRING</p> */}
            </div>
            <div className='shadow-md shadow-[#1e2b3b] hover:scale-110 duration-500 backdrop-blur-lg'>
                <img className='py-6 w-100 mx-auto' src={Angular} alt="Java Icon" />
                {/* <p>ANGULAR</p> */}
            </div>
            <div className='shadow-md shadow-[#1e2b3b] hover:scale-110 duration-500 backdrop-blur-lg'>
                <img className='py-14 w-60 mx-auto' src={react} alt="Java Icon" />
                {/* <p>REACT</p> */}
            </div>
            
            

        </div>

        </div>

    </div>
  )
}

export default Skills