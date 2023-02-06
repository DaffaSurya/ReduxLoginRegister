import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Component/Navbar";
import { getcar } from "../Redux/action/carAction";
import rootreducer from "../Redux/Reducer";
import "../Style/Discovery.css";
import { Deletecar } from "../Redux/action/carAction";
import { Link } from "react-router-dom";
const Discovery = () => {
const Dispatch = useDispatch();
const {getMycar} = useSelector((rootreducer) => rootreducer.reduceCar)
const {message} = useSelector((rootreducer) => rootreducer.reduceCar)
useEffect(() => {
    Getcars();
}, [])

useEffect(() => {
    Getcars()
} , [message])
const Getcars = () => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            access_token: token,
        }
    }

    Dispatch(getcar(config))
}

const Handledelete = (id) => {
   Dispatch(Deletecar(id))
}


console.log(getMycar)
console.log(message)
    return (
        <div>
            <Navbar/>
      <div className="div-discover">
       {getMycar.length && getMycar.map((item) => {
        return(
        <div className="div-content">
        <Link to={`/Detailcar/${item.id}`}>
        <img src={item.image} className="image-discover"/>
        </Link>
        <p className="p-name">{item.name}</p>
        <p className="p-price">Rp.{item.price}</p>
        <p className="p-category">{item.category}</p>
        <button className="button-delete" onClick={() => Handledelete(item.id)}>Delete</button>
        <button className="button-editcar">
        <Link to={`/Editcar/${item.id}`} className="Link-discover">
            Edit Car
        </Link>
        </button>
        </div>
       )
       })}
          </div>
        </div>
    );
}
 
export default Discovery;