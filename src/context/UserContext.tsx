import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";

export interface UserContextReducerType {
  name: string | undefined;
  isNameDisable: boolean;
  gender: "male" | "female" | "transgender" | undefined;
  isEmailDisable: boolean;
  email: string | undefined;
  isGenderDisable: boolean;
  phone: string | undefined;
  isPhoneDisable: boolean;
  selectedAddress: string | null;
  selectedPaymentMode: string,
  itemTotalAmount: number,
  isChangePassword: boolean,
  wallet?: {
    name: string,
    amount: number
  } | null
}

const userContextReducerInitialeValue = {
  name: undefined,
  isNameDisable: true,
  gender: undefined,
  isEmailDisable: true,
  email: undefined,
  isGenderDisable: true,
  phone: undefined,
  isPhoneDisable: true,
  selectedAddress: null,
  selectedPaymentMode: "online",
  itemTotalAmount:0,
  isChangePassword: false,
};

interface UserContextType extends UserContextReducerType {
  dispatch: Function;
  isAddressEdit: string | null,
  setIsAddressEdit: Function,
}

const userContextInitialValue = {
  ...userContextReducerInitialeValue,
  dispatch: () => {},
  isAddressEdit: null,
  setIsAddressEdit: () => {}
};

const UserContext = createContext<UserContextType>(userContextInitialValue);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAddressEdit, setIsAddressEdit] = useState<string | null>(null)
  const reducer = (
    state: UserContextReducerType,
    action: { type: string; payload: any }
  ) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.payload };
      case "nameedit":
        return { ...state, isNameDisable: !state.isNameDisable, isGenderDisable: !state.isGenderDisable };
      case "gender":
        return { ...state, gender: action.payload };
      case "email":
        return { ...state, email: action.payload };
      case "emailedit":
        return { ...state, isEmailDisable: !state.isEmailDisable };
      case "phone":
        return { ...state, phone: action.payload };
      case "phoneedit":
        return { ...state, isPhoneDisable: !state.isPhoneDisable };
      case "disableedit":
        return { ...state, isPhoneDisable: true, isNameDisable: true, isEmailDisable: true, isGenderDisable:true};
      case "selectAddress":
        return {...state, selectedAddress: action.payload};
      case "selectPaymentMode":
        return {...state, selectedPaymentMode: action.payload};
      case "itemsTotalAmount":
        return {...state, itemTotalAmount: action.payload};
      case "changePassword":
        return {...state, isChangePassword: action.payload};
      case "addWallet":
        return {...state, wallet: { name:action.payload.name, amount: action.payload.amount }};
      case "removeWallet":
        return {...state, wallet: null};
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(
    reducer,
    userContextReducerInitialeValue
  );

  return (
    <UserContext.Provider value={{ ...state, dispatch, isAddressEdit, setIsAddressEdit }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserContextProvider;
