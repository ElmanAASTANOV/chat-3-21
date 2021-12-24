import { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import SideBar from 'components/SideBar';
import mainPageMenu from 'menus';
import LogOut from 'menus/LogOut';
import Loading from 'components/Loading/Loading';


const Main = () => {
    const navigate = useNavigate()
    return (
        <div id="main-layout">
            <div className="sidebar" >
                <SideBar menus={mainPageMenu} logout={LogOut} onChangeMenu={key => navigate(`${key}`)} />
            </div>
            <div className="pages">
                <Suspense fallback = {<Loading/>}>
                    <Outlet />
                </Suspense>
            </div>
        </div >
    )
};

export default Main;