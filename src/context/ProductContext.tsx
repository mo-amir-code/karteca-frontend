import { ReactNode, createContext, useContext, useReducer } from "react";

interface ProductReducerType{
    currentPrice: number,
    totalAmount: number,
    discount: number,
    quantity: number
}

interface ProductContextType extends ProductReducerType{
    dispatch: Function
}

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
        action: { type: string; payload: any }
      ) => {
        switch (action.type) {
            case "currentPrice":
                return {...state, currentPrice: action.payload};
            case "totalAmount":
                return {...state, totalAmount: action.payload};
            case "discount":
                return {...state, discount: action.payload};
            case "quantity":
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