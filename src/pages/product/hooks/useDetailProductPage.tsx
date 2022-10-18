import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import ProductService from "../../../services/api/ProductService";
import {environment} from "../../../environments/environment";
import { customProduct } from "../../../helpers/utils/customProductResponse";

const detail = {
    author: { name:'',lastname:''},
    item: {
        id:'',
        title:'',
        price:{currency:'', amount: 0, decimals: 0},
        picture: '',
        condition:'',
        free_shipping: false,
        sold_quantity: 0,
        description: ''
    }
};

const useDetailProductPage = () => {

    const location = useLocation();
    const [productDetail, setProductDetail] = useState({});
    const [description, setDescription] = useState('');
    const [id] = useState(location.pathname.split('/')[2]);
    const [customResponse, setCustomResponse] = useState(detail);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        if (id !== '' && isLoading){
            getProductDetailById(id);
            getDescriptionProductDetailById(id);
        }
        if(!isLoading) getProductData();
    }, [id !== '', !isLoading]);

    const getProductData =  () => {

        const customResponse : any= {
            author: {
                ...environment.author
            },
            item: customProduct(productDetail, description)
        };

        setCustomResponse(customResponse)
        setIsLoading(false)
    }

    const getProductDetailById = (id:string) => {
        ProductService.getProductDetailById(id).then(response => {
            setProductDetail({...response})
            setIsLoading(false)

        }).catch(error => {
            console.log(error);
        })
    }

    const getDescriptionProductDetailById = (id:string) => {
        ProductService.getDescriptionProductDetailById(id).then(response => {
            setDescription(response.plain_text)
        }).catch(error => {
            console.log(error);
        })
    }

    return {
        customResponse,
        isLoading
    }
}

export default useDetailProductPage;