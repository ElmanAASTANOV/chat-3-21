
import { Link, Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div id="main-layout">
            <div className="sidebar">
                <Link to='/'> Homepage </Link>
                <Link to='/messages'> Messages </Link>
                <Link to='/notifications'> Notifications </Link>
                <Link to='/settings'> Settings </Link>
                <Link to='/login'> Exit </Link>
            </div>

            <div className="pages">
                <Outlet />
            </div>
        </div >
    )
}

export default Main;