import Main from 'pages/Main';
import Notifications from 'pages/Notifications';
import Settings from 'pages/Settings';
import Login from 'pages/Login';
import Messages from 'pages/Messages';
import HomePage from 'pages/Home-Page';
import { Routes, Route } from 'react-router-dom';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={< Login />} />
            <Route path="/" element={<Main />}>
                <Route path='/home' element={< HomePage />} />
                <Route path='/messages' element={< Messages />} />
                <Route path='/notifications' element={< Notifications />} />
                <Route path='/settings' element={< Settings />} />
            </Route>

            <Route path='*' element={<h1>Page not Found</h1>} />
        </Routes>
    )
}

export default AllRoutes;