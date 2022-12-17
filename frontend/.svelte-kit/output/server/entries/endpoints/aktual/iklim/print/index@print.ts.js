import { g as get_data } from "../../../../../chunks/api-fe40a33c.js";
import { b as baseApi, c as city } from "../../../../../chunks/constants-477d2973.js";
import "@fortawesome/free-solid-svg-icons";
const get = async (event) => {
  const response = await get_data(`${baseApi}/iklim/`, event.locals.token).then((res) => res.json());
  response.map((p) => {
    p.stasiun = city[parseInt(p.stasiun)];
  });
  return {
    status: 200,
    body: {
      data: response
    }
  };
};
export { get };
