import { c as create_ssr_component, v as validate_component, d as escape, e as each } from "../../../../../../chunks/index-cd422cba.js";
import { c as city } from "../../../../../../chunks/constants-477d2973.js";
import "chart.js/auto";
import "chart.js";
import { g as goto } from "../../../../../../chunks/navigation-92f05dd6.js";
import { L as Logo } from "../../../../../../chunks/Logo-e0926b9d.js";
import "@fortawesome/free-solid-svg-icons";
setTimeout(() => window.print(), 1e3);
const Print_table_print = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const pog = data;
  if (pog.error) {
    goto("/model/data");
  }
  const loss = JSON.parse(pog.loss);
  Array.from({ length: pog.epoch }, (_, i) => `Epoch-${i + 1}`);
  const chart_data_loss1 = loss.map((c) => c.loss);
  loss.map((c) => c.val_loss);
  const result = JSON.parse(pog.result);
  const chart_result_label = result.map((c) => `${city[c.City - 1]} (${c.Year})`);
  const chart_data1 = result.map((c) => c["Test Data"]);
  const chart_data2 = result.map((c) => c.Prediction);
  const mae_data = result.map((c) => c.MAE);
  const test_size = `${Math.round(parseFloat(pog.size) * 100)}%`;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${!pog.error ? `<div class="${"overflow-hidden p-3 bg-white"}" id="${"capture"}"><div class="${"flex flex-row w-full"}">${validate_component(Logo, "Logo").$$render($$result, { title: "Model Data" }, {}, {})}</div>
    <div class="${"flex flex-row justify-end items-center w-full mt-[-25px]"}"><article class="${"prose"}"><h3>\xA0${escape(pog.path)}</h3></article></div>
    <div class="${"stats bg-white text-black flex flex-row justify-start items-start mb-5"}"><div class="${"stat place-items-center"}"><div class="${"stat-title"}">Learning Rate</div>
          <div class="${"stat-value"}">${escape(pog.rate)}</div></div>
        <div class="${"stat place-items-center"}"><div class="${"stat-title"}">Test Size</div>
          <div class="${"stat-value"}">${escape(test_size)}</div></div>
        <div class="${"stat place-items-center"}"><div class="${"stat-title"}">Epoch</div>
          <div class="${"stat-value"}">${escape(chart_data_loss1.length)}/${escape(pog.epoch)}</div></div>
        <div class="${"stat lg:divider-vertical"}"></div>
        <div class="${"stat place-items-center"}"><div class="${"stat-title"}">Mean Absolute Error</div>
          <div class="${"stat-value"}">${escape(pog.mae)}</div></div>
        
        <div class="${"stat place-items-center"}"><div class="${"stat-title"}">Nodes</div>
          <div class="${"stat-value"}">${escape(pog.node)}</div></div></div>   
    <div class="${"overflow-x-auto mb-5 mt-16"}"><table class="${"table table-compact w-full rounded"}"><thead></thead> 
        <tbody><tr><th>No</th> 
            <th>City (Year)</th> 
            <th>Test Data</th> 
            <th>Prediction</th> 
            <th>Mean Absolute Error</th></tr>
          ${each(chart_result_label, (lbl, i) => {
    return `<tr><th>${escape(i + 1)}</th> 
            <td>${escape(lbl)}</td> 
            <td>${escape(chart_data1[i])}</td> 
            <td>${escape(chart_data2[i])}</td> 
            <td>${escape(mae_data[i])}</td>           
          </tr>`;
  })}
          <tr><th></th> 
            <td></td> 
            <td></td> 
            <td></td> 
            <td>${escape(pog.mae)}</td></tr></tbody>
        <tfoot></tfoot></table></div></div>` : ``}`;
});
export { Print_table_print as default };
