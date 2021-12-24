import LogOut from 'menus/LogOut';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ menus = [], onChangeMenu = () => { } }) => {
    const navigate = useNavigate()
    return (<aside className="side-bar">
        <header>

        </header>

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