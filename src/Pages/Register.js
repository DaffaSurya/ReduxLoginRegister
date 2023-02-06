import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Component/Navbar";
import { rootreducer } from "../Redux/Reducer";
import { useDispatch } from "react-redux";
import "../Style/Regis.css"
import { Regisdata } from "../Redux/action/Regisaction";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [Email, setEmail] = useState('');
    const [pas, setpas] = useState('');
    const {regis} = useSelector((rootreducer) => rootreducer.Regis)
    const Dispatch = useDispatch();
    const  Navigate = useNavigate();

    useEffect(() => {
          Handledirect()
    }, [regis])

    const Handledirect = () => {
      if(regis) {
        setTimeout(2000)
        Navigate('/login');
      }
    }

    const Handleemail = (e) => {
     setEmail(e.target.value)
    }

    const Handlepas = (e) => {
      setpas(e.target.value)
    }

    const Handlebutton = () => {
      const payload = {
        email : Email,
        password : pas,
        role: "admin",
      }
      Dispatch(Regisdata(payload))
    }

    console.log(regis)
    return (
        <div>
        <Navbar/>
        <div className="container">
         <div className="Regis">
            <label className="label">Email</label>
            <input type={"text"} placeholder="masukkan email anda" className="input-regis" onChange={Handleemail}/>
            <label className="label">Password</label>
            <input type={"password"} placeholder="masukkan password" className="input-regis" onChange={Handlepas}/>
            <button className="button-regis" onClick={Handlebutton}>Register</button>
         </div>
         </div>
        </div>
    );
}
 
export default Register;