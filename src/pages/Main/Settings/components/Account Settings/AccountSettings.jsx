import "./style.scss"
 import{}  from "react-icons/fa"

const acoountSettings=[
    {icon:"GoGlobe",title:"Account."},
    {title:"Theme."},
    {title:"Security."},
    {title:"Privacy."},
    {title:"Two-step verification."},
    {title:"Notification Settings."},
    {title:"Change Number."},
    {title:"Chat Backup."},
    {title:"Message Settings."},
    {title:"App Language."},
    {title:"Delete Account."},

]
const AccountSettings=()=>{
    return(
        <div className="account-settings" >
            <h3>Account Settings</h3>
            <div id="account-settings">
                {acoountSettings.map(title=>{
                    return(
                        <li>{title.title}</li>
                        
                    )
                })}
            </div>
        </div>
    )
}
export default AccountSettings