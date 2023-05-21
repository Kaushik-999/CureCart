import React from 'react'

function Brandcard() {
  return (
    <div className='relative bg-white mx-16 w-40 snap-start scroll-m-3'>
      
      <img className="w-40 rounded-full" src="https://demo.wpthemego.com/themes/sw_mallon/wp-content/uploads/2021/06/brand-22.png" alt="abc" />
   
      <div className='flex justify-center mt-3'>
        <span className='text-base font-semibold'>Dabur</span>
      </div>
      <div className='flex justify-center mt-3 '>
          <span className='bg-teal-500 p-1 text-xs text-white font-semibold'>UPTO 25% OFF</span>
      </div>
    </div>

    
  )
}

export default Brandcard
