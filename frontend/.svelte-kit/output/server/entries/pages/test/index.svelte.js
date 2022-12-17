import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-cd422cba.js";
import { g as goto } from "../../../chunks/navigation-92f05dd6.js";
import { L as Line } from "../../../chunks/index-b8521424.js";
import { Chart, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { c as city } from "../../../chunks/constants-477d2973.js";
import "@fortawesome/free-solid-svg-icons";
const LineChartComparison = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart.register(ChartDataLabels, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
  let { position = "center" } = $$props;
  let { display = false } = $$props;
  let { legend = true } = $$props;
  let { data1 } = $$props;
  let { data2 } = $$props;
  let { data_label } = $$props;
  let { label1 } = $$props;
  let { label2 } = $$props;
  const data = {
    labels: data_label,
    datasets: [
      {
        label: label1,
        fill: true,
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
        data: data1
      },
      {
        label: label2,
        fill: true,
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
        data: data2
      }
    ]
  };
  let chart_options = {
    responsive: true,
    plugins: {
      datalabels: { anchor: position, display },
      legend: { display: legend }
    }
  };
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  if ($$props.legend === void 0 && $$bindings.legend && legend !== void 0)
    $$bindings.legend(legend);
  if ($$props.data1 === void 0 && $$bindings.data1 && data1 !== void 0)
    $$bindings.data1(data1);
  if ($$props.data2 === void 0 && $$bindings.data2 && data2 !== void 0)
    $$bindings.data2(data2);
  if ($$props.data_label === void 0 && $$bindings.data_label && data_label !== void 0)
    $$bindings.data_label(data_label);
  if ($$props.label1 === void 0 && $$bindings.label1 && label1 !== void 0)
    $$bindings.label1(label1);
  if ($$props.label2 === void 0 && $$bindings.label2 && label2 !== void 0)
    $$bindings.label2(label2);
  return `${validate_component(Line, "Line").$$render($$result, { data, options: chart_options }, {}, {})}`;
});
const Test = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const pog = data;
  if (pog.error) {
    goto("/model/data");
  }
  const loss = JSON.parse(pog.loss);
  Array.from({ length: pog.epoch }, (_, i) => `Epoch-${i + 1}`);
  loss.map((c) => c.loss);
  loss.map((c) => c.val_loss);
  const result = JSON.parse(pog.result);
  const chart_result_label = result.map((c) => `${city[c.City - 1]} (${c.Year})`);
  const chart_data1 = result.map((c) => c["Test Data"]);
  const chart_data2 = result.map((c) => c.Prediction);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(LineChartComparison, "LineChartComparison").$$render($$result, {
    data1: chart_data1,
    data2: chart_data2,
    position: "center",
    display: false,
    legend: true,
    data_label: chart_result_label,
    label1: "pog",
    label2: "pog"
  }, {}, {})}`;
});
export { Test as default };
