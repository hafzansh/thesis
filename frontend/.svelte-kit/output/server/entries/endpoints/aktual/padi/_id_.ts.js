import { b as baseApi } from "../../../../chunks/constants-477d2973.js";
import { g as get_data } from "../../../../chunks/api-fe40a33c.js";
import "@fortawesome/free-solid-svg-icons";
const get = async (event) => {
  const params = event.params;
  const token = event.locals.token;
  const item = await get_data(`${baseApi}/padi/id/${params.id}`, token).then((res) => res.json());
  if (item) {
    return {
      status: 200,
      body: {
        item
      }
    };
  }
  return {
    body: {
      status: 502,
      body: {
        detail: "Error"
      }
    }
  };
};
export { get };
