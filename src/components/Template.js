import SignUpForm from "./SignUpForm"; 
import LogInForm from "./LogInForm";



const Template = ({title, desc1, desc2, image, formType, setlogIn}) =>{
    return(
       <div className="w-10/12 flex justify-around text-white">
           <div>
              <h1>{title}</h1>
              <p>
                 <span>{desc1}</span>
                 <span>{desc2}</span>
              </p>
              {formType === "signup" ? (<SignUpForm setlogIn = {setlogIn}/>) : (<LogInForm setlogIn = {setlogIn}/>)}
              <div>
                   <div></div>
                   <p>OR</p>
                   <div></div>
              </div>
              <button>Sign Up with Google</button>
           </div>

            <div>
               <img src="../images/frame.png"
               alt="pattern"
               width={558}
               height={504}
               loading="lazy"/>

               <img src={image}
               alt="pattern"
               width={558}
               height={504}
               loading="lazy"/>
            </div>
       </div>
    );
}
export default Template;