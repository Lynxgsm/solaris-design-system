import { r as registerInstance, h } from './index-88e70c1b.js';
import { u as unitFormatter } from './unit-db30f5f9.js';

const solarisListTileCss = ".tile-container{border:none;background-color:transparent;outline:none;text-align:start;width:100%}.tile-container:disabled{color:inherit;background-color:inherit}.tile-container.enabled .tile{cursor:pointer;transition:background-color 200ms}.tile-container.enabled .tile:hover{background-color:#f7f7f7}.tile-container.enabled:focus{outline:1px solid #97B9EF}.tile-container .tile{padding:16px}";

const SolarisListTile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.__title = undefined;
    this.width = undefined;
  }
  render() {
    return (h("button", { class: "tile-container", style: { width: this.width ? unitFormatter(this.width) : '100%' } }, h("solaris-flex", { class: "tile", justifyContent: "space-between", alignItems: "center" }, h("solaris-flex", { alignItems: "center", gap: 16 }, h("div", null, h("slot", { name: "leading" })), h("solaris-flex", { direction: "column" }, h("solaris-typography", { variant: "h6", fontFamily: "roboto", weight: "medium" }, this.__title), h("slot", null))), h("div", null, h("slot", { name: "trailing" })))));
  }
};
SolarisListTile.style = solarisListTileCss;

export { SolarisListTile as solaris_list_tile };

//# sourceMappingURL=solaris-list-tile.entry.js.map