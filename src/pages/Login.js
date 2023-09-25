import Template from "../components/Template";

const Login = ({setlogIn}) =>{
    return(
        <Template
        title={"Welcome Back"}
        desc1={"Build Skills for today, tomorrow and beyond"}
        desc2={"Education is future proof your career"}
        image={'../images/login.png'}
        formType={"login"}
        setlogIn={setlogIn}

        />
    );
}
export default Login;