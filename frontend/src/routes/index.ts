import type { RequestHandler } from "@sveltejs/kit";
import { get_data } from "../lib/shared/api";
import { baseApi } from "../lib/utils/constants";

export const get: RequestHandler = async (event) => {
    const padi = await get_data(
        `${baseApi}/padi/`,
        event.locals.token
    ).then(res=>res.json())
    const iklim = await get_data(
        `${baseApi}/iklim/`,
        event.locals.token
    ).then(res=>res.json())
    return {
        body: { data_padi: padi,data_iklim:iklim }
    }
}