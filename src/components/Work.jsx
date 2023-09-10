import React from 'react'
import WorkImg from '../assets/Sentiment2.png'
import Floor from '../assets/floor.jpeg'
import VaxApp from '../assets/vaxapp.png'

import French from '../assets/frenchPhrases.jpeg'
import capstone from '../assets/capstone.png'
import dealership from '../assets/dealershipApp.png'


const Work = () => {
  return (
    <div name= 'work' className=' w-full md:h-screen text-gray-300 bg-work bg-center bg-cover'>
        
        <div className=' max-w[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl  font-bold inline border-b-4 text-gray-200 border-pink-600'> Projects</p>
                <p className='py-6'> Check out some of my projects</p>
            </div>
             
             {/* Container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
               {/* Grid Item */}
                <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                   
                   {/*hover effects */}
                    <div className='opacity-20 group-hover:opacity-100' >
                        
                            <span className='text-2xl font-bold text-cyan tracking-wider'> Sentiment Mental Health App </span>
                                <div className='pt-8 text-center'>
                                    <a href="https://github.com/Nirahulan/Sentimint#readme">
                                        <button className=' text-center rounded-lg px-4 py-3 m-2 bg-cyan text-white-700 font-bold text-lg'>About</button>
                                    </a>
                                    <a href="https://github.com/Nirahulan/Sentimint"> <button className=' text-center rounded-lg px-4 py-3 m-2 bg-cyan text-white-700 font-bold text-lg'> Code</button>
                                        </a>
                                </div>
                    </div>
                </div>
                {/* Grid Item */}
                <div style={{backgroundImage: `url(${Floor})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                   
                   {/*hover effects */}
                    <div className='opacity-0 group-hover:opacity-100' >
                        
                            <span className='text-2xl font-bold text-cyan tracking-wider'>Flooring Mastery</span>
                                <div className='pt-8 text-center'>
                                    <a href="https://github.com/The-Software-Guild/flooring-mastery-the-code-warriors">
                                        <button className=' text-center rounded-lg px-4 py-3 m-2 bg-cyan text-White-700 font-bold text-lg'>About</button>
                                    </a>
                                    <a href="https://github.com/The-Software-Guild/flooring-mastery-the-code-warriors"> <button className=' text-center rounded-lg px-4 py-3 m-2 bg-cyan text-White-700 font-bold text-lg'> Code</button>
                                        </a>
                                </div>
                    </div>
                </div>{/* Grid Item */}
                <div style={{backgroundImage: `url(${VaxApp})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                   
                   {/*hover effects */}
                    <div className='opacity-0 group-hover:opacity-100' >
                        
                            <span className='text-2xl font-bold text-cyan tracking-wider'> Vax App </span>
                                <div className='pt-8 text-center'>
                                    <a href="https://github.com/Nirahulan/TO_Hacks_2021_VaxApp#readme">
                                        <button className=' text-center rounded-lg px-4 py-3 m-2 bg-cyan text-white-700 font-bold text-lg'>About</button>
                                    </a>
                                    <a href="https://github.com/Nirahulan/TO_Hacks_2021_VaxApp"> <button className=' text-center rounded-lg px-4 py-3 m-2 bg-cyan text-ehite-700 font-bold text-lg'> Code</button>
                                        </a>
                                </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${French})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                   
                   {/*hover effects */}
                    <div className='opacity-0 group-hover:opacity-100' >
                        
                            <span className='text-2xl font-bold text-cyan tracking-wider'> Basic French Phrases </span>
                                <div className='pt-8 text-center'>
                                    <a href="https://github.com/Nirahulan/BasicFrenchPhrases">
                                        <button className=' text-center rounded-lg px-4 py-3 m-2 bg-cyan text-white-700 font-bold text-lg'>About</button>
                                    </a>
                                    <a href="https://github.com/Nirahulan/BasicFrenchPhrases"> <button className=' text-center rounded-lg px-4 py-3 m-2 bg-cyan text-white-700 font-bold text-lg'> Code</button>
                                        </a>
                                </div>
                    </div>
                </div>{/* Grid Item */}
                <div style={{backgroundImage: `url(${dealership})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                   
                   {/*hover effects */}
                    <div className='opacity-0 group-hover:opacity-100' >
                        
                            <span className='text-2xl font-bold text-cyan tracking-wider'> Car Dealership App </span>
                                <div className='pt-8 text-center'>
                                    <a href="https://github.com/The-Software-Guild/capstone-fourwheeldrive">
                                        <button className=' text-center rounded-lg px-4 py-3 m-2 bg-cyan text-white-700 font-bold text-lg'>About</button>
                                    </a>
                                    <a href="https://github.com/The-Software-Guild/capstone-fourwheeldrive"> <button className=' text-center rounded-lg px-4 py-3 m-2 bg-cyan text-white-700 font-bold text-lg'> Code</button>
                                        </a>
                                </div>
                    </div>
                </div><div style={{backgroundImage: `url(${capstone})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                   
                   {/*hover effects */}
                    <div className='opacity-0 group-hover:opacity-100' >
                        
                            <span className='text-2xl font-bold text-cyan tracking-wider'> Capstone</span>
                                <div className='pt-8 text-center'>
                                    <a href="https://github.com/RinayShah/Capstone">
                                        <button className=' text-center rounded-lg px-4 py-3 m-2 bg-cyan text-white-700 font-bold text-lg'>About</button>
                                    </a>
                                    <a href="https://github.com/RinayShah/Capstone"> <button className=' text-center rounded-lg px-4 py-3 m-2 bg-cyan text-white-700 font-bold text-lg'> Code</button>
                                        </a>
                                </div>
                    </div>
                </div>{/* Grid Item */}
                
                
            </div>
        </div>
    </div>
  )
}

export default Work;

