import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  bg-contact bg-cover bg-bottom p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-400'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/e22fe8de-e19d-469d-aa4c-887cacd11773" method='POST' className='flex flex-col w-full md:w-1/2'> 
                <input type="text"
                 name="name" 
                 placeholder="Enter your name" 
                 className='p-2 bg-white border-2 rounded-md text-gray-500 focus:outline-none '  />
                 
                 <input type="text"
                 name="email" 
                 placeholder="Enter your email" 
                 className='my-4 p-2 bg-white border-2 rounded-md text-gray-500 focus:outline-none '  />
                 <textarea name="message" placeholder='Enter your message' rows="10"  className='p-2 bg-white border-2 rounded-md text-gray-500 focus:outline-none'></textarea>
               <button className='text-gray-500 bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex ite rounded-md hover:scale-100 duration-200'>
                Lets talk
               </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact