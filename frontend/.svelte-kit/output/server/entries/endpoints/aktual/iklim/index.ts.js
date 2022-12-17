import { g as get_data, a as post_data } from "../../../../chunks/api-fe40a33c.js";
import { b as baseApi, s as stasiun } from "../../../../chunks/constants-477d2973.js";
import "@fortawesome/free-solid-svg-icons";
const get = async (event) => {
  const data = await get_data(`${baseApi}/iklim/`, event.locals.token).then((result) => result.json());
  data.map((p) => {
    p.stasiun = stasiun[parseInt(p.stasiun)];
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
    "stasiun": form.get("stasiun"),
    "tahun": form.get("tahun"),
    "suhu_min": form.get("suhu_min"),
    "suhu_max": form.get("suhu_max"),
    "suhu_avg": form.get("suhu_avg"),
    "humidity_avg": form.get("humidity_avg"),
    "curah_hujan": form.get("curah_hujan"),
    "hari_hujan": form.get("hari_hujan"),
    "penyinaran": form.get("penyinaran")
  };
  const res = await post_data(`${baseApi}/iklim/`, event.locals.token, body);
  if (!res.ok) {
    return {
      status: 500,
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
