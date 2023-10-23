import { h } from "@stencil/core";
import { classes } from "../../common/Base_Core/format/classes/classes";
export class SolarisNavbar {
  constructor() {
    this.position = 'relative';
    this.decoration = 'none';
    this.colorScheme = 'supernova';
  }
  render() {
    return (h("nav", { class: classes('navbar', this.position, `decoration-${this.decoration}`, `navbar-${this.colorScheme}`) }, h("slot", null)));
  }
  static get is() { return "solaris-navbar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-navbar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-navbar.css"]
    };
  }
  static get properties() {
    return {
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'fixed' | 'relative'",
          "resolved": "\"fixed\" | \"relative\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "'relative'"
      },
      "decoration": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'top' | 'left' | 'right' | 'bottom' | 'none'",
          "resolved": "\"bottom\" | \"left\" | \"none\" | \"right\" | \"top\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "decoration",
        "reflect": false,
        "defaultValue": "'none'"
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "color-scheme",
        "reflect": false,
        "defaultValue": "'supernova'"
      }
    };
  }
}
//# sourceMappingURL=solaris-navbar.js.map
