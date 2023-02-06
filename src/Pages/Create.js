import Navbar from "../Component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import "../Style/Editcar.css";
import { useEffect, useState } from "react";
import { getCreatecar } from "../Redux/action/carAction";
import rootreducer from "../Redux/Reducer";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const [addname, setaddname] = useState('');
    const [addprice, setaddprice] = useState('');
    const [addimg, setaddimg] = useState(null);
    const [addcat, setaddcat] = useState(null);
    const {Cars} = useSelector((rootreducer) => rootreducer.reduceCar)
    const navigate = useNavigate('');
    const Dispatch = useDispatch();

    useEffect(() => {
       Handlenavigate();
    }, [Cars])

    const Handlename = (e) => {
        setaddname(e.target.value)
    }

    const Handleprice = (e) => {
        setaddprice(e.target.value)
    }

    const Handleimage = (e) => {
        setaddimg(e.target.files[0])
    }

    const Handlecategory = (e) => {
        setaddcat(e.target.value)
    }

    const Handlecreate = () => {
        const formdata = new FormData();
        formdata.append("name", addname)
        formdata.append('price', addprice)
        formdata.append('image', addimg)
        formdata.append('category', addcat)

       Dispatch(getCreatecar(formdata))
    }

    const Handlenavigate = () => {
        if(Cars) {
          alert('Mobil berhasil ditambahkan')
          navigate('/Discovery')
        }
    }

    console.log(addname);
    console.log(addprice);
    console.log(addimg);
    console.log(addcat);
    console.log(Cars);
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
              <button className="button-edit" onClick={Handlecreate}>
                Create
              </button>
            </div>
          </div>
        </div>
    );
}
 
export default Create;