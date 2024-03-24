export interface UpdateUserType {
    userId: string,
    name:string,
    gender:string,
    email:string,
    phone:string
}

export interface UserAddressFormType{
    name: string;
    email: string;
    address: string;
    state: string;
    city: string;
    postalCode: number;
    phone: number;
    type: string;
}

export interface UserAddressType extends UserAddressFormType{
    _id: string;
    userId: string;
  }