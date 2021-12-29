import LogOut from 'menus/LogOut';
import { useNavigate } from 'react-router-dom';
import img from 'pages/Home-Page/profile-picture/profileImage'

const SideBar = ({ menus = [], onChangeMenu = () => { } }) => {
    const navigate = useNavigate()
    return (<aside className="side-bar">
        <div id='profile-picture'>
            <img src={img} alt="" />
        </div>
        <ul>
            {
                menus?.map((menu) => {
                    return (
                        <li key={menu.key} onClick={() => {
                            if (onChangeMenu) onChangeMenu(menu.key)
                        }}>

                            {menu.icon}

                        </li>

                    )
                })

            }

            <LogOut className="logout" onClick={() => navigate("/login")} />
        </ul>
    </aside>)
}
export default SideBar;