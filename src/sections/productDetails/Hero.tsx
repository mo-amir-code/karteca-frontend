import Images from "@/components/productDetails/Images";
import ProductDetails from "@/components/productDetails/ProductDetails";
import { ProductDetailsType } from "@/redux/queries/products/productsType";

export interface ProductDetailsHeroType{
  data:ProductDetailsType, 
  totalRating:number, 
  totalReviews:number,
  avgRating:number
}

const Hero = ({data, totalRating, totalReviews, avgRating}:ProductDetailsHeroType) => {
  return (
    <div className="flex bg-white max-[900px]:flex-col box-border p-3 max-md:px-0 gap-4">
      <div className="w-[700px] max-[900px]:w-full rounded-lg space-y-2 box-border">
        <Images productId={data._id} productThumbnail={data.thumbnail} productImages={data.images} />
      </div>
      <div className="flex-grow w-full">
        <ProductDetails data={data} totalRating={totalRating} totalReviews={totalReviews} avgRating={avgRating} />
      </div>
    </div>
  );
};
export default Hero;
