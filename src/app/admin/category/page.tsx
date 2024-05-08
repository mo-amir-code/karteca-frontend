import CategoryForm from '@/adminComponents/forms/CategoryForm'
import ChildCategoryForm from '@/adminComponents/forms/ChildCategoryForm'
import React from 'react'

const Category = () => {
  return (
    <main className='max-w-6xl space-y-12 mx-auto py-6' >
        <CategoryForm />
        <ChildCategoryForm />
    </main>
  )
}

export default Category
