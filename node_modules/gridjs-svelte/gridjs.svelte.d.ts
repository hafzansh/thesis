import { SvelteComponentTyped } from "svelte";
import { Grid } from "gridjs";
import type { UserConfig } from "gridjs";
declare const __propDef: {
    props: {
        width?: UserConfig["width"];
        height?: UserConfig["height"];
        autoWidth?: UserConfig["autoWidth"];
        fixedHeader?: UserConfig["fixedHeader"];
        resizable?: UserConfig["resizable"];
        from?: UserConfig["from"];
        language?: UserConfig["language"];
        search?: UserConfig["search"];
        sort?: UserConfig["sort"];
        pagination?: UserConfig["pagination"];
        server?: UserConfig["server"];
        columns?: UserConfig["columns"];
        data?: UserConfig["data"];
        plugins?: UserConfig["plugins"];
        style?: UserConfig["style"];
        className?: UserConfig["className"];
        instance?: Grid;
    };
    events: {
        cellClick: CustomEvent<any>;
        rowClick: CustomEvent<any>;
        beforeLoad: CustomEvent<any>;
        load: CustomEvent<any>;
        ready: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type GridjsProps = typeof __propDef.props;
export declare type GridjsEvents = typeof __propDef.events;
export declare type GridjsSlots = typeof __propDef.slots;
export default class Gridjs extends SvelteComponentTyped<GridjsProps, GridjsEvents, GridjsSlots> {
    get instance(): Grid;
}
export {};
