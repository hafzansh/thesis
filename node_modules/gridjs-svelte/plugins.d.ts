import { Component as gComponent } from "gridjs";
interface SvelteWrapperProps {
    component: any;
    parentProps?: Record<string, any>;
    parentElement?: string;
    [key: string]: any;
}
export declare class SvelteWrapper extends gComponent<SvelteWrapperProps> {
    static defaultProps: {
        parentElement: string;
        parentProps: {};
    };
    ref: import("preact").RefObject<any>;
    instance: any;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): import("preact").VNode<any>;
}
export {};
