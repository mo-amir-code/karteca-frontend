"use client"
import React from 'react'
import FilterField, { ListType } from './FilterField'
import { useGetProductCategoriesQuery } from '@/redux/queries/products/productsAPI'

const Categories = () => {
    const {data} = useGetProductCategoriesQuery(null);
    
  return (
    <>
    <FilterField title="Categories" list={data?.data as [ListType]} isFirst={true} />
    </>
  )
}

export default Categories
