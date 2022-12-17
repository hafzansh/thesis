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
var placeholder = require('./placeholder.svelte.js');

const PlaceholderServer = internal.create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return "" + internal.escape($$props.content);
});
var Placeholder = typeof document === 'undefined' ? PlaceholderServer : placeholder["default"];

exports["default"] = Placeholder;
//# sourceMappingURL=placeholder.js.map
