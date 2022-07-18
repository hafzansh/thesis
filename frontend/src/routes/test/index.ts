import type { RequestHandler } from "@sveltejs/kit"
import { get_data, post_data } from "../../lib/shared/api"
import { baseApi, } from "../../lib/utils/constants"
import type { Iklim, model } from "../../lib/utils/schema"

export const get:RequestHandler = async (event) => {
    const data:model[] = await get_data(`${baseApi}/model/`, event.locals.token).then(result => result.json())
    
    return {
        status:200,
        body: {            
            data: data
        }
    }
}
export const post: RequestHandler = async (event) => {
    const form = await event.request.formData()
    const body = {
        "stasiun": form.get('stasiun'),
        "tahun": form.get('tahun'),
        "suhu_min": form.get('suhu_min'),
        "suhu_max": form.get('suhu_max'),
        "suhu_avg": form.get('suhu_avg'),
        "humidity_avg": form.get('humidity_avg'),
        "curah_hujan": form.get('curah_hujan'),
        "hari_hujan": form.get('hari_hujan'),
        "penyinaran": form.get('penyinaran')
    }
    const res = await post_data(`${baseApi}/iklim/`, event.locals.token, body)
    if (!res.ok) {
        return {
            status: 500,
            body: { error: res.status }     

        }
    }
    return {
        status: 200,
            headers: {
                'content-type': 'application/json'
            },
            body: { success: "Data has been added" }
       
    }
}