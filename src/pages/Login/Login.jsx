import "./style.scss";
import { useState } from "react";
import { Input, PasswordInput } from "components/Input";
import {Button} from "components/Button";
import { LS } from "utils";
import { signIn } from "api/Sign";
import ReactLoading from 'react-loading';
import appConfig from "config";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate=useNavigate()

    const[loading,setLoading]=useState(false)
    return (<section id="login-page">
           <form onSubmit={(event)=>{
               event.preventDefault();
               const elements=event.target.elements;
               const username=elements["username"].value;
               const password =elements["password"].value;
               setLoading(true);
               signIn({username,password})
               .then(res=>{
             LS.setItemLocalStorage(appConfig.userData,JSON.stringify(res.data))
             navigate("/",{replace:true})
               })
               .catch(err=>alert("xeta bash verdi"))
               .finally(()=>{setLoading(false)})
           }}>
               <Input  name="username"/>
               <PasswordInput name="password" />
               <Button>
                   Log In
               </Button>
             {loading && <div id="form-loading">
                 <ReactLoading type="spin" color="#1877f2"/></div>}
           </form>
    </section>)
}
export default Login;