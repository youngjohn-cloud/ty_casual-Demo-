import React from "react";
import "./Hero.css"
import imagebg from "../Assets/images/yomi-bg.jpg"



export default function Hero(){
    

    return(
        <>
            <div className="slider">
                <div className="list">
                    <div className="item active">
                        <img src={imagebg} alt="" />
                        <div className="bg-content">
                            <h5>Enjoy upto 5% discount</h5>
                            <h2>New In</h2>
                            <button className="view-item">Shop Look</button>
                        </div>
                    </div>
                  </div> 
            </div>
        </>
    )
}
