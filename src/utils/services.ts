export const shortProductTitle = ({title}:{title:string}) => {
    return `${title.slice(0, 18)}...`
}

// export const calculateDiscountedPrice = (price:number | undefined, discount:number | undefined) => {
//     try {
//       if(price && discount){
//         const finalPrice = parseFloat((price - (discount*price)/100).toFixed(2));
//         return finalPrice;
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   }