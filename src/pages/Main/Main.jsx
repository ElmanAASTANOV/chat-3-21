import HomePage from 'pages/Home-Page/HomePage';
import Notifications  from 'pages/Notifications';
import Settings from "pages/Settings"
import {BrowserRouter,Routes,Route} from "react-router-dom"

const Main = () => {
    return (
    <div id="main-layout">
         <BrowserRouter>
        <div className="sidebar">
        
        </div>
        <div className="pages">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
        
        </div>
        </BrowserRouter>
    </div>
    )
}

export default Main;