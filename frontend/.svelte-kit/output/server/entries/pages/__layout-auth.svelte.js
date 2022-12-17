import { c as create_ssr_component, o as onMount } from "../../chunks/index-cd422cba.js";
/* empty css                         */const _layout_auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ready = false;
  onMount(() => {
    ready = true;
  });
  return `${ready ? `<div class="${"bg-slate-200"}">${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
export { _layout_auth as default };
