import { c as create_ssr_component, v as validate_component, e as each, d as escape, b as add_attribute } from "../../../../chunks/index-cd422cba.js";
import { L as Logo } from "../../../../chunks/Logo-e0926b9d.js";
const Index_print = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  setTimeout(window.print, 1500);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"flex flex-col w-full justify-end items-end"}"><div class="${"flex flex-row w-full"}">${validate_component(Logo, "Logo").$$render($$result, { title: "List Users" }, {}, {})}</div>      
    <table class="${"table w-full"}"><thead><tr><td class="${"w-1/12"}">No</td>
                <td class="${"w-2/12"}">Username</td>
                <td class="${"w-8/12"}">Full Name</td>
                <td class="${"w-1/12"}">Superuser</td></tr></thead>
        <tbody>${each(data, (dat, i) => {
    return `<tr><td>${escape(i + 1)}</td>
                <td><span class="${"font-bold italic"}">@${escape(data[i].username)}</span></td>
                <td>${escape(data[i].full_name)}</td>
                <td><span${add_attribute("class", data[i].is_superuser == true ? "badge badge-info" : "badge", 0)}>${escape(data[i].is_superuser == true ? "Yes" : "No")}</span></td>
            </tr>`;
  })}</tbody></table></div>`;
});
export { Index_print as default };
