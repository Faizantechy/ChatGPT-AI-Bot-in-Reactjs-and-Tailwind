import React from 'react'

function Navbar() {
  return (
    <div className='max-w-screen  bg-transparent py-2 flex justify-between px-5 bg-slate-500 text-center'>

      
      <div className="first-part flex gap-6 items-center">

      <i className="ri-sidebar-fold-line text-3xl font-bold  lg:inline"></i>
      <i className="ri-chat-ai-line text-3xl font-bold  lg:visible"></i>
        <h2 className='text-4xl font-semibold text-gray-300 md:text-center'>ChatGPT</h2>
      </div>

      <div className="second-part hidden lg:block">

        <div className='h-[40px] w-[40px]   text-white font-bold bg-orange-800
flex justify-center items-center text-xl rounded-full'>F</div>
      </div>

    </div>
  )
}

export default Navbar