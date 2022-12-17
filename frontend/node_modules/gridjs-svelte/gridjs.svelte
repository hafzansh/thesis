<script >import { onMount, createEventDispatcher } from "svelte";
import { Grid } from "gridjs";
export let width = "100%";
export let height = "auto";
export let autoWidth = true;
export let fixedHeader = false;
export let resizable = false;
export let from = undefined;
export let language = undefined;
export let search = false;
export let sort = false;
export let pagination = false;
export let server = undefined;
export let columns = undefined;
export let data = undefined;
export let plugins = undefined;
export let style = {};
export let className = {};
// https://github.com/grid-js/gridjs/blob/master/src/config.ts
export const instance = new Grid({
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
    className,
});
let node;
const dispatch = createEventDispatcher();
// https://github.com/grid-js/gridjs/blob/master/src/view/table/events.ts
instance.on("cellClick", (...args) => dispatch("cellClick", { ...args }));
instance.on("rowClick", (...args) => dispatch("rowClick", { ...args }));
// https://github.com/grid-js/gridjs/blob/master/src/view/events.ts
instance.on("beforeLoad", () => dispatch("beforeLoad"));
instance.on("load", data => dispatch("load", { ...data }));
instance.on("ready", () => dispatch("ready"));
$: if (node) {
    instance
        .updateConfig({
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
        fixedHeader,
        style,
        className,
        resizable,
    })
        .forceRender();
}
onMount(() => {
    if (node) {
        instance.render(node);
    }
});
</script>

<article bind:this={node} />
