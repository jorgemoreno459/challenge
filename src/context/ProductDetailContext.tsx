import React, {createContext, ReactNode, useEffect, useState} from 'react';

import ProductService from '../services/api/ProductService';

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export const ProductDetailContext = createContext<any>({});

export const ProductDetailProvider = ({ children }: Props) => {
    const [productDetail, setProductDetail] = useState([]);
    const [id, setId] = useState('');
    const [request, setRequest] = useState(false);
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() =>{
        if (request){
            getProductData(id);
        //     const getItemData = async () =>{
        //         const url = ENDPOINTS.BASE + ENDPOINTS.SEARCH_BY_ID + query;
        //         const res = await axios.get(url);
        //         const desc = await axios.get(`${url}/description`);
        //         const { data } = res;
        //         const { data: {plain_text: plainText} } = desc;
        //         let categories = await axios.get(`${ENDPOINTS.BASE}categories/${data.category_id}`);
        //         categories = categoryParser(categories.data);
        //         categories.push(data.title);
        //         const parsed = {
        //             author: {
        //                 ...AUTHOR
        //             },
        //             item: itemParser(data, plainText)
        //         };
        //         setItemDetails(parsed);
        //         setLoaded(true);
        //         setCategoryList(categories);
        //     };
        //     getItemData();
         }
    }, [id]);

    const getProductData = async (id:string) => {
        const productDetail = await getProductDetailById(id);
        const productDescription = await getDescriptionProductDetailById(id);
        console.log(productDetail)
        console.log(productDescription)
    }

    const getProductDetailById = (id:string) => {
        ProductService.getProductDetailById(id).then(response => {
            return response;
        }).catch(error => {
            console.log(error);
        })
    }

    const getDescriptionProductDetailById = (id:string) => {
        ProductService.getDescriptionProductDetailById(id).then(response => {
            return response;
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <ProductDetailContext.Provider
            value={{
                id,
                setRequest,
                productDetail,
                setProductDetail,
                categoryList
            }}
        >
            {children}
        </ProductDetailContext.Provider>
    );
}

export default ProductDetailProvider;