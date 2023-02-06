import { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import "../Style/Editcar.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Editcontentcar } from "../Redux/action/carAction";
import rootreducer from "../Redux/Reducer";
const Editcar = () => {
    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [img, setimg] = useState(null)
    const [cat, setcat] = useState(null);
    const Dispatch = useDispatch();
    const {id} = useParams();
    const {Edit} = useSelector((rootreducer) => rootreducer.reduceCar)
    const navigate = useNavigate('');

    useEffect(() => {
        Handledirect()
    }, [Edit])
    
    const Handlename = (e) => {
        setname(e.target.value)
    }

    const Handleprice = (e) => {
        setprice(e.target.value)
    }

    const Handleimage = (e) => {
        setimg(e.target.files[0])
    }

    const Handlecategory = (e) => {
        setcat(e.target.value)
    }

    const Handleupdate = () => {
       const formdata = new FormData()
       formdata.append('name', name);
       formdata.append('price', price)
       formdata.append('image', img)
       formdata.append('category', cat)

       Dispatch(Editcontentcar(id, formdata))
    }

    const Handledirect = () => {
        if(Edit) {
            navigate('/Discovery')
        }
    }

    console.log(name)
    console.log(price)
    console.log(img)
    console.log(cat)
    console.log(Edit)
    return (
        <div>
        <Navbar/>
          <div className="div-container">
            <div className="div-editcar">
              <label>Name</label>
               <input type={"text"} className="input-edit" placeholder="Masukkan nama mobil" onChange={Handlename}/>
               <label>price</label>
               <input type={"text"} className="input-edit" placeholder="Masukkan Harga mobil" onChange={Handleprice}/>
               <label>image</label>
               <input type={'file'} className="input-edit" onChange={Handleimage}/>
               <label>Category</label>
               <select name="Category" id="cars" className="select" onChange={Handlecategory}>
                <option ></option>
                <option value={"large"}>large</option>
                <option value={"medium"}>medium</option>
                <option value={"small"}>small</option>
               </select>
              <button className="button-edit" onClick={Handleupdate}>
                Update
              </button>
            </div>
          </div>
        </div>
    );
}
 
export default Editcar;