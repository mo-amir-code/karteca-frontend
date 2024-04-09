import { ComponentType } from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/loader/Loader";

const withLoadingIndicator = (
  importComponent: () => Promise<{ default: ComponentType<any> }>
) =>
  dynamic(() => importComponent(), {
    loading: () => <Loader />,
  });


const page = () => {
  return (
    <div className="space-y-3">
      <DynamicImport />
    </div>
  );
};

export default page;

const DynamicImport = withLoadingIndicator(()=>import("@/app/(home)/ImportComponents"));