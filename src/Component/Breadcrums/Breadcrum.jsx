import React from "react"
import "./Breadcrum.css"
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

 const BreadCrum = (props) => {
    const {product} = props
    return(
        <>
            <div className="breadcrum">
               <Link to='/' style={{textDecoration:'none',color:'#5e5e5e'}}> Home </Link> <IoIosArrowForward /> <Link to='/men' style={{textDecoration:'none',color:'#5e5e5e'}}> Products </Link>  <IoIosArrowForward /> <Link to='/men' style={{textDecoration:'none',color:'#5e5e5e'}}>  SHOPMEN </Link><IoIosArrowForward />{product.id} <IoIosArrowForward/> {product.Track}
            </div>
        </>
    )
}
export default BreadCrum