import * as cookie from "cookie";
const get = async () => {
  return {
    status: 303,
    headers: {
      "Set-Cookie": cookie.serialize("auth_token", "", {
        path: "/",
        expires: new Date(0)
      }),
      location: "/login"
    }
  };
};
export { get };
