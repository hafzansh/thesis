import { c as create_ssr_component, v as validate_component, e as each, d as escape } from "../../../../../chunks/index-cd422cba.js";
import { L as Logo } from "../../../../../chunks/Logo-e0926b9d.js";
const Index_print = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setTimeout(() => window.print(), 1e3);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"p-0 flex flex-col items-end justify-end w-full h-full bg-white"}"><div class="${"flex flex-row w-full"}">${validate_component(Logo, "Logo").$$render($$result, { title: "Data Iklim" }, {}, {})}</div>
  <div class="${"bg-white w-full h-full"}"><table class="${"table table-compact w-full rounded bg-white"}"><tbody><tr><th>No</th>
          <th>Tahun</th>
          <th>Stasiun</th>
          <th>Suhu (Min)</th>
          <th>Suhu (Max)</th>
          <th>Suhu (Avg)</th>
          <th>Humidity (Avg)</th>
          <th>Curah Hujan</th>
          <th>Hari Hujan</th>
          <th>Penyinaran</th></tr>
        ${each(data, (lbl, i) => {
    return `<tr><th>${escape(i + 1)}</th>
            <th>${escape(data[i].tahun)}</th>
            <th>${escape(data[i].stasiun)}</th>
            <th>${escape(data[i].suhu_min)}</th>
            <th>${escape(data[i].suhu_max)}</th>
            <th>${escape(data[i].suhu_avg)}</th>
            <th>${escape(data[i].humidity_avg)}</th>
            <th>${escape(data[i].curah_hujan)}</th>
            <th>${escape(data[i].hari_hujan)}</th>
            <th>${escape(data[i].penyinaran)}</th>
          </tr>`;
  })}</tbody>
      </table></div></div>`;
});
export { Index_print as default };
