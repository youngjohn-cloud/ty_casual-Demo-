import React, { useContext } from "react";
import './CartItems.css'
import { CiCircleRemove } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { ShopContext } from "../../Context/ShopContext";
import emptycart from "../Assets/images/empty-cart.png";
import { Link } from "react-router-dom";

const CartItems = () => {
    const {getTotalCartAmount,AllProducts,cartItems,removeFromCart} = useContext(ShopContext);
    function currencyformat(x){
        return x.toLocaleString('en-Ng' , {style: "currency" , currency: "NGN"});
      }

    return(
        <>
            <section>
                {getTotalCartAmount() === 0 ? ( 
                    <div className="cart-empty">
                        <div className="img-cart"><img src={emptycart} alt="" /></div>
                            <h2>Your cart is empty</h2>
                            <p>You may check out all the available products and buy some in the shop.</p>
                            <Link to={"/mens"}><button>Return to Shop</button></Link>
                    </div>
                ) : (
                    <><div className="cartitems">
                    <div className="ci-format-main">
                        <p>Products</p>
                        <p>Name</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <hr />
                   {AllProducts.map((e)=>{
                        if (cartItems[e.id]>0) {
                            return  <div>
                            <div className="ci-format ci-format-main">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.Track}</p>
                                <p>{currencyformat(e.price)}</p>
                                <button className="ci-quantity">{cartItems[e.id]}</button>
                                <p>{currencyformat(e.price*cartItems[e.id])}</p>
                                <CiCircleRemove className="ci-remove-icon" onClick={()=>{removeFromCart(e.id)}} />
                            </div>
                        <hr />
                        </div>
                        }
                        return null;
                   })}
                   <div className="ci-down">
                    <div className="ci-total">
                        <h1>cart Totals</h1>
                        <div>
                            <div className="ci-total-item">
                                <p>subtottal</p>
                                <p>{currencyformat(getTotalCartAmount())}</p>
                            </div>
                            <hr />
                            <div className="ci-total-item">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="ci-total-item">
                                <h3>Total</h3>
                                <h3>{currencyformat(getTotalCartAmount())}</h3>
                            </div>
                        </div>
                        <Link to={'/checkout'} onClick={() => window.scrollTo(0, 0)}><button className="ci-total-button">PROCEED TO CHECKOUT</button></Link>
                    </div>
                    <div className="ci-promocode">
                        <p>If you hav a promo code, Enter it here</p>
                        <div className="ci-promobox">
                            <input type="text" placeholder="promo code" />
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                   </div>
                </div></>
                )}
            </section>
        </>
    )
}

export default CartItems