import { h } from "@stencil/core";
import { classes } from "../../common/Base_Core/format/classes/classes";
export class SolarisIcon {
  constructor() {
    this.size = undefined;
    this.variant = 'regular';
    this.name = undefined;
  }
  render() {
    return h("i", { class: classes('icon', `icon-${this.name}-${this.variant}`, `text-${this.size}`) });
  }
  static get is() { return "solaris-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["solaris-icon.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["solaris-icon.css"]
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
        "reflect": false
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "IconVariant",
          "resolved": "\"bold\" | \"light\" | \"regular\"",
          "references": {
            "IconVariant": {
              "location": "import",
              "path": "../../types/icons/icon",
              "id": "src/types/icons/icon.ts::IconVariant"
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
        "defaultValue": "'regular'"
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "IconName",
          "resolved": "\"help\" | \"profile\" | \"filter\" | \"map\" | \"import\" | \"time\" | \"text\" | \"download\" | \"size\" | \"alert\" | \"close\" | \"warning\" | \"ar-kit\" | \"add-stamp\" | \"adjustment\" | \"adress-book\" | \"adress-book-add\" | \"adress-book-checked\" | \"adresse-email\" | \"alignment-bottom\" | \"alignment-horizontal-center\" | \"alignment-left\" | \"alignment-right\" | \"alignment-top\" | \"alignment-vertical-center\" | \"appel-entrant\" | \"appel-sortant\" | \"arrow-back\" | \"arrow-back-rounded\" | \"arrow-bent\" | \"arrow-bent-rounded\" | \"arrow-double-left\" | \"arrow-double-left-rounded\" | \"arrow-double-right\" | \"arrow-double-right-rounded\" | \"arrow-down\" | \"arrow-down-rounded\" | \"arrow-dragndrop\" | \"arrow-enlarge\" | \"arrow-external-link\" | \"arrow-large-dow\" | \"arrow-large-left\" | \"arrow-large-left-rounded\" | \"arrow-large-right\" | \"arrow-large-right-rounded\" | \"arrow-large-up\" | \"arrow-large-up-right\" | \"arrow-large-up-right-rounded\" | \"arrow-left\" | \"arrow-left-rounded\" | \"arrow-right\" | \"arrow-right-rounded\" | \"arrow-sidenav-close\" | \"arrow-sidenav-open\" | \"arrow-sort\" | \"arrow-up\" | \"arrow-up-rounded\" | \"avantages\" | \"banque\" | \"barcode\" | \"benefice\" | \"bithday\" | \"burger\" | \"calendar\" | \"calendar-reload\" | \"caracteristique\" | \"cart\" | \"cart-add\" | \"cart-feedback\" | \"cart-full\" | \"cart-reload\" | \"certification\" | \"chatbot\" | \"check-rounded\" | \"check\" | \"check-switch\" | \"close-rounded\" | \"cloud\" | \"contract\" | \"cost\" | \"credit-card\" | \"delivery\" | \"delivery-person\" | \"departure\" | \"deposit-post-office\" | \"destination-flag\" | \"digiposte\" | \"display-framed-grid\" | \"display-framed-list\" | \"display-grid\" | \"display-list\" | \"display-small-framed-grid\" | \"display-small-grid\" | \"dragndrop-table\" | \"draw\" | \"duplicate\" | \"echange\" | \"ecologie\" | \"email-sent\" | \"eraser\" | \"express-stamp\" | \"eye\" | \"eye-close\" | \"facebook\" | \"favorite\" | \"favorite-rounded\" | \"file\" | \"file-editor\" | \"file-favorite\" | \"file-image\" | \"file-pdf\" | \"file-text\" | \"file-draft\" | \"findeparcours\" | \"flag\" | \"fontsize-bigger\" | \"fontsize-smaller\" | \"friend\" | \"geoloc\" | \"gesture-pinch\" | \"ghost\" | \"globalite\" | \"glu-stick\" | \"identitee-numerique\" | \"inbox\" | \"information\" | \"instagram\" | \"installation\" | \"invoice\" | \"keyboard\" | \"laposte\" | \"laptop\" | \"less-rounded\" | \"less\" | \"letter\" | \"linkedin\" | \"lock\" | \"file-xls\" | \"loupe\" | \"loupe-barcode\" | \"mailbox\" | \"menu-action\" | \"menu-action-vertical\" | \"message\" | \"messenger\" | \"microphone\" | \"mobilechat\" | \"mobility\" | \"more-rounded\" | \"more\" | \"multicolis\" | \"multiletter\" | \"newsletter\" | \"newsletter-sending\" | \"notification\" | \"nouveau-message\" | \"objectif-atteint\" | \"oder-sumary\" | \"ordering\" | \"organisation\" | \"organizing\" | \"pacman\" | \"paper-clip\" | \"parking\" | \"pause\" | \"pen\" | \"phone\" | \"piggybank\" | \"pin\" | \"play\" | \"porte-monnaie\" | \"postier\" | \"printer\" | \"profile-active\" | \"program-fid\" | \"promocode\" | \"proxy\" | \"recharge\" | \"recompenses\" | \"reload\" | \"repertory\" | \"repertory-add\" | \"repertoy-save\" | \"save\" | \"savings\" | \"scissors\" | \"send\" | \"share\" | \"sign-out\" | \"size-help\" | \"sorting-out\" | \"spam\" | \"stamp-download\" | \"stamp-print\" | \"star\" | \"statistiques\" | \"suivi\" | \"thumb-up\" | \"tips\" | \"tools\" | \"transport\" | \"trash\" | \"twitter\" | \"unavailable\" | \"weight\" | \"wheel\" | \"youtube\" | \"zoom-plus\"",
          "references": {
            "IconName": {
              "location": "import",
              "path": "../../types/icons/icon",
              "id": "src/types/icons/icon.ts::IconName"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "name",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=solaris-icon.js.map
