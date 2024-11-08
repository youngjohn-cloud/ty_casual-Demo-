import React, { useContext, useState } from "react";
import './CSS/ShopCategory.css'
import { IoIosArrowDropdown } from "react-icons/io";
import { ShopContext } from "../Context/ShopContext";
import AllItem from "../Component/Item/ALLitem";



const  ShopCategory=() => {
    // Naira icon
    function currencyformat(x){
        return x.toLocaleString('en-Ng' , {style: "currency" , currency: "NGN"});
      }

    const {AllProducts} = useContext(ShopContext);
    // Amount of products to display in the category
    const [visibleProducts,setVisibleProducts] = useState(12);
    // Loadmore buttons
    const loadMore = () => {
        setVisibleProducts(visibleProducts + 12);
    };
    
    // Price range state
    const [priceRange, setPriceRange] = useState({
      min: 0,
      max: Infinity
    });
    // Filter products by price range
    const filteredProducts = AllProducts.filter(product => product.price >= priceRange.min && product.price <= priceRange.max);
    // Handle price range change
    const handlePriceRangeChange = (min,max) => {
      setPriceRange({ min, max });
    }
    // Reset price range to initial value
    const resetPriceRange = ()=>{
      setPriceRange({ min: 0, max: Infinity });
    }
    
    return(
        <>
            <section className="shop-container">  
              <div className="container-wide">
                <div className="container-flex">
                    <div className="cont-left cont-both">
                        <div className="filter">
                            <div className="filter-h6"> <h6>Filter </h6> </div>
                            <div className="filter-price">
                                <p>Price</p>
                                <div className="price">
                                    <p onClick={resetPriceRange}>All</p>
                                    <ul>
                                        <li className="All-price" onClick={()=> handlePriceRangeChange(0,20000)}>{currencyformat(0.00)} <span className="yc-divider">-</span>{currencyformat(20000.00)}</li>
                                        <li className="All-price" onClick={()=> handlePriceRangeChange(20000,40000)}>{currencyformat(20000.00 )}  <span className="yc-divider">-</span>{currencyformat(40000.00)} </li>
                                        <li className="All-price" onClick={()=> handlePriceRangeChange(40000,60000)}>{currencyformat(40000.00)} <span className="yc-divider">-</span>{currencyformat(60000)} </li>
                                        <li className="All-price" onClick={()=> handlePriceRangeChange(60000,100000)}>{currencyformat(60000.00)} <span className="yc-divider">-</span>{currencyformat(100000)}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                      <div className="cont-right cont-both">
                          <div className="cont-sort">
                            <p>Showing {visibleProducts} of {AllProducts.length} Products</p>
                            <div className="shopcategory-sort">
                            sort by <IoIosArrowDropdown />
                            </div>
                          </div>
                          <div className="container-shop">
                            {filteredProducts.slice(0,visibleProducts).map((product) => (
                                <AllItem key={product.id} id={product.id}  image={product.image} Track={product.Track} price={product.price} ></AllItem> 
                            ))}
                          </div>
                          {visibleProducts < filteredProducts.length &&(
                            <div className="view-cont">
                              <div onClick={loadMore} className="view-item">Explore more</div>
                            </div>
                          )}
                    </div>
                </div>
              </div>
            </section>
        </>
    )
}
export default ShopCategory