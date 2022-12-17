import { c as create_ssr_component, b as add_attribute, a as subscribe, v as validate_component } from "../../../../chunks/index-cd422cba.js";
import { G as Gridjs } from "../../../../chunks/gridjs-57b7c56d.js";
import { faFileCsv, faChartLine, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
/* empty css                                                                     */import { s as session, p as page } from "../../../../chunks/stores-260ca779.js";
import { p as padi_dummy } from "../../../../chunks/table_schema-3e3ea1e1.js";
import { F as Fa } from "../../../../chunks/fa-b0854f2e.js";
import { h } from "gridjs";
import { g as get_data } from "../../../../chunks/api-fe40a33c.js";
import { b as baseApi } from "../../../../chunks/constants-477d2973.js";
import "papaparse";
/* empty css                                                            */const Add_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { values = false } = $$props;
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  return `<input type="${"checkbox"}" id="${"modal-add"}" class="${"modal-toggle"}"${add_attribute("value", values, 0)}${add_attribute("checked", values, 1)}>
<div class="${"modal"}"><div class="${"modal-box w-11/12 max-w-5xl"}"><form method="${"post"}"><h3 class="${"py-3 text-lg font-bold font-inter"}">Add Padi Data</h3>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Kota</span>
        <select class="${"input input-bordered w-full text-right font-inter font-bold"}" id="${"kota"}" name="${"kota"}"><option value="${"1"}">Tanah Laut</option><option value="${"2"}">Kotabaru</option><option value="${"3"}">Banjar</option><option value="${"4"}">Bariot Kuala</option><option value="${"5"}">Tapin</option><option value="${"6"}">Hulu Sungai Selatan</option><option value="${"7"}">Hulu Sungai Tengah</option><option value="${"8"}">Hulu Sungai Utara</option><option value="${"9"}">Tabalong</option><option value="${"10"}">Tanah Bumbu</option><option value="${"11"}">Balangan</option><option value="${"12"}">Kota Banjarmasin</option><option value="${"13"}">Kota Banjarbaru</option></select></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Tahun</span>
        <input type="${"number"}" value="${"2000"}" min="${"2000"}" max="${"2900"}" step="${"1"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"tahun"}" id="${"tahun"}" required></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Luas Panen</span>
        <input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"luas_panen"}" id="${"luas_panen"}" required></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Luas Lahan</span>
        <input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"luas_lahan"}" id="${"luas_lahan"}" required></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Produktivitas (%)</span>
        <input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"produktivitas"}" id="${"produktivitas"}" required></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Produksi</span>
        <input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"produksi"}" id="${"produksi"}" required></label>
      <p class="${"py-1 font-inter"}">This item will be added!</p>


      <button class="${"btn btn-success float-right"}" type="${"submit"}">Confirm</button>
      <label for="${"modal-add"}" class="${"btn float-right mr-5"}">Cancel </label></form></div></div>`;
});
const Edit_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => value);
  let { edit_response = padi_dummy } = $$props;
  let { values = false } = $$props;
  if ($$props.edit_response === void 0 && $$bindings.edit_response && edit_response !== void 0)
    $$bindings.edit_response(edit_response);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  $$unsubscribe_session();
  return `<input type="${"checkbox"}" id="${"modal-edit"}" class="${"modal-toggle"}"${add_attribute("value", values, 0)}${add_attribute("checked", values, 1)}>
<div class="${"modal"}"><div class="${"modal-box w-11/12 max-w-5xl"}"><form><h3 class="${"py-3 text-lg font-bold font-inter"}">Edit Padi Data</h3>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Kota</span>
        <select class="${"input input-bordered w-full text-right font-inter font-bold"}" id="${"kota"}" name="${"kota"}"><option value="${"1"}">Tanah Laut</option><option value="${"2"}">Kotabaru</option><option value="${"3"}">Banjar</option><option value="${"4"}">Bariot Kuala</option><option value="${"5"}">Tapin</option><option value="${"6"}">Hulu Sungai Selatan</option><option value="${"7"}">Hulu Sungai Tengah</option><option value="${"8"}">Hulu Sungai Utara</option><option value="${"9"}">Tabalong</option><option value="${"10"}">Tanah Bumbu</option><option value="${"11"}">Balangan</option><option value="${"12"}">Kota Banjarmasin</option><option value="${"13"}">Kota Banjarbaru</option></select></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Tahun</span>
        <input type="${"number"}" min="${"2000"}" max="${"2900"}" step="${"1"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"tahun"}" id="${"tahun"}" required${add_attribute("value", edit_response.tahun, 0)}></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Luas Panen</span>
        <input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"luas_panen"}" id="${"luas_panen"}" required${add_attribute("value", edit_response.luas_panen, 0)}></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Luas Lahan</span>
        <input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"luas_lahan"}" id="${"luas_lahan"}" required${add_attribute("value", edit_response.luas_lahan, 0)}></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Produktivitas (%)</span>
        <input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"produktivitas"}" id="${"produktivitas"}" required${add_attribute("value", edit_response.produktivitas, 0)}></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Produksi</span>
        <input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"produksi"}" id="${"produksi"}" required${add_attribute("value", edit_response.produksi, 0)}></label>
      <p class="${"py-1 font-inter"}">This item will be updated!</p>


      <button class="${"btn btn-success float-right"}" type="${"submit"}">Confirm</button>
      <label for="${"modal-edit"}" class="${"btn float-right mr-5"}">Cancel </label></form></div></div>`;
});
const Delete_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => value);
  let { edit_response = padi_dummy } = $$props;
  let { values = false } = $$props;
  let { data } = $$props;
  if ($$props.edit_response === void 0 && $$bindings.edit_response && edit_response !== void 0)
    $$bindings.edit_response(edit_response);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_session();
  return `<input type="${"checkbox"}" id="${"modal-delete"}" class="${"modal-toggle"}"${add_attribute("value", values, 0)}${add_attribute("checked", values, 1)}>
<div class="${"modal"}"><div class="${"modal-box w-11/12 max-w-5xl"}"><h3 class="${"py-3 text-lg font-bold font-inter"}">Delete Padi Data</h3>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Kota</span>
        <select class="${"input input-bordered w-full text-right font-inter font-bold"}" id="${"kota"}" name="${"kota"}" disabled><option value="${"1"}">Tanah Laut</option><option value="${"2"}">Kotabaru</option><option value="${"3"}">Banjar</option><option value="${"4"}">Barito Kuala</option><option value="${"5"}">Tapin</option><option value="${"6"}">Hulu Sungai Selatan</option><option value="${"7"}">Hulu Sungai Tengah</option><option value="${"8"}">Hulu Sungai Utara</option><option value="${"9"}">Tabalong</option><option value="${"10"}">Tanah Bumbu</option><option value="${"11"}">Balangan</option><option value="${"12"}">Kota Banjarmasin</option><option value="${"13"}">Kota Banjarbaru</option></select></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Tahun</span>
        <input type="${"number"}" min="${"2000"}" max="${"2900"}" step="${"1"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"tahun"}" id="${"tahun"}" disabled${add_attribute("value", edit_response.tahun, 0)}></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Luas Panen</span>
        <input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"luas_panen"}" id="${"luas_panen"}" disabled${add_attribute("value", edit_response.luas_panen, 0)}></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Luas Lahan</span>
        <input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"luas_lahan"}" id="${"luas_lahan"}" disabled${add_attribute("value", edit_response.luas_lahan, 0)}></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Produktivitas (%)</span>
        <input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"produktivitas"}" id="${"produktivitas"}" disabled${add_attribute("value", edit_response.produktivitas, 0)}></label>
      <label class="${"input-group w-full mb-5"}"><span class="${"w-1/2"}">Produksi</span>
        <input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"produksi"}" id="${"produksi"}" disabled${add_attribute("value", edit_response.produksi, 0)}></label>
      <p class="${"py-1 font-inter"}">This item will be <b class="${"text-primary"}">deleted</b>!</p>


      <button class="${"btn btn-success float-right"}">Confirm</button>
      <label for="${"modal-delete"}" class="${"btn float-right mr-5"}">Cancel </label></div></div>`;
});
const Padi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $session, $$unsubscribe_session;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  let { data = [] } = $$props;
  let edit_response = padi_dummy;
  const columns = [
    { name: "ID", id: "id", hidden: true },
    { name: "Tahun", id: "tahun" },
    { name: "Kota", id: "kota", width: "200px" },
    { name: "Luas Lahan", id: "luas_lahan" },
    { name: "Luas Panen", id: "luas_panen" },
    {
      name: "Produktivitas (%)",
      id: "produktivitas"
    },
    { name: "Produksi", id: "produksi" },
    {
      name: "Action",
      width: "200px",
      formatter: (cell, row) => {
        return h("div", {
          className: "p-0 flex btn-group justify-center font-inter"
        }, h("button", {
          className: "btn btn-primary btn-sm w-[75px]",
          onClick: () => {
            edit_data(row.cells[0].data);
          }
        }, "Edit"), null, h("div", { className: "divider h-1 p-0 m-0" }), null, h("button", {
          className: "btn btn-primary btn-sm",
          onClick: () => {
            delete_data(row.cells[0].data);
          }
        }, "Delete"));
      }
    }
  ];
  let add_modal = false;
  let edit_modal = false;
  let delete_modal = false;
  const edit_data = async (data2) => {
    edit_modal = !edit_modal;
    const response = await get_data(`${baseApi}/padi/id/${data2}`, $session.user.auth_token).then((res) => res.json());
    edit_response = response;
  };
  const delete_data = async (data2) => {
    delete_modal = !delete_modal;
    const response = await get_data(`${baseApi}/padi/id/${data2}`, $session.user.auth_token).then((res) => res.json());
    edit_response = response;
  };
  `${$page.url.pathname}/print`;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Delete_modal, "DeleteModal").$$render($$result, {
      edit_response,
      values: delete_modal,
      data
    }, {
      values: ($$value) => {
        delete_modal = $$value;
        $$settled = false;
      },
      data: ($$value) => {
        data = $$value;
        $$settled = false;
      }
    }, {})}
${validate_component(Edit_modal, "EditModal").$$render($$result, { edit_response, values: edit_modal }, {
      values: ($$value) => {
        edit_modal = $$value;
        $$settled = false;
      }
    }, {})}
${validate_component(Add_modal, "AddModal").$$render($$result, { values: add_modal }, {
      values: ($$value) => {
        add_modal = $$value;
        $$settled = false;
      }
    }, {})}
<div><div class="${"relative capitalize"}"><div class="${"absolute top-0 right-0 z-10 "}"><button class="${"btn bg-base-200 text-neutral"}">${validate_component(Fa, "Fa").$$render($$result, { icon: faFileCsv, class: "mr-3" }, {}, {})}
        CSV
      </button>
      <button class="${"btn bg-base-200 text-neutral"}">${validate_component(Fa, "Fa").$$render($$result, { icon: faChartLine, class: "mr-3" }, {}, {})}
        Table
      </button>
      <button class="${"btn bg-base-200 text-neutral"}">${validate_component(Fa, "Fa").$$render($$result, { icon: faSquarePlus, class: "mr-3" }, {}, {})}
        Add Data
      </button></div>
    ${validate_component(Gridjs, "Grid").$$render($$result, {
      pagination: {
        enabled: true,
        limit: 10,
        summary: true,
        buttonsCount: 5
      },
      fixedHeader: true,
      columns,
      search: true,
      className: { table: "w-full h-11/12", search: "" },
      data
    }, {}, {})}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_session();
  return $$rendered;
});
export { Padi as default };
