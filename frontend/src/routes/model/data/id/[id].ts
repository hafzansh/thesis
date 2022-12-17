import type { RequestHandler } from "@sveltejs/kit";
import { get_data } from "@lib/shared/api";
import { baseApi } from "@utils/constants";
import type { Model_Type } from "../../../../lib/utils/schema";

export const get: RequestHandler = async (event) => {
    const param = event.params
    const response = await get_data(`${baseApi}/model/id/${param.id}`, event.locals.token)
    
    const res = await response.json()
    // res.map((p: Model_Type) => {
    //     p.size = `${Math.round(parseFloat(p.size)*100)}%`;
    // });
    if (response.status == 404) {
        return {
            body: {
                data: {
                    epoch: 0,
                    id: 0,
                    loss: "[{\"loss\":1.2083841562,\"val_loss\":1.2262659073}]",
                    mae: 0,
                    rate:0,
                    size:0,
                    node: 0,
                    path: 0,                    
                    result: "[{\"City\":3,\"Year\":2011,\"Test Data\":0.241677176,\"Prediction\":3,\"MAE\":3}]",
                    error: "Data error"
                }
            }
        }
    }
    return {
        status: 200,
        body: {
            data: res
        }
    }
}