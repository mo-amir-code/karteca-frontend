"use client";
import InputField from "@/components/checkout/InputField";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SingleImageForm from "./fields/SingleImageForm";
import MultipleImageForm from "./fields/MultipleImageForm";
import SpecificationForm, { SpecsType } from "./fields/SpecificationsForm";
import SelectField from "./fields/SelectField";
import {
  useCreateProductMutation,
  useFetchProductCategoriesQuery,
} from "@/redux/queries/admin/adminAPI";
import {
  ProductCreateType,
  ProductFormType,
} from "@/redux/queries/admin/adminTypes";
import toast from "react-hot-toast";
import { APIRequestType } from "@/redux/RootTypes";
import ButtonLoader from "@/components/loader/ButtonLoader";

export type ImageType = {
  data: string;
  url: string;
  publicId: string;
};

const ProductForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isImageUploading, setIsImageUploading] = useState<boolean>(false);
  const [thumbnail, setThumbnail] = useState<ImageType | null>(null);
  const [images, setImages] = useState<ImageType[]>([]);
  const [specs, setSpecs] = useState<[SpecsType]>([
    { field: null, value: null },
  ]);
  const [parentCategory, setParentCategory] = useState<string | null>(null);
  const [childCategory, setChildCategory] = useState<string | null>(null);
  const { data, isSuccess, refetch, isFetching } =
    useFetchProductCategoriesQuery({ parentCategory: parentCategory });
  const [parentCategories, setParentCategories] = useState<string[]>([]);
  const [childCategories, setChildCategories] = useState<string[]>([]);
  const [createProduct] = useCreateProductMutation();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ProductFormType>();

  const handleOnSubmit = useCallback(
    async (data: ProductFormType) => {
      if (!thumbnail) {
        toast.error("Upload thumbnail");
        return;
      }

      if (!parentCategory) {
        toast.error("Select parent category");
        return;
      }

      // if (!childCategory) {
      //   toast.error("Select child category");
      //   return;
      // }

      const specifications = specs.filter((spec) => {
        if (spec.field && spec.value) return true;
        return false;
      });

      if (!specifications.length) {
        toast.error("Provide product specifications");
        return;
      }

      let colors = (data?.colors as string).split(",").map((color) => color);
      let highlights = (data?.highlights as string)
        .split(",")
        .map((highlight) => highlight);

      const newImages = images.map((img) => {
        return {
          url: img.url,
          publicId: img.publicId,
        };
      });

      const productApiData: ProductCreateType = {
        ...data,
        colors,
        highlights,
        thumbnail: {
          url: thumbnail.url,
          publicId: thumbnail.publicId,
        },
        images: newImages,
        category: {
          parent: parentCategory,
          child: childCategory || "",
        },
        warranty: {
          serviceType: data.warrantyType,
          covered: data.warrantyCover,
        },
        specifications,
      };

      // const formData = new FormData();

      // for (const [key, value] of Object.entries(productApiData)) {
      //   if (key !== "thumbnail" && key !== "images") {
      //     formData.append(key, value);
      //   } else if (key === "thumbnail") {
      //     try {
      //       const blobData = await fetch(value).then(res => res.blob());
      //       formData.append(key, blobData);
      //     } catch (error) {
      //       console.error(`Error fetching thumbnail: ${error}`);
      //     }
      //   } else {
      //     for (const img of value) {
      //       try {
      //         const blobData = await fetch(img).then(res => res.blob());
      //         formData.append(`${key}[]`, blobData);
      //       } catch (error) {
      //         console.error(`Error fetching image: ${error}`);
      //       }
      //     }
      //   }
      // }

      try {
        setIsLoading(true);
        const { data: resData, error } = (await createProduct(
          productApiData
        )) as { data: APIRequestType; error: { data: APIRequestType } };

        if (resData?.success) {
          toast.success(resData.message);
        }

        if (error?.data?.success === false) {
          toast.error(error?.data?.message);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    },
    [
      reset,
      handleSubmit,
      errors,
      register,
      thumbnail,
      parentCategory,
      childCategory,
      specs,
      createProduct,
      isLoading
    ]
  );

  useEffect(() => {
    if (isSuccess && !isFetching) {
      setParentCategories(data?.data?.parentCategories);
      setChildCategories(data?.data?.childCategories);
    }
  }, [data, isSuccess, isFetching]);

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="max-w-2xl mx-auto space-y-2 px-4"
    >
      <h2 className="text-lg font-semibold ">Enter Product Details</h2>
      <InputField
        icon="title"
        placeHolder="Enter title here"
        type="text"
        register={register}
        error={errors.title?.message || undefined}
        required="Title is required"
      />
      <InputField
        icon="description"
        placeHolder="Enter description here"
        type="text"
        register={register}
        error={errors.description?.message || undefined}
        required="Description is required"
      />
      <InputField
        icon="price"
        placeHolder="Enter price here"
        type="number"
        register={register}
        error={errors.price?.message || undefined}
        required="Price is required"
      />
      <InputField
        icon="stock"
        placeHolder="How many quantity available"
        type="number"
        register={register}
        error={errors.stock?.message || undefined}
        required="Stock is required"
      />
      <InputField
        icon="colors"
        placeHolder="Enter colors code here, Ex- 34GOI6, HYH346, 766CDF,"
        type="text"
        register={register}
        error={errors.colors?.message || undefined}
        required="Colors are required"
      />
      <InputField
        icon="discount"
        placeHolder="Enter discount here"
        type="number"
        register={register}
        error={errors.discount?.message || undefined}
        required="Discount is required"
      />

      <SelectField
        refetch={refetch}
        setCategory={setParentCategory}
        name="Select Parent Category"
        categories={parentCategories || []}
      />
      {childCategories.length ? (
        <SelectField
          setCategory={setChildCategory}
          name="Select Child Category"
          categories={childCategories || []}
        />
      ) : null}

      <InputField
        icon="importantNote"
        placeHolder="Enter note here"
        type="text"
        register={register}
        error={errors.importantNote?.message || undefined}
        required="Note is required"
      />
      <InputField
        icon="highlights"
        placeHolder="Enter highlights, Ex:- highlight1, hightlight2"
        type="text"
        register={register}
        error={errors.highlights?.message || undefined}
        required="Highlights are required"
      />
      <SingleImageForm
        selectedImage={thumbnail}
        setSelectedImage={setThumbnail}
        name="Upload Thumbnail"
        setIsUploading={setIsImageUploading}
      />
      <MultipleImageForm
        selectedImages={images}
        setSelectedImages={setImages}
      />
      <SpecificationForm specs={specs} setSpecs={setSpecs} />

      <InputField
        icon="warrantyType"
        placeHolder="Enter warranty type"
        type="text"
      />

      <InputField
        icon="warrantyCover"
        placeHolder="What's cover under warranty"
        type="text"
      />

      <button
        disabled={isImageUploading}
        type="submit"
        className="px-3 py-2 rounded-md bg-primary-color text-white text-sm"
      >
        {isLoading ? <ButtonLoader color /> : "Send To Sell"}
      </button>
    </form>
  );
};

export default ProductForm;
