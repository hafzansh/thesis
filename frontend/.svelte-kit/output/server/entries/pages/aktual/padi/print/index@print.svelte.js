import { c as create_ssr_component, v as validate_component, e as each, d as escape } from "../../../../../chunks/index-cd422cba.js";
import { L as Logo } from "../../../../../chunks/Logo-e0926b9d.js";
const Index_print = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setTimeout(() => window.print(), 1e3);
  let { data } = $$props;
  console.log(data[0].kota);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"p-0 flex flex-col items-end justify-end w-full h-full bg-base-100"}"><div class="${"flex flex-row w-full"}">${validate_component(Logo, "Logo").$$render($$result, { title: "Data Padi" }, {}, {})}</div>
  <div class="${"bg-white w-full h-full"}"><table class="${"table table-compact w-full rounded bg-white"}"><tbody><tr class="${"bg-base-300"}"><th>No</th>
          <th>Tahun</th>
          <th>Kota</th>
          <th>Luas Lahan</th>
          <th>Luas Panen</th>
          <th>Produktivitas</th>
          <th>Produksi</th></tr>
        ${each(data, (lbl, i) => {
    return `<tr><th>${escape(i + 1)}</th>
            <th>${escape(data[i].tahun)}</th>
            <th>${escape(data[i].kota)}</th>
            <th>${escape(data[i].luas_lahan)}</th>
            <th>${escape(data[i].luas_panen)}</th>
            <th>${escape(data[i].produktivitas)}</th>
            <th>${escape(data[i].produksi)}</th>
          </tr>`;
  })}</tbody>
      </table></div></div>`;
});
export { Index_print as default };
