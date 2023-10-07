import { h } from "@stencil/core";
import { classes } from "../../common/Base_Core/format/classes/classes";
import { parseIcon } from "../../common/Base_Core/format/parse-icon/parser-icon";
export class SolarisBadge {
  constructor() {
    this.size = 'md';
    this.type = undefined;
    this.icon = undefined;
    this.iconPosition = 'left';
    this.radius = undefined;
  }
  render() {
    return (h("solaris-flex", { class: classes('badge', `badge-${this.type}`, `badge-${this.size}`), direction: `${this.iconPosition === 'left' ? 'row' : 'row-reverse'}`, alignItems: "center" }, this.icon && parseIcon(this.icon), h("span", null, h("slot", null))));
  }
  static get is() { return "solaris-badge"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-badge.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-badge.css"]
    };
  }
  static get properties() {
    return {
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'md'"
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
      }
    };
  }
}
//# sourceMappingURL=solaris-badge.js.map
