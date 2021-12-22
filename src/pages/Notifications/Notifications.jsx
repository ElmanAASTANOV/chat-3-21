import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMore } from "react-icons/ai";
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
        <div id="not" >
            <div className="top">
                
            <p> <i className="icon_1"><AiOutlineSearch /> </i> Search  <i className="icon_2"> <AiOutlineMore /> </i></p> 
            
            
            </div>


            <div className="bottom"> 
            <div className="content">


                {
                    notifications.map(item=>{
                        return(
                            <>
                        <p><i><AiOutlineBell/></i>{item.content}</p>
                        </>
                        
                        )
                    })
                }
                </div>
            </div>

        </div>
    )
}

export default Notifications;