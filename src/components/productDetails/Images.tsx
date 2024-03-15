"use client"
import Image from "next/image";
import { useCallback, useState } from "react";
import ProductButton from "../buttons/ProductButton";
import { useSearchParams } from "next/navigation";

const Images = ({productThumbnail, productImages}:{productThumbnail:string, productImages:string[]}) => {
  const [thumbnail, setThumbnail] = useState<string>(productThumbnail);
  const [images, setImages] = useState<string[]>(productImages);


  const handleChangeMainImage = (idx:number) => {
    let newThumbnail = thumbnail;
    let newImages = [...images];
    setThumbnail(newImages[idx]);
    newImages[idx] = newThumbnail;
    setImages(newImages);
  }


  return (
    <>
    <div className="w-full flex max-sm:flex-col-reverse gap-2 smooth_transition">
      <div className="flex-[0.15] overflow-auto flex sm:flex-col items-center justify-between gap-1 overflow-y-auto">
        {images?.map((image, idx) => (
          <div
            key={idx}
            onClick={()=>handleChangeMainImage(idx)}
            className="border-2 border-transparent hover:border-primary-color smooth_transition"
          >
            <Image src={image} alt="product" className="cursor-pointer" width={60} height={60} />
          </div>
        ))}
      </div>
      <div className="flex-[0.85] flex items-center justify-center">
        <Image src={thumbnail} alt="product" className="object-cover" width={500} height={500} />
      </div>
    </div>
    <ProductActionButton />
    </>
  );
};

export const ProductActionButton = () => {  
  const searchParams = useSearchParams();
  const queries = new URLSearchParams(searchParams.toString());

  const handleCart = useCallback(() => {
    const color = queries.get("color");
    
  }, []);

  const handleBuyNow = useCallback(() => {
    
  }, []);


  return (
    <div className="flex items-center gap-1">
      <ProductButton text="ADD TO CART" icon="cart" btnAction={handleCart} />
      <ProductButton text="BUY NOW" icon="buy" btnAction={handleBuyNow} />
    </div>
  );
};


export default Images;
