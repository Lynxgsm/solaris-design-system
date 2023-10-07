import { h } from "@stencil/core";
import { parseIcon } from "../../common/Base_Core/format/parse-icon/parser-icon";
import { unitFormatter } from "../../common/Base_Core/format/unit/unit";
import { classes } from "../../common/Base_Core/format/classes/classes";
export class SolarisAlert {
  constructor() {
    this.__title = undefined;
    this.icon = undefined;
    this.radius = 'default';
    this.type = 'info';
    this.iconPosition = 'left';
    this.maxWidth = undefined;
    this.bordered = false;
  }
  generateClass() {
    return classes('alert', `alert-${this.iconPosition}`, `alert-${this.type}`, this.bordered && 'alert-bordered', `border-${this.radius}`);
  }
  render() {
    return (h("solaris-flex", { role: "banner", gap: 16, class: this.generateClass(), style: { maxWidth: this.maxWidth && unitFormatter(this.maxWidth) } }, this.icon && h("solaris-block", null, parseIcon(this.icon)), h("solaris-block", null, h("solaris-typography", { variant: "h6" }, this.__title), h("solaris-block", null, h("slot", null)))));
  }
  static get is() { return "solaris-alert"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-alert.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-alert.css"]
    };
  }
  static get properties() {
    return {
      "__title": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "String",
          "resolved": "String",
          "references": {
            "String": {
              "location": "global",
              "id": "global::String"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        }
      },
      "icon": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "IconParams",
          "resolved": "IconName | { name: IconName; variant?: IconVariant; size?: Size; }",
          "references": {
            "IconParams": {
              "location": "import",
              "path": "../../types/icons/icon",
              "id": "src/types/icons/icon.ts::IconParams"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "icon",
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
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "MessageType",
          "resolved": "\"error\" | \"info\" | \"info-nebula\" | \"success\" | \"warning\"",
          "references": {
            "MessageType": {
              "location": "import",
              "path": "../../types/common/message",
              "id": "src/types/common/message.ts::MessageType"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'info'"
      },
      "iconPosition": {
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
        "attribute": "icon-position",
        "reflect": false,
        "defaultValue": "'left'"
      },
      "maxWidth": {
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
        "attribute": "max-width",
        "reflect": false
      },
      "bordered": {
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
        "attribute": "bordered",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=solaris-alert.js.map
