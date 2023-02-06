import { BrowserRouter, Route , Routes} from "react-router-dom";
import Login from "./Pages/Login";
import Discovery from "./Pages/Discovery";
import Register from "./Pages/Register";
import Homepage from "./Pages/Homepage";
import Protectedroute from "./Hoc/Protectedroute";
import Editcar from "./Pages/Editcar";
import Create from "./Pages/Create";
import Detailcar from "./Pages/Detailcar";
const App = () => {
  return (
   <BrowserRouter>
      <Routes>
      <Route element={<Protectedroute/>}>
      <Route element={<Homepage/>} path={"/"}/>
      <Route element={<Discovery/>} path={"/Discovery"}/>
      <Route element={<Editcar/>} path={"/Editcar/:id"}/>
      <Route element={<Create/>} path={"/Create"}/>
      <Route element={<Detailcar/>} path={"/Detailcar/:id"}/>
      </Route>
      <Route element={<Login/>} path={"/login"}/>
      <Route element={<Register/>} path={"/Register"}/>
     </Routes>
   </BrowserRouter>
  );
}
 
export default App;