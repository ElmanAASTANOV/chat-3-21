import instance from "api"

export const LogIn =({username,password})=>{
    return instance.post("login",{username,password}).then(res=>res.data) 
}