import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";

interface ProductReducerType{
    currentPrice: number,
    totalAmount: number,
    discount: number,
    quantity: number
}

interface ProductContextType extends ProductReducerType{
    dispatch: Dispatch<ProductAction>
}

enum ProductActionTypes {
    UpdateCurrentPrice = "currentPrice",
    UpdateTotalAmount = "totalAmount",
    UpdateDiscount = "discount",
    UpdateQuantity = "quantity",
}

// Define action interfaces
interface UpdateCurrentPriceAction {
    type: ProductActionTypes.UpdateCurrentPrice;
    payload: number;
}

interface UpdateTotalAmountAction {
    type: ProductActionTypes.UpdateTotalAmount;
    payload: number;
}

interface UpdateDiscountAction {
    type: ProductActionTypes.UpdateDiscount;
    payload: number;
}

interface UpdateQuantityAction {
    type: ProductActionTypes.UpdateQuantity;
    payload: number;
}

type ProductAction =
    | UpdateCurrentPriceAction
    | UpdateTotalAmountAction
    | UpdateDiscountAction
    | UpdateQuantityAction;

const productReducerInitialValue = {
    currentPrice: 0,
    totalAmount: 0,
    discount: 0,
    quantity: 1
}

const productContextInitialValue = {
    ...productReducerInitialValue,
    dispatch: () => {}
}


const ProductContext = createContext<ProductContextType>(productContextInitialValue);



const ProductContextProvider = ({children}:{children:ReactNode}) => {
    const reducer = (
        state: ProductReducerType,
        action: ProductAction
      ) => {
        switch (action.type) {
            case ProductActionTypes.UpdateCurrentPrice:
                return {...state, currentPrice: action.payload};
            case ProductActionTypes.UpdateTotalAmount:
                return {...state, totalAmount: action.payload};
            case ProductActionTypes.UpdateDiscount:
                return {...state, discount: action.payload};
            case ProductActionTypes.UpdateQuantity:
                return {...state, quantity: action.payload};
          default:
            return state;
        }
      };
    
      const [state, dispatch] = useReducer(
        reducer,
        productReducerInitialValue
      );
    
    return (
        <ProductContext.Provider value={{...state, dispatch}} >
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => useContext(ProductContext);


export default ProductContextProvider;