import { h } from "@stencil/core";
import { unitFormatter } from "../../common/Base_Core/format/unit/unit";
export class SolarisListTile {
  constructor() {
    this.__title = undefined;
    this.width = undefined;
  }
  render() {
    return (h("button", { class: "tile-container", style: { width: this.width ? unitFormatter(this.width) : '100%' } }, h("solaris-flex", { class: "tile", justifyContent: "space-between", alignItems: "center" }, h("solaris-flex", { alignItems: "center", gap: 16 }, h("div", null, h("slot", { name: "leading" })), h("solaris-flex", { direction: "column" }, h("solaris-typography", { variant: "h6", fontFamily: "roboto", weight: "medium" }, this.__title), h("slot", null))), h("div", null, h("slot", { name: "trailing" })))));
  }
  static get is() { return "solaris-list-tile"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-list-tile.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-list-tile.css"]
    };
  }
  static get properties() {
    return {
      "__title": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "__title",
        "reflect": false
      },
      "width": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "UnitString",
          "resolved": "\"auto\" | \"fit-content\" | \"max-content\" | `${number}%` | `${number}em` | `${number}px` | `${number}rem` | `${number}vh` | `${number}vw` | number",
          "references": {
            "UnitString": {
              "location": "import",
              "path": "../../types/common/unit-string",
              "id": "src/types/common/unit-string.ts::UnitString"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "width",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=solaris-list-tile.js.map
