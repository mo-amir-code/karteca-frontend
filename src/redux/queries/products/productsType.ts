export interface ProductCardType{
    _id: string;
    title: string;
    price: number;
    stock: number;
    discount: number;
    thumbnail: string;
    ratingAndReviews?: RatingAndReviewsType
}

export interface RatingAndReviewsType{
  totalRating:number;
  totalReviews:number;
  avgRating:number
}

export interface ProductDetailsType extends ProductCardType{
  description: object;
  colors: string[];
  images: string[];
  highlights: string[];
  warranty: {
    serviceType: string;
    covered: string;
  };
  specifications: object;
  importantNote?: string;
}
export interface ProductCategoryWithImageType{
  name:string;
  image: string
}