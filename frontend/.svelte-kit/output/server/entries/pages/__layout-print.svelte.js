import { c as create_ssr_component, o as onMount } from "../../chunks/index-cd422cba.js";
/* empty css                         */const _layout_print = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ready = false;
  onMount(() => {
    ready = true;
  });
  return `${ready ? `<div>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
export { _layout_print as default };
