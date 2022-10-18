import React from "react";
import '../assets/sass/product/Product.scss';

interface item {
    id: string;
    title: string;
    price: {
        currency: string,
        amount: number,
        decimals: number
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
    sendToDetail: (id:string) => void
}


const Product = ({id,title,price,picture, condition, free_shipping, sendToDetail} : item ) => {
    return(
        <div className={'row'} key={id}>
            <div className={'productImageContainer'}>
                <img src={picture} alt={title} onClick={() => sendToDetail(id)} />
            </div>
            <div className={'productDetailContainer'}>
                <h1>$ {price.amount}</h1>
                <span>{title}</span>
            </div>
            <div className={'ProductCondition'}>
                <span>{condition}</span>
            </div>
        </div>
    )
}

export default Product;