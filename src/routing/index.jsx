import Main from 'pages/Main';
import Notifications from 'pages/Notifications';
import Settings from 'pages/Settings';
import Login from 'pages/Login';
import Messages from 'pages/Messages';
import HomePage from 'pages/Home-Page';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import appConfig from 'config';
import {LS} from "utils"


const AllRoutes = () => {
    const navigate = useNavigate();
    useEffect(()=>{ 
    const userData = LS.getItemLocalStorage(appConfig.userData);
    // console.log(userData);
    if(!userData){
        navigate("/Login",{replace:true})
    }

    },[navigate])
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