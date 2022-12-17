import { g as get_data } from "../../chunks/api-fe40a33c.js";
import { b as baseApi } from "../../chunks/constants-477d2973.js";
import "@fortawesome/free-solid-svg-icons";
const get = async (event) => {
  const padi = await get_data(`${baseApi}/padi/`, event.locals.token).then((res) => res.json());
  const iklim = await get_data(`${baseApi}/iklim/`, event.locals.token).then((res) => res.json());
  return {
    body: { data_padi: padi, data_iklim: iklim }
  };
};
export { get };
