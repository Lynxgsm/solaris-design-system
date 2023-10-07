import { h } from "@stencil/core";
import { classes } from "../../common/Base_Core/format/classes/classes";
import { unitFormatter } from "../../common/Base_Core/format/unit/unit";
export class SolarisButton {
  constructor() {
    this.variant = 'default';
    this.colorScheme = 'supernova';
    this.href = undefined;
    this.radius = undefined;
    this.size = 'md';
    this.fullWidth = undefined;
  }
  generateStyle() {
    const variant = `button-${this.variant}`;
    const size = `button-${this.size}`;
    const colorScheme = `button-${this.colorScheme}`;
    return classes(variant, size, colorScheme);
  }
  render() {
    return (h("button", { class: this.generateStyle(), style: {
        borderRadius: this.radius && unitFormatter(this.radius, '%'),
        width: this.fullWidth ? '100%' : undefined,
      } }, h("slot", null)));
  }
  static get is() { return "solaris-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-button.css"]
    };
  }
  static get properties() {
    return {
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Variant",
          "resolved": "\"default\" | \"link\" | \"outline\"",
          "references": {
            "Variant": {
              "location": "import",
              "path": "../../types/common/variants",
              "id": "src/types/common/variants.ts::Variant"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'default'"
      },
      "colorScheme": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ColorScheme",
          "resolved": "\"black\" | \"cobalt\" | \"comet\" | \"danger\" | \"nebula-blue\" | \"supernova\" | \"white\"",
          "references": {
            "ColorScheme": {
              "location": "import",
              "path": "../../types/common/color-scheme",
              "id": "src/types/common/color-scheme.ts::ColorScheme"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "color-scheme",
        "reflect": false,
        "defaultValue": "'supernova'"
      },
      "href": {
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
        "attribute": "href",
        "reflect": false
      },
      "radius": {
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "radius",
        "reflect": false
      },
      "size": {
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'md'"
      },
      "fullWidth": {
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
        "attribute": "full-width",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=solaris-button.js.map
