import SideBar from 'components/SideBar';
import mainPageMenu from 'menus';
import LogOut from 'menus/LogOut';
import { useNavigate } from 'react-router-dom';
const Main = () => {
    const navigate = useNavigate()
    return (<div id="main-layout">
        <SideBar menus = {mainPageMenu} logout = {LogOut} onChangeMenu = {key => navigate(`${key}`)}/>
    </div>)
}

export default Main;