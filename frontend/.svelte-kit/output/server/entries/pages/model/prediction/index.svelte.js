import { z as noop, h as safe_not_equal, c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../chunks/index-cd422cba.js";
import { G as Gridjs } from "../../../../chunks/gridjs-57b7c56d.js";
import { s as session } from "../../../../chunks/stores-260ca779.js";
import { html, h } from "gridjs";
import { g as goto } from "../../../../chunks/navigation-92f05dd6.js";
import { d as delete_data } from "../../../../chunks/api-fe40a33c.js";
import { b as baseApi } from "../../../../chunks/constants-477d2973.js";
/* empty css                                                                     */import "@fortawesome/free-solid-svg-icons";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const defaults = {
  duration: 4e3,
  initial: 1,
  next: 0,
  pausable: false,
  dismissable: true,
  reversed: false,
  intro: { x: 256 }
};
const createToast = () => {
  const { subscribe: subscribe2, update } = writable([]);
  let count = 0;
  const options = {};
  const _obj = (obj) => obj instanceof Object;
  const push = (msg, opts = {}) => {
    const param = { target: "default", ..._obj(msg) ? msg : { ...opts, msg } };
    const conf = options[param.target] || {};
    const entry = {
      ...defaults,
      ...conf,
      ...param,
      theme: { ...conf.theme, ...param.theme },
      classes: [...conf.classes || [], ...param.classes || []],
      id: ++count
    };
    update((n) => entry.reversed ? [...n, entry] : [entry, ...n]);
    return count;
  };
  const pop = (id) => {
    update((n) => {
      if (!n.length || id === 0)
        return [];
      if (_obj(id))
        return n.filter((i) => id(i));
      const target = id || Math.max(...n.map((i) => i.id));
      return n.filter((i) => i.id !== target);
    });
  };
  const set = (id, opts = {}) => {
    const param = _obj(id) ? { ...id } : { ...opts, id };
    update((n) => {
      const idx = n.findIndex((i) => i.id === param.id);
      if (idx > -1) {
        n[idx] = { ...n[idx], ...param };
      }
      return n;
    });
  };
  const _init = (target = "default", opts = {}) => {
    options[target] = opts;
    return options;
  };
  return { subscribe: subscribe2, push, pop, set, _init };
};
const toast = createToast();
const Prediction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  let { data } = $$props;
  console.log(data);
  data.map((e) => {
    const len = JSON.parse(e.data);
    e.data = len.length;
  });
  const columns = [
    { id: "id", hidden: true },
    {
      id: "path",
      name: "Model Path",
      formatter: (cell) => html(`<p class="badge badge-secondary ">${cell}</p>`)
    },
    { id: "data", name: "Total Prediction" },
    { id: "created_on", name: "Created on" },
    {
      name: "Action",
      formatter: (cell, row) => {
        return h("div", {
          className: "p-0 flex flex-row btn-group justify-center font-inter"
        }, h("button", {
          className: "btn btn-primary btn-sm w-[80px]",
          onClick: () => {
            goto(`/model/prediction/id/${row.cells[0].data}`);
          }
        }, "Detail"), null, h("button", {
          className: "btn btn-primary btn-sm w-[80px]",
          onClick: async () => {
            const res = await delete_data(`${baseApi}/model/prediction/id/${row.cells[0].data}`, $session.user.auth_token).then((res2) => res2.json());
            if (!res.id) {
              return toast.push("Error, " + res.detail);
            }
            return window.location.href = "/model/prediction";
          }
        }, "Delete"));
      }
    }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_session();
  return `${validate_component(Gridjs, "Grid").$$render($$result, {
    pagination: {
      enabled: true,
      limit: 10,
      summary: true,
      buttonsCount: 5
    },
    columns,
    fixedHeader: true,
    sort: true,
    search: true,
    className: { table: "w-full h-11/12", search: "" },
    data
  }, {}, {})}`;
});
export { Prediction as default };
