import { b as baseApi, J as JSONContentTypeForm } from "./constants-477d2973.js";
const getAccessToken = async (user) => {
  try {
    const fullurl = `${baseApi}/login/access-token`;
    const r = await fetch(fullurl, {
      method: "POST",
      headers: {
        "Content-type": JSONContentTypeForm,
        "Accept": "application/json"
      },
      body: `username=${user.username}&password=${user.password}`
    });
    return r;
  } catch (error) {
    console.log(error);
  }
};
const getUserData = async (token) => {
  const fullurl = `${baseApi}/login/test-token`;
  let response = await fetch(fullurl, {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  });
  return response;
};
export { getUserData as a, getAccessToken as g };
