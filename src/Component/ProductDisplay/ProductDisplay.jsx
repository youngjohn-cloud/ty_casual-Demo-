import React, { useContext } from "react";
import './ProductDisplay.css'
import { MdOutlineStarOutline } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
    function currencyformat(x){
        return x.toLocaleString('en-Ng' , {style: "currency" , currency: "NGN"});
      };
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

    return(
        <>
          <section className="">
              <div className="productdisplay container-wide">
                <div className="pd-left">
                    <div className="pd-img-list">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="pd-img">
                        <img style={{aspectRatio:'570/798',objectFit:'cover',objectPosition:'top'}} src={product.image} alt="" />
                    </div>
                </div>
                <div className="pd-right">
                    <h1>{product.Track}</h1>
                    <div className="pd-right-star">
                    <IoStarSharp style={{color:'#ff4545'}}/>
                    <IoStarSharp style={{color:'#ff4545'}}/>
                    <IoStarSharp style={{color:'#ff4545'}}/>
                    <IoStarSharp />
                    <MdOutlineStarOutline />
                    <p>122</p>
                    </div>
                    <div className="pd-right-price">
                    {currencyformat(product.price)}
                    </div>
                    <div className="pd-right-desc">
                        {product.desc}
                    </div>
                    <div className="variation">
                        <div className="variation-label">
                          <p>Size:</p>
                        </div>
                        <select className="dropdownSelect" name="" id="">
                            <option value>Choose an option</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>
                    <button id="addtoCart" onClick={()=>{addToCart(product.id)} } >ADD TO CART</button>
                    <p className="pd-right-category"><span>Category :</span> men Long Sleeve Native</p>
                    <p className="pd-right-category"><span>Tags :</span> Modern,Latest</p>
                </div>
              </div>
          </section>
        </>
    )
}
export default ProductDisplay