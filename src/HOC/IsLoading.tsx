import Loader from "@/components/loader/Loader";
import { ReactNode } from "react";

const IsLoading = ({
  children,
  isLoading,
}: {
  children: ReactNode;
  isLoading: boolean;
}) => {
  if (isLoading) {
    return (
        <div className="h-[300px] flex items-center justify-center w-full" >
            <Loader />
        </div>
    )
  }

  return children
};

export default IsLoading;
