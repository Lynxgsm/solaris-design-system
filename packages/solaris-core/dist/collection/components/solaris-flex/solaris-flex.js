import { h } from "@stencil/core";
import { classes } from "../../common/Base_Core/format/classes/classes";
import { unitFormatter } from "../../common/Base_Core/format/unit/unit";
export class SolarisFlex {
  constructor() {
    this.gap = undefined;
    this.justifyContent = undefined;
    this.alignItems = undefined;
    this.direction = undefined;
    this.wrap = undefined;
  }
  render() {
    return (h("div", { class: classes('flex'), style: {
        justifyContent: this.justifyContent,
        alignItems: this.alignItems,
        gap: this.gap && unitFormatter(this.gap),
        flexWrap: this.wrap,
        flexDirection: this.direction,
      } }, h("slot", null)));
  }
  static get is() { return "solaris-flex"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-flex.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-flex.css"]
    };
  }
  static get properties() {
    return {
      "gap": {
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "gap",
        "reflect": false
      },
      "justifyContent": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'",
          "resolved": "\"center\" | \"flex-end\" | \"flex-start\" | \"space-around\" | \"space-between\" | \"space-evenly\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "justify-content",
        "reflect": false
      },
      "alignItems": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'",
          "resolved": "\"center\" | \"flex-end\" | \"flex-start\" | \"space-around\" | \"space-between\" | \"space-evenly\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "align-items",
        "reflect": false
      },
      "direction": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'row' | 'row-reverse' | 'column' | 'column-reverse'",
          "resolved": "\"column\" | \"column-reverse\" | \"row\" | \"row-reverse\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "direction",
        "reflect": false
      },
      "wrap": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'nowrap' | 'wrap' | 'wrap-reverse'",
          "resolved": "\"nowrap\" | \"wrap\" | \"wrap-reverse\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "wrap",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=solaris-flex.js.map
