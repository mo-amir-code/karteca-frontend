import React from 'react'
import Plans from "@/components/premiums"

const Pricing = () => {
  return (
    <div>
        <Plans />
    </div>
  )
}

export async function generateMetadata() {
  return {
    title: "Karteca - Pricing",
    description: "Unlock your full potential",
  };
}


export default Pricing;
