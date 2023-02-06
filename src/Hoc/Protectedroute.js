import { useEffect } from "react";
import { Checktoken } from "../Redux/action/Authaction";
import { useDispatch, useSelector } from "react-redux";
import rootreducer from "../Redux/Reducer";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Protectedroute = () => {
    const Dispatch = useDispatch()
    const state = useSelector((rootreducer) => rootreducer)
    const navigate = useNavigate()
    useEffect(() => {
      Dispatch(Checktoken())
    }, [state.Auth.Mylogin])

    if(state.Auth.isloading) {
      return (
        <h1>loading...</h1>
      )
    }

    return state.Auth.Mylogin ? <Outlet/> : navigate('/login')


}
 
export default Protectedroute;