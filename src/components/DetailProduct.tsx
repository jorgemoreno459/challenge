import React from "react";
import '../assets/sass/productDetail/detail.scss';

interface detailProduct {
    picture:string,
    title:string,
    condition:string,
    sold_quantity:number,
    price:number,
    description:string
}
const DetailProduct = (
    {
        title, price, description,
        picture, condition, sold_quantity
    }:detailProduct
) => {
    return(
        <div className={'detailContainer'}>
            <div className={'row'}>
                <img src={picture} alt={title} />
                <div className={'rowDetail'}>
                    <span>{condition === 'new' && 'Nuevo -'} {sold_quantity} vendidos</span>
                    <h3>{title}</h3>
                    <h1>{price}</h1>
                    <button type='button'>Comprar</button>
                </div>
            </div>
            <div className={'row'}>
                <div className={'description'}>
                    <h2>Descripción del producto</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct;