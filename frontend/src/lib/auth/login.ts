import { baseApi, JSONContentTypeForm } from "../utils/constants"

export const getAccessToken = async (user: {username:any,password:any}) => { 
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

export const getUserData = async(token:string) => {
    const fullurl = `${baseApi}/login/test-token`
    let response = await fetch(fullurl, {
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      return response
}
