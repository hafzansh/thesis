async function get_data(url, token) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`
    }
  });
  return response;
}
async function post_data(url, token, body) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(body)
  });
  return response;
}
async function put_data(url, token, body) {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      accept: "application/json",
      "Content-type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(body)
  });
  return response;
}
async function delete_data(url, token) {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`
    }
  });
  return response;
}
export { post_data as a, delete_data as d, get_data as g, put_data as p };
