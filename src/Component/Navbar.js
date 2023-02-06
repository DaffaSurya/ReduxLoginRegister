import { Link } from 'react-router-dom';
import '../Style/Navbar.css'
const Navbar = () => {
    return (
        <div className="div-navbar">
          <ul className='ul-navbar'>
            <li className='li'>
              <Link to={"/"} className="Link">
              Homepage
              </Link>
              </li>
            <li className='li'>
              <Link to={"/Discovery"} className="Link">
              Discovery
              </Link>
              </li>
            <li className='li'>
              <Link to={'/login'} className="Link">
              Login 
              </Link>
              </li>
              <li className='li'>
              <Link to={"/Register"} className="Link">
              Register
              </Link>
             </li>
             <li className='li'>
             <Link to={"/Create"} className="Link">
                Create
              </Link>
             </li>
          </ul>
        </div>
    );
}
 
export default Navbar;