import { get } from "../../lib/shared/api"
import { baseApi } from "../../lib/utils/constants"
export const fetchPadi = async (token:string) => {
    let r = await get(`${baseApi}/padi`,token).then(r => {r} )
    return r
}
