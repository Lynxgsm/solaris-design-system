import { h } from "@stencil/core";
import { classes } from "../../common/Base_Core/format/classes/classes";
export class SolarisCard {
  constructor() {
    this.elevation = undefined;
    this.radius = undefined;
  }
  render() {
    return (h("solaris-block", { class: classes('card', `card-${this.elevation || 0}`, `border-${this.radius || 'none'}`) }, h("slot", null)));
  }
  static get is() { return "solaris-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-card.css"]
    };
  }
  static get properties() {
    return {
      "elevation": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "elevation",
        "reflect": false
      },
      "radius": {
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
        "attribute": "radius",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=solaris-card.js.map
