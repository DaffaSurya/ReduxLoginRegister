const Regisstate = {
    regis: '',
}
export const Regisreducer = (state = Regisstate, action) => {
   switch (action.type) {
    case 'Register':
        return {
            ...Regisstate,
            regis: action.payload
        }
   
    default:
       return state;
   }
}