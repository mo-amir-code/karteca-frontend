"use client"
import Empty from "@/components/notfound/Empty"
import ProductCard from "@/components/productCard"
import { useAppSelector } from "@/redux/hooks"
import { useGetUserWishlistQuery } from "@/redux/queries/user/userAPI"
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice"
import toast from "react-hot-toast"

const Wishlist = () => {
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const {data, isSuccess, isError} = useGetUserWishlistQuery(loggedInUserId!);

  if(isError && loggedInUserId){
    toast.error("Something went wrong!");
  }

  return (
    <div className="space-y-6">
      <h4 className="font-medium">Wishlist</h4>
      {isSuccess && !!data?.data?.length? <div className="flex items-center gap-2 flex-wrap" >
        {
          data.data.map((item:ProductCardType) => (
            <ProductCard key={item._id} data={item} />
          ))
        }
      </div> : <div className="w-full flex items-center justify-center max-md:min-h-[50vh]" ><Empty /></div>}
    </div>
  )
}

export default Wishlist