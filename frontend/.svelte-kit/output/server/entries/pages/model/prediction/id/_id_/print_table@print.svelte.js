import { c as create_ssr_component, v as validate_component, d as escape, e as each } from "../../../../../../chunks/index-cd422cba.js";
import { c as city, s as stasiun } from "../../../../../../chunks/constants-477d2973.js";
import { L as Logo } from "../../../../../../chunks/Logo-e0926b9d.js";
import "@fortawesome/free-solid-svg-icons";
setTimeout(() => window.print(), 1e3);
const Print_table_print = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const table_data = JSON.parse(data[0].data);
  table_data.map((e) => {
    e.kota = city[e.kota - 1];
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"overflow-x-auto flex flex-col justify-center items-center my-5"}"><div class="${"flex flex-row w-full"}">${validate_component(Logo, "Logo").$$render($$result, { title: "Prediction Data" }, {}, {})}</div>
  <div class="${"flex flex-row justify-end items-center w-full mt-[-25px]"}"><article class="${"prose"}"><h3>${escape(data[0].path)}</h3></article></div>
  <h1 class="${"font-inter font-bold text-lg justify-center mb-5"}">Parameter Data and Result
  </h1>
  <table class="${"table table-compact w-full rounded"}"><thead></thead>
    <tbody><tr><th>No</th>
        <th>Tahun</th>
        <th>Kota</th>
        <th>Luas Lahan</th>
        <th>Luas Panen</th>
        <th>Produktivitas</th>
        <th>Hasil Prediksi</th></tr>
      ${each(table_data, (lbl, i) => {
    return `<tr><th>${escape(i + 1)}</th>
          <td>${escape(table_data[i].tahun)}</td>
          <td>${escape(table_data[i].kota)}</td>
          <td>${escape(table_data[i].luas_lahan)}</td>
          <td>${escape(table_data[i].luas_panen)}</td>
          <td>${escape(table_data[i].produktivitas)}</td>
          <td>${escape(parseFloat(table_data[i].result).toLocaleString("en"))}</td>
        </tr>`;
  })}</tbody></table></div>
<div class="${"overflow-x-auto flex flex-col justify-center items-center my-5"}"><h1 class="${"font-inter font-bold text-lg justify-center mb-5"}">Parameter Iklim
  </h1>
  <table class="${"table table-compact w-full rounded"}"><thead></thead>
    <tbody><tr><th>No</th>
        <th>Tahun</th>
        <th>Stasiun</th>
        <th>Suhu (Min)</th>
        <th>Suhu (Max)</th>
        <th>Suhu (Avg)</th>
        <th>Humidity (Avg)</th>
        <th>Curah Hujan </th>
        <th>Hari Hujan</th>
        <th>Penyinaran</th></tr>
      ${each(table_data, (lbl, i) => {
    return `<tr><th>${escape(i + 1)}</th>
          <td>${escape(table_data[i].tahun)}</td>
          <td>${escape(stasiun[table_data[i].stasiun])}</td>
          <td>${escape(table_data[i].suhu_min)}</td>
          <td>${escape(table_data[i].suhu_max)}</td>
          <td>${escape(table_data[i].suhu_avg)}</td>
          <td>${escape(table_data[i].humidity_avg)}</td>
          <td>${escape(table_data[i].curah_hujan)}</td>
          <td>${escape(table_data[i].hari_hujan)}</td>
          <td>${escape(table_data[i].penyinaran)}</td>
        </tr>`;
  })}</tbody></table></div>
<div class="${"flex flex-col justify-end items-end w-full mt-10 ml-[-50px] hidden"}"><i class="${"font-inter font-bold font-lg"}">${escape(data[0].path)}</i></div>`;
});
export { Print_table_print as default };
