import type { RequestHandler } from "@sveltejs/kit";
import { get_data, post_data } from "../../../lib/shared/api";
import { baseApi, city } from "../../../lib/utils/constants";
import type { Padi } from "../../../lib/utils/schema";
export const get: RequestHandler = async (event) => {
    const data = await get_data(`${baseApi}/padi/`, event.locals.token).then(result => result.json())
    data.map((p: Padi) => {
        p.kota = city[parseInt(p.kota)-1];
    });
    return {
        status: 200,
        headers: {
            content: 'application/json'
        },
        body: { data }
    }
}

export const post: RequestHandler = async (event) => {
    const form = await event.request.formData()
    const body = {
        "kota": form.get('kota'),
        "tahun": form.get('tahun'),
        "luas_panen": form.get('luas_panen'),
        "luas_lahan": form.get('luas_lahan'),
        "produktivitas": form.get('produktivitas'),
        "produksi": form.get('produksi'),
    }
    const res = await post_data(`${baseApi}/padi/`, event.locals.token, body)
    if (!res.ok) {
        return {
            body: { error: res.status }

        }
    }
    return {
        status: 200,
        headers: {
            'content-type': 'application/json'
        },
        body: { success: JSON.stringify(body) }

    }
}
