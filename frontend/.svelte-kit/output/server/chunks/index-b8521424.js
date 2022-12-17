import { S as SvelteComponent, i as init, h as safe_not_equal, j as assign, k as create_component, l as mount_component, n as get_spread_update, p as get_spread_object, t as transition_in, q as transition_out, r as destroy_component, u as exclude_internal_props, w as element, x as set_attributes, y as insert, z as noop, A as detach, B as onDestroy, C as binding_callbacks } from "./index-cd422cba.js";
import { Chart, LineController, BarController } from "chart.js";
function create_fragment$8(ctx) {
  let canvas;
  let canvas_levels = [
    ctx[1]
  ];
  let canvas_data = {};
  for (let i = 0; i < canvas_levels.length; i += 1) {
    canvas_data = assign(canvas_data, canvas_levels[i]);
  }
  return {
    c() {
      canvas = element("canvas");
      set_attributes(canvas, canvas_data);
    },
    m(target, anchor) {
      insert(target, canvas, anchor);
      ctx[6](canvas);
    },
    p(ctx2, param) {
      set_attributes(canvas, canvas_data = get_spread_update(canvas_levels, [
        ctx2[1]
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(canvas);
      ctx[6](null);
    }
  };
}
function clean(props) {
  let { data, type, options, plugins, children, $$scope, $$slots, ...rest } = props;
  return rest;
}
function instance$8($$self, $$props, $$invalidate) {
  let { data = {
    labels: [],
    datasets: [
      {
        data: []
      }
    ]
  } } = $$props;
  let { type = "line" } = $$props;
  let { options = {} } = $$props;
  let { plugins = [] } = $$props;
  let props = clean($$props);
  let chart = null;
  let chartRef;
  onDestroy(() => {
    if (chart)
      chart.destroy();
    chart = null;
  });
  function canvas_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      chartRef = $$value;
      $$invalidate(0, chartRef);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(8, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("data" in $$new_props)
      $$invalidate(2, data = $$new_props.data);
    if ("type" in $$new_props)
      $$invalidate(3, type = $$new_props.type);
    if ("options" in $$new_props)
      $$invalidate(4, options = $$new_props.options);
    if ("plugins" in $$new_props)
      $$invalidate(5, plugins = $$new_props.plugins);
  };
  $$props = exclude_internal_props($$props);
  return [
    chartRef,
    props,
    data,
    type,
    options,
    plugins,
    canvas_binding
  ];
}
class Base extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {
      data: 2,
      type: 3,
      options: 4,
      plugins: 5
    });
  }
}
function create_fragment$7(ctx) {
  let base;
  let current;
  const base_spread_levels = [
    ctx[0],
    {
      type: "line"
    }
  ];
  let base_props = {};
  for (let i = 0; i < base_spread_levels.length; i += 1) {
    base_props = assign(base_props, base_spread_levels[i]);
  }
  base = new Base({
    props: base_props
  });
  return {
    c() {
      create_component(base.$$.fragment);
    },
    m(target, anchor) {
      mount_component(base, target, anchor);
      current = true;
    },
    p(ctx2, param) {
      let [dirty] = param;
      const base_changes = dirty & 1 ? get_spread_update(base_spread_levels, [
        get_spread_object(ctx2[0]),
        base_spread_levels[1]
      ]) : {};
      base.$set(base_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(base.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(base.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(base, detaching);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  Chart.register(LineController);
  $$self.$$set = ($$new_props) => {
    $$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  };
  $$props = exclude_internal_props($$props);
  return [
    $$props
  ];
}
class Line extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {});
  }
}
function create_fragment$3(ctx) {
  let base;
  let current;
  const base_spread_levels = [
    ctx[0],
    {
      type: "bar"
    }
  ];
  let base_props = {};
  for (let i = 0; i < base_spread_levels.length; i += 1) {
    base_props = assign(base_props, base_spread_levels[i]);
  }
  base = new Base({
    props: base_props
  });
  return {
    c() {
      create_component(base.$$.fragment);
    },
    m(target, anchor) {
      mount_component(base, target, anchor);
      current = true;
    },
    p(ctx2, param) {
      let [dirty] = param;
      const base_changes = dirty & 1 ? get_spread_update(base_spread_levels, [
        get_spread_object(ctx2[0]),
        base_spread_levels[1]
      ]) : {};
      base.$set(base_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(base.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(base.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(base, detaching);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  Chart.register(BarController);
  $$self.$$set = ($$new_props) => {
    $$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
  };
  $$props = exclude_internal_props($$props);
  return [
    $$props
  ];
}
class Bar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
  }
}
export { Bar as B, Line as L };
