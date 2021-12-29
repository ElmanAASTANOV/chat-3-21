import LogOut from 'menus/LogOut';
import { useNavigate, useLocation } from 'react-router-dom';
import img from 'pages/Home-Page/profile-picture/profileImage';
import classnames from 'classnames';

const SideBar = ({ menus = [], onChangeMenu = () => { } }) => {
    const navigate = useNavigate()
    const location = useLocation();
    return (<aside className="side-bar">
        <div id='profile-picture'>
            <img src={img} alt="" />
        </div>
        <ul>
            {
                menus?.map((menu) => {
                    return (
                        <li key={menu.key} className={classnames({ "active": location.pathname.includes(menu.key) })} onClick={() => {
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