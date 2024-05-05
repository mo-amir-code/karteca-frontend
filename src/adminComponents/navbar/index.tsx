import Link from 'next/link'
import React from 'react'

const Index = () => {

    
  return (
    <header className='shadow-md' >
        <div className='max-w-6xl mx-auto w-full flex items-center justify-between py-4' >
        <nav className='flex gap-4 items-center' >
            <Link href={"/admin"} className='text-xl font-semibold' >{process.env.NEXT_PUBLIC_COMPANY_NAME}</Link>
            <Link href={"/admin/product"} className="text-sm" >Product</Link>
            <Link href={"/admin/category"} className="text-sm" >Category</Link>
        </nav>

        <Link href={"/"} className='px-3 text-white text-sm font-medium py-1 rounded-full bg-primary-color' >
            Go Home
        </Link>
        </div>
    </header>
  )
}

export default Index