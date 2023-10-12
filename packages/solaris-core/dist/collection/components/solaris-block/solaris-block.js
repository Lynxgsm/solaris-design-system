import { h } from "@stencil/core";
export class SolarisBlock {
  constructor() {
    this.breakpoints = undefined;
  }
  render() {
    return (h("div", { class: `block ${this.breakpoints || ''}` }, h("slot", null)));
  }
  static get is() { return "solaris-block"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-block.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-block.css"]
    };
  }
  static get properties() {
    return {
      "breakpoints": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Breakpoints",
          "resolved": "\"hide-on-lg\" | \"hide-on-md\" | \"hide-on-sm\" | \"hide-on-xl\" | \"hide-on-xs\" | \"show-on-lg\" | \"show-on-md\" | \"show-on-sm\" | \"show-on-xl\" | \"show-on-xs\"",
          "references": {
            "Breakpoints": {
              "location": "import",
              "path": "../../types/common/breakpoints",
              "id": "src/types/common/breakpoints.ts::Breakpoints"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "breakpoints",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=solaris-block.js.map
