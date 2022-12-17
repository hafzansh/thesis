import type { RequestHandler } from "@sveltejs/kit";
import { get_data } from "../../../lib/shared/api";
import { baseApi } from "../../../lib/utils/constants";
import type { Model_Type } from "../../../lib/utils/schema";

export const get:RequestHandler = async(event) => {
    const response = await get_data(`${baseApi}/model/`,event.locals.token).then(res=>res.json())
    response.map((p: Model_Type) => {
        p.size = `${Math.round(parseFloat(p.size)*100)}%`;
    });
    return {
        status:200,
        body:{
            data: response
        }
    }
}