import "./style.scss";
import { Input, PasswordInput } from "components/Input";
import Button from "components/Button";
const Login = () =>{
    return (<section id="login-page">
           <form>
               <Input />
               <PasswordInput />
               <Button>
                   Log in
               </Button>
           </form>
    </section>)
}
export default Login;