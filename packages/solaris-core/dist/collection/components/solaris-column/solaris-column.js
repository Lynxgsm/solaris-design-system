import { h } from "@stencil/core";
import { classes } from "../../common/Base_Core/format/classes/classes";
export class SolarisColumn {
  constructor() {
    this.gap = undefined;
    this.col = 'md';
  }
  render() {
    return (h("solaris-flex", { direction: "column", gap: this.gap, class: classes(`col ${this.col ? `-${this.col}` : ''}`) }, h("slot", null)));
  }
  static get is() { return "solaris-column"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-column.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-column.css"]
    };
  }
  static get properties() {
    return {
      "gap": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "UnitString",
          "resolved": "\"auto\" | \"fit-content\" | \"max-content\" | `${number}%` | `${number}em` | `${number}px` | `${number}rem` | `${number}vh` | `${number}vw` | number",
          "references": {
            "UnitString": {
              "location": "import",
              "path": "../../components",
              "id": "src/components.d.ts::UnitString"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "gap",
        "reflect": false
      },
      "col": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Size",
          "resolved": "\"default\" | \"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\" | \"xxl\"",
          "references": {
            "Size": {
              "location": "import",
              "path": "../../components",
              "id": "src/components.d.ts::Size"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "col",
        "reflect": false,
        "defaultValue": "'md'"
      }
    };
  }
}
//# sourceMappingURL=solaris-column.js.map
