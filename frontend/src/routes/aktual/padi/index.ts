import { get } from "../../../lib/shared/api"
import { baseApi } from "../../../lib/utils/constants"
export const fetchPadi = async (token:string) => {
    let r = await get(`${baseApi}/padi`,token).then(r => {r} )
    return r
}
export const fetchTable = async (offset:number,limit:number,token:string) =>{
    let res = await get(`${baseApi}/padi/?offset=${offset}&limit=${limit}`,token).then((response) => response.json())
    return res
}
export const fetchFullTable = async (token:string)=>{
    let res = await get(`${baseApi}/padi/`,token).then((response) => response.json())
    return res
}