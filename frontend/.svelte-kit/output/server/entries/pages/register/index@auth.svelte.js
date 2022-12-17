import { c as create_ssr_component } from "../../../chunks/index-cd422cba.js";
/* empty css                                                         */import "@fortawesome/free-solid-svg-icons";
const load = ({ session }) => {
  if (session.user.authenticated) {
    return { status: 302, redirect: "/" };
  }
  return {};
};
const Index_auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${``}`;
});
export { Index_auth as default, load };
