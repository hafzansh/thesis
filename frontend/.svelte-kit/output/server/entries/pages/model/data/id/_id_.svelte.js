import { c as create_ssr_component, a as subscribe } from "../../../../../chunks/index-cd422cba.js";
import { c as city } from "../../../../../chunks/constants-477d2973.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale } from "chart.js";
import { g as goto } from "../../../../../chunks/navigation-92f05dd6.js";
/* empty css                                                               */import "@fortawesome/free-solid-svg-icons";
import { s as session, p as page } from "../../../../../chunks/stores-260ca779.js";
/* empty css                                                                        */Chart.register(ChartDataLabels, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_session;
  let $page, $$unsubscribe_page;
  $$unsubscribe_session = subscribe(session, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
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
  result.map((c) => `${city[c.City - 1]} (${c.Year})`);
  result.map((c) => c["Test Data"]);
  result.map((c) => c.Prediction);
  result.map((c) => c.MAE);
  `${Math.round(parseFloat(pog.size) * 100)}%`;
  `${$page.url.pathname}/print_chart`;
  `${$page.url.pathname}/print_table`;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_session();
  $$unsubscribe_page();
  return `${``}`;
});
export { U5Bidu5D as default };
