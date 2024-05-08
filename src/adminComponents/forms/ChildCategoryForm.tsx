"use client";
import React, { useCallback, useState } from "react";
import SingleImageForm from "./fields/SingleImageForm";
import { ImageType } from "./ProductForm";
import InputField from "@/components/checkout/InputField";
import { useForm } from "react-hook-form";
import ButtonLoader from "@/components/loader/ButtonLoader";
import toast from "react-hot-toast";
import { ChildCreateCategoryType } from "@/redux/queries/admin/adminTypes";
import { useCreateChildCategoryMutation } from "@/redux/queries/admin/adminAPI";
import { APIRequestType } from "@/redux/RootTypes";

interface CategoryFormType {
  category: string;
  subCategory: string;
}

const CategoryForm = () => {
  const [isImageUploading, setIsImageUploading] = useState<boolean>(false);
  const [subCategory, setSubCategory] = useState<ImageType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [createChildCategory] = useCreateChildCategoryMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryFormType>();

  const handleOnSubmit = useCallback(async (data:CategoryFormType) => {

    if(!subCategory || (subCategory && !subCategory.url)){
        toast.error("Categories image not found");
        return;
    }

    const { subCategory:childCategory, category: parentName } = data;

    const apiData:ChildCreateCategoryType = {
        parentName,
        childName: childCategory,
        childImage: {
            url: subCategory.url,
            publicId: subCategory.publicId
        }
    }

    setIsLoading(true);

    try {
        const { data:resData } = await createChildCategory(apiData) as { data:APIRequestType }

        if(resData.success){
            toast.success(resData.message);
            setSubCategory(null)
            reset();
        }else{
            toast.success("Something went wrong!");
        }
        
        setIsLoading(false);
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong!");
        setIsLoading(false)
    }
  },  [
    register,
    errors,
    handleSubmit,
    subCategory
  ]);

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className="max-w-2xl mx-auto space-y-2 px-4">
      <h2 className="text-lg font-semibold ">Create Sub Category</h2>
      <InputField
        register={register}
        type="text"
        placeHolder="Enter parent category"
        required="Category is required"
        error={errors.category?.message || undefined}
        icon="category"
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
        {isLoading ? <ButtonLoader color /> : "Create Sub Category"}
      </button>
    </form>
  );
};

export default CategoryForm;