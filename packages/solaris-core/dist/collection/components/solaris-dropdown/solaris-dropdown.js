import { h } from "@stencil/core";
import { classes } from "../../common/Base_Core/format/classes/classes";
import { unitFormatter } from "../../common/Base_Core/format/unit/unit";
export class SolarisDropdown {
  constructor() {
    this.button = undefined;
    this.top = undefined;
    this.left = undefined;
    this.decorated = undefined;
    this.colorScheme = 'supernova';
    this.arrowPosition = 'left';
    this.backdrop = undefined;
    this.close = true;
  }
  toggle() {
    this.close = !this.close;
  }
  render() {
    return (h("solaris-flex", { role: "group", class: "dropdown-wrapper" }, h("button", { onClick: this.toggle, class: "dropdown-button" }, h("slot", { name: "button" })), h("solaris-block", { role: "dialog", style: {
        transform: `translate(${unitFormatter(this.left)}, ${unitFormatter(this.top || 40)})`,
      }, class: classes('dropdown', this.decorated ? 'decorated' : '', this.arrowPosition, `dropdown-${this.colorScheme}`, `${this.close ? 'close' : ''}`) }, h("slot", { name: "content" })), h("solaris-block", { role: "complementary", onFocus: this.toggle, onClick: this.toggle, class: classes('backdrop', this.close ? 'close' : '', this.backdrop ? 'backdrop-visible' : ''), tabIndex: 0 })));
  }
  static get is() { return "solaris-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-dropdown.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-dropdown.css"]
    };
  }
  static get properties() {
    return {
      "button": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Element",
          "resolved": "Element",
          "references": {
            "Element": {
              "location": "global",
              "id": "global::Element"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
      },
      "top": {
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "top",
        "reflect": false
      },
      "left": {
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "left",
        "reflect": false
      },
      "decorated": {
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
        "attribute": "decorated",
        "reflect": false
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
              "path": "../../components",
              "id": "src/components.d.ts::ColorScheme"
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
        "defaultValue": "'supernova'"
      },
      "arrowPosition": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'left' | 'right'",
          "resolved": "\"left\" | \"right\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "arrow-position",
        "reflect": false,
        "defaultValue": "'left'"
      },
      "backdrop": {
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
        "attribute": "backdrop",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "close": {}
    };
  }
  static get listeners() {
    return [{
        "name": "click",
        "method": "toggle",
        "target": undefined,
        "capture": true,
        "passive": false
      }];
  }
}
//# sourceMappingURL=solaris-dropdown.js.map
