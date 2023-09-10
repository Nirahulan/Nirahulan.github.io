import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Profile from '../assets/meta.jpeg'
import Meta from '../assets/meta.jpeg'


 const Home = () => {
    
  return (
<div name='home' className='w-full h-screen bg-home bg-center bg-cover'>
        {/* contatiner*/}
        
       
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        
        <div>
         <p className='text-4xl sm:text-3xl text-pink-600'>Hi My Name is</p>
         <h1 className=' text-4xl sm:text-7xl font-bold text-white'>Nirahulan,</h1>
         <h2 className=' text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
         {/* <p className='text-4xl sm:text-3xl text-yellow py-4 max-w-[700px]'>I’m a full-stack developer, and Carnatic Musician! I specialize in Java Technologies and am currently looking for open roles!</p>    */}
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work 
                    <span className=' group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className=' ml-3'/>
                    </span>
                    
                </button>
                </div>
            </div>
            <div> <img src={Profile} alt="/" className=" rounded-2xl mx-auto w-2/3 md:w-full" /></div>
        </div>
    
    </div>





  )
}


export default Home


