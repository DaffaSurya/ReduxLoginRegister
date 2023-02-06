const Authstate = {
    Mylogin: false,
    isloading: false,
}
export const Authreducer = (state = Authstate , action) => {
  switch (action.type) {
    case "Im_login":
        return {
            ...Authstate,
            Mylogin: action.payload
        }

    case "Check_token":
        return {
           ...Authstate,
           Mylogin: action.payload.Mylogin,
           isloading: action.payload.isloading,

        }

    case "Check_token": 
      return {
        ...Authstate,
         Mylogin: action.payload.Mylogin,
         isloading: action.payload.isloading,
      }
  
    default:
        return state;
  }
}