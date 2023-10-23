import { h } from "@stencil/core";
import { classes } from "../../common/Base_Core/format/classes/classes";
export class SolarisStepper {
  constructor() {
    this.steps = undefined;
    this.colorScheme = 'supernova';
    this.currentIndex = -1;
  }
  render() {
    return (h("solaris-flex", { direction: "column", class: classes('stepper', this.colorScheme) }, this.steps.map((step, index) => (h("solaris-flex", { key: index, alignItems: "flex-end", justifyContent: "space-between", gap: 12 }, h("solaris-typography", { class: "text" }, step), h("solaris-flex", { alignItems: "center", direction: "column", class: classes('step', index <= this.currentIndex && 'active') }, h("solaris-block", { class: classes('branch', !index && 'first') }), h("solaris-flex", { justifyContent: "center", alignItems: "center", class: "circle" })))))));
  }
  static get is() { return "solaris-stepper"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-stepper.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-stepper.css"]
    };
  }
  static get properties() {
    return {
      "steps": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "string[]",
          "resolved": "string[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "color-scheme",
        "reflect": false,
        "defaultValue": "'supernova'"
      },
      "currentIndex": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "current-index",
        "reflect": false,
        "defaultValue": "-1"
      }
    };
  }
}
//# sourceMappingURL=solaris-stepper.js.map
