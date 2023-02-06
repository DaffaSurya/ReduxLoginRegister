import axios from "axios";

export const Getlogin = (payload) => (Dispatch) => {
     axios
     .post(`https://bootcamp-rent-cars.herokuapp.com/admin/auth/login`, payload)
     .then((res) => {
        console.log(res.data)
        localStorage.setItem("token", res.data.access_token)
        Dispatch({
            type: "Im_login",
            payload: res.data
        })
     })
}

export const Checktoken = () => (Dispatch) => {
  const token = localStorage.getItem("token");
  if(!token) {
    Dispatch({
        type: "Check_token",
        payload: {
            Mylogin: false,
            isloading: false,
        }
    })
  } else {
    Dispatch({
        type: "Check_token",
        payload: {
            Mylogin: true,
            isloading: false,
        }
    })
  }
}