import { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import "../Style/Homepage.css";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
const [token, settoken] = useState();
const navigate = useNavigate();


useEffect(() => {
  const token = localStorage.getItem("token");
  settoken(token)
}, [])

const Handlelogout = () => {
      const token = localStorage.removeItem("token");
      settoken(token);
      navigate("/login");
}

    return (
        <div>
            <Navbar/>
            <h1>ini Homepage</h1>
            <button className="logout-homepage" onClick={Handlelogout}>Log Out</button>
        </div>
    );
}
 
export default Homepage;