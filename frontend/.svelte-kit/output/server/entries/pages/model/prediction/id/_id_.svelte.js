import { c as create_ssr_component, a as subscribe, v as validate_component, d as escape, b as add_attribute, e as each } from "../../../../../chunks/index-cd422cba.js";
import { c as city, s as stasiun } from "../../../../../chunks/constants-477d2973.js";
import { F as Fa } from "../../../../../chunks/fa-b0854f2e.js";
import { B as Bar } from "../../../../../chunks/index-b8521424.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
/* empty css                                                                        */import { faArrowCircleLeft, faPrint, faShare } from "@fortawesome/free-solid-svg-icons";
import { s as session, p as page } from "../../../../../chunks/stores-260ca779.js";
/* empty css                                                               */Chart.register(ChartDataLabels, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_session;
  let $page, $$unsubscribe_page;
  $$unsubscribe_session = subscribe(session, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
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
  let options = {
    responsive: true,
    plugins: {
      datalabels: {}
    }
  };
  `${$page.url.pathname}/print_chart`;
  `${$page.url.pathname}/print_table`;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_session();
  $$unsubscribe_page();
  return `<div class="${"stats bg-neutral text-white shadow flex flex-row justify-start items-start mb-5"}"><button class="${"stat place-items-center"}"><div class="${"stat-title"}">Back</div>
		<div class="${"btn text-white stat-value"}">${validate_component(Fa, "Fa").$$render($$result, { icon: faArrowCircleLeft }, {}, {})}</div></button>
	<div class="${"stat place-items-center"}"><div class="${"stat-title"}"></div>
		<div class="${"stat-value"}"></div></div>
	<div class="${"stat place-items-center"}"><div class="${"stat-title"}">Model</div>
		<div class="${"stat-value"}">Prediction Result</div></div>
	<div class="${"stat place-items-center"}"><div class="${"stat-title"}"></div>
		<div class="${"stat-value"}"></div></div>
	<div class="${"stat place-items-center"}"><div class="${"stat-title"}">Print</div>
		<div class="${"flex flex-row justify-center gap-2"}"><button class="${"flex flex-col justify-center items-center"}"><div class="${"stat-value text-white mb-1 mt-1 text-[25px]"}">${validate_component(Fa, "Fa").$$render($$result, { icon: faPrint }, {}, {})}</div>
				<div class="${"stat-description badge badge-outline"}">Chart</div></button>
			<button class="${"flex flex-col justify-center items-center"}"><div class="${"stat-value text-white mb-1 mt-1 text-[25px]"}">${validate_component(Fa, "Fa").$$render($$result, { icon: faPrint }, {}, {})}</div>
				<div class="${"stat-description badge badge-outline"}">Table</div></button>
			<a href="${"#send-mail"}" class="${"flex flex-col justify-center items-center"}"><div class="${"stat-value text-white mb-1 mt-1 text-[25px]"}">${validate_component(Fa, "Fa").$$render($$result, { icon: faShare }, {}, {})}</div>
				<div class="${"stat-description badge badge-outline"}">Share</div></a>
			
			<div class="${"modal"}" id="${"send-mail"}"><div class="${"modal-box max-w-md"}"><form method="${"post"}"><h3 class="${"font-bold text-lg text-base-content"}">Kirim hasil model ini kepada :
						</h3>
						<div class="${"flex flex-col gap-4 mt-5"}"><div class="${"form-control"}"><label class="${"label cursor-pointer"}"><input type="${"radio"}" name="${"radio-6"}" class="${"radio " + escape("radio-primary")}" value="${"1"}" ${"checked"}${add_attribute("checked", true, 1)}>
									<span class="${"label-text btn " + escape("btn-primary") + " text-white w-80"}">Badan Pusat Statistik Kal-Sel</span></label></div>
							<div class="${"form-control"}"><label class="${"label cursor-pointer"}"><input type="${"radio"}" name="${"radio-6"}" class="${"radio " + escape("")}" value="${"2"}" ${""}${""}>
									<span class="${"label-text btn " + escape("") + " text-white w-80"}">Dinas Tanaman Pangan Kal-Sel</span></label></div>
							<div class="${"form-control"}"><label class="${"label cursor-pointer"}"><input type="${"radio"}" name="${"radio-6"}" class="${"radio " + escape("")}" value="${"3"}" ${""}${""}>
									<span class="${"label-text btn " + escape("") + " text-white w-80"}">Custom</span></label></div>

							${``}</div>
						<div class="${"modal-action"}"><a href="${"#"}" class="${"btn"}">Cancel</a>
							<button class="${"btn btn-primary"}" type="${"submit"}">Send</button></div></form></div></div></div></div></div>
<div class="${"flex flex-col"}"><div class="${"flex flex-col w-full"}"><div class="${"w-full flex flex-col bg-base-200 justify-center items-center rounded-lg p-10"}">${validate_component(Bar, "Bar").$$render($$result, { data: cdata, options }, {}, {})}</div></div></div>
<div class="${"overflow-x-auto flex flex-col justify-center items-center my-5"}"><h1 class="${"font-inter font-bold text-lg justify-center mb-5"}">Parameter Data and Result
	</h1>
	<table class="${"table table-compact w-full rounded"}"><thead><tr><th>No</th>
				<th>Tahun</th>
				<th>Kota</th>
				<th>Luas Lahan</th>
				<th>Luas Panen</th>
				<th>Produktivitas</th>
				<th>Hasil Prediksi</th></tr></thead>
		<tbody>${each(table_data, (lbl, i) => {
    return `<tr><th>${escape(i + 1)}</th>
					<td>${escape(table_data[i].tahun)}</td>
					<td>${escape(table_data[i].kota)}</td>
					<td>${escape(table_data[i].luas_lahan)}</td>
					<td>${escape(table_data[i].luas_panen)}</td>
					<td>${escape(table_data[i].produktivitas)}</td>
					<td>${escape(parseFloat(table_data[i].result).toLocaleString("en"))}</td>
				</tr>`;
  })}</tbody></table></div>
<div class="${"overflow-x-auto flex flex-col justify-center items-center my-5"}"><h1 class="${"font-inter font-bold text-lg justify-center mb-5"}">Parameter Iklim
	</h1>
	<table class="${"table table-compact w-full rounded"}"><thead><tr><th>No</th>
				<th>Tahun</th>
				<th>Stasiun</th>
				<th>Suhu (Min)</th>
				<th>Suhu (Max)</th>
				<th>Suhu (Avg)</th>
				<th>Humidity (Avg)</th>
				<th>Curah Hujan </th>
				<th>Hari Hujan</th>
				<th>Penyinaran</th></tr></thead>
		<tbody>${each(table_data, (lbl, i) => {
    return `<tr><th>${escape(i + 1)}</th>
					<td>${escape(table_data[i].tahun)}</td>
					<td>${escape(stasiun[table_data[i].stasiun])}</td>
					<td>${escape(table_data[i].suhu_min)}</td>
					<td>${escape(table_data[i].suhu_max)}</td>
					<td>${escape(table_data[i].suhu_avg)}</td>
					<td>${escape(table_data[i].humidity_avg)}</td>
					<td>${escape(table_data[i].curah_hujan)}</td>
					<td>${escape(table_data[i].hari_hujan)}</td>
					<td>${escape(table_data[i].penyinaran)}</td>
				</tr>`;
  })}</tbody></table></div>`;
});
export { U5Bidu5D as default };
