import type { RequestHandler } from "@sveltejs/kit";
import { get_data } from "../../../lib/shared/api";
import { baseApi } from "../../../lib/utils/constants";

export const get:RequestHandler = async(event) => {
    const res = await get_data(`${baseApi}/users`,event.locals.token)
    const data = await res.json()
    return {
        body: {data:data}
    }
}