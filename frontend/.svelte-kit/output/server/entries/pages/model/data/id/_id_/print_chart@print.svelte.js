import { c as create_ssr_component, v as validate_component, d as escape } from "../../../../../../chunks/index-cd422cba.js";
import { c as city } from "../../../../../../chunks/constants-477d2973.js";
import "chart.js/auto";
import { L as Line } from "../../../../../../chunks/index-b8521424.js";
import { g as goto } from "../../../../../../chunks/navigation-92f05dd6.js";
import { L as Logo } from "../../../../../../chunks/Logo-e0926b9d.js";
import "@fortawesome/free-solid-svg-icons";
import "chart.js";
setTimeout(() => window.print(), 1e3);
const Print_chart_print = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const pog = data;
  if (pog.error) {
    goto("/model/data");
  }
  const loss = JSON.parse(pog.loss);
  const chart_loss_label = Array.from({ length: pog.epoch }, (_, i) => `Epoch-${i + 1}`);
  const chart_data_loss1 = loss.map((c) => c.loss);
  const chart_data_loss2 = loss.map((c) => c.val_loss);
  const result = JSON.parse(pog.result);
  const chart_result_label = result.map((c) => `${city[c.City - 1]} (${c.Year})`);
  const chart_data1 = result.map((c) => c["Test Data"]);
  const chart_data2 = result.map((c) => c.Prediction);
  result.map((c) => c.MAE);
  const chart_options = {
    title: {
      display: true,
      text: "Chart Title",
      padding: { top: 10, bottom: 30 }
    },
    responsive: true
  };
  const chart_scales1 = { scales: { y: { min: -3, max: 3 } } };
  const chart_title2 = {
    title: { display: true, text: "Chart Title" }
  };
  const chart_scales2 = { scales: { y: { min: 0, max: 2 } } };
  let data_result = {
    labels: chart_result_label,
    datasets: [
      {
        label: "Prediction",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chart_data2
      },
      {
        label: "Test Data",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "rgba(184, 185, 210, .3)",
        borderColor: "rgb(35, 26, 136)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(35, 26, 136)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chart_data1
      }
    ]
  };
  let data_loss = {
    labels: chart_loss_label,
    datasets: [
      {
        label: "Training Loss",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
        borderCapStyle: "butt",
        borderDash: [1],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chart_data_loss1
      },
      {
        label: "Validation Loss",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "rgba(184, 185, 210, .3)",
        borderColor: "rgb(35, 26, 136)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(35, 26, 136)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chart_data_loss2
      }
    ]
  };
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
      <div class="${"stat place-items-center"}"><div class="${"stat-title"}">Mean Absolute Error</div>
        <div class="${"stat-value"}">${escape(pog.mae)}</div></div>

      <div class="${"stat place-items-center"}"><div class="${"stat-title"}">Nodes</div>
        <div class="${"stat-value"}">${escape(pog.node)}</div></div></div>
    <div class="${"flex flex-col bg-white mt-[-10px]"}"><div class="${"flex flex-col w-full"}"><div class="${"w-full flex flex-col bg-white justify-center items-center rounded-lg p-10"}"><h1 class="${"font-inter font-bold text-[50px] justify-center"}">Data Comparison
          </h1>
          ${validate_component(Line, "Line").$$render($$result, {
    data: data_result,
    options: { chart_scales1, ...chart_options }
  }, {}, {})}</div>
        <div class="${"w-full flex flex-col bg-white justify-center items-center rounded-lg p-10 mt-[100px]"}"><h1 class="${"font-inter font-bold text-[50px] justify-center"}">Loss</h1>
          ${validate_component(Line, "Line").$$render($$result, {
    data: data_loss,
    options: {
      chart_scales2,
      ...chart_options,
      ...chart_title2
    }
  }, {}, {})}</div></div></div></div>` : ``}`;
});
export { Print_chart_print as default };
