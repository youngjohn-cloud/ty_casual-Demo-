import React from "react";
import "./Footer.css"
import tylogo from "../Assets/images/Tycasual_logo.png-removebg-preview.png"
import payment from "../Assets/images/payment.png"
import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";



export default function Footer(){
    return(
        <>
          <section className="footer">
            <div className="contain-Footer">
                <div className="footer-flex">
                    <div className="footer-logo">
                        <img style={{width:'100px',height:'87px',objectFit:'cover'}} src={tylogo} alt="" />
                    </div>
                    <div className="footer-add">
                        <div className="text-wrap text ">48, oduduwa street kilo bustop surulere Lagos, Nigeria</div>
                        <p className="text mt-2">+2349014960362</p>
                        <h5 className="text mb-3">Youngjohn@gmail.com</h5>
                        <ul className="footer-list">
                            <a href="https://www.facebook.com/adeyanju.adeosun.5?mibextid=ZbWKwL" target="_blank">
                            <li><BsFacebook fill="white"/></li>
                            </a>
                            <a href="https://www.instagram.com/adeyanjuadeosun?igsh=aW1yMTh5bDl6bTJn" target="_blank">
                            <li><FiInstagram fill="white"/></li>
                            </a>
                            <a href={`https://wa.me/+2349014960362`} target="_blank">
                            <li><FaWhatsapp fill="white"/></li>
                            </a>
                        </ul>
                    </div>
                    <div className="footer-store ">
                        <p className="text m-0">Careers</p>
                        <p className="text">Store Locations</p>
                    </div>
                    <div className="footer-contact">
                        <div className="text">My Acount</div>
                        <div className="text">shop</div>
                        <div className="text">privacy policy</div>
                        <div className="text">Return  & Refund Policy</div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="copy-one">
                    <p>© 2024, Ty Casual. All Rights Reserved. Designed By @Adeyanju</p>
                </div>
                <div className="copy-two">
                    <img style={{width:'291px',height:'22px',objectFit:'cover'}} src={payment} alt="" />
                </div>
            </div>
          </section>

        </>
    )
}