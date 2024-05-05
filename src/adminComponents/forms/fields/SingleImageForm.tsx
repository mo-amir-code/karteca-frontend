"use client";
import Image from "next/image";
import { useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { ImageType } from "../ProductForm";
import toast from "react-hot-toast";
import { APIRequestType } from "@/redux/RootTypes";
import {
  useDeleteProductImageMutation,
  useUploadProductImageMutation,
} from "@/redux/queries/admin/adminAPI";

const SingleImageForm = ({
  selectedImage,
  setSelectedImage,
  name,
  isFrom,
  setIsUploading
}: {
  selectedImage: ImageType | null;
  setSelectedImage: Function;
  name: string;
  isFrom?: string,
  setIsUploading: Function
}) => {
  const imageref = useRef<HTMLInputElement>(null);
  const [uploadImage] = useUploadProductImageMutation();
  const [deleteImage] = useDeleteProductImageMutation();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | null = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (
          e.target &&
          e.target.result &&
          typeof e.target.result === "string"
        ) {
          const img = new window.Image(); // Explicitly accessing the global Image object
          img.src = e.target.result.toString();


          img.onload = async () => {
            const width = img.width;
            const height = img.height;
            let aspectRatio:boolean;


            if(isFrom === "category"){
              aspectRatio = width/height === 1;
            }
            else{
              aspectRatio = Math.floor(((width / height) * 10) % 10) === 8;
            }

            setIsUploading(true);

            // Check if aspect ratio is exactly 4:5
            if (aspectRatio) {
              const imageToUpload = e.target?.result?.toString()!;
              setSelectedImage({
                data: e.target?.result?.toString()!,
                url: null,
              });
              try {
                
                const { data } = (await uploadImage({ imageToUpload })) as {
                  data: APIRequestType;
                };
                if (data?.success) {
                  const { imageUrl, publicId } = data?.data;
                  setSelectedImage({
                    data: imageToUpload,
                    url: imageUrl,
                    publicId,
                  });
                } else {
                  toast.error("Something went wrong!");
                }
                setIsUploading(false);
              } catch (error) {
                console.log(error)
                toast.error("Something went wrong!");
              }
            } else {
              setSelectedImage(null);
              toast.error(`${isFrom === "category"? "1:1" : "4:5"} Dimension not matched`)
            }
          };
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDelete = async () => {
    try {
      const { data } = (await deleteImage({
        publicId: selectedImage?.publicId!,
      })) as { data: APIRequestType };
      if (data.success) {
        toast.success(data.message);
        setSelectedImage(null);
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <div className="w-full my-4">
      <span className="text-lg font-semibold">{name}</span>
      <div className="w-full text-primary-color cursor-pointer flex-1 text-xl gap-2 border-2 border-secondary-color_3 py-3 px-2 max-md:py-2 max-md:px-1 hover:border-primary-color hover:shadow-lg shadow-primary-color on_focus transition-all duration-200 text-secondary-color_3 flex items-center justify-start">
        <input
          ref={imageref}
          type={"file"}
          accept="image/jpg, image/png"
          onChange={handleOnChange}
          className={`hidden`}
        />
        <div
          onClick={() => imageref.current?.click()}
          className="w-[100px] h-[125px] smooth_transition hover:shadow-md flex items-center justify-center rounded-md bg-white border"
        >
          <FaPlus className="w-[30px] h-[30px] text-primary-color" />
        </div>
        {selectedImage ? (
          <div className="w-[100px] h-[125px] flex bg-white items-center justify-center rounded-md relative">
            <Image
              src={selectedImage.data}
              alt="image"
              width={100}
              height={125}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                handleDelete();
              }}
              className="absolute top-[6px] right-[6px] rounded-full bg-primary-color"
            >
              <IoCloseOutline className="text-white w-4 h-4" />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SingleImageForm;
