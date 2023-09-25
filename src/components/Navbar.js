import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    let islogedIn = props.islogedIn;
    let setlogIn = props.setlogIn;
    return(
        <div className=" w-10/12 flex justify-around text-white">
            <Link to="/"> 
                 <img className="" src="../images/Logo.png" width={160} height={32} loading="lazy"/>
            </Link>
            <nav>
                <ul className="flex gap-3">
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
            <div className="flex ml-5 mr-3 gap-3">
                { !islogedIn &&
                    <Link to='/login'>
                        <button>
                            Login
                        </button>
                    </Link>
                }
                { !islogedIn &&
                    <Link to='/signup'>
                        <button>
                            Sign Up
                        </button>
                    </Link>
                }
                { islogedIn &&
                    <Link to='/'>
                        <button onClick={() => {
                            setlogIn(false);
                            toast.success("Logged Out");
                        } }>
                            Log Out
                        </button>
                    </Link>
                }
                { islogedIn &&
                    <Link to='/dashboard'>
                        <button>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    );
}
export default Navbar;