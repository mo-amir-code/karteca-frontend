import React from 'react'

const Index = () => {

    
  return (
    <header className='shadow-md' >
        <div className='max-w-6xl mx-auto w-full flex items-center justify-between py-4' >
        <nav className='flex gap-4 items-center' >
            <h1 className='text-xl font-semibold' >Mo Amir</h1>
            <span>Product</span>
        </nav>

        <button className='px-3 text-white text-sm font-medium py-1 rounded-full bg-primary-color' >
            Logout
        </button>
        </div>
    </header>
  )
}

export default Index