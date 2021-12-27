import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Login from 'pages/Login';



const HomePage = React.lazy(() => import('pages/Home-Page'));
const Messages = React.lazy(() => import('pages/Messages'));
const Settings = React.lazy(() => import('pages/Settings'));
const Notifications = React.lazy(() => import('pages/Notifications'));

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