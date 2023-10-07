import { h } from "@stencil/core";
import { classes } from "../../common/Base_Core/format/classes/classes";
import { unitFormatter } from "../../common/Base_Core/format/unit/unit";
import { parseIcon } from "../../common/Base_Core/format/parse-icon/parser-icon";
export class SolarisBlockquote {
  constructor() {
    this.__title = undefined;
    this.icon = undefined;
    this.radius = undefined;
    this.type = 'info';
    this.iconPosition = 'left';
    this.maxWidth = undefined;
    this.bordered = undefined;
    this.decorationPosition = 'top';
  }
  render() {
    return (h("solaris-flex", { role: "banner", gap: 16, class: classes('blockquote', `blockquote-${this.iconPosition}`, `blockquote-decorated-${this.decorationPosition || 'left'}`, `blockquote-${this.type}`, this.bordered && 'blockquote-bordered'), style: { maxWidth: this.maxWidth && unitFormatter(this.maxWidth) } }, this.icon && h("solaris-block", null, parseIcon(this.icon)), h("solaris-block", null, h("solaris-typography", { variant: "h6" }, this.__title), h("slot", null))));
  }
  static get is() { return "solaris-blockquote"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-blockquote.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-blockquote.css"]
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "__title",
        "reflect": false
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
        "reflect": false
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
        "reflect": false
      },
      "decorationPosition": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'top' | 'bottom' | 'left' | 'right'",
          "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "decoration-position",
        "reflect": false,
        "defaultValue": "'top'"
      }
    };
  }
}
//# sourceMappingURL=solaris-blockquote.js.map
