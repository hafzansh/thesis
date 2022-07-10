import { baseApi, JSONContentTypeForm } from "../utils/constants"

export const getAccessToken = async (user: {username:string,password:string}) => { 
    try {
        const fullurl = `${baseApi}/login/access-token`
        const r = await fetch(fullurl,{
            method: 'POST',
            headers:{  
                'Content-type': JSONContentTypeForm,
                'Accept': 'application/json',
            },
            body: `username=${user.username}&password=${user.password}`
        })                  
        return r
    } catch (error) {
        console.log(error)
    }       
}