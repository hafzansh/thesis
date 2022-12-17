import type { RequestHandler } from "@sveltejs/kit"
import { baseApi } from "../../../lib/utils/constants"
import { get_data } from "../../../lib/shared/api"

export const get:RequestHandler = async (event) =>{

    const params = event.params
    const token = event.locals.token
    const item = await get_data(`${baseApi}/padi/id/${params.id}`,token).then(res => res.json())
    if(item){
        return {
            status:200,
            
            body:{
                item
            }
        }
    }
    return {
        body:{
            status:502,
            body:{
                detail: "Error"
            }
        }
    }
}