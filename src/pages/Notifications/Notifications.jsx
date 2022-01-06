import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineBell } from "react-icons/ai";
import { getNotifications } from "api/notifications";
import { useState,useEffect } from "react";


const Notifications = () => {
    const[notifications,setNotifications]=useState([])
    useEffect(()=>{  
        getNotifications()
        .then(res=>setNotifications(res))   
        .catch(err=>console.log(err))

    },[])
    return (
        <div className="notifications">
        <div className="search-bar">
        <SearchIcon fontSize='' className='search-icon' />
        <input className='search' type="text" placeholder='Search' />
        <div className="three-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>


      <div className="content">
                {
                    notifications.map((item,index)=>{
                        return(
                            < div id="content"key={index} >
                        <p><i><AiOutlineBell/></i>{item.content}</p>
                        </div>
                        
                        )
                    })
                }
                </div>
       </div>

    )
}

export default Notifications;