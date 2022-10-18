import React from "react";
import useDetailProductPage from "../hooks/useDetailProductPage";
import DetailProduct from "../../../components/DetailProduct";

const DetailProductPage = () => {
    const {
        customResponse,
        isLoading
    } = useDetailProductPage();

    return(
        <div>
            { !isLoading &&
                <DetailProduct
                    picture={customResponse?.item?.picture}
                    title={customResponse?.item?.title}
                    condition={customResponse?.item?.condition}
                    sold_quantity={customResponse?.item?.sold_quantity}
                    price={customResponse?.item?.price.amount}
                    description={customResponse?.item?.description}
                />
            }
        </div>
    )
}

export default DetailProductPage;