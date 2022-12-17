import { c as create_ssr_component, v as validate_component, e as each, d as escape } from "../../../../chunks/index-cd422cba.js";
import { L as Logo } from "../../../../chunks/Logo-e0926b9d.js";
const Print_print = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setTimeout(() => window.print(), 1e3);
  let { data } = $$props;
  console.log(data[0].mae);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"p-0 flex flex-col items-end justify-end w-full h-full bg-white"}"><div class="${"flex flex-row w-full"}">${validate_component(Logo, "Logo").$$render($$result, { title: "List Model Data" }, {}, {})}</div>
    <div class="${"bg-white w-full h-full"}"><table class="${"table table-compact w-full rounded bg-white"}"><thead></thead> 
        <tbody><tr><th>No</th> 
                <th>Path</th> 
                <th>Epoch</th> 
                <th>Test Size</th> 
                <th>Learning Rate</th> 
                <th>Nodes</th> 
                <th>MAE</th></tr>
            ${each(data, (lbl, i) => {
    return `<tr><th>${escape(i + 1)}</th> 
              <th>${escape(data[i].path)}</th> 
              <th>${escape(data[i].epoch)}</th> 
              <th>${escape(data[i].size)}</th> 
              <th>${escape(data[i].rate)}</th> 
              <th>${escape(data[i].node)}</th> 
              <th>${escape(data[i].mae)}</th> 
            </tr>`;
  })}</tbody>
          </table></div></div>`;
});
export { Print_print as default };
