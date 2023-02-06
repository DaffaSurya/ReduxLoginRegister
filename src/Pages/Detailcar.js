import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Cardetail } from "../Redux/action/carAction";
import rootreducer from "../Redux/Reducer";
import "../Style/Detailcar.css";

const Detailcar = () => {
    const Dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams()
    const {detail} = useSelector((rootreducer) => rootreducer.reduceCar)
    const {getMycar} = useSelector((rootreducer) => rootreducer.reduceCar)
    
    useEffect(() => {
        Handledetail()
    },[getMycar])
    
    const Handledetail = () => {
      Dispatch(Cardetail(id))
    }
    return (
        <div className="div-detail">
        {Object.entries(detail).length ? (
          <div className="div-containerdetail">
            <img src={detail.image} className="img-detailcar"/>
            <p className="p-detailcar">{detail.name}</p>
            <p className="p-detailcar1">Rp.{detail.price}</p>
            <p className="p-statuscar">{detail.category}</p>
            <Link to={'/Discovery'}>
            <button className="button-back">Back</button>
            </Link>
          </div>
        ) :
        null}
        </div>
    );
}
 
export default Detailcar;