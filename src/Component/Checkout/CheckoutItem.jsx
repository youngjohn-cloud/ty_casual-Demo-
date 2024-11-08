import React,{useContext} from 'react';
import './CheckoutItem.css';
import { ShopContext } from '../../Context/ShopContext';
import payment from "../Assets/images/paystack-yc.png"

export const CheckoutItem = () => {
  const {getTotalCartAmount,AllProducts,cartItems} = useContext(ShopContext);
  function currencyformat(x){
    return x.toLocaleString('en-Ng' , {style: "currency" , currency: "NGN"});
  }

  return (
    <>
      {/* Checkout page */}
      <section className='Sect-checkout'>

      <div className="small-container">
        <div className="checkout">
          <div className="bill-Detail">
            <h3>Billing details</h3>
            {/* Personal Information form handling */}
            <form action="">
             <div className="form-detail">
                  <div className="form-spacing two-row">
                    <label>First name</label>
                    <input className="twoRow-input" type="text" placeholder="" />
                  </div>
                  <div className="form-spacing two-row">
                    <label>Last name</label>
                    <input className="twoRow-input" type="text" />
                  </div>
                
                {/* street address */}
                <div className="form-spacing one-input">
                  <label>Street address</label>
                  <input type="text" placeholder="House Number and street name"
                  />
                </div>
                <div className="form-spacing one-input">
                  <input type="text" placeholder="Apartment, suite, unit, etc. (optional)"
                  />
                </div>
                <div className="form-spacing one-input">
                  <label>Town/City</label>
                  <input type="text" />
                </div>
                <div className="form-spacing one-input">
                  <label>State</label>
                  <select className="one-input" name="" id="" placeholder="Select an option">
                    <option value="">Lagos</option>
                    <option value="">Abia</option>
                    <option value="">Abuja</option>
                    <option value="">Adamawa</option>
                  </select>
                </div>
                  <div className="form-spacing two-row">
                    <label>Phone</label>
                    <input type="tel" placeholder="" />
                  </div>
                  <div className="form-spacing two-row">
                    <label>Email address</label>
                    <input type="email" />
                  </div>
               
               </div>
              </form>
          </div>
        {/* order Summary Details */}
          <div className="order-summary col-order">
            <h3>Order Summary</h3> 
            <table className='checkout-table'>
            {AllProducts.map((e)=>{
                if(cartItems[e.id] > 0){
                  return <tbody>
                    <tr className='cart-items'>
                      <td className='product-info'>
                        <div className="product-wrapper">
                          <div className="product-thumbnail"> <img style={{width:'60px',height:'90px',objectFit:'cover',marginRight:'10px'}} src={e.image} alt="" /></div>
                          <div className="product-name">{e.Track}  <span className='product-quantity'>x{cartItems[e.id]}</span></div>
                        </div>
                      </td>
                      <td className='product-total'>
                        <div className='All-price'>
                          {currencyformat(e.price*cartItems[e.id])}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                }
            })}
            <tfoot>
              <tr className='cart-items'>
                <th className='product-info cartTotal' >Total</th>
                <td className='CartTotal-value'><strong>{currencyformat(getTotalCartAmount())}</strong></td>
              </tr>
            </tfoot>
            </table>
            <h3 className='payment-heading'>Payment information</h3>
          <div className="checkout-payment">
            <ul>
              <li>
                <div className="payment-wrap">
                  <input type="radio" name="" id="" style={{display:'none'}} />
                  <label className='payment-pic'>
                    <span className='title-name'>Online Payment</span>
                    <span className='payment-icon'><img src={payment} alt="" /></span>
                  </label>
                </div>
                <div className="payment_method">
                  <p>Make payment using your Bank Transfer, USSD, Debit and Credit cards</p>
                </div>
              </li>
            </ul>
            <div className="place-order">
              <div className="privacy-policy">
                <p className="payment_method">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
              </div>
              <button className='view-item order-button'>Place order</button>
            </div>
          </div>
          </div>
       </div>
      </div>
      </section>
    </>
  );
};