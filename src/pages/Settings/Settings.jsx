import "./style.scss"
import ProfileSettings from "./components/Profile Settings"
import AccountSettings from "./components/Account Settings/AccountSettings"
const Settings=()=>{
    return(
        <div className="settings">
            
            <ProfileSettings/>
            <AccountSettings/>
        </div>
    )
}
export default Settings