import { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import { Getlogin } from "../Redux/action/Authaction";
import "../Style/Login.css"
import { useDispatch, useSelector } from "react-redux";
import rootreducer from "../Redux/Reducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setemail] = useState('');
    const [pas, setpas] = useState();
    const Dispatch = useDispatch();
    const navigate = useNavigate();
    const {Mylogin} = useSelector((rootreducer) => rootreducer.Auth)
    
    const HandlemyEmail = (e) => {
         setemail(e.target.value)
    }

    const Handlemypas = (e) => {
       setpas(e.target.value)
    }

    const Handlebuttonlogin = () => {
       const payload = {
           "email": email,
           "password": pas,
       }

       Dispatch(Getlogin(payload))
       alert('Welcome to my page')
       navigate('/Discovery')
   }

    
    console.log(email)
    console.log(pas)
    console.log(Mylogin)
    return (
        <div>
            <Navbar/>
        <div className="login-div">
           <div className="div-login">
            <label className="label-login">Email</label>
            <input type={"text"} className="input-login" placeholder="Masukkan Email anda" onChange={HandlemyEmail}/>
            <label className="label-login">Password</label>
            <input type={"password"} className="input-login" placeholder="Masukkan password anda" onChange={Handlemypas}/>
            <button className="button-login" onClick={Handlebuttonlogin}>Login</button>
           </div> 
        </div>
        </div>
    );
}
 
export default Login;