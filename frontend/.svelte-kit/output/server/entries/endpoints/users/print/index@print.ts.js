import { g as get_data } from "../../../../chunks/api-fe40a33c.js";
import { b as baseApi } from "../../../../chunks/constants-477d2973.js";
import "@fortawesome/free-solid-svg-icons";
const get = async (event) => {
  const res = await get_data(`${baseApi}/users`, event.locals.token);
  const data = await res.json();
  return {
    body: { data }
  };
};
export { get };
