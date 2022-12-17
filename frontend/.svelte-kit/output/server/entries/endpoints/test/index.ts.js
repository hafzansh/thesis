import { g as get_data } from "../../../chunks/api-fe40a33c.js";
import { b as baseApi } from "../../../chunks/constants-477d2973.js";
import "@fortawesome/free-solid-svg-icons";
const get = async (event) => {
  event.params;
  const response = await get_data(`${baseApi}/model/id/4`, event.locals.token);
  const res = await response.json();
  if (response.status == 404) {
    return {
      body: {
        data: {
          epoch: 0,
          id: 0,
          loss: '[{"loss":1.2083841562,"val_loss":1.2262659073}]',
          mae: 0,
          rate: 0,
          size: 0,
          node: 0,
          path: 0,
          result: '[{"City":3,"Year":2011,"Test Data":0.241677176,"Prediction":3,"MAE":3}]',
          error: "Data error"
        }
      }
    };
  }
  return {
    status: 200,
    body: {
      data: res
    }
  };
};
export { get };
