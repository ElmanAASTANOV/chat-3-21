import {appConfig}  from "config"
import img from "img/profilePhoto.jpg"
import {AiOutlineQrcode} from "react-icons/ai"
import { LS} from "utils"
import "./style.scss"
const User=()=>{
    const login = JSON.stringify((LS.getItemLocalStorage(appConfig.login) || "{}"))
    return(
        <div id="profile">
            <h3>Profile Settings</h3>
            <span> <AiOutlineQrcode/></span>
            <img src={img} alt="/" id="img-photo" />
            <div id="user">
                <div>
            <h5>
             {
                `${login.name} ${login.surname }`
             }
            </h5>
            </div>
            <p>Stay home stay safe</p>
            </div>
            </div>
    )
}
export default User