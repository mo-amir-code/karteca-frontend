"use client"
import { useFetchUserCountQuery } from '@/redux/queries/admin/adminAPI'
import React from 'react'

const Index = () => {

  const {data} = useFetchUserCountQuery(null);

  return (
    <div className='flex items-center gap-2' >
        <span className='font-semibold' >Total Users:- </span>
        <span className='font-bold text-lg' >{data?.data || 0}</span>
    </div>
  )
}

export default Index