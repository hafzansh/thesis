import type { RequestHandler } from "@sveltejs/kit";
import { get_data } from "../../../../lib/shared/api";
import { baseApi, city } from "../../../../lib/utils/constants";
import type { Padi } from "../../../../lib/utils/schema";

export const get:RequestHandler = async(event) => {
    const response = await get_data(`${baseApi}/padi/`,event.locals.token).then(res=>res.json())
    response.map((p: Padi) => {
        p.kota = city[parseInt(p.kota)-1]
    });
    return {
        status:200,
        body:{
            data: response
        }
    }
}