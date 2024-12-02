import logo from "../../image/fooddelivery.jpg";
import { useState } from "react";
import { Link } from "react-router";
const Header = () => {
  const [btnName,setbtnName] = useState("Login")
    return (
      <div className="flex justify-between bg-orange-100 shadow-lg m-4 sm:bg-yellow-200 lg:bg-green-100">
        <div className="logo-container">
          <img className="w-30 h-25" src={logo} alt="Logo" width="200" height="100" />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to = "/About">About us</Link></li>
            <li className="px-4"><Link to = "/contact">contact us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4">Cart</li>
            <button className="login-btn" onClick={() => 
              btnName==="Login"? setbtnName("Logout"): setbtnName("Login")}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;