import "./style.scss";
import { Input, PasswordInput } from "components/Input";
import { Button } from "components/Button";
import { LogIn } from "api/login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading"
import { LS } from "utils";
import { appConfig } from "config";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()
  return (
    <section id="login-page">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const elements = event.target.elements;
          const username = elements.username.value;
          const password = elements.password.value;
          console.log(username, password);
          setLoading(true);
          LogIn({ username, password })
            .then(res => {console.log(res)
            LS.setItemLocalStorage(appConfig.userData,JSON.stringify(res.data))})
            navigate("/", {replace:true})
            .catch(err=>alert("xeta bash verdi"))
            .finally(() => { setLoading(false)});
        }}
      >
        <Input name="username" />
        <PasswordInput name="password" />
        <Button>Log In</Button>
        {loading && <div id="form-loading">
            <ReactLoading type="spin" color="#1877f2"/>
            </div>}
      </form>
    </section>
  );
};
export default Login;
