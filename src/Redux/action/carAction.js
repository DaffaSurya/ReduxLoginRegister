import axios from "axios"

export const getcar = (config) => (Dispatch) => {
    axios
    .get(`https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?page=1&pageSize=10`, config)
    .then((res) => {
        Dispatch({
            type: "Get_discovery",
            payload: res.data.cars
        })
        console.log(res)
    })
}

export const Deletecar = (id) => (Dispatch) => {
   const token = localStorage.getItem("token");
   const config = {
     headers: {
        access_token: token,
     }
   }
   axios
   .delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
   .then((res) => {
      console.log(res)
      Dispatch({
        type: "Delete_content",
        payload: res.data
      })
   })
   .catch((err) => err.message)
}

export const Editcontentcar = (id, formdata) => (Dispatch) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      access_token: token,
    }
  }

  axios
  .put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, formdata , config)
  .then((res) => {
    console.log(res.data)
    Dispatch({
      type: "Edit_My_singlecar",
      payload: res.data
    })
  })
}

export const getCreatecar = (formdata) => (Dispatch) => {
   const token = localStorage.getItem('token');
   const config = {
       headers: {
        access_token: token,
       }
   }

   axios
   .post(`https://bootcamp-rent-cars.herokuapp.com/admin/car`, formdata, config)
   .then((res) => {
      console.log(res.data)
      Dispatch({
          type: "tambah_mobil",
          payload: res.data
      })
   })
   .catch((err) => err.message)
}

export const Cardetail = (id) => (Dispatch) => {
   const token = localStorage.getItem('token')
   const config = {
       headers: {
        access_token: token,
       }
   }

   axios
   .get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
   .then((res) => {
      console.log(res.data)
      Dispatch({
        type: "get_detail",
        payload: res.data
      })
   })
}