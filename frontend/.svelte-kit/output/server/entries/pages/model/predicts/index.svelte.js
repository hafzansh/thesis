import { c as create_ssr_component, e as each, d as escape } from "../../../../chunks/index-cd422cba.js";
import "gridjs";
import { c as city } from "../../../../chunks/constants-477d2973.js";
/* empty css                                                                     */import "papaparse";
import "@fortawesome/free-solid-svg-icons";
const Predicts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const stasiun = [
    "Stasiun Klimatologi Banjarbaru",
    "Stasiun Meteorologi Syamsudin Noor",
    "Stasiun Meteorologi Stagen Kotabaru"
  ];
  if ($$props.stasiun === void 0 && $$bindings.stasiun && stasiun !== void 0)
    $$bindings.stasiun(stasiun);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"mockup-window border bg-slate-300 h-[85vh]"}"><div class="${"bg-slate-200 flex flex-row h-full w-full"}"><div class="${"w-10/12 h-[75vh]"}">${`<div class="${"m-5 h-full rounded-lg"}"><div class="${"flex flex-col justify-center items-center w-full h-full"}"><article class="${"prose mx-10 items-start"}"><h1 class="${""}">CSV Column Format</h1>
              <p></p>
              </article>
            <div class="${"flex flex-row"}"><div class="${"flex flex-col"}"><article class="${"prose mx-10 mb-5 items-start"}"><h2 class="${""}"># Example</h2>
                  </article>
                <img src="${"/images/csv_data_format.png"}" alt="${"Data format for CSV"}" class="${"h-max rounded mx-10"}">
                <article class="${"prose mx-10 mt-5 items-start"}"><h2 class="${""}"># Format Stasiun</h2>
                  </article>
                <table class="${"table table-compact mx-10 mt-5"}"><thead><tr><td>Stasiun</td>
                      <td>Value</td></tr></thead>
                  <tbody>${each(stasiun, (sta, i) => {
      return `<tr><td>${escape(sta)}</td>
                        <td>${escape(i + 1)}</td>
                      </tr>`;
    })}</tbody></table></div>
              <div class="${"flex flex-col"}"><article class="${"prose mb-5 items-start"}"><h2 class="${""}"># Format Kota</h2>
                  </article>
                <table class="${"table table-compact"}"><thead><tr><td>Description</td>
                      <td>Value</td></tr></thead>
                  <tbody>${each(city, (ct, i) => {
      return `<tr><td>${escape(ct)}</td>
                        <td>${escape(i + 1)}</td>
                      </tr>`;
    })}</tbody></table></div></div></div></div>`}
      ${``}
      ${``}
      ${``}</div>
    <div class="${"flex flex-col items-end justify-center ml-10"}"><button class="${"btn btn-secondary w-full"}">Reset</button>
      
      <ul class="${"steps steps-vertical mr-10"}"><li class="${"step " + escape("step-primary")}">CSV Format</li>
        <li class="${"step " + escape("")}">Upload CSV</li>
        <li class="${"step " + escape("")}">Select Model</li>
        <li class="${"step " + escape("")}">Predict</li></ul>
      <div class="${"btn-group w-full"}"><button class="${"btn btn-primary w-1/2"}" ${"disabled"}>Back</button>
        <button class="${"btn btn-primary w-1/2"}" ${""}>Next</button></div></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export { Predicts as default };
