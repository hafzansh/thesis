import { g as get_data, a as post_data } from "../../../../chunks/api-fe40a33c.js";
import { b as baseApi, c as city } from "../../../../chunks/constants-477d2973.js";
import "@fortawesome/free-solid-svg-icons";
const get = async (event) => {
  const data = await get_data(`${baseApi}/padi/`, event.locals.token).then((result) => result.json());
  data.map((p) => {
    p.kota = city[parseInt(p.kota) - 1];
  });
  return {
    status: 200,
    headers: {
      content: "application/json"
    },
    body: { data }
  };
};
const post = async (event) => {
  const form = await event.request.formData();
  const body = {
    "kota": form.get("kota"),
    "tahun": form.get("tahun"),
    "luas_panen": form.get("luas_panen"),
    "luas_lahan": form.get("luas_lahan"),
    "produktivitas": form.get("produktivitas"),
    "produksi": form.get("produksi")
  };
  const res = await post_data(`${baseApi}/padi/`, event.locals.token, body);
  if (!res.ok) {
    return {
      body: { error: res.status }
    };
  }
  return {
    status: 200,
    headers: {
      "content-type": "application/json"
    },
    body: { success: JSON.stringify(body) }
  };
};
export { get, post };
