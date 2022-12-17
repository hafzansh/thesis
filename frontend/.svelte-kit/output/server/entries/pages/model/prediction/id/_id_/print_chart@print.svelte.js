import { c as create_ssr_component, v as validate_component, d as escape } from "../../../../../../chunks/index-cd422cba.js";
import { L as Logo } from "../../../../../../chunks/Logo-e0926b9d.js";
import { c as city } from "../../../../../../chunks/constants-477d2973.js";
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { B as Bar } from "../../../../../../chunks/index-b8521424.js";
import "@fortawesome/free-solid-svg-icons";
Chart.register(ChartDataLabels, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
setTimeout(() => window.print(), 1e3);
const Print_chart_print = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const raw_data = JSON.parse(data[0].data);
  const table_data = JSON.parse(data[0].data);
  table_data.map((e) => {
    e.kota = city[e.kota - 1];
  });
  raw_data.map((e) => {
    e.kota = city[e.kota - 1];
  });
  const data_city = raw_data.map((c) => c.kota = `${c.kota} (${c.tahun}) - ${parseFloat(c.result).toLocaleString("en")}`);
  const data_result = raw_data.map((c) => c.result);
  const cdata = {
    labels: data_city,
    datasets: [
      {
        label: "Result",
        data: data_result,
        backgroundColor: ["rgba(255, 134,159,0.4)"],
        borderWidth: 2,
        borderColor: ["rgba(255, 134, 159, 1)"]
      }
    ]
  };
  let options = { responsive: true };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"flex flex-col w-full h-full bg-white"}"><div class="${"flex flex-row w-full"}">${validate_component(Logo, "Logo").$$render($$result, { title: "Prediction Data" }, {}, {})}</div>
  <div class="${"flex flex-row justify-end items-center w-full mt-[-25px]"}"><article class="${"prose"}"><h3>${escape(data[0].path)}</h3></article></div>
  <div class="${"flex flex-col bg-white"}"><div class="${"flex flex-col w-full h-full bg-white"}"><div class="${"w-full flex flex-col bg-white justify-center items-center rounded-lg p-10"}">${validate_component(Bar, "Bar").$$render($$result, { data: cdata, options }, {}, {})}</div></div></div></div>`;
});
export { Print_chart_print as default };
