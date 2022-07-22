import type { RequestHandler } from "@sveltejs/kit";
import { get_data } from "../../../../lib/shared/api";
import { baseApi, city } from "../../../../lib/utils/constants";
import type { Iklim } from "../../../../lib/utils/schema";

export const get:RequestHandler = async(event) => {
    const response = await get_data(`${baseApi}/iklim/`,event.locals.token).then(res=>res.json())
    response.map((p: Iklim) => {
        p.stasiun = city[parseInt(p.stasiun)]
    });
    return {
        status:200,
        body:{
            data: response
        }
    }
}