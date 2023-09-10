import React from 'react'
import Profile from '../assets/meta.jpeg'

const About = () => {
  return (
    
    <div name ='about' className=' w-full h-screen bg-try bg-center bg-cover text-gray-300'> 
        <div className= 'flex flex-col justify-center items-center w-full h-full'>
            <div className=' max-w-[1000px] w-full grid grid-cols-2 gap-8'>
              <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    About
                </p>
            </div>
            <div></div>
            </div>
            <div className=' max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4'>
                {/*anything above small will show */}
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Hi.I'm Nira, nice to meet you, please take a look around.</p>
                    {/* <div> <img src={Profile} alt="/" className=" rounded-2xl mx-auto w-2/3 md:w-full" /></div> */}

                </div>
            <div className='font-semibold text-pink-600'>
                <p>Hey there! My name is Nirahulan Puvanenthira (NIRA for short) and i’m a New Grad Software Engineer looking for roles in the Software Engineering industry.

Ever since I was a child Music and technology have been 2 motivating factors that have allowed me to purse my passions. I love learning using, and hearing about new technologies, both hardware and software. 

                </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About