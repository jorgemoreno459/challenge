import React from "react";
import useProductPage from "../hooks/useProductPage";
import Breadcrumb from "../../../components/Breadcrumb";
import Product from "../../../components/Product";

const ProductPage = () => {
    const {
        productList,
        categoryList,
        isLoading,
        sendToDetail
    } = useProductPage();

    return(
        <div className={'productListContainer'}>
            {!isLoading &&
                <div>
                    <Breadcrumb categories={categoryList}/>
                    {
                        productList?.items.map((product, index) => {
                          return(
                              <Product
                                  id={product.id}
                                  title={product.title}
                                  condition={product.condition}
                                  price={product.price}
                                  picture={product.picture}
                                  free_shipping={product.free_shipping}
                                  sendToDetail={sendToDetail}
                              />
                          )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default ProductPage;