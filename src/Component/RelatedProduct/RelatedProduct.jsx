import React from "react";
import './RelatedProduct.css';
import { Related_p } from "../Assets/images/Related_products";
import { AllProducts } from "../Assets/images/All_products";
import AllItem from "../Item/ALLitem";

const RelatedProduct = () =>{
    const FilterProduct4 = AllProducts.filter(products => products.id >= 11 && products.id <= 14);
    return(
        <>
           <section className="container-wide">
               <div className="relatedp">
                <h1>Related Products</h1>
                <hr />
                </div>
                <div className="relatedp-item">
                    {FilterProduct4.map((item,i)=>{
                        return<AllItem key={i} id={item.id}  image={item.image} Track={item.Track} price={item.price}/>
                    })}
                </div>
           </section>
             
        </>
    )
}
export default RelatedProduct