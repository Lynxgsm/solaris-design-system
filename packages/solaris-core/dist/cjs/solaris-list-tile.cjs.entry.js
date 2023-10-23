'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ca6d625d.js');
const unit = require('./unit-4cbd9c03.js');

const solarisListTileCss = ".tile-container{border:none;background-color:transparent;outline:none;text-align:start;width:100%}.tile-container:disabled{color:inherit;background-color:inherit}.tile-container.enabled .tile{cursor:pointer;transition:background-color 200ms}.tile-container.enabled .tile:hover{background-color:#f7f7f7}.tile-container.enabled:focus{outline:1px solid #97B9EF}.tile-container .tile{padding:16px}";

const SolarisListTile = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.__title = undefined;
    this.width = undefined;
  }
  render() {
    return (index.h("button", { class: "tile-container", style: { width: this.width ? unit.unitFormatter(this.width) : '100%' } }, index.h("solaris-flex", { class: "tile", justifyContent: "space-between", alignItems: "center" }, index.h("solaris-flex", { alignItems: "center", gap: 16 }, index.h("div", null, index.h("slot", { name: "leading" })), index.h("solaris-flex", { direction: "column" }, index.h("solaris-typography", { variant: "h6", fontFamily: "roboto", weight: "medium" }, this.__title), index.h("slot", null))), index.h("div", null, index.h("slot", { name: "trailing" })))));
  }
};
SolarisListTile.style = solarisListTileCss;

exports.solaris_list_tile = SolarisListTile;

//# sourceMappingURL=solaris-list-tile.cjs.entry.js.map