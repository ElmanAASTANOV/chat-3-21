import "./style.scss"
import{AiTwotoneEdit,AiFillMessage,AiFillDelete}  from "react-icons/ai"
import {AiOutlineKey} from "react-icons/ai"
import {MdSecurity,MdPrivacyTip ,MdNotificationImportant,MdOutlineDomainVerification,MdBackup,MdLanguage} from "react-icons/md"
import {FaExchangeAlt} from "react-icons/fa"


const accountSettings=[
    {icon:<AiOutlineKey/>,title:"Account."},
    {icon:<AiTwotoneEdit/>,title:"Theme."},
    {icon:<MdSecurity/>,title:"Security."},
    {icon:<MdPrivacyTip/>,title:"Privacy."},
    {icon:<MdOutlineDomainVerification/>,title:"Two-step verification."},
    {icon:<MdNotificationImportant/>,title:"Notification Settings."},
    {icon:<FaExchangeAlt/>,title:"Change Number."},
    {icon:<MdBackup/>,title:"Chat Backup."},
    {icon:<AiFillMessage/>,title:"Message Settings."},
    {icon:<MdLanguage/>,title:"App Language."},
    {icon:<AiFillDelete/>,title:"Delete Account."},

]
const AccountSettings=()=>{
    return(
        <div className="account-settings" >
            <h3>Account Settings</h3>
            <div className="container">
            <div id="icon">
                {accountSettings.map((icon)=>{
                    return(
                        <li>{icon.icon}</li>
                    )
                })
                    
                }
            </div>
            <div id="account-settings">
                {accountSettings.map(title=>{
                    return(
                        <li><a href="/">{title.title}</a></li>
                        
                        
                    )
                })}
            </div>
            </div>
        </div>
    )
}
export default AccountSettings