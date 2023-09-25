import React from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";


const Navbar = (props) => {
    let islogedIn = props.islogedIn;
    let setlogIn = props.setlogIn;
    return(
        <div className="w-11/12 max-w-[1160px] mx-auto flex flex-row justify-between items-center py-4 text-white">
            <Link to="/"> 
                 <img className="" src="../images/Logo.png" width={160} height={32} loading="lazy"/>
            </Link>
            <nav>
                <ul className="flex gap-x-6">
                    <li>
                       <Link to= '/'>Home</Link>
                    </li>
                    <li>
                       <Link to= '/'>About</Link>
                    </li>
                    <li>
                       <Link to= '/'>Contact</Link>
                    </li>
                </ul>
            </nav>
            {/* buttom creation  */}
            <div className="flex items-center gap-x-4">
                { !islogedIn &&
                    <Link to='/login'>
                        <button className=" bg-gray-900 py-[8px] px-[12px] rounded-[8px] border bg-gray-950 hover:border-yellow-300 transition-all duration-200">
                            Login
                        </button>
                    </Link>
                }
                { !islogedIn &&
                    <Link to='/signup'>
                        <button  className=" bg-gray-900 py-[8px] px-[12px] rounded-[8px] border bg-gray-950 hover:border-yellow-300 transition-all duration-200" >
                            Sign Up
                        </button>
                    </Link>
                }
                { islogedIn &&
                    <Link to='/'>
                        <button onClick={() => {
                            setlogIn(false);
                            toast.success("Logged Out");
                        } }  className=" bg-gray-900 py-[8px] px-[12px] rounded-[8px] border bg-gray-950 hover:border-yellow-300 transition-all duration-200">
                            Log Out
                        </button>
                    </Link>
                }
                { islogedIn &&
                    <Link to='/dashboard'>
                        <button  className=" bg-gray-900 py-[8px] px-[12px] rounded-[8px] border bg-gray-950 hover:border-yellow-300 transition-all duration-200">
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    );
}
export default Navbar;