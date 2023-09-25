import { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast, { toastoast } from "react-hot-toast";

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
    
    function submitHandler(event){
        event.preventDefault();
        setlogIn(true);
        navigate('/dashboard')
        toast.success("Logged In");
        console.log("Logged in");
        console.log(FormData);

    }
    function setShowPasswordHandler(){
        console.log(setShowPassword);
      setShowPassword((prev) => !prev)
    }
    return(
        <form onSubmit={submitHandler} className="">
            <label htmlFor="email1">Email Address
                <sup>*</sup>
            </label>
            <input 
            id="email1"
            required
            type="email"
            name="email"
            placeholder="Enter Email"
            value={FormData.email}
            onChange={changeHandler}
            className="text-black"
            />
            
            <label htmlFor="pass">
                <p>
                    Password <sup>*</sup>
                </p>
                <input
                required
                id="pass"
                name="password"
                type={showPassword ? ("text") : ("password")}
                value={FormData.password}
                onChange={changeHandler}
                placeholder="Password"
                className="text-black"
                />
                <span onClick={setShowPasswordHandler}>
                      {showPassword ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible/>)}
                </span>
                

                {/* <span onClick={() => setShowPassword((prev) => !prev )}></span>
                {showPassword ? (<AiOutlineEyeInvisible/>) :(<AiOutlineEye/>)} */}
            </label>
            <button className="text-white">Sign In</button>  
        </form>
    );

}
export default LogInForm;