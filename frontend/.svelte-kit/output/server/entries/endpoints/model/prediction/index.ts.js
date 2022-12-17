import { g as get_data } from "../../../../chunks/api-fe40a33c.js";
import { b as baseApi } from "../../../../chunks/constants-477d2973.js";
import "@fortawesome/free-solid-svg-icons";
const get = async (event) => {
  const response = await get_data(`${baseApi}/model/predicts/data`, event.locals.token);
  const data = await response.json();
  return {
    status: 200,
    body: { data }
  };
};
export { get };
