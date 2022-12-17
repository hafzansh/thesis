import { c as create_ssr_component, a as subscribe, d as escape, o as onMount, v as validate_component } from "../../chunks/index-cd422cba.js";
import { themeChange } from "theme-change";
import { s as session } from "../../chunks/stores-260ca779.js";
import { L as Line } from "../../chunks/index-b8521424.js";
import { Chart, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { c as city, b as baseApi } from "../../chunks/constants-477d2973.js";
import { g as get_data } from "../../chunks/api-fe40a33c.js";
import "@fortawesome/free-solid-svg-icons";
const WelcomeBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  var today = new Date();
  var curHr = today.getHours();
  let greetings;
  if (curHr < 12) {
    greetings = "Good morning";
  } else if (curHr < 18) {
    greetings = "Good afternoon";
  } else {
    greetings = "Good evening";
  }
  $$unsubscribe_session();
  return `<div class="${"relative bg-primary p-4 sm:p-6 rounded-lg overflow-hidden mb-8 text-primary-content"}"><div class="${"relative"}"><h1 class="${"text-2xl md:text-3xl font-bold mb-1"}">${escape(greetings)}, ${escape($session.user.full_name)} \u{1F44B}
    </h1>
    <p>Here is a data summary on the server</p></div></div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  const load = ({ session: session2 }) => {
    if (!session2.user.authenticated) {
      return { status: 302, redirect: "/login" };
    }
    return {
      status: 200,
      props: { user: session2.user }
    };
  };
  let a;
  let ready = false;
  onMount(async () => {
    themeChange(false);
    a = await get_data(`${baseApi}/model`, $session.user.auth_token).then((a2) => a2.json());
    a.sort((a2, b) => Number(a2.mae) - Number(b.mae));
    console.log(a[0]);
    ready = true;
  });
  let { data_padi } = $$props;
  let { data_iklim } = $$props;
  Chart.register(ChartDataLabels, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
  let padi_produksi = data_padi.map((c) => c.produksi);
  let iklim_labels = data_iklim.map((c) => c.tahun);
  let iklim_suhu_min = data_iklim.map((c) => c.suhu_min);
  let iklim_suhu_max = data_iklim.map((c) => c.suhu_max);
  let iklim_suhu_avg = data_iklim.map((c) => c.suhu_avg);
  let iklim_humid_avg = data_iklim.map((c) => c.humidity_avg);
  let padi_kota = data_padi.map((c) => `${city[c.kota - 1]} (${c.tahun})`);
  let chart_padi = {
    labels: padi_kota,
    datasets: [
      {
        label: "Produksi",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
        data: padi_produksi
      }
    ]
  };
  let chart_suhu_min = {
    labels: iklim_labels,
    datasets: [
      {
        label: "Suhu (Min)",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
        data: iklim_suhu_min
      }
    ]
  };
  let chart_suhu_max = {
    labels: iklim_labels,
    datasets: [
      {
        label: "Suhu (Min)",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
        data: iklim_suhu_max
      }
    ]
  };
  let chart_suhu_avg = {
    labels: iklim_labels,
    datasets: [
      {
        label: "Suhu (Min)",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
        data: iklim_suhu_avg
      }
    ]
  };
  let chart_humid_avg = {
    labels: iklim_labels,
    datasets: [
      {
        label: "Suhu (Min)",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
        data: iklim_humid_avg
      }
    ]
  };
  let chart_options = {
    responsive: true,
    plugins: {
      datalabels: { display: false },
      legend: { display: false }
    }
  };
  if ($$props.load === void 0 && $$bindings.load && load !== void 0)
    $$bindings.load(load);
  if ($$props.data_padi === void 0 && $$bindings.data_padi && data_padi !== void 0)
    $$bindings.data_padi(data_padi);
  if ($$props.data_iklim === void 0 && $$bindings.data_iklim && data_iklim !== void 0)
    $$bindings.data_iklim(data_iklim);
  $$unsubscribe_session();
  return `<div></div>
${validate_component(WelcomeBanner, "WelcomeBanner").$$render($$result, {}, {}, {})}
<div class="${"grid grid-cols-4 gap-5 mb-12"}"><div class="${"card bg-base-100 shadow-xl col-span-2 row-span-2"}"><div class="${"card-body"}"><h2 class="${"card-title"}">Data Padi</h2>
      <figure>${validate_component(Line, "Line").$$render($$result, { data: chart_padi, options: chart_options }, {}, {})}</figure></div></div>
  <div class="${"card bg-base-100 shadow-xl"}"><div class="${"card-body"}"><h2 class="${"card-title"}">Suhu (Average)</h2>
      <figure>${validate_component(Line, "Line").$$render($$result, {
    data: chart_suhu_avg,
    options: chart_options
  }, {}, {})}</figure></div></div>
  <div class="${"card bg-base-100 shadow-xl"}"><div class="${"card-body"}"><h2 class="${"card-title"}">Suhu (Maximal)</h2>
      <figure>${validate_component(Line, "Line").$$render($$result, {
    data: chart_suhu_max,
    options: chart_options
  }, {}, {})}</figure></div></div>
  <div class="${"card bg-base-100 shadow-xl"}"><div class="${"card-body"}"><h2 class="${"card-title"}">Suhu (Min)</h2>
      <figure>${validate_component(Line, "Line").$$render($$result, {
    data: chart_suhu_min,
    options: chart_options
  }, {}, {})}</figure></div></div>
  <div class="${"card bg-base-100 shadow-xl"}"><div class="${"card-body"}"><h2 class="${"card-title"}">Humidity (Average)</h2>
      <figure>${validate_component(Line, "Line").$$render($$result, {
    data: chart_humid_avg,
    options: chart_options
  }, {}, {})}</figure></div></div>
  
      <div class="${"stats stats-vertical bg-primary text-primary-content"}"><div class="${"stat"}"><div class="${"stat-title"}">Themes</div>
          <div class="${"stat-value"}">Change Theme</div>
          <div class="${"stat-actions"}"><button data-set-theme="${"autumn"}" class="${"btn btn-accent btn-sm"}" data-act-class="${"ACTIVECLASS"}">Autumn</button>
            <button data-set-theme="${"cupcake"}" class="${"btn btn-secondary btn-sm"}" data-act-class="${"ACTIVECLASS"}">Cupcake</button>
            <button data-set-theme="${"pastel"}" class="${"btn btn-neutral btn-sm"}" data-act-class="${"ACTIVECLASS"}">Pastel</button></div></div></div>
  ${ready ? `<div class="${"stats stats-vertical bg-primary text-primary-content"}"><div class="${"stat"}"><div class="${"stat-title"}">Best Model #1</div>
          
          <div class="${"stat-value"}">MAE ${escape(a[0].mae)}</div>
          
          <div class="${"stat-actions"}"><button class="${"btn btn-accent btn-sm"}">LSize : ${escape(a[0].size * 100)}%</button>
            <button class="${"btn btn-secondary btn-sm"}">Nodes : ${escape(a[0].node)}</button>            
            <button class="${"btn btn-neutral btn-sm"}"><a href="${"/model/data/id/" + escape(a[0].id)}">Details
              </a></button></div></div></div>
      <div class="${"stats stats-vertical bg-primary text-primary-content"}"><div class="${"stat"}"><div class="${"stat-title"}">Best Model #2</div>
          
          <div class="${"stat-value"}">MAE ${escape(a[1].mae)}</div>
          
          <div class="${"stat-actions"}"><button class="${"btn btn-accent btn-sm"}">LSize : ${escape(a[1].size * 100)}%</button>
            <button class="${"btn btn-secondary btn-sm"}">Nodes : ${escape(a[1].node)}</button>            
            <button class="${"btn btn-neutral btn-sm"}"><a href="${"/model/data/id/" + escape(a[1].id)}">Details
              </a></button></div></div></div>
      <div class="${"stats stats-vertical bg-primary text-primary-content"}"><div class="${"stat"}"><div class="${"stat-title"}">Best Model #3</div>
          
          <div class="${"stat-value"}">MAE ${escape(a[2].mae)}</div>
          
          <div class="${"stat-actions"}"><button class="${"btn btn-accent btn-sm"}">LSize : ${escape(a[2].size * 100)}%</button>
            <button class="${"btn btn-secondary btn-sm"}">Nodes : ${escape(a[2].node)}</button>            
            <button class="${"btn btn-neutral btn-sm"}"><a href="${"/model/data/id/" + escape(a[2].id)}">Details
              </a></button></div></div></div>` : ``}</div>`;
});
export { Routes as default };
