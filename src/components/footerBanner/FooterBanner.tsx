import Image from "next/image"
import banner from "@/assets/slider/1.png"


const FooterBanner = () => {
  return (
    <div className="pt-6" >
        <Image src={banner} alt="Footer banner" />
    </div>
  )
}

export default FooterBanner