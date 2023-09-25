import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUpForm = () =>{

    const navigate = useNavigate();

    const [formdata, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        ConfirmPass:"",
    });
  console.log("formdata is ", formdata);
    function changeHandler(event){
        const { name, value, checked, type } = event.target;
        setFormData(prevData => {
          return {
            ...prevData,
            [name] : type === "checkbox" ? checked : value
          }
        });
    }

    function submitHandler(event){
      event.preventDefault();
      console.log("Submitted Successfully");
      console.log(formdata);
      navigate('/dashboard');
    }
   
    return(
       <form onSubmit={submitHandler} className="text-white">
            <div>
                <button>
                    Student
                </button>
                <button>
                    Teacher
                </button>
            
            </div>

            <div className="flex">
                <label htmlFor="firstName">First Name
                    <input 
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formdata.firstName}
                    onChange={changeHandler}
                    />
                </label>
                <label htmlFor="lastName">Last Name
                    <input 
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formdata.lastName}
                    onChange={changeHandler}
                    />
                </label>
            </div>
            <label htmlFor="email">Email Address
                <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    value={formdata.email}
                    onChange={changeHandler}
                    />
            </label>
            <div className="flex">
                <label htmlFor="password">Create Password
                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    value={formdata.password}
                    onChange={changeHandler}
                    />
                </label>
              
                <label htmlFor="ConfirmPass">Confirm Password
                    <input
                    type="password"
                    placeholder="Re-Enter Password"
                    name="ConfirmPass"
                    id="ConfirmPass"
                    value={formdata.ConfirmPass}
                    onChange={changeHandler}
                    />
                </label>
            </div>  
           <button>Create Account</button>
       </form>
    );
}
export default SignUpForm;