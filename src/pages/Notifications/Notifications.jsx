import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineBell } from "react-icons/ai";
import { getNotifications } from "api/notifications";
import { useState,useEffect } from "react";


const Notifications = () => {
    const[notifications,setNotifications]=useState([])
    const[notificationsSearch,setNotificationsSearch]=useState("")
    useEffect(()=>{  
        getNotifications()
        .then(res=>setNotifications(res))   
        .catch(err=>console.log(err))

    },[])
    return (
        <div className="notifications">
        <div className="search-bar">
        <SearchIcon fontSize='' className='search-icon' />
        <input className='search' type="text" placeholder='Search' onChange={(event)=>{
          setNotificationsSearch(event.target.value)
        }} />
        <div className="three-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>


      <div className="content">
                {
                    notifications.filter(item=>{
                      if(notificationsSearch===""){
                        return item
                      }else if(item.content.toLowerCase().includes(notificationsSearch.toLowerCase())){
                        return item
                      }return false
                    }).map((item,index)=>{
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