import { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast, { toastoast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { apiConnector } from "../services/apiConnector";
import { loginapi } from "../services/apis";

const LogInForm = ({setlogIn}) => {
     
    const navigate = useNavigate();

    const [FormData, setFormData] = useState({email:"", password:"", confirmPassword:"" })
    const [showPassword, setShowPassword] = useState(false);
    console.log("formdata is ", FormData);
    function changeHandler(event){
        const { name, value, checked, type } = event.target;
        setFormData(prevData => {
          return {
            ...prevData,
            [name] : value
          }
        });
    }
    const {email, password} = FormData;
    const apiCall = async (email, password) =>{
        console.log("Api called again");
        let response = await apiConnector("POST", loginapi.LOGIN_API, {email, password});
        console.log("Respone is ", response);
    }
    function submitHandler(event){
        event.preventDefault();
        setlogIn(true);
        // toast.success("Logged In");
        // console.log("Logged in");
        console.log(FormData);
        apiCall(email, password);
        navigate('/dashboard')

    }
    function setShowPasswordHandler(){
        console.log(setShowPassword);
      setShowPassword((prev) => !prev)
    }
    return(
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
            <label htmlFor="email1" className="w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address
                <sup className="text-pink-400">*</sup>
            </label>
            <input 
            id="email1"
            required
            type="email"
            name="email"
            placeholder="Enter Email"
            value={FormData.email}
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
            
            <label htmlFor="pass" className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password <sup className="text-pink-400">*</sup>
                </p>
                <input
                required
                id="pass"
                name="password"
                type={showPassword ? ("text") : ("password")}
                value={FormData.password}
                onChange={changeHandler}
                placeholder="Password"
                className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
                <span onClick={setShowPasswordHandler} className="absolute right-3 top-[38px] cursor-pointer">
                      {showPassword ? (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)}
                </span>
                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                        Forgot Password
                    </p>
                </Link>
            </label>
            <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-semibold text-black">Sign In</button>  
        </form>
    );

}
export default LogInForm;