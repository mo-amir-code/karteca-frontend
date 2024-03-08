import ProductCard from "@/components/productCard"


const index = () => {
  return (
    <div className="space-y-6">
      <h4 className="font-medium">Wishlist</h4>
      <div className="flex items-center gap-2 flex-wrap" >
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default index