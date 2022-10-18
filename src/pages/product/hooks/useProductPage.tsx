import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import ProductService from "../../../services/api/ProductService";
import {environment} from "../../../environments/environment";
import {customProductList, getCategoryList} from "../../../helpers/utils/customProductResponse";

const initialValues = {
    author: { name:'',lastname:''},
    categories:[''],
    items: [
        {
            id:'',
            title:'',
            price:{currency:'', amount: 0, decimals: 0},
            picture: '',
            condition:'',
            free_shipping: false,
        }
    ]
};

const useProductPage = () => {

    const [productList, setProductList] = useState(initialValues);
    const [categoryList, setCategoryList] = useState(['']);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() =>{
        const search = location.state?.search;
        if (search !== ''){
            getProductList(search);
        }
    }, [location?.state]);

    const getProductList = (text:string) => {
        ProductService.getResultSearchList(text).then(response => {
            const hasCategory = response?.available_filters.find((filter:any) => filter.id === "category");
            const categories = getCategoryList(hasCategory,response)
            const customResponse : any = {
                author: {
                    ...environment.author
                },
                categories: categories,
                items: customProductList(response?.results.slice(0,4))
            };

            setProductList({...customResponse})
            setCategoryList([...categories]);
            setIsLoading(false);

        }).catch(error => {
            console.log(error)
        })
    }

    const sendToDetail = (productId:string) => {
        navigate(`/items/${productId}`,{state:{productId:productId}})
    }

    return {
        location,
        productList,
        categoryList,
        isLoading,
        sendToDetail
    }
}

export default useProductPage;