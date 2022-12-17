import { c as create_ssr_component, d as escape } from "./index-cd422cba.js";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="${"flex flex-row w-full justify-between mb-5 h-20"}"><div class="${"flex items-center justify-center"}"><img src="${"/images/logo.png"}" class="${"h-14 w-14"}" alt="${"logo"}">
        
        <span class="${"text-[60px] font-bold align-middle ml-3 mb-2"}">JST<span class="${"text-primary font-semibold"}">PADI</span></span></div>
    <div class="${"flex items-center justify-center"}"><span class="${"text-[60px] font-bold align-middle ml-3 mb-2"}">${escape(title)}</span></div></div>`;
});
export { Logo as L };
