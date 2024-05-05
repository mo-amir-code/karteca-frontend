"use client";
import React, { useCallback, useState } from "react";
import SingleImageForm from "./fields/SingleImageForm";
import { ImageType } from "./ProductForm";
import InputField from "@/components/checkout/InputField";
import { useForm } from "react-hook-form";
import ButtonLoader from "@/components/loader/ButtonLoader";
import toast from "react-hot-toast";
import { CreateCategoryType } from "@/redux/queries/admin/adminTypes";
import { useCreateCategoryMutation } from "@/redux/queries/admin/adminAPI";
import { APIRequestType } from "@/redux/RootTypes";

interface CategoryFormType {
  category: string;
  subCategory: string;
}

const CategoryForm = () => {
  const [category, setCategory] = useState<ImageType | null>(null);
  const [isImageUploading, setIsImageUploading] = useState<boolean>(false);
  const [subCategory, setSubCategory] = useState<ImageType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [createCategory] = useCreateCategoryMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryFormType>();

  const handleOnSubmit = useCallback(async (data:CategoryFormType) => {

    if(!category || (category && !category.url) || !subCategory || (subCategory && !subCategory.url)){
        toast.error("Categories image not found");
        return;
    }

    const { category:parentCategory, subCategory:childCategory } = data;

    const apiData:CreateCategoryType = {
        parentName: parentCategory,
        childName: childCategory,
        parentImage: {
            url: category.url,
            publicId: category.publicId
        },
        childImage: {
            url: subCategory.url,
            publicId: subCategory.publicId
        }
    }

    setIsLoading(true);

    try {
        const { data:resData } = await createCategory(apiData) as { data:APIRequestType }

        if(resData.success){
            toast.success(resData.message);
            setCategory(null)
            setSubCategory(null)
            reset();
        }else{
            toast.success("Something went wrong!");
        }
        
        setIsLoading(false);
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong!");
    }
  },  [
    register,
    errors,
    handleSubmit,
    category,
    subCategory,

  ]);

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className="max-w-2xl mx-auto space-y-2 px-4">
      <h2 className="text-lg font-semibold ">Create Category</h2>
      <InputField
        register={register}
        type="text"
        placeHolder="Enter parent category"
        required="Category is required"
        error={errors.category?.message || undefined}
        icon="category"
      />
      <SingleImageForm
        selectedImage={category}
        setSelectedImage={setCategory}
        name="Upload Category Image"
        isFrom="category"
        setIsUploading={setIsImageUploading}
      />
      <InputField
        register={register}
        type="text"
        placeHolder="Enter sub category"
        required="Sub category is required"
        error={errors.subCategory?.message || undefined}
        icon="subCategory"
      />
      <SingleImageForm
        selectedImage={subCategory}
        setSelectedImage={setSubCategory}
        name="Upload Sub Category Image"
        isFrom="category"
        setIsUploading={setIsImageUploading}
      />

      <button
        disabled={isImageUploading}
        type="submit"
        className="px-3 py-2 rounded-md bg-primary-color text-white text-sm"
      >
        {isLoading ? <ButtonLoader color /> : "Create Category"}
      </button>
    </form>
  );
};

export default CategoryForm;
