"use client"
import Image from "next/image";
import { useCallback, useState } from "react";
import ProductButton from "../buttons/ProductButton";
import { useRouter } from "next/navigation";
import { APICartType } from "@/redux/queries/cart/cartTypes";
import { useAppSelector } from "@/redux/hooks";
import { selectIsUserLoggedIn, selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import { useQueryContext } from "@/context/QueryContext";
import toast from "react-hot-toast";
import { useAddToCartMutation } from "@/redux/queries/cart/cartAPI";
import { APIRequestType } from "@/redux/RootTypes";

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
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);
  const router = useRouter();
  const {queries, productId} = useQueryContext();
  const [addToCart] = useAddToCartMutation();
  

  const handleCart = useCallback(async (type:string) => {
    if(!isUserLoggedIn || !loggedInUserId){
      router.push("/auth/signin");
      return;
    }

    if(!productId){
      toast.error("Something gone wrong!");
      return;
    }

    const color = queries.get("color");
    const quantity = queries.get("quantity");
    const discount = queries.get("discount");
    const currentPrice = queries.get("currentprice");
    const totalAmount = queries.get("totalamount");

    const cartData:APICartType = {
      userId: loggedInUserId,
      product: productId,
      color: color!,
      quantity: parseInt(quantity!),
      totalAmount,
      currentPrice,
      discount
    }

    const {data:res, error:{data:errorRes}} = await addToCart(cartData) as {data: APIRequestType, error: {data: APIRequestType, status: number}}

    if(res?.success){
      toast.success(res.message);
    }

    if(errorRes && type !== "buy"){
      toast.error(errorRes.message);
    }

    if(type === "buy") router.push("/user/cart");

  }, []);


  return (
    <div className="flex items-center gap-1">
      <ProductButton text="ADD TO CART" icon="cart" btnAction={handleCart} />
      <ProductButton text="BUY NOW" icon="buy" btnAction={handleCart} />
    </div>
  );
};


export default Images;
