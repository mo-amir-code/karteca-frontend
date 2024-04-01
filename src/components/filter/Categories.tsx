"use client"
import React from 'react'
import FilterField, { ListType } from './FilterField'
import { useGetProductCategoriesQuery } from '@/redux/queries/products/productsAPI'
import MobileTag from './MobileTag'

const Categories = ({isFromMobile}:{isFromMobile?:boolean}) => {
    const {data, isSuccess} = useGetProductCategoriesQuery(null);

    if(isFromMobile && isSuccess){
      return <MobileTag title="Categories" list={data?.data as [ListType]} />
    }
    
  return (
    <>
    <FilterField title="Categories" list={data?.data as [ListType]} isFirst={true} />
    </>
  )
}

export default Categories
