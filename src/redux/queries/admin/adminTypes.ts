

export interface WithdrawalRequestVerificationType{
    withdrawalRequestId: string,
    utrId: string,
    withdrawalStatus: "success" | "failed" | "verified" | "pending" | "processing",
    upi: string
}

export interface ProductFormType {
    title: string;
    description: string;
    price: number;
    stock: number;
    colors: string[] | string;
    discount: number;
    highlights: string[] | string;
    importantNote: string;
    warrantyType: string;
    warrantyCover: string;
  }

export interface ProductCreateType extends ProductFormType{
  thumbnail: {
    url:string,
    publicId: string
  };
  images: {
    url:string,
    publicId:string
  }[];
  category: {
    parent: string;
    child: string
  };
  warranty?: {
    serviceType: string;
    covered: string;
  };
  specifications: object;
}

export interface CreateCategoryType {
  parentName: string;
  childName: string;
  parentImage: ImageType;
  childImage: ImageType;
}

type ImageType = {
  url: string;
  publicId: string;
}

export interface CreateAdminType {
  email: string,
  upi: string
}
