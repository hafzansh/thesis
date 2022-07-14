/**
 * svelte-table
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var internal = require('svelte/internal');

function create_fragment(ctx, Comp, props) {
  let c;
  let current;
  c = new Comp({
    props,
    $$inline: true
  });
  return {
    c() {
      internal.create_component(c.$$.fragment);
    },

    l(nodes) {
      internal.claim_component(c.$$.fragment, nodes);
    },

    m(target, anchor) {
      // @ts-ignore
      internal.mount_component(c, target, anchor);
      current = true;
    },

    p: internal.noop,

    i(local) {
      if (current) return;
      internal.transition_in(c.$$.fragment, local);
      current = true;
    },

    o(local) {
      internal.transition_out(c.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      internal.destroy_component(c, detaching);
    }

  };
}

function renderClient(Comp, props) {
  return class WrapperComp extends internal.SvelteComponent {
    constructor(options) {
      super();
      internal.init(this, options, null, ctx => create_fragment(ctx, Comp, props), internal.safe_not_equal, {}, undefined);
    }

  };
}

function renderServer(Comp, props) {
  const WrapperComp = internal.create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return "" + internal.validate_component(Comp, 'TableComponent').$$render($$result, props, {}, {});
  });
  return WrapperComp;
}

const renderComponent = typeof window === 'undefined' ? renderServer : renderClient;

exports.renderComponent = renderComponent;
//# sourceMappingURL=render-component.js.map
