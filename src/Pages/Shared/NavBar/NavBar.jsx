import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavBar = () => {
const {user,logOut} = useContext(AuthContext)
const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const NavLinks =
    
        <>
         
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">OUR MENU</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
     
                            
        {
            user ? <>
               
                <button onClick={handleLogOut} className="btn btn-ghost mt-[-4px]">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }                  
 
        </>
    
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                          {NavLinks}  
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                     {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;