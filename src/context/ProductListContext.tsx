import {createContext, ReactNode, useEffect, useState} from 'react';

import ProductService from '../services/api/ProductService';

interface Props {
    children?: ReactNode
}

export const ProductListContext = createContext<any>({});

export const ProductListProvider = ({ children }: Props) => {

    const [productList, setProductList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isRequest, setIsRequest] = useState(false);

    useEffect(() =>{
        if (isRequest){
            console.log(searchQuery)
            setProductList([]);
            setCustomData(searchQuery);
        }
    }, [searchQuery]);

    const setCustomData = async (search:string) => {

        const response = await getProductList(search);
        console.log('list',response)
        // const customResponse = {
        //     author: {
        //         ...environment.author
        //     },
        //     categories: categoryParser(response?.data),
        //     items: customProductList(response?.data.results.slice(0,ITEM_AMOUNT))
        // };
    }

    const getProductList = async (text:string) => {
        ProductService.getResultSearchList(text).then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    }

    return(
        <ProductListContext.Provider
            value={{
                productList,
                categoryList,
                setSearchQuery,
                setIsRequest
            }}
        >
            {children}
        </ProductListContext.Provider>
    )
}

export default ProductListProvider;