import Addresses from "../userprofile/manageAddresses/Addresses"
import Form from "./Form"


const FormArea = () => {
   

    return (
        <div className="flex-[0.65] w-full mx-2 max-md:mx-0 py-2 space-y-4" >
            <div className="space-y-8" >
                {/* add address */}
                <div className="space-y-2 px-6 py-6 shadow-md bg-white rounded-lg" >
                    <h2 className="text-xl font-semibold max-md:text-lg max-sm:text-base" >Add Address</h2>
                    <Form />
                </div>

                {/* Select Address */}
                <div className="space-y-2 px-6 py-6 bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-semibold max-md:text-lg max-sm:text-base" >Select Address</h2>
                    <Addresses isCheckout={true} />
                </div>
            </div>
        </div>
    )
}

export default FormArea