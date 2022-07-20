import type { RequestHandler } from "@sveltejs/kit";
import { post_data } from "../../../lib/shared/api";
import { baseApi } from "../../../lib/utils/constants";

export const post:RequestHandler = async(event) =>{
    const form = await event.request.formData()
    const body = {
        "path": form.get('path'),
        "kota": form.get('kota'),
        "tahun": form.get('tahun'),
        "luas_panen": form.get('luas_panen'),
        "luas_lahan": form.get('luas_lahan'),
        "produktivitas": form.get('produktivitas'),
        "stasiun": form.get('stasiun'),
        "suhu_min": form.get('suhu_min'),
        "suhu_max": form.get('suhu_max'),
        "suhu_avg": form.get('suhu_avg'),
        "humidity_avg": form.get('humidity_avg'),
        "curah_hujan": form.get('curah_hujan'),
        "hari_hujan": form.get('hari_hujan'),
        "penyinaran": form.get('penyinaran')
      }
      console.log(body)
      const response = await post_data(`${baseApi}/model/predict/`,event.locals.token,body)
      const res = await response.json()
      if (response.status ==422){
        return {
            status:422,
            body: {"error": "Check field"}
        }
      }
      console.log(response)
    return{
        status:200,
        body: {"success":res}
    }
}