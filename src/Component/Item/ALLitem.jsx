import React from "react";
import { Link } from "react-router-dom";
import "./item.css"


const  AllItem = (props) => {
    function currencyformat(x){
        return x.toLocaleString('en-Ng' , {style: "currency" , currency: "NGN"});
      }
    return(
        <>
            <div className="shopcategory-Products">
                <div className="image">
                    <Link to={`/product/${props.id}`}><img onClick={() => window.scrollTo(0, 0)} src={props.image} alt="" />
                    </Link>
                </div>
                <div className="All-id" style={{color:'black'}}>
                    {props.Track}
                </div>
                <div className="All-price">
                    <p>{currencyformat(props.price)}</p>
                </div>
            </div>
        </>
    )
}
export default AllItem