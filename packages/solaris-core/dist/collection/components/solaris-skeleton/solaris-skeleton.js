import { h } from "@stencil/core";
import { classes } from "../../common/Base_Core/format/classes/classes";
export class SolarisSkeleton {
  constructor() {
    this.animated = true;
    this.radius = 'default';
    this.height = '30px';
    this.width = 'auto';
  }
  render() {
    return h("div", { class: classes('skeleton', `border-${this.radius}`, this.animated ? 'animated' : ''), style: { height: `${this.height}`, width: `${this.width}` } });
  }
  static get is() { return "solaris-skeleton"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-skeleton.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-skeleton.css"]
    };
  }
  static get properties() {
    return {
      "animated": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "animated",
        "reflect": false,
        "defaultValue": "true"
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
              "path": "../../types/common/size",
              "id": "src/types/common/size.ts::Size"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "radius",
        "reflect": false,
        "defaultValue": "'default'"
      },
      "height": {
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
        "attribute": "height",
        "reflect": false,
        "defaultValue": "'30px'"
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
        "reflect": false,
        "defaultValue": "'auto'"
      }
    };
  }
}
//# sourceMappingURL=solaris-skeleton.js.map
