import { g as get_data, p as put_data } from "../../../chunks/api-fe40a33c.js";
import { b as baseApi } from "../../../chunks/constants-477d2973.js";
import "@fortawesome/free-solid-svg-icons";
const get = async (event) => {
  const response = await get_data(`${baseApi}/users/`, event.locals.token);
  const data = await response.json();
  return {
    status: 200,
    body: { data }
  };
};
const post = async (event) => {
  const form = await event.request.formData();
  const body = {
    "username": form.get("username"),
    "is_active": form.get("is_active"),
    "is_superuser": form.get("is_superuser"),
    "full_name": form.get("full_name"),
    "password": form.get("password")
  };
  const res = await put_data(`${baseApi}/users/${form.get("id")}`, event.locals.token, body);
  const data = await res.json();
  return {
    status: 200,
    body: { success: data }
  };
};
export { get, post };
