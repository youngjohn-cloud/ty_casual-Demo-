import React, { useState } from "react";
import "./CSS/loginSignup.css"
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import app from "../Component/Firebase/Firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LoginSignUp(){

    const [action,setAction] = useState('Sign Up');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        if (event.target.type === 'email'){
            setEmail(event.target.value);
        } else if (event.target.type === 'password'){
            setPassword(event.target.value);
        }
    }

    const handleSubmit = (event) => {
       event.preventDefault();
       const auth = getAuth(app); 
       if( action === 'Sign Up'){
           createUserWithEmailAndPassword(auth,email,password)
            .then((user) => {
                navigate('/',{replace: true})
                window.scrollTo(0,0);
            })
            .catch((error) => {
                console.log("Error creating user: " + error)
            })
       } else if (action === 'Login'){
        signInWithEmailAndPassword(auth,email,password)
        .then((user) => {
            navigate('/',{replace: true})
            window.scrollTo(0,0);
          })
          .catch((error) => {
            console.log("Error logging in: " + error);
          });
       }
    }

    return(
        <>
        <div className="login-container">
            <div className="login-header">
                <h1>{action}</h1>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="login-input">
                    {action==="Login"? null : <div className="input">
                        <FaUserCircle className="login-icon" />
                        <input type="text" placeholder="Enter your Name" required />
                    </div>}
                    <div className="input">
                        <MdOutlineMailLock className="login-icon"  />
                        <input type="email" placeholder='Enter your Email' required value={email} onChange={handleChange} />
                    </div>
                    <div className="input">
                        <RiLockPasswordFill className="login-icon"  />
                        <input type="password" placeholder='password' required value={password} onChange={handleChange} />
                    </div>
                </div>
                {action==="Sign Up"? null : <div className="forgot-password">Forgot Password?<span>Click here</span></div>}
                <div className="submit-container">
                    <button type="submit" >
                        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction('Sign Up')}} >Sign Up</div>
                    </button>
                    <button type="submit">
                        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction('Login')}}>Login</div>
                    </button>
                </div>
            </form>
        </div> 
        </>
    )
}