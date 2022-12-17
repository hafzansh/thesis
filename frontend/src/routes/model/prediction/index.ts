import type { RequestHandler } from "@sveltejs/kit";
import { get_data } from "../../../lib/shared/api";
import { baseApi } from "../../../lib/utils/constants";

export const get:RequestHandler = async (event) =>{
    const response = await get_data(`${baseApi}/model/predicts/data`,event.locals.token)
    const data = await response.json()
    return {
        status:200,
        body: {data: data}
    }
}