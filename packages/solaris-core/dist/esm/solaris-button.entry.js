import { r as registerInstance, h } from './index-88e70c1b.js';
import { c as classes } from './classes-01b0c841.js';
import { u as unitFormatter } from './unit-db30f5f9.js';

const solarisButtonCss = "@font-face{font-family:\"Montserrat\";font-style:italic;font-weight:100;font-display:swap;src:url(../../assets/fonts/montserrat/ThinItalic.ttf) format(\"ttf\")}@font-face{font-family:\"Montserrat\";font-weight:100;font-display:swap;src:url(../../assets/fonts/montserrat/Thin.ttf) format(\"ttf\")}@font-face{font-family:\"Montserrat\";font-style:italic;font-weight:200;font-display:swap;src:url(../../assets/fonts/montserrat/ExtraLightItalic.ttf) format(\"ttf\")}@font-face{font-family:\"Montserrat\";font-weight:200;font-display:swap;src:url(../../assets/fonts/montserrat/ExtraLight.ttf) format(\"ttf\")}@font-face{font-family:\"Montserrat\";font-style:italic;font-weight:300;font-display:swap;src:url(../../assets/fonts/montserrat/LightItalic.ttf) format(\"ttf\")}@font-face{font-family:\"Montserrat\";font-weight:300;font-display:swap;src:url(../../assets/fonts/montserrat/Light.ttf) format(\"ttf\")}@font-face{font-family:\"Montserrat\";font-style:italic;font-weight:400;font-display:swap;src:url(../../assets/fonts/montserrat/Italic.ttf) format(\"ttf\")}@font-face{font-family:\"Montserrat\";font-weight:400;font-display:swap;src:url(../../assets/fonts/montserrat/Regular.ttf) format(\"ttf\")}@font-face{font-family:\"Montserrat\";font-style:italic;font-weight:500;font-display:swap;src:url(../../assets/fonts/montserrat/MediumItalic.ttf) format(\"ttf\")}@font-face{font-family:\"Montserrat\";font-weight:500;font-display:swap;src:url(../../assets/fonts/montserrat/Medium.ttf) format(\"ttf\")}@font-face{font-family:\"Montserrat\";font-style:italic;font-weight:700;font-display:swap;src:url(../../assets/fonts/montserrat/BoldItalic.ttf) format(\"ttf\")}@font-face{font-family:\"Montserrat\";font-weight:700;font-display:swap;src:url(../../assets/fonts/montserrat/Bold.ttf) format(\"ttf\")}@font-face{font-family:\"Montserrat\";font-style:italic;font-weight:900;font-display:swap;src:url(../../assets/fonts/montserrat/BlackItalic.ttf) format(\"ttf\")}@font-face{font-family:\"Montserrat\";font-weight:900;font-display:swap;src:url(../../assets/fonts/montserrat/Black.ttf) format(\"ttf\")}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:100;font-display:swap;src:url(../../assets/fonts/roboto/ThinItalic.ttf) format(\"ttf\")}@font-face{font-family:\"Roboto\";font-weight:100;font-display:swap;src:url(../../assets/fonts/roboto/Thin.ttf) format(\"ttf\")}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:300;font-display:swap;src:url(../../assets/fonts/roboto/LightItalic.ttf) format(\"ttf\")}@font-face{font-family:\"Roboto\";font-weight:300;font-display:swap;src:url(../../assets/fonts/roboto/Light.ttf) format(\"ttf\")}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:400;font-display:swap;src:url(../../assets/fonts/roboto/Italic.ttf) format(\"ttf\")}@font-face{font-family:\"Roboto\";font-weight:400;font-display:swap;src:url(../../assets/fonts/roboto/Regular.ttf) format(\"ttf\")}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:500;font-display:swap;src:url(../../assets/fonts/roboto/MediumItalic.ttf) format(\"ttf\")}@font-face{font-family:\"Roboto\";font-weight:500;font-display:swap;src:url(../../assets/fonts/roboto/Medium.ttf) format(\"ttf\")}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:700;font-display:swap;src:url(../../assets/fonts/roboto/BoldItalic.ttf) format(\"ttf\")}@font-face{font-family:\"Roboto\";font-weight:700;font-display:swap;src:url(../../assets/fonts/roboto/Bold.ttf) format(\"ttf\")}@font-face{font-family:\"Roboto\";font-style:italic;font-weight:900;font-display:swap;src:url(../../assets/fonts/roboto/BlackItalic.ttf) format(\"ttf\")}@font-face{font-family:\"Roboto\";font-weight:900;font-display:swap;src:url(../../assets/fonts/roboto/Black.ttf) format(\"ttf\")}.text-xs,.base.button-xs,.button-xs.button-outline,.button-xs.button-link,.button-xs.button,.button-xs.button-default{font-size:14px}.text-sm,.base.button-sm,.button-sm.button-outline,.button-sm.button-link,.button-sm.button,.button-sm.button-default{font-size:16px}.text-md,.base.button-md,.button-md.button-outline,.button-md.button-link,.button-md.button,.button-md.button-default{font-size:18px}.text-lg,.base.button-lg,.button-lg.button-outline,.button-lg.button-link,.button-lg.button,.button-lg.button-default{font-size:24px}.text-xl,.base.button-xl,.button-xl.button-outline,.button-xl.button-link,.button-xl.button,.button-xl.button-default{font-size:28px}.text-xxl,.base.button-xxl,.button-xxl.button-outline,.button-xxl.button-link,.button-xxl.button,.button-xxl.button-default{font-size:34px}.font-weight-300{font-weight:300}.font-weight-400{font-weight:400}.font-weight-500{font-weight:500}.font-weight-600{font-weight:600}.font-weight-700{font-weight:700}.bold,.base,.button-outline,.button-link,.button,.button-default,.h7{font-weight:bold}.semi-bold{font-weight:600}.medium{font-weight:500}.regular{font-weight:normal}.roboto,.caption.roboto,.subtitle.roboto,.small.roboto,.p.roboto,.roboto.link,.h7.roboto,.h6.roboto,.h5.roboto,.h4.roboto,.h3.roboto,.h2.roboto,.h1.roboto{font-family:Roboto, \"sans-serif\"}.montserrat,.caption.montserrat,.subtitle.montserrat,.small.montserrat,.p.montserrat,.montserrat.link,.h7.montserrat,.h6.montserrat,.h5.montserrat,.h4.montserrat,.h3.montserrat,.h2.montserrat,.h1.montserrat{font-family:Montserrat, \"sans-serif\"}.h1{font-size:60px;line-height:66px}@media screen and (max-width: 991px){.h1{font-size:44px;line-height:50px}}@media screen and (max-width: 699px){.h1{font-size:28px;line-height:36px}}.h2{font-size:44px;line-height:58px}@media screen and (max-width: 991px){.h2{font-size:34px;line-height:40px}}@media screen and (max-width: 699px){.h2{font-size:24px;line-height:32px}}.h3{font-size:34px;line-height:46px}@media screen and (max-width: 991px){.h3{font-size:28px;line-height:34px}}@media screen and (max-width: 699px){.h3{font-size:22px;line-height:28px}}.h4{font-size:28px;line-height:38px}@media screen and (max-width: 991px){.h4{font-size:26px;line-height:32px}}@media screen and (max-width: 699px){.h4{font-size:20px;line-height:26px}}.h5{font-size:24px;line-height:34px}@media screen and (max-width: 991px){.h5{font-size:22px;line-height:28px}}@media screen and (max-width: 699px){.h5{font-size:20px;line-height:26px}}.h6{font-size:18px;line-height:30px}@media screen and (max-width: 991px){.h6{font-size:18px;line-height:24px}}@media screen and (max-width: 699px){.h6{font-size:18px;line-height:24px}}.h7{font-size:14px;line-height:24px}@media screen and (max-width: 991px){.h7{font-size:14px;line-height:24px}}@media screen and (max-width: 699px){.h7{font-size:14px;line-height:20px}}.p,.link{font-size:16px;line-height:20px}@media screen and (max-width: 991px){.p,.link{font-size:15px;line-height:22px}}@media screen and (max-width: 699px){.p,.link{font-size:14px;line-height:20px}}.small{font-size:14px;line-height:20px}@media screen and (max-width: 991px){.small{font-size:13px;line-height:18px}}@media screen and (max-width: 699px){.small{font-size:12px;line-height:16px}}.subtitle{font-size:18px;line-height:24px}@media screen and (max-width: 991px){.subtitle{font-size:18px;line-height:24px}}@media screen and (max-width: 699px){.subtitle{font-size:18px;line-height:24px}}.caption{font-size:12px;line-height:16px}@media screen and (max-width: 991px){.caption{font-size:12px;line-height:16px}}@media screen and (max-width: 699px){.caption{font-size:12px;line-height:16px}}.underline{text-decoration:underline}.link{cursor:pointer;display:inline}.truncated{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.d-grid{display:grid}.d-flex{display:flex}.d-block{display:block}.d-inline-block{display:inline-block}.d-none{display:none}.direction-column{flex-direction:column}.direction-column-reverse{flex-direction:column}.direction-row-reverse{flex-direction:column}.direction-row{flex-direction:row}.border-none{border-radius:0px}.border-xxl{border-radius:14px}.border-xl{border-radius:12px}.border-lg{border-radius:10px}.border-md{border-radius:8px}.border-sm{border-radius:6px}.border-xs{border-radius:4px}.row>*{box-sizing:border-box;flex-shrink:0}.col{flex:1 0 0%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.3333333333%}.col-2{flex:0 0 auto;width:16.6666666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.3333333333%}.col-5{flex:0 0 auto;width:41.6666666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.3333333333%}.col-8{flex:0 0 auto;width:66.6666666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.3333333333%}.col-11{flex:0 0 auto;width:91.6666666667%}.col-12{flex:0 0 auto;width:100%}@media (max-width: 1440px){.d-grid-xl{display:grid}.d-flex-xl{display:flex}.d-block-xl{display:block}.d-inline-block-xl{display:inline-block}.d-none-xl{display:none}.col-xl{flex:1 0 0%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.3333333333%}.col-xl-2{flex:0 0 auto;width:16.6666666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.3333333333%}.col-xl-5{flex:0 0 auto;width:41.6666666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.3333333333%}.col-xl-8{flex:0 0 auto;width:66.6666666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.3333333333%}.col-xl-11{flex:0 0 auto;width:91.6666666667%}.col-xl-12{flex:0 0 auto;width:100%}}@media (max-width: 1279px){.d-grid-lg{display:grid}.d-flex-lg{display:flex}.d-block-lg{display:block}.d-inline-block-xl{display:inline-block}.d-none-lg{display:none}.col-lg{flex:1 0 0%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.3333333333%}.col-lg-2{flex:0 0 auto;width:16.6666666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.3333333333%}.col-lg-5{flex:0 0 auto;width:41.6666666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.3333333333%}.col-lg-8{flex:0 0 auto;width:66.6666666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.3333333333%}.col-lg-11{flex:0 0 auto;width:91.6666666667%}.col-lg-12{flex:0 0 auto;width:100%}}@media (max-width: 991px){.d-grid-md{display:grid}.d-flex-md{display:flex}.d-block-md{display:block}.d-inline-block-md{display:inline-block}.d-none-md{display:none}.col-md{flex:1 0 0%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.3333333333%}.col-md-2{flex:0 0 auto;width:16.6666666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.3333333333%}.col-md-5{flex:0 0 auto;width:41.6666666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.3333333333%}.col-md-8{flex:0 0 auto;width:66.6666666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.3333333333%}.col-md-11{flex:0 0 auto;width:91.6666666667%}.col-md-12{flex:0 0 auto;width:100%}}@media (max-width: 699px){.d-grid-sm{display:grid}.d-flex-sm{display:flex}.d-block-sm{display:block}.d-inline-block-sm{display:inline-block}.d-none-sm{display:none}.col-sm{flex:1 0 0%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.3333333333%}.col-sm-2{flex:0 0 auto;width:16.6666666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.3333333333%}.col-sm-5{flex:0 0 auto;width:41.6666666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.3333333333%}.col-sm-8{flex:0 0 auto;width:66.6666666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.3333333333%}.col-sm-11{flex:0 0 auto;width:91.6666666667%}.col-sm-12{flex:0 0 auto;width:100%}}@media (max-width: 374px){.d-grid-xs{display:grid}.d-flex-xs{display:flex}.d-block-xs{display:block}.d-inline-block-xs{display:inline-block}.d-none-xs{display:none}.col-xs{flex:1 0 0%}.col-xs-auto{flex:0 0 auto;width:auto}.col-xs-1{flex:0 0 auto;width:8.3333333333%}.col-xs-2{flex:0 0 auto;width:16.6666666667%}.col-xs-3{flex:0 0 auto;width:25%}.col-xs-4{flex:0 0 auto;width:33.3333333333%}.col-xs-5{flex:0 0 auto;width:41.6666666667%}.col-xs-6{flex:0 0 auto;width:50%}.col-xs-7{flex:0 0 auto;width:58.3333333333%}.col-xs-8{flex:0 0 auto;width:66.6666666667%}.col-xs-9{flex:0 0 auto;width:75%}.col-xs-10{flex:0 0 auto;width:83.3333333333%}.col-xs-11{flex:0 0 auto;width:91.6666666667%}.col-xs-12{flex:0 0 auto;width:100%}}.bg-transparent{background-color:transparent}.bg-primary{background-color:#007bff}.bg-secondary{background-color:#6c757d}.bg-warning{background-color:#ff9800}.bg-danger{background-color:#f56}.bg-success{background-color:#4caf50}.bg-grey-1{background-color:#f7f7f7}.bg-grey-2{background-color:#e1e1e1}.bg-grey-3{background-color:#d2d2d1}.bg-grey-4{background-color:#949494}.bg-black,.button.button-black:active,.button-default.button-black:active,.button.button-black:hover,.button-default.button-black:hover,.button.button-black,.button-default.button-black{background-color:#3c3c3c}.bg-white,.button.button-white,.button-default.button-white{background-color:white}.bg-lighter,.button.button-white:active,.button-default.button-white:active{background-color:#f7f7f7}.bg-light,.button.button-white:hover,.button-default.button-white:hover{background-color:#e1e1e1}.bg-disabled-light{background-color:#e1e1e1}.bg-neutral{background-color:#d2d2d1}.bg-darker{background-color:#717171}.bg-darkest{background-color:#3c3c3c}.bg-supernova,.button.button-supernova:active,.button-default.button-supernova:active,.button.button-supernova,.button-default.button-supernova{background-color:#ffc905}.bg-supernova-dark,.button.button-supernova:hover,.button-default.button-supernova:hover{background-color:#ffa705}.bg-nebula-blue,.button.button-nebula-blue:active,.button-default.button-nebula-blue:active,.button.button-nebula-blue,.button-default.button-nebula-blue{background-color:#003da5}.bg-nebula-blue-dark,.button.button-nebula-blue:hover,.button-default.button-nebula-blue:hover{background-color:#002276}.bg-cobalt,.button.button-cobalt:active,.button-default.button-cobalt:active,.button.button-cobalt,.button-default.button-cobalt{background-color:#00f}.bg-cobalt-dark,.button.button-cobalt:hover,.button-default.button-cobalt:hover{background-color:#00c}.bg-comet,.button.button-comet:active,.button-default.button-comet:active,.button.button-comet,.button-default.button-comet{background-color:#a71680}.bg-comet-dark,.button.button-comet:hover,.button-default.button-comet:hover{background-color:#8e044d}.bg-additional-link{background-color:#0f62fe}.bg-success-light{background-color:#daf1e4}.bg-error-light{background-color:#ffe5e1}.bg-alert-light{background-color:#fdf4e7}.bg-info-light{background-color:#e8f6fc}.bg-nebula-blue-shades{background-color:#e6efff}.bg-info-empty{background-color:#fff}.bg-success-dark{background-color:#0b7c29}.bg-error,.button.button-error:active,.button-default.button-error:active,.button.button-error,.button-default.button-error{background-color:#eb4b3f}.bg-error-dark,.button.button-error:hover,.button-default.button-error:hover{background-color:#b60b0b}.bg-alert-dark{background-color:#834e02}.bg-info-dark{background-color:#09699e}.border-transparent{border-color:transparent}.border-primary{border-color:#007bff}.border-secondary{border-color:#6c757d}.border-warning{border-color:#ff9800}.border-danger{border-color:#f56}.border-success{border-color:#4caf50}.border-grey-1{border-color:#f7f7f7}.border-grey-2{border-color:#e1e1e1}.border-grey-3{border-color:#d2d2d1}.border-grey-4{border-color:#949494}.border-black,.button-outline.button-black{border-color:#3c3c3c}.border-white,.button-outline.button-white{border-color:white}.border-lighter{border-color:#f7f7f7}.border-light{border-color:#e1e1e1}.border-disabled-light{border-color:#e1e1e1}.border-neutral{border-color:#d2d2d1}.border-darker{border-color:#717171}.border-darkest{border-color:#3c3c3c}.border-supernova,.button-outline.button-supernova{border-color:#ffc905}.border-supernova-dark{border-color:#ffa705}.border-nebula-blue,.button-outline.button-nebula-blue{border-color:#003da5}.border-nebula-blue-dark{border-color:#002276}.border-cobalt,.button-outline.button-cobalt{border-color:#00f}.border-cobalt-dark{border-color:#00c}.border-comet,.button-outline.button-comet{border-color:#a71680}.border-comet-dark{border-color:#8e044d}.border-additional-link{border-color:#0f62fe}.border-success-light{border-color:#daf1e4}.border-error-light{border-color:#ffe5e1}.border-alert-light{border-color:#fdf4e7}.border-info-light{border-color:#e8f6fc}.border-nebula-blue-shades{border-color:#e6efff}.border-success-dark{border-color:#0b7c29}.border-error,.button-outline.button-error{border-color:#eb4b3f}.border-error-dark{border-color:#b60b0b}.border-alert-dark{border-color:#834e02}.border-info-dark{border-color:#09699e}.text-transparent{color:transparent}.text-primary{color:#007bff}.text-secondary{color:#6c757d}.text-warning{color:#ff9800}.text-danger{color:#f56}.text-success{color:#4caf50}.text-grey-1{color:#f7f7f7}.text-grey-2{color:#e1e1e1}.text-grey-3{color:#d2d2d1}.text-grey-4{color:#949494}.text-black,.button-outline.button-black,.button-link.button-black,.button.button-white,.button-default.button-white,.button.button-supernova,.button-default.button-supernova{color:#3c3c3c}.text-white,.button-outline.button-white,.button-link.button-white,.button.button-black,.button-default.button-black,.button.button-comet,.button-default.button-comet,.button.button-cobalt,.button-default.button-cobalt,.button.button-nebula-blue,.button-default.button-nebula-blue,.button.button-error,.button-default.button-error{color:white}.text-lighter{color:#f7f7f7}.text-light{color:#e1e1e1}.text-disabled-light{color:#e1e1e1}.text-neutral{color:#d2d2d1}.text-darker{color:#717171}.text-darkest{color:#3c3c3c}.text-supernova,.button-outline.button-supernova,.button-link.button-supernova{color:#ffc905}.text-supernova-dark{color:#ffa705}.text-nebula-blue,.button-outline.button-nebula-blue,.button-link.button-nebula-blue{color:#003da5}.text-nebula-blue-dark{color:#002276}.text-cobalt,.button-outline.button-cobalt,.button-link.button-cobalt{color:#00f}.text-cobalt-dark{color:#00c}.text-comet,.button-outline.button-comet,.button-link.button-comet{color:#a71680}.text-comet-dark{color:#8e044d}.text-additional-link{color:#0f62fe}.text-success-light{color:#daf1e4}.text-error-light{color:#ffe5e1}.text-alert-light{color:#fdf4e7}.text-info-light{color:#e8f6fc}.text-nebula-blue-shades{color:#e6efff}.text-success-dark{color:#0b7c29}.text-error,.button-outline.button-error,.button-link.button-error{color:#eb4b3f}.text-error-dark{color:#b60b0b}.text-alert-dark{color:#834e02}.text-info-dark{color:#09699e}.text-transparent *{color:transparent}.text-primary *{color:#007bff}.text-secondary *{color:#6c757d}.text-warning *{color:#ff9800}.text-danger *{color:#f56}.text-success *{color:#4caf50}.text-grey-1 *{color:#f7f7f7}.text-grey-2 *{color:#e1e1e1}.text-grey-3 *{color:#d2d2d1}.text-grey-4 *{color:#949494}.text-black *,.button-outline.button-black *,.button-link.button-black *,.button.button-white *,.button-default.button-white *,.button.button-supernova *,.button-default.button-supernova *{color:#3c3c3c}.text-white *,.button-outline.button-white *,.button-link.button-white *,.button.button-black *,.button-default.button-black *,.button.button-comet *,.button-default.button-comet *,.button.button-cobalt *,.button-default.button-cobalt *,.button.button-nebula-blue *,.button-default.button-nebula-blue *,.button.button-error *,.button-default.button-error *{color:white}.text-lighter *{color:#f7f7f7}.text-light *{color:#e1e1e1}.text-disabled-light *{color:#e1e1e1}.text-neutral *{color:#d2d2d1}.text-darker *{color:#717171}.text-darkest *{color:#3c3c3c}.text-supernova *,.button-outline.button-supernova *,.button-link.button-supernova *{color:#ffc905}.text-supernova-dark *{color:#ffa705}.text-nebula-blue *,.button-outline.button-nebula-blue *,.button-link.button-nebula-blue *{color:#003da5}.text-nebula-blue-dark *{color:#002276}.text-cobalt *,.button-outline.button-cobalt *,.button-link.button-cobalt *{color:#00f}.text-cobalt-dark *{color:#00c}.text-comet *,.button-outline.button-comet *,.button-link.button-comet *{color:#a71680}.text-comet-dark *{color:#8e044d}.text-additional-link *{color:#0f62fe}.text-success-light *{color:#daf1e4}.text-error-light *{color:#ffe5e1}.text-alert-light *{color:#fdf4e7}.text-info-light *{color:#e8f6fc}.text-nebula-blue-shades *{color:#e6efff}.text-success-dark *{color:#0b7c29}.text-error *,.button-outline.button-error *,.button-link.button-error *{color:#eb4b3f}.text-error-dark *{color:#b60b0b}.text-alert-dark *{color:#834e02}.text-info-dark *{color:#09699e}.priority-major{z-index:10 !important}.priority-high{z-index:5 !important}.priority-medium{z-index:4 !important}.priority-low{z-index:2 !important}.priority-very-low{z-index:1 !important}.text-content{margin-left:10;margin-right:10}.base,.button-outline,.button-link,.button,.button-default{padding:10px 20px;border:1px solid transparent;border-radius:8px;cursor:pointer;width:fit-content;text-decoration:none;transition:200ms all}.base:active,.button-outline:active,.button-link:active,.button:active,.button-default:active{border-color:transparent;outline:2px solid #007bff44}.button-link{background-color:transparent}.button-outline{background-color:transparent}";

const SolarisButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = 'default';
    this.colorScheme = 'supernova';
    this.href = undefined;
    this.radius = undefined;
    this.size = 'md';
    this.fullWidth = undefined;
  }
  generateStyle() {
    const variant = `button-${this.variant}`;
    const size = `button-${this.size}`;
    const colorScheme = `button-${this.colorScheme}`;
    return classes(variant, size, colorScheme);
  }
  render() {
    return (h("button", { class: this.generateStyle(), style: {
        borderRadius: this.radius && unitFormatter(this.radius, '%'),
        width: this.fullWidth ? '100%' : undefined,
      } }, h("slot", null)));
  }
};
SolarisButton.style = solarisButtonCss;

export { SolarisButton as solaris_button };

//# sourceMappingURL=solaris-button.entry.js.map