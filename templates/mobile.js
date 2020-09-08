const {readableColor, darken, lighten, transparentize} = require("polished");

module.exports = function (config) {

  this.config = config || {};

  //configs
  let filename = this.config.fileName;

  let roundness = this.config.roundness || '2';
  let spacing = this.config.spacing || '2';


  let lighter = this.config.lighter || false;

  let primary = this.config.primary;
  let primaryDark = darken(0.1, primary);
  let primaryLight = lighten(0.046, primary);

  let primaryDark2 = darken(0.15, primary);
  let primaryLight2 = lighten(0.098, primary);


  let primary2 = lighter ? primaryLight : primaryDark;
  let primary3 = lighter ? primaryLight2 : primaryDark2;


  let primaryTransparent = transparentize(0.4, primary);

  let accent = this.config.accent;
  let accentDark = darken(0.15, accent);
  let accentLight = darken(0.15, accent);

  let textOnPrimary = readableColor(primary);

  let textOnPrimary2 = textOnPrimary === "#fff" ? darken(0.2, textOnPrimary) : lighten(0.2, textOnPrimary) ;
  let textOnPrimary3 = textOnPrimary === "#fff" ? darken(0.3, textOnPrimary) : lighten(0.3, textOnPrimary) ;


  let textOnAccent = readableColor(accent);

  




  return `
/*${filename} skinning*/


/*remove when done*/
.LogoMobilePlatform {
  visibility: hidden;
}



/*top banner*/
.tm__footer{
  padding-bottom: 2px;
}
#topMatchesList .tab_selector.tab_selector_active{
  background-color:${primary2};
}
#topMatchesList .tab_selector{
  background-color:${primary};
}
#topMatchesList .tab_selector.tab_selector_active .tm__menu__icon--color,
#topMatchesList .tab_selector.tab_selector_active .tm__menu__text__active--color{
  color:${textOnPrimary};
}
#topMatchesList .tab_selector .tm__menu__icon--color,
#topMatchesList .tab_selector .tm__menu__text__active--color{
  color:${textOnPrimary};
}
.tm__content__title--font{
  color:${textOnPrimary};
}
#topMatchesList {
  background-color:${primary};
}
#topMatchesList > div > .selectorWrapper {
  background-color: ${primary};
  box-shadow:none;
}
.tm__content__items{
  margin-left: -${spacing}px;
  margin-right: -${spacing}px;
}
.tm__content__item{
  margin: 0;
  border-right: ${spacing}px solid;
  border-left: ${spacing}px solid;
  border-color: ${primary};
}
.tm__content__item.tm__content__item--bg {
  background-color: ${primary2};
}
.tm__content__img.tm__content__img--bg {
  background-color:${primary3};
  border-color:${primary3};
}
.tm--shadow {
  box-shadow:none;
}
.tm__content__team--font,
.tm__content__time--font{
  color: ${textOnPrimary};
}
.tm__content__date--font{
  color: ${textOnPrimary2};  
}
.tm__content__vs--style{
  color: ${textOnPrimary3};
}
.tm__content__title--font{
  color: ${accent};
}
.tm__footer .tm__footer__item--bg {
  background-color:${primary};
}
.tm__footer .tm__footer__title--font {
  color:${textOnPrimary};
}
.tm__footer .tm__footer__score--font {
  color:${accent};
}
.tm__footer .tm__footer__item--bg:hover {
  background-color:${accent};
}
.tm__footer .tm__footer__item--bg:hover .tm__footer__title--font {
  color:${textOnAccent};
}
.tm__footer .tm__footer__item--bg:hover .tm__footer__score--font {
  color:${textOnAccent};
}




/*mobile*/
  /*wrapper*/
#wrapper{
  background-color: ${primary};
}
  /*header*/
.casino_h_link_cont .clr_sec {
  background-color: ${primary};
}
.casino_links_tabs a{
  color: ${textOnPrimary};
  padding: 0 ${spacing * 4}px;
}
.casino_links_tabs .home_icon:before{
  color: ${accent};
}
/*header main*/
#header{
  background-color: ${primary2};
}
#header .LinkToLeftPanel{
  color: ${textOnPrimary};
}
.platformMobLog {
  color: ${textOnPrimary} !important;
  margin: 0 ${spacing}px;
  background-color: transparent !important;
  border-radius: ${roundness}px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
}
.platformMobReg{
  color: ${accent} !important;
  margin: 0 ${spacing}px;
  background-color: transparent !important;
  border-radius: ${roundness}px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
}

.landing_header_deposit_button{
  background-color: ${primary3};
  color: ${textOnPrimary};
}
.btn_deposit{
  background-color: ${accent};
  color: ${textOnAccent};
}
.landing_header_icon{
  color: ${textOnPrimary};
}
.landing_header_deposit_content a {
  background-color: ${primary2};
  border-color: ${primary};
  color: ${textOnPrimary};
}

/*nav items*/
.nav_item{
  background-color: ${primary2};
}
.nav_title {
  text-shadow: none;
  background-color: ${primary};
  color: ${textOnPrimary};
}

.block_title {
  color: ${accent};
  background-color: ${primary2};
  border-color: ${accent};
}

.tabs-menu{
  background-color: ${primary};
}
.tabs-menu .js-tab{
  background-color: ${primary2};
  color: ${accent};
}
.tabs-menu .js-active-tab{
  background-color: ${primary2};
  color: ${textOnPrimary};
}

.tabs_cont_item{
  align-items: center;
  padding: 0 ${spacing * 4}px;
  background-color: ${primary3};
  border-bottom: 2px solid ${primary};
}
.casino_top_egt{
  margin-top: 0;
}
.tabs_cont_item .tl_casino_ic{
  margin: 0 ${spacing}px;
}
.jack_conts{
  justify-content: flex-end;
  flex-grow: 1;
  min-width: 1px;
}
.tabs_cont_item .currIcon {
  position: relative;
  right: auto;
}
.casino_top_balance {
  color: ${accent};
  text-shadow: none;
}

/*panels*/
.bgMain{
  background-color: ${primary};
}
.menuBtn {
  height: 40px;
  background-color: ${primary3};
  color: ${textOnPrimary} !important;
  margin-bottom: ${spacing*2}px;
  padding: 0 ${spacing*4}px;
}
.menuBtnSm {
  background-color: ${primary3};
  color: ${textOnPrimary} !important;
  margin-bottom: ${spacing*2}px;
  padding: 0 ${spacing*4}px;
}
.promoted span:after {
  content: 'new';
  background-color: ${accent};
  color: ${textOnAccent};
  width: 23px;
  height: 10px;
  line-height: 10px;
  border-radius: 3px;
  padding: 4px;
  font-size: 9px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  top: -4px;
}

/*footer*/
#footer{
  background-color: ${primary};
  padding: ${spacing*8}px; 0;
}
.drop_down_lang {
  background-color: ${primary3};
  color: ${textOnPrimary2};
  border-radius: ${roundness*2}px;
}
.drop_down_lang__front_el{
  background-color: ${primary3};
  color: ${textOnPrimary2};
}
.drop_down_lang_arrow:after{
  border-top-color: ${textOnPrimary2};
}
.toWeb {
  background: ${primary3} !important;
  border-radius: ${roundness*2}px;
  color: ${textOnPrimary2} !important;
}
.footer_links .footer_links_head{
  color: ${textOnPrimary2};
}
.footer_links a{
  color: ${textOnPrimary};
}
.footer__DrinkDepressedWarning_text,
.footer_title{
  color: ${textOnPrimary3};
}
.copy{
  color: ${accent};
}
`;
};