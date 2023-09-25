import Template from "../components/Template";

const Signup = ({setlogIn}) =>{
    return(
        <Template
        title={"Join the million learning to code with StudyNotion for free"}
        desc1={"Build Skills for today, tomorrow and beyond"}
        desc2={"Education is future proof your career"}
        image={'../images/signup.png'}
        formType={"signup"}
        setlogIn={setlogIn}

        />
    );
}
export default Signup;