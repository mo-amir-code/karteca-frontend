"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import ProductButton from "../buttons/ProductButton";
import { useRouter } from "next/navigation";
import { APICartType } from "@/redux/queries/cart/cartTypes";
import { useAppSelector } from "@/redux/hooks";
import {
  selectIsUserLoggedIn,
  selectLoggedInUserId,
} from "@/redux/slices/auth/authSlice";
import { useQueryContext } from "@/context/QueryContext";
import toast from "react-hot-toast";
import { useAddToCartMutation } from "@/redux/queries/cart/cartAPI";
import { APIRequestType } from "@/redux/RootTypes";
import { IoMdHeart } from "react-icons/io";
import { selectUserWishlistItems } from "@/redux/slices/user/userSlice";
import { isItemExist } from "@/utils/services";
import {
  useAddUserWishlistItemMutation,
  useDeleteUserWishlistItemMutation,
} from "@/redux/queries/user/userAPI";
import { useProductContext } from "@/context/ProductContext";
import Slider, { Settings } from "react-slick";
import "../heroSlider/slider.css";

const Images = ({
  productThumbnail,
  productImages,
  productId,
}: {
  productThumbnail: string;
  productImages: string[];
  productId: string;
}) => {
  const [isWishlist, setIsWishlist] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([
    productThumbnail,
    ...productImages,
  ]);
  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const userWishlistItems = useAppSelector(selectUserWishlistItems);
  const [addItemToUserWishlist] = useAddUserWishlistItemMutation();
  const [deleteItemFromUserWishlist] = useDeleteUserWishlistItemMutation();
  const router = useRouter();
  const sliderRef = useRef<Slider>(null);

  const handleScrollByImageSelection = (idx: number) => {
    // let newThumbnail = thumbnail;
    // let newImages = [...images];
    // setThumbnail(newImages[idx]);
    // newImages[idx] = newThumbnail;
    // setImages(newImages
    if(sliderRef.current){
      sliderRef.current.slickGoTo(idx);
    }
  };

  const handleFavourite = async () => {
    try {
      if (isUserLoggedIn) {
        if (isWishlist) {
          setIsWishlist(false);
          await deleteItemFromUserWishlist({
            userId: loggedInUserId!,
            productId,
          });
        } else {
          setIsWishlist(true);
          await addItemToUserWishlist({ userId: loggedInUserId!, productId });
        }
      } else router.push("/auth/signin");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      setIsWishlist(isItemExist(productId, userWishlistItems));
    }
  }, [userWishlistItems]);

  const settings: Settings = {
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="w-full relative flex max-sm:flex-col-reverse gap-2 smooth_transition">
        <div className="max-sm:w-full max-h-[400px] overflow-auto flex sm:flex-col items-center gap-1">
          {images?.map((image, idx) => (
            <Image
              key={idx}
              src={image}
              alt="product"
              className="cursor-pointer"
              width={60}
              height={60}
              onClick={()=>handleScrollByImageSelection(idx)}
            />
          ))}
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-[340px] h-[425px]">
            <Slider ref={sliderRef} {...settings}>
              {images.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt="product"
                  className="object-cover"
                  width={500}
                  height={500}
                />
              ))}
            </Slider>
          </div>
        </div>
        <span
          onClick={() => handleFavourite()}
          className="absolute top-2 right-6"
        >
          <IoMdHeart
            size={30}
            className={`${
              isWishlist ? "text-red-color" : "text-tertiary-color"
            }`}
          />
        </span>
      </div>
      <ProductActionButton />
    </>
  );
};

export const ProductActionButton = () => {
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);
  const router = useRouter();
  const { queries, productId } = useQueryContext();
  const { currentPrice, totalAmount, discount } = useProductContext();
  const [addToCart] = useAddToCartMutation();

  const handleCart = useCallback(
    async (type: string) => {
      if (!isUserLoggedIn || !loggedInUserId) {
        router.push("/auth/signin");
        return;
      }

      if (!productId || currentPrice === 0 || totalAmount === 0) {
        toast.error("Something gone wrong!");
        return;
      }

      const color = queries.get("color");
      const quantity = queries.get("quantity");

      const cartData: APICartType = {
        userId: loggedInUserId,
        product: productId,
        color: color,
        quantity: quantity,
        totalAmount,
        currentPrice,
        discount,
      };

      const { data: res, error } = (await addToCart(cartData)) as {
        data: APIRequestType;
        error: { data: APIRequestType; status: number };
      };

      if (res?.success) {
        toast.success(res.message);
      }

      if (error && type !== "buy") {
        toast.error(error.data.message);
      }

      if (type === "buy") router.push("/user/cart");
    },
    [
      totalAmount,
      queries,
      addToCart,
      isUserLoggedIn,
      loggedInUserId,
      currentPrice,
      discount,
      productId,
    ]
  );

  return (
    <div className="flex items-center bottom_to_top_ani gap-1">
      <ProductButton text="ADD TO CART" icon="cart" btnAction={handleCart} />
      <ProductButton text="BUY NOW" icon="buy" btnAction={handleCart} />
    </div>
  );
};

export default Images;
