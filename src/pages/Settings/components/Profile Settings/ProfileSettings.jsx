import "./style.scss"
import User from "./User/User"
import{AiTwotoneEdit,AiOutlineUser,AiFillInfoCircle,AiOutlineShareAlt}  from "react-icons/ai"
import {MdWallpaper} from "react-icons/md"
import{BiPhotoAlbum,BiHelpCircle} from "react-icons/bi"


const profileSettings=[
    {icon:<AiOutlineUser/> ,name:"Profile."},
    {icon:<AiTwotoneEdit/>,name:"Edit Profile Name."},
    {icon:<AiFillInfoCircle/>,name:"Edit Profile Status Info."},
    {icon:<BiPhotoAlbum/>,name:"Edit Profile Photo."},
    {icon:<BiHelpCircle/>,name:"Help."},
    {icon:<MdWallpaper/>,name:"Change Wallpaper."},
    {icon:<AiOutlineShareAlt/>,name:"Invite."}

]

const ProfileSettings=()=>{
    return(
        <div className="profile-settings" >
            <User/>
            <div id="settings">
                {/* <div className="icons">
                  {profileSettings.map((icon)=>{
                      return(
                          <li>{icon.icon}</li>
                      )
                  })}
                
                </div> */}
                <div className="title">
                {profileSettings.map(title=>{
                    return(
                        <div className="profile-menu">
                        <i>{title.icon}</i>
                <li onClick={()=>{

                }}><a href="/">{title.name}</a></li> 
                </div>
                )})}
                </div>
            </div>
        </div>
        
    )
}
export default ProfileSettings