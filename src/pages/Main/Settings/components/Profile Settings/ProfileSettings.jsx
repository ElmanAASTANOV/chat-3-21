import "./style.scss"
import img from "img/profilePhoto.jpg"

const profileSettings=[
    {title:"Profile."},
    {title:"Edit Profile Name."},
    {title:"Edit Profile Status Info."},
    {title:"Edit Profile Photo."},
    {title:"Help."},
    {title:"Change Wallpaper."},
    {title:"Invite."}

]

const ProfileSettings=()=>{
    return(
        <div className="profile-settings" >
            <div id="profile">
            <h3>Profile Settings</h3>
            <img src={img} alt="imagephoto" id="img-photo" />
            <div id="user">
            <h5>Krishna</h5>
            <p>Stay home stay safe</p>
            </div>
            </div>
            <div id="settings">
                {profileSettings.map(title=>{
                    return(
                <li>{title.title}</li> 
                )})}
            </div>
        </div>
        
    )
}
export default ProfileSettings