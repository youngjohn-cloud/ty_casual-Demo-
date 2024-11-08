import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Component/Breadcrums/Breadcrum";
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Component/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Component/RelatedProduct/RelatedProduct";



const Product = () => { 
    const {AllProducts} = useContext(ShopContext);
    const {productId} = useParams();
    const product = AllProducts.find((e) => e.id === Number(productId));
    return(
        <>
            <BreadCrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProduct/>
        </>
    )
}
export default Product