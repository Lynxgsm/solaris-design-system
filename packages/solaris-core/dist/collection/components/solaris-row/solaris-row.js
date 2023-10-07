import { h } from "@stencil/core";
export class SolarisRow {
  constructor() {
    this.gap = undefined;
  }
  render() {
    return (h("solaris-flex", { gap: this.gap }, h("slot", null)));
  }
  static get is() { return "solaris-row"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-row.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-row.css"]
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
      }
    };
  }
}
//# sourceMappingURL=solaris-row.js.map
