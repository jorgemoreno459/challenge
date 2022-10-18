export interface Product {
    id:string;
    title:string;
    price:Price;
    picture: string;
    condition:string;
    free_shipping: boolean;
    sold_quantity?: number;
    description?: string;
}
interface Products {
    id:string;
    title:string;
    currency_id:string;
    price:number;
    thumbnail: string;
    condition:string;
    shipping: shipping;
    sold_quantity?:number
}

type shipping = {
    free_shipping: boolean
}
type Price = {
    currency:string;
    amount: number;
    decimals: number;
}

export const setDecimals = (currencyId:string) =>{
    switch(currencyId){
        case 'ARS':
            return 2;
        default:
            return 2;
    }
};

export const customProductList = (products:Array<Products>) => {
    if(!products.length) return [];
    const itemList: Array<object> = [];
    products.map((product) => {
        const item : Product = {
            id: product.id,
            title: product.title,
            price: {
                currency: product.currency_id,
                amount: product.price,
                decimals: setDecimals(product.currency_id)
            },
            picture: product.thumbnail,
            condition: product.condition,
            free_shipping: product.shipping.free_shipping,
        }
        itemList.push(item);
        return true;
    });
    return itemList;
};

export const getCategoryList = (existCategory:boolean, data:any) => {
    return existCategory !== undefined ?
        data.available_filters.find(
            (filter:any) => filter.id ==="category")
            .values.sort((a:any,b:any) => b.results - a.results)
            .map((result:any) => result.name) : []
}

export const customProduct = (product:any, description:string) => {
    const newProduct : Product = {
        id: product.id,
        title: product.title,
        price: {
            currency: product.currency_id,
            amount: product.price,
            decimals: setDecimals(product.currency_id)
        },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
        sold_quantity: product.sold_quantity,
        description:description
    }
    return newProduct
};