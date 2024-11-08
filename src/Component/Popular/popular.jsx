import React from "react";
import { AllProducts } from '../Assets/images/All_products'
// import Item from "../Item/item";
import AllItem from "../Item/ALLitem";
import { IoArrowForwardOutline } from "react-icons/io5";
import "./popular.css"


import webpic2 from "../Assets/images/ty-image7.jpg"
import bests1 from "../Assets/images/BestS1.jpg"
import Ssleeve from "../Assets/images/Ssleeve1.jpg"
import { Link } from "react-router-dom";



export default function Popular(){
  const Filterproduct = AllProducts.filter(allProducts => allProducts.id >= 20 && allProducts.id <= 24);
  const Filterproduct2 = AllProducts.filter(allProducts => allProducts.id >= 13 && allProducts.id <= 17);
  const Poduct26 = AllProducts[6];
  const product5 = AllProducts[4];


    return(
        <>
          <section className="big-container">
            <div className="contain-grunge">
              <div className="grunge-list">
                <div className="grunge-item scale">
                    <Link to={`/product/${Poduct26.id}`} onClick={() => window.scrollTo(0, 0)} key={Poduct26.id} id={Poduct26.id}><img src={Poduct26.image} alt="" />
                  <div className="grunge-wrap content">
                    <div className="grunge-inner">
                      <h3>Get <br /> Grunge</h3>
                      <h4>The 23s Collection</h4></div>
                    <div className="grunge-shop">SHOP lOOK
                    <IoArrowForwardOutline className="arrow" /></div>
                  </div>
                   </Link>
                </div>
              </div>
            </div>
            <div className="contain-grunge">
              <div className="grunge-list">
                <div className="grunge-item scale">
                <Link to={`/product/${product5.id}`} onClick={() => window.scrollTo(0, 0)} key={product5.id} id={product5.id}><img src={product5.image} alt="" /><img src={product5.image} alt="" />
                  <div className="grunge-wrap content">
                    <div className="grunge-inner">
                      <h3>Summer <br /> sale</h3>
                      <h4>new Collection</h4></div>
                    <div className="grunge-shop">SHOP lOOK
                    <IoArrowForwardOutline className="arrow" /></div>
                  </div>
                  </Link>
              </div>
              </div>
            </div>
          </section>

          {/* classic section  */}

          <section>
            <div className="cont-classic">
                <div className="F-Citem scale">
              <Link to='/mens' onClick={() => window.scrollTo(0, 0)}>
                    <img src={webpic2} alt="" />
                    <div className="classic-btn">
                      <span className="Btn">All day Classic</span>
                    </div>
                </Link>
                </div>
                <div className="S-Citem scale">
                <Link to='/mens' onClick={() => window.scrollTo(0, 0)}>
                    <img src={bests1} alt="" />
                    <div className="classic-btn">
                      <span className="Btn">Custom men wears</span>
                    </div>
                  </Link>
                </div>
                <div className="T-Citem scale">
                <Link to='/mens' onClick={() => window.scrollTo(0, 0)}>
                    <img src={Ssleeve} alt="" />
                    <div className="classic-btn">
                      <span className="Btn">Step out in style</span>
                    </div>
                </Link>
                </div>
             
            </div>
          </section>

          <div className="popular">
            <div className="pop-contain">
              <p>This Season</p>
              <h2>Popular Collection</h2>
            </div>
            <div className="popular-item">
            {Filterproduct.map((product) => (
               <AllItem key={product.id} id={product.id} Track={product.Track} price={product.price} image={product.image} ></AllItem> 
              ))}
            </div>
          </div>

          {/* Appointment section */}
          <section>
            <div className="app-container">
              <div className="app-flex">
                <div className="app-fitem">
                  <h2>Appointment Scheduler</h2>
                  <p>Do you want a custom style made specially for you ?</p>
                </div>
               
                  <div className="app-Sitem"><a href={`https://wa.me/+2349014960362`} target="_blank" rel="noreferrer"> Book Appointment</a></div>
              </div>
            </div>
          </section>
          {/* Best Selling Section  */}
          <section className="cont-bestSelling">
            <div className="product-w">
              <h5>Highlighted Product Of The Week</h5>
              <h1>BEST SELLING</h1>
              <div className="wrap-divider">
                <div className="divider"></div>
              </div>
            </div>
            <div className="product-grid">
            {Filterproduct2.map((product) => (
               <AllItem key={product.id} id={product.id} Track={product.Track} price={product.price} image={product.image} ></AllItem> 
              ))}
            </div>
            <Link to='/mens' style={{textDecoration:'none'}} onClick={() => window.scrollTo(0, 0)}>
            <div className="view-cont">
              <div className="view-item" >view more</div>
            </div>
            </Link>
          </section>
        </>
    );
}