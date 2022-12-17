import cookie__default from "cookie";
import { g as getAccessToken } from "../../../chunks/login-f386fa18.js";
import "../../../chunks/constants-477d2973.js";
import "@fortawesome/free-solid-svg-icons";
const post = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  if (typeof username !== "string" || typeof password !== "string") {
    return {
      status: 400,
      body: {
        error: "Enter a valid username and password."
      }
    };
  }
  if (!username || !password) {
    return {
      status: 400,
      body: {
        error: "Username and password are required."
      }
    };
  }
  const user = {
    username,
    password
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
    body: {
      user: { username },
      success: "Success."
    },
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
