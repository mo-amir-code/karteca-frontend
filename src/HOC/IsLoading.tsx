import Error from "@/components/error/Error";
import Loader from "@/components/loader/Loader";
import { ReactNode } from "react";
import toast from "react-hot-toast";

const IsLoading = ({
  children,
  isLoading,
  isSuccess,
  isError
}: {
  children: ReactNode;
  isLoading: boolean;
  isSuccess?:boolean,
  isError?: boolean
}) => {


  if (isLoading) {
    return (
      <div className="h-[300px] flex items-center justify-center w-full">
        <Loader />
      </div>
    );
  }



  if(isError && !isSuccess){
    toast.error("Something went wrong!");
    return <Error />
  }

  return children;
};

export default IsLoading;
