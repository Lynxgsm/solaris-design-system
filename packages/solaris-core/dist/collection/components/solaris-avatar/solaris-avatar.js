import { h } from "@stencil/core";
import { classes } from "../../common/Base_Core/format/classes/classes";
export class SolarisAvatar {
  constructor() {
    this.backgroundColor = 'supernova';
    this.backgroundImage = undefined;
    this.variant = 'circle';
    this.size = 'md';
  }
  render() {
    return (h("solaris-flex", { class: classes('avatar', `avatar-${this.backgroundColor}`, `avatar-${this.variant}`), style: { backgroundImage: `url(${this.backgroundImage})` }, justifyContent: "center", alignItems: "center" }, h("solaris-typography", { class: classes(`text-${this.size}`, `${this.backgroundImage ? 'visibility-none' : ''}`) }, h("slot", null))));
  }
  static get is() { return "solaris-avatar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-avatar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-avatar.css"]
    };
  }
  static get properties() {
    return {
      "backgroundColor": {
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "background-color",
        "reflect": false,
        "defaultValue": "'supernova'"
      },
      "backgroundImage": {
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
        "attribute": "background-image",
        "reflect": false
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'rectangle' | 'circle' | 'square'",
          "resolved": "\"circle\" | \"rectangle\" | \"square\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'circle'"
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'md'"
      }
    };
  }
}
//# sourceMappingURL=solaris-avatar.js.map
