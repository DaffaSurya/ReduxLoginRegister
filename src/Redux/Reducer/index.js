import { combineReducers } from "redux";
import { Authreducer } from "./Authreducer";
import { Regisreducer } from "./Regisreducer";
import carReducer from "./carReducer";

 const rootreducer = combineReducers({
    Regis: Regisreducer,
    Auth: Authreducer,
    reduceCar: carReducer,
})

export default rootreducer;