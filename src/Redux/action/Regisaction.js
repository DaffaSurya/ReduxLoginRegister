import axios from "axios"

export const Regisdata = (payload) => (Dispatch) => {
    axios
    .post(`https://bootcamp-rent-cars.herokuapp.com/admin/auth/register`, payload)
    .then((res) => {
      console.log(res)
      Dispatch({
        type: 'Register',
        payload: res.data
      })
      alert('selamat anda berhasil register')
    })
    .catch((err) => err.message)
}