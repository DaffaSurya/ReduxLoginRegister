const Carstate = {
    getMycar: [],
    message: '',
    Edit: '',
    Cars: '',
    detail: {},
}

const carReducer = (state = Carstate, action) => {
   switch (action.type) {
    case "Get_discovery":
        return{
            ...Carstate,
            getMycar: action.payload,
        }

    case "Delete_content":
        return{
            ...Carstate,
            message: action.payload
        }
    
    case "Edit_My_singlecar":
        return{
            ...Carstate,
            Edit: action.payload
        }

    case "tambah_mobil":
        return{
            ...Carstate,
            Cars: action.payload
        }

    case "get_detail":
        return{
            ...Carstate,
            detail: action.payload
        }
    default:
        return state;
   }
}
 
export default carReducer;