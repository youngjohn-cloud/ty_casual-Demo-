import '../Navbar/Header.css';
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import logo from "../Assets/images/Tycasual_logo.png-removebg-preview.png";
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { getAuth, signOut } from "firebase/auth";

export default function Header() {
    const { getTotalCartItems, authenticatedUser } = useContext(ShopContext);
    const auth = getAuth();

    // Function to handle logout
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Successfully signed out
                // console.log("User signed out successfully");
            })
            .catch((error) => {
                // console.error("Error signing out: ", error);
            });
    };

    return (
        <>
            <header className="header">
                <nav className="navlist">
                    <ul className="nav-menu">
                        <li><Link to="/" style={{ textDecoration: "none", color: 'rgb(84, 55, 37)' }}>Home</Link></li>
                        <li><Link to="/arrival" style={{ textDecoration: "none", color: 'rgb(84, 55, 37)' }}>Shop men</Link></li>
                        <li><Link to="/mens" style={{ textDecoration: "none", color: 'rgb(84, 55, 37)' }}>New arrival</Link></li>
                    </ul>
                    <div className="nav-toggle">
                        <FaBars className="ham" />
                        <IoClose className="ham close" />
                    </div>
                </nav>
                <div className="logo">
                    <img src={logo} alt="My brand Logo" />
                </div>
                <div className="icons-head">
                    {/* Conditionally render Login or Logout button based on authentication status */}
                    {authenticatedUser ? (
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <button type="button" className="btn btn-secondary">Login</button>
                        </Link>
                    )}
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                        <IoCartOutline className="a-cart" />
                    </Link>
                    <div className="cart-count">{getTotalCartItems()}</div>
                    <IoSearch className="a-icon" />
                    <FaRegStar className="active-icon a-icon" />
                </div>
            </header>
        </>
    );
}
