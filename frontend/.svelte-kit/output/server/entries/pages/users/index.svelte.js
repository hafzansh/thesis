import { c as create_ssr_component, b as add_attribute, a as subscribe, v as validate_component } from "../../../chunks/index-cd422cba.js";
import { G as Gridjs } from "../../../chunks/gridjs-57b7c56d.js";
/* empty css                                                                  */import { s as session, p as page } from "../../../chunks/stores-260ca779.js";
import { faFileCsv, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { html, h } from "gridjs";
import { g as get_data } from "../../../chunks/api-fe40a33c.js";
import { b as baseApi } from "../../../chunks/constants-477d2973.js";
import "papaparse";
import { F as Fa } from "../../../chunks/fa-b0854f2e.js";
/* empty css                                                         */const Edit_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selected_data } = $$props;
  let { values = false } = $$props;
  if ($$props.selected_data === void 0 && $$bindings.selected_data && selected_data !== void 0)
    $$bindings.selected_data(selected_data);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  return `<input type="${"checkbox"}" id="${"modal-edit"}" class="${"modal-toggle"}"${add_attribute("value", values, 0)}${add_attribute("checked", values, 1)}>
<div class="${"modal"}"><div class="${"modal-box w-11/12 max-w-2xl"}"><form method="${"post"}"><h3 class="${"py-3 text-lg font-bold font-inter"}">Edit User Data</h3>
      <label class="${"input-group w-full mb-5 hidden"}"><span class="${"w-1/2"}">id</span>
        <input type="${"text"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"id"}" id="${"id"}" required${add_attribute("value", selected_data.id, 0)}></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Username</span>
        <input type="${"text"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"username"}" id="${"username"}" required${add_attribute("value", selected_data.username, 0)}></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Full Name</span>
        <input type="${"text"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"full_name"}" id="${"full_name"}" required${add_attribute("value", selected_data.full_name, 0)}></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Superuser</span>
        <select class="${"input input-bordered w-full text-right font-inter font-bold"}" id="${"is_superuser"}" name="${"is_superuser"}"><option value="${"true"}">Yes</option><option value="${"false"}">No</option></select></label>
      <label class="${"input-group w-full mb-5 hidden"}"><span class="${"w-1/2"}">Is Active</span>
        <select class="${"input input-bordered w-full text-right font-inter font-bold"}" id="${"is_active"}" name="${"is_active"}"><option value="${"true"}">Yes</option><option value="${"false"}">No</option></select></label>
      <p class="${"py-1 font-inter"}">This user data be updated!</p>

      <button class="${"btn btn-success float-right"}" type="${"submit"}">Confirm</button>
      <label for="${"modal-edit"}" class="${"btn float-right mr-5"}">Cancel </label></form></div></div>`;
});
const Delete_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => value);
  let { selected_data } = $$props;
  let { data } = $$props;
  let { values = false } = $$props;
  if ($$props.selected_data === void 0 && $$bindings.selected_data && selected_data !== void 0)
    $$bindings.selected_data(selected_data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  $$unsubscribe_session();
  return `<input type="${"checkbox"}" id="${"modal-delete"}" class="${"modal-toggle"}"${add_attribute("value", values, 0)}${add_attribute("checked", values, 1)}>
<div class="${"modal"}"><div class="${"modal-box w-11/12 max-w-5xl"}"><h3 class="${"py-3 text-lg font-bold font-inter"}">Delete User</h3>
    <p class="${"py-1 font-inter"}">This user will be <b class="${"text-primary"}">deleted</b>!
    </p>
    <button class="${"btn btn-success float-right"}">Confirm</button>
    <label for="${"modal-delete"}" class="${"btn float-right mr-5"}">Cancel </label></div></div>`;
});
const Users = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $session, $$unsubscribe_session;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  const load = ({ session: session2 }) => {
    if (!session2.user.authenticated) {
      return { status: 302, redirect: "/login" };
    }
    return {
      status: 200,
      props: { user: session2.user }
    };
  };
  let { data } = $$props;
  let selected_data = {
    username: "admin",
    is_active: "false",
    full_name: "admin",
    is_superuser: "true",
    id: 1
  };
  const columns = [
    { name: "id", id: "id", hidden: true },
    {
      name: "Username",
      id: "username",
      formatter: (cell) => html(`<p class="badge badge-secondary font-bold">@${cell}</p>`)
    },
    { name: "Full Name", id: "full_name" },
    {
      name: "Super User",
      id: "is_superuser",
      formatter: (cell) => cell == true ? html(`<p class="badge badge-info">Yes</p>`) : html(`<p class="badge badge-primary">No</p>`)
    },
    {
      name: "Action",
      formatter: (cell, row) => {
        return h("div", {
          className: "p-0 flex flex-row btn-group justify-center font-inter"
        }, h("button", {
          className: "btn btn-primary btn-sm w-[80px]",
          onClick: () => {
            edit_user(row.cells[0].data);
          }
        }, "Edit"), null, h("div", { className: "divider h-1 p-0 m-0" }), null, h("button", {
          className: "btn btn-primary btn-sm",
          onClick: () => {
            delete_user(row.cells[0].data);
          }
        }, "Delete"));
      }
    }
  ];
  let values = false;
  let del_val = false;
  const edit_user = async (da) => {
    const res = await get_data(`${baseApi}/users/${da}`, $session.user.auth_token).then((res2) => res2.json());
    selected_data = {
      username: res.username,
      is_active: String(res.is_active),
      is_superuser: String(res.is_superuser),
      full_name: res.full_name,
      id: res.id
    };
    values = !values;
  };
  const delete_user = async (da) => {
    const res = await get_data(`${baseApi}/users/${da}`, $session.user.auth_token).then((res2) => res2.json());
    selected_data = {
      username: res.username,
      is_active: String(res.is_active),
      is_superuser: String(res.is_superuser),
      full_name: res.full_name,
      id: res.id
    };
    del_val = !del_val;
  };
  `${$page.url.pathname}/print`;
  if ($$props.load === void 0 && $$bindings.load && load !== void 0)
    $$bindings.load(load);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Delete_modal, "DeleteModal").$$render($$result, { values: del_val, selected_data, data }, {
      values: ($$value) => {
        del_val = $$value;
        $$settled = false;
      },
      selected_data: ($$value) => {
        selected_data = $$value;
        $$settled = false;
      },
      data: ($$value) => {
        data = $$value;
        $$settled = false;
      }
    }, {})}
${validate_component(Edit_modal, "EditModal").$$render($$result, { values, selected_data }, {
      values: ($$value) => {
        values = $$value;
        $$settled = false;
      },
      selected_data: ($$value) => {
        selected_data = $$value;
        $$settled = false;
      }
    }, {})}
<div class="${"flex flex-col justify-center w-full"}"><div><div class="${"relative capitalize"}"><div class="${"absolute top-0 right-0 z-10 "}"><button class="${"btn bg-base-200 text-neutral"}">${validate_component(Fa, "Fa").$$render($$result, { icon: faFileCsv, class: "mr-3" }, {}, {})}
              CSV
            </button>
            <button class="${"btn bg-base-200 text-neutral"}">${validate_component(Fa, "Fa").$$render($$result, { icon: faChartLine, class: "mr-3" }, {}, {})}
              Report
            </button></div>
  ${validate_component(Gridjs, "Grid").$$render($$result, {
      pagination: {
        enabled: true,
        limit: 10,
        summary: true,
        buttonsCount: 5
      },
      fixedHeader: true,
      sort: true,
      search: true,
      resizable: true,
      columns,
      data
    }, {}, {})}</div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_session();
  return $$rendered;
});
export { Users as default };
