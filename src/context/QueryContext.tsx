import { createURL } from "@/utils/services";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode, createContext, useContext } from "react";

interface QueryContextType{
    queries: any,
    handleSetQueries: Function,
    productId: string | null
}

const queryContextInitialValue = {
    queries: ()=>{},
    handleSetQueries: () => {},
    productId: null
}


const QueryContext = createContext<QueryContextType>(queryContextInitialValue);



const QueryContextProvider = ({children}:{children:ReactNode}) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const {productId} = useParams();
    const queries = new URLSearchParams(searchParams.toString());

    const handleSetQueries = () => {
        const queryUrl = createURL(pathname, queries);
        router.push(queryUrl, { scroll: false });
    }

    return (
        <QueryContext.Provider value={{queries, handleSetQueries, productId: productId as string}} >
            {children}
        </QueryContext.Provider>
    )
}

export const useQueryContext = () => useContext(QueryContext);


export default QueryContextProvider;