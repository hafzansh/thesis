import { g as getAccessToken } from "../../../chunks/login-f386fa18.js";
import { b as baseApi } from "../../../chunks/constants-477d2973.js";
import cookie__default from "cookie";
import "@fortawesome/free-solid-svg-icons";
const post = async (event) => {
  const form = await event.request.formData();
  const body = {
    password: form.get("password"),
    username: form.get("username"),
    full_name: form.get("full_name")
  };
  const response = await fetch(`${baseApi}/users/open/`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify(body)
  }).then((res) => res.json());
  if (response.detail) {
    return {
      body: { error: "username exist!" }
    };
  }
  const user = {
    username: form.get("username"),
    password: form.get("password")
  };
  const r = await getAccessToken(user).then((res) => {
    return res == null ? void 0 : res.json();
  });
  if (!r.access_token) {
    return {
      status: 400,
      body: {
        error: r.detail
      }
    };
  }
  return {
    status: 200,
    headers: {
      "Set-Cookie": cookie__default.serialize("auth_token", r.access_token, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30
      })
    }
  };
};
export { post };
