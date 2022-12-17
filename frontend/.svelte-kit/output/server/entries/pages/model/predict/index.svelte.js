import { c as create_ssr_component, a as subscribe, o as onMount, b as add_attribute, v as validate_component, d as escape } from "../../../../chunks/index-cd422cba.js";
import "@fortawesome/free-solid-svg-icons";
import { G as Gridjs } from "../../../../chunks/gridjs-57b7c56d.js";
import { html, h } from "gridjs";
/* empty css                                                                     */import { g as get_data } from "../../../../chunks/api-fe40a33c.js";
import { b as baseApi } from "../../../../chunks/constants-477d2973.js";
import { s as session } from "../../../../chunks/stores-260ca779.js";
const Predict_modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  let { values = false } = $$props;
  let data = [];
  let { val } = $$props;
  onMount(async () => {
    const response = await get_data(`${baseApi}/model/`, $session.user.auth_token).then((res) => res.json());
    response.map((p) => {
      p.size = `${Math.round(parseFloat(p.size) * 100)}%`;
    });
    data = response;
  });
  const columns = [
    { name: "ID", id: "id", hidden: true },
    {
      name: "Path",
      id: "path",
      formatter: (cell) => html(`<p class="badge badge-secondary ">${cell}</p>`)
    },
    { name: "Nodes", id: "node" },
    { id: "loss", hidden: true },
    { name: "MAE", id: "mae" },
    { name: "Test Size", id: "size" },
    { name: "Learning Rate", id: "rate" },
    { name: "Epoch", id: "epoch" },
    { id: "result", hidden: true },
    {
      name: "Action",
      width: "200px",
      formatter: (cell, row) => {
        return h("div", {
          className: "p-0 flex btn-group justify-center font-inter"
        }, h("button", {
          className: "btn btn-primary btn-sm w-[75px]",
          onClick: () => {
            data_binded = [
              {
                id: row.cells[0].data,
                path: row.cells[1].data,
                node: row.cells[2].data,
                loss: row.cells[3].data,
                mae: row.cells[4].data,
                size: row.cells[5].data,
                rate: row.cells[6].data,
                epoch: row.cells[7].data,
                result: row.cells[8].data
              }
            ];
            val = row.cells[1].data;
            values = !values;
          }
        }, "Select"));
      }
    }
  ];
  let { data_binded = [
    {
      id: 0,
      path: 0,
      node: 0,
      loss: "0",
      mae: 0,
      size: "0",
      rate: 0,
      epoch: 0,
      result: "0"
    }
  ] } = $$props;
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  if ($$props.val === void 0 && $$bindings.val && val !== void 0)
    $$bindings.val(val);
  if ($$props.data_binded === void 0 && $$bindings.data_binded && data_binded !== void 0)
    $$bindings.data_binded(data_binded);
  $$unsubscribe_session();
  return `<input type="${"checkbox"}" id="${"my-modal-5"}" class="${"modal-toggle"}"${add_attribute("value", values, 0)}${add_attribute("checked", values, 1)}>
<div class="${"modal"}"><div class="${"modal-box w-11/12 max-w-6xl"}">${validate_component(Gridjs, "Grid").$$render($$result, {
    pagination: {
      enabled: true,
      limit: 10,
      summary: true,
      buttonsCount: 5
    },
    columns,
    data
  }, {}, {})}
    <div class="${"modal-action"}"><label for="${"my-modal-5"}" class="${"btn"}">Close</label></div></div></div>`;
});
const Predict = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let val = "Assets/This will be the name of model path";
  let luas_panen, luas_lahan, suhu_min, suhu_max, suhu_avg, produktivitas, humidity_avg, curah_hujan, hari_hujan, penyinaran, tahun;
  let kota2;
  let stasiun2;
  let data = [
    {
      id: 0,
      path: val,
      node: 0,
      loss: "0",
      mae: 0,
      size: "0",
      rate: 0,
      epoch: 0,
      result: "0"
    }
  ];
  const columns = [
    { name: "ID", id: "id", hidden: true },
    {
      name: "Path",
      id: "path",
      width: "250px",
      formatter: (cell) => html(`<p class="badge badge-secondary ">${cell}</p>`)
    },
    { name: "Nodes", id: "node" },
    { name: "MAE", id: "mae" },
    { name: "Learning Rate", id: "rate" },
    { name: "Test Size", id: "size" },
    { name: "Epoch", id: "epoch" }
  ];
  let modal = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `
${validate_component(Predict_modal, "PredictModal").$$render($$result, { values: modal, val, data_binded: data }, {
      values: ($$value) => {
        modal = $$value;
        $$settled = false;
      },
      val: ($$value) => {
        val = $$value;
        $$settled = false;
      },
      data_binded: ($$value) => {
        data = $$value;
        $$settled = false;
      }
    }, {})}
<div class="${"bg-slate-300 mockup-window"}"><div class="${"p-2"}"><div class="${"flex flex-col"}"><div class="${"flex flex-row mt-5"}"><table class="${"table w-full border"}"><thead><tr><td>Model</td></tr></thead></table>
        <button class="${"btn"}">Select Model</button></div>
      ${validate_component(Gridjs, "Grid").$$render($$result, {
      columns,
      data,
      className: { table: "w-full table" }
    }, {}, {})}</div>
    <form method="${"post"}"><label class="${"input-group w-full mb-5 hidden"}"><span class="${"w-1/2"}">Model Path</span>
        <input type="${"text"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"path"}" id="${"path"}"${add_attribute("value", val, 0)}>
        <button class="${"btn btn-primary"}">Select</button></label>

      <div class="${"flex flex-row mt-5"}"><div class="${"w-8/12 mr-5"}"><table class="${"table w-full border"}"><thead class="${"border-b"}"><tr><th class="${"w-2/12"}">Luas Panen</th>
                <th class="${"w-2/12"}">Luas Lahan</th>
                <th class="${"w-2/12"}">Produktivitas</th></tr></thead>
            <tbody><tr><td><input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"luas_panen"}" id="${"luas_panen"}" required${add_attribute("value", luas_panen, 0)}></td>
                <td><input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"luas_lahan"}" id="${"luas_lahan"}" required${add_attribute("value", luas_lahan, 0)}></td>
                <td><input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"produktivitas"}" id="${"produktivitas"}" required${add_attribute("value", produktivitas, 0)}></td></tr></tbody></table>
          <table class="${"table w-full border mt-5"}"><thead><tr><th>Curah Hujan</th>
                <th>Hari Hujan</th>
                <th>Penyinaran</th></tr></thead>
            <tbody><tr><td><input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"curah_hujan"}" id="${"curah_hujan"}" required${add_attribute("value", curah_hujan, 0)}></td>
                <td><input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"hari_hujan"}" id="${"hari_hujan"}" required${add_attribute("value", hari_hujan, 0)}></td>
                <td><input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"penyinaran"}" id="${"penyinaran"}" required${add_attribute("value", penyinaran, 0)}></td></tr></tbody></table>
          <table class="${"table w-full border mt-5"}"><thead><tr><td class="${"w-4/12"}">Tahun</td>
                <td class="${"w-4/12"}">Kota</td>
                <td class="${"w-4/12"}">Stasiun</td></tr></thead>
            <tbody><tr><td><input type="${"number"}" min="${"2000"}" max="${"2900"}" step="${"1"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"tahun"}" id="${"tahun"}" required${add_attribute("value", tahun, 0)}></td>
                <td><select class="${"input input-bordered w-full text-right font-inter font-bold"}" id="${"kota"}" name="${"kota"}"><option value="${"1"}" selected>Tanah Laut</option><option value="${"2"}">Kotabaru</option><option value="${"3"}">Banjar</option><option value="${"4"}">Barito Kuala</option><option value="${"5"}">Tapin</option><option value="${"6"}">Hulu Sungai Selatan</option><option value="${"7"}">Hulu Sungai Tengah</option><option value="${"8"}">Hulu Sungai Utara</option><option value="${"9"}">Tabalong</option><option value="${"10"}">Tanah Bumbu</option><option value="${"11"}">Balangan</option><option value="${"12"}">Kota Banjarmasin</option><option value="${"13"}">Kota Banjarbaru</option></select></td>
                <td><select class="${"input input-bordered w-full text-right font-inter font-bold"}" id="${"stasiun"}" name="${"stasiun"}"><option value="${"1"}" selected>Stasiun Klimatologi Banjarbaru</option><option value="${"2"}">Stasiun Meteorologi Syamsudin Noor</option><option value="${"3"}">Stasiun Meteorologi Stagen Kotabaru</option></select></td></tr></tbody></table>
          <table class="${"table w-full border mt-5"}"><thead class="${"border-b"}"><tr><th class="${"w-2/12"}">Humidity (Avg)</th>
                <th class="${"w-2/12"}">Suhu (Min)</th>
                <th class="${"w-2/12"}">Suhu (Max)</th>
                <th class="${"w-2/12"}">Suhu (Avg)</th></tr></thead>
            <tbody><tr><td><input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"humidity_avg"}" id="${"humidity_avg"}" required${add_attribute("value", humidity_avg, 0)}></td>
                <td><input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"suhu_min"}" id="${"suhu_min"}" required${add_attribute("value", suhu_min, 0)}></td>
                <td><input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"suhu_max"}" id="${"suhu_max"}" required${add_attribute("value", suhu_max, 0)}></td>
                <td><input type="${"number"}" step="${"0.01"}" class="${"input input-bordered w-full text-right font-inter font-bold"}" name="${"suhu_avg"}" id="${"suhu_avg"}" required${add_attribute("value", suhu_avg, 0)}></td></tr></tbody></table></div>
        <div class="${"w-4/12"}"><div class="${"mockup-code bg-success h-[60vh] text-black"}"><pre data-prefix="${"1"}"><code>Luas Panen     : ${escape(luas_panen)} (Hektar)</code></pre>
            <pre data-prefix="${"2"}"><code>Luas Lahan     : ${escape(luas_lahan)} (Hektar)</code></pre>
            <pre data-prefix="${"3"}"><code>Suhu Min       : ${escape(suhu_min)} (Celcius)</code></pre>
            <pre data-prefix="${"4"}"><code>Suhu Max       : ${escape(suhu_max)} (Celcius)</code></pre>
            <pre data-prefix="${"5"}"><code>Suhu Avg       : ${escape(suhu_avg)} (Celcius)</code></pre>
            <pre data-prefix="${"6"}"><code>Humidity Avg   : ${escape(humidity_avg)} (%)</code></pre>
            <pre data-prefix="${"7"}"><code>Curah Hujan    : ${escape(curah_hujan)} (mm)</code></pre>
            <pre data-prefix="${"8"}"><code>Hari Hujan     : ${escape(hari_hujan)} (Hari/tahun)</code></pre>
            <pre data-prefix="${"9"}"><code>Penyinaran     : ${escape(penyinaran)} (%)</code></pre>
            <pre data-prefix="${"10"}"><code>Produktivitas  : ${escape(produktivitas)} (%)</code></pre>
            <pre data-prefix="${"11"}"><code>Kota           : ${escape(kota2)}</code></pre>
            <pre data-prefix="${"12"}"><code>Stasiun        : ${escape(stasiun2)}</code></pre>
            <pre data-prefix="${"13"}"><code>Tahun          : ${escape(tahun)}</code></pre>
            <pre data-prefix="${"14"}"><code>Model path     : ${escape(val.slice(7))}</code></pre>
            <div class="${"flex flex-col"}">${``}
              ${``}
              ${``}
              ${``}</div>
            <button class="${"btn btn-warning absolute right-28 bottom-3 btn-sm"}">Clear</button>
            <button class="${"btn btn-info absolute right-3 bottom-3 btn-sm"}" type="${"submit"}">Confirm</button></div></div></div></form></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export { Predict as default };
