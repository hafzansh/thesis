import { g as get_data } from "../../../../chunks/api-fe40a33c.js";
import { b as baseApi } from "../../../../chunks/constants-477d2973.js";
import "@fortawesome/free-solid-svg-icons";
const get = async (event) => {
  const response = await get_data(`${baseApi}/model/`, event.locals.token).then((res) => res.json());
  response.map((p) => {
    p.size = `${Math.round(parseFloat(p.size) * 100)}%`;
  });
  return {
    status: 200,
    body: {
      data: response
    }
  };
};
export { get };
