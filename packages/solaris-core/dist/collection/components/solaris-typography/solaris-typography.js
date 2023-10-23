import { h } from "@stencil/core";
import { classes } from "../../common/Base_Core/format/classes/classes";
export class SolarisTypography {
  constructor() {
    this.colorScheme = 'black';
    this.fontFamily = 'roboto';
    this.variant = 'p';
    this.underline = false;
    this.width = 'auto';
    this.truncated = false;
    this.weight = 'regular';
  }
  render() {
    return (h(this.variant, { class: classes(this.colorScheme, this.fontFamily, this.underline ? 'underline' : '', this.weight, this.truncated ? 'truncated' : '') }, h("slot", null)));
  }
  static get is() { return "solaris-typography"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-typography.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-typography.css"]
    };
  }
  static get properties() {
    return {
      "colorScheme": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Color",
          "resolved": "\"error\" | \"danger\" | \"supernova\" | \"nebula-blue\" | \"cobalt\" | \"comet\" | \"black\" | \"white\" | \"supernova-dark\" | \"nebula-blue-shades\" | \"nebula-blue-dark\" | \"cobalt-dark\" | \"comet-dark\" | \"additional-link\" | \"success-dark\" | \"success-light\" | \"error-light\" | \"error-dark\" | \"alert-light\" | \"alert-dark\" | \"info-light\" | \"info-dark\" | \"darkest\" | \"darker\" | \"neutral\" | \"disabled-light\" | \"light\" | \"lighter\" | \"grey-1\" | \"grey-2\" | \"grey-3\" | \"grey-4\"",
          "references": {
            "Color": {
              "location": "import",
              "path": "../../types/common/color-scheme",
              "id": "src/types/common/color-scheme.ts::Color"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "color-scheme",
        "reflect": false,
        "defaultValue": "'black'"
      },
      "fontFamily": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "FontFamily",
          "resolved": "\"montserrat\" | \"roboto\"",
          "references": {
            "FontFamily": {
              "location": "import",
              "path": "../../types/text/font-family",
              "id": "src/types/text/font-family.ts::FontFamily"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "font-family",
        "reflect": false,
        "defaultValue": "'roboto'"
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'p' | TitleType | 'link' | 'caption' | 'subtitle' | 'small'",
          "resolved": "\"caption\" | \"h1\" | \"h2\" | \"h3\" | \"h4\" | \"h5\" | \"h6\" | \"h7\" | \"link\" | \"p\" | \"small\" | \"subtitle\"",
          "references": {
            "TitleType": {
              "location": "import",
              "path": "../../types/text/title",
              "id": "src/types/text/title.ts::TitleType"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'p'"
      },
      "underline": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "underline",
        "reflect": false,
        "defaultValue": "false"
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
      },
      "truncated": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "truncated",
        "reflect": false,
        "defaultValue": "false"
      },
      "weight": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "FontWeight",
          "resolved": "\"bold\" | \"medium\" | \"regular\" | \"semi-bold\"",
          "references": {
            "FontWeight": {
              "location": "import",
              "path": "../../types/text/weight",
              "id": "src/types/text/weight.ts::FontWeight"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "weight",
        "reflect": false,
        "defaultValue": "'regular'"
      }
    };
  }
}
//# sourceMappingURL=solaris-typography.js.map
