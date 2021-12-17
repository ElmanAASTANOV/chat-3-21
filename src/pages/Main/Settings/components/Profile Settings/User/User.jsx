import img from "img/profilePhoto.jpg"
// import {AiOutlineQrcode} from "react-icons/ai"
const User=()=>{
    return(
        <div id="profile">
            <h3>Profile Settings</h3>
            <img src={img} alt="imagephoto" id="img-photo" />
            <div id="user">
            <h5>Krishna</h5>
            <p>Stay home stay safe</p>
            </div>
           {/* < AiOutlineQrcode/> */}
            </div>
    )
}
export default User