import { c as create_ssr_component, f as createEventDispatcher, b as add_attribute } from "./index-cd422cba.js";
import { Grid } from "gridjs";
const Gridjs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "100%" } = $$props;
  let { height = "auto" } = $$props;
  let { autoWidth = true } = $$props;
  let { fixedHeader = false } = $$props;
  let { resizable = false } = $$props;
  let { from = void 0 } = $$props;
  let { language = void 0 } = $$props;
  let { search = false } = $$props;
  let { sort = false } = $$props;
  let { pagination = false } = $$props;
  let { server = void 0 } = $$props;
  let { columns = void 0 } = $$props;
  let { data = void 0 } = $$props;
  let { plugins = void 0 } = $$props;
  let { style = {} } = $$props;
  let { className = {} } = $$props;
  const instance = new Grid({
    from,
    data,
    columns,
    server,
    search,
    sort,
    pagination,
    language,
    width,
    height,
    autoWidth,
    plugins,
    fixedHeader,
    resizable,
    style,
    className
  });
  let node;
  const dispatch = createEventDispatcher();
  instance.on("cellClick", (...args) => dispatch("cellClick", { ...args }));
  instance.on("rowClick", (...args) => dispatch("rowClick", { ...args }));
  instance.on("beforeLoad", () => dispatch("beforeLoad"));
  instance.on("load", (data2) => dispatch("load", { ...data2 }));
  instance.on("ready", () => dispatch("ready"));
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.autoWidth === void 0 && $$bindings.autoWidth && autoWidth !== void 0)
    $$bindings.autoWidth(autoWidth);
  if ($$props.fixedHeader === void 0 && $$bindings.fixedHeader && fixedHeader !== void 0)
    $$bindings.fixedHeader(fixedHeader);
  if ($$props.resizable === void 0 && $$bindings.resizable && resizable !== void 0)
    $$bindings.resizable(resizable);
  if ($$props.from === void 0 && $$bindings.from && from !== void 0)
    $$bindings.from(from);
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  if ($$props.pagination === void 0 && $$bindings.pagination && pagination !== void 0)
    $$bindings.pagination(pagination);
  if ($$props.server === void 0 && $$bindings.server && server !== void 0)
    $$bindings.server(server);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0)
    $$bindings.plugins(plugins);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.instance === void 0 && $$bindings.instance && instance !== void 0)
    $$bindings.instance(instance);
  return `<article${add_attribute("this", node, 0)}></article>`;
});
export { Gridjs as G };
