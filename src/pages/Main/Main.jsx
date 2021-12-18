import HomePage from 'pages/Home-Page';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Notifications from 'pages/Notifications';
import Settings from 'pages/Settings';
import Login from 'pages/Login';
import Messages from 'pages/Messages';

const Main = () => {
    return (
        <Router >
            <div id="main-layout">
                <div className="sidebar">
                    <Link to='/homepage'> Homepage </Link>
                    <Link to='/messages'> Messages </Link>
                    <Link to='/notifications'> Notifications </Link>
                    <Link to='/settings'> Settings </Link>
                    <Link to='/login'> Exit </Link>
                </div>

                <div className="pages">
                    <Routes>
                        <Route path='/homepage' element={< HomePage />} />
                        <Route path='/messages' element={< Messages />} />
                        <Route path='/notifications' element={< Notifications />} />
                        <Route path='/settings' element={< Settings />} />
                        <Route path='/login' element={< Login />} />
                        <Route path='*' element={<h1>Page not Found</h1>} />
                    </Routes>
                </div>
            </div >
        </Router>
    )
}

export default Main;