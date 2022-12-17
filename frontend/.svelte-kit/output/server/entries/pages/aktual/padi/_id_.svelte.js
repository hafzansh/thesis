import { c as create_ssr_component, d as escape } from "../../../../chunks/index-cd422cba.js";
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  console.log(item);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  return `${item.detail ? `<h1>${escape(item.detail)}</h1>` : `<h1>${escape(item.id)}</h1>
<h1>${escape(item.kota)}</h1>
<h1>${escape(item.tahun)}</h1>
<h1>${escape(item.luas_lahan)}</h1>
<h1>${escape(item.luas_panen)}</h1>`}`;
});
export { U5Bidu5D as default };
