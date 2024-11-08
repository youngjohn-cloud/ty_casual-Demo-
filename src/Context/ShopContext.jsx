import React, { createContext, useState, useEffect } from "react";
import { AllProducts } from "../Component/Assets/images/All_products";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../Component/Firebase/Firebase";


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < AllProducts.length+1; index++) {
         cart[index] = 0;
    }
    return cart
}

const ShopContextProvider = (props) => {

     // user Authentication
    const auth = getAuth(app);
    const [authenticatedUser, setAuthenticatedUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if(user){
        // console.log(user);
        setAuthenticatedUser(user);
      } else{
        setAuthenticatedUser(null);
      }
    })
  },[auth])

    // user Authentication ends here

    const [cartItems,setCartItems] = useState(getDefaultCart())
    
    const addToCart = (itemID) => {
        setCartItems((prev) => ({...prev,[itemID]:prev[itemID]+1}))
        alert(`You added  to your cart!`);

        // console.log(cartItems)
    }
    const removeFromCart = (itemID)=>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item]>0)
                {
                let itemInfo = AllProducts.find((product)=> product.id ===Number(item));
                totalAmount += itemInfo.price * cartItems[item];
                }
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
               totalItem+= cartItems[item]  
            }
        }
        return totalItem
    }

    const contextValue = {getTotalCartItems,getTotalCartAmount,AllProducts,cartItems,addToCart,removeFromCart,authenticatedUser};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider