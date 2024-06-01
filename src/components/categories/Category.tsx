import { ProductCategoryWithImageType } from '@/redux/queries/products/productsType'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Category = ({name, image}:ProductCategoryWithImageType) => {
  return (
    <Link href={`/search?category=${name.toLowerCase()}`} className="max-sm:py-3 max-sm:border-primary-color max-sm:border max-sm:rounded-md flex cursor-pointer flex-col gap-1 items-center justify-center">
          <div className="w-12 max-sm:w-10 h-12 max-sm:h-10">
            <Image src={image} width={48} height={48} placeholder='blur' blurDataURL={image} alt="category" />
          </div>
          <span className="max-sm:text-sm max-[550px]:text-[10px] text-center" >{name}</span>
    </Link>
  )
}

export default Category
