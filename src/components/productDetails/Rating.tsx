import RatingCard from "./RatingCard";

const Rating = ({
    avgRating,
    totalRatings,
    totalReviews,
  }: {
    avgRating: number;
    totalRatings: number;
    totalReviews: number;
  }) => {
    return (
      <div className="flex items-center justify-start gap-2">
        <RatingCard avgRating={avgRating} />
        <p className="text-sm font-medium text-gray-500 mb-[2px]">
          {totalRatings} Rating & {totalReviews} Reviews
        </p>
      </div>
    );
  };
  

export default Rating