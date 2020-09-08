const {readableColor, darken, lighten, transparentize} = require("polished");
const {guessVisibleColor} = require('../nn/guessVisibleColor');

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

  let textOnPrimary =  guessVisibleColor(primary); //readableColor(primary);

  let textOnPrimary2 = textOnPrimary === "#fff" ? darken(0.2, textOnPrimary) : lighten(0.2, textOnPrimary) ;
  let textOnPrimary3 = textOnPrimary === "#fff" ? darken(0.3, textOnPrimary) : lighten(0.3, textOnPrimary) ;


  let textOnAccent = guessVisibleColor(accent);


  function styleButton(className, type='default'){
    let scheme = {};
    if(type === 'accent'){
      scheme.bg = accent;
      scheme.bgHover = accentDark;
      scheme.color = textOnAccent;
    }
    else{
      scheme.bg = primary3;
      scheme.bgHover = primary2;
      scheme.color = textOnPrimary;
    }
    
    let str = `
      ${className}{
          background-color: ${scheme.bg};
          color: ${scheme.color};
          border-radius: ${roundness}px;
      }
      ${className}:hover{
          background-color: ${scheme.bgHover};
          color: ${scheme.color};
      }
    `;
    return str;
  }

  




  return `
/*${filename} skinning*/


/*optimisations*/
.ui-widget-overlay{
  background-color: ${primaryTransparent};
  backdrop-filter: blur(5px);
}

.tl_navigation{
  margin-left: -${spacing}px;
  margin-right: -${spacing}px;
  width: auto !important;
  overflow: hidden;
}
.tl_nav_link {
  margin: ${spacing}px;
}
.full_img_parent>img{
  display:block;
}
.tl_casino_top {
  margin-left: -${spacing}px;
  margin-right: -${spacing}px;
  width: auto !important;
  overflow: hidden;
}
.tl_casino_item{
  border-left: ${spacing}px solid;
  border-right: ${spacing}px solid;
  border-color: ${primary};
}
.tl_casino_bottom,
.slot_banners,
.game_banners{
  margin-left: -${spacing}px;
  margin-right: -${spacing}px;
  width: auto !important;
  overflow: hidden;
}
.tl_casino_banner,
.tl_game_banner,
.tl_live_banner{
  border-left: ${spacing}px solid !important;
  border-right: ${spacing}px solid !important;
  border-color: ${primary} !important;
}
.tl_tab_item{
  height: 36px;
  padding: 0 8px;
}
.game_search_cont{
  height: 36px;
  line-height: 36px;
  justify-content: flex-start;

}
.game_search_cont .tl_game_search {
  font-size: 24px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  position: absolute;
  top:50%;
  right: 6px;
  transform:translateY(-50%);
}
.game_search_cont .game_search_box .tl_input_popup {
  font-size: 14px;
  text-indent: 15px;
  border-radius: ${roundness}px;
  line-height: 36px;
  background-color: #2b2b2b;
  transition: all .3s ease;
  width: 100%;
  background-color: ${primary2};
  color: ${textOnPrimary2};
}
.game_search_cont .game_search_box{
  width: 100%;
}

.tl_logo a{
  visibility: hidden;
}
.toto_landint_container,
.tl_BG{
  background-color: ${primary};
}
.tl_casino_banner,
.tl_header_top_row,
.tl_game_banner, 
.tl_live_banner,
.tl_logged_out .tl_register_button{
  box-shadow: none;
}
.tl_header_top_row{
  background-color: ${primary};
  
}
.tl_time .time,
.tl_time .zone{
  color: ${textOnPrimary2};
}
/*login btn*/
${styleButton('.tl_logged_out .tl_login_button', 'default')}
/*register btn*/
${styleButton('.tl_logged_out .tl_register_button', 'accent')}
/*lang dropdown*/
.tl_acc_lang{
  border-radius: ${roundness}px;
}
.tl_acc_lang, .tl_acc_lang > a, .tl_acc_lang:hover{
  background-color: ${primary3};
}
.dropdownColor{
  color: ${textOnPrimary};
}
.links_container{
  background-color: ${primary};
}
.links_container .txt{
  color: ${textOnPrimary};
}
.links_container a{
  border-color: ${primary};
}
.tl_acc_lang>a{
  color: ${textOnPrimary};
}
.links_container a:hover{
  background-color: ${primary};
}

/*logged in*/
.landing_header_deposit_button,
.transferDropdown,
.tl_acc_lang,
.tl_acc_balance {
  margin: 0 ${spacing}px;
}
.landing_header_deposit_button button{
  background-color: ${accent};
  color: ${textOnAccent};
}
.landing_header_deposit_button span{
  background-color: ${accent};
}
.landing_header_deposit_button span:after{
  border-top-color: ${textOnAccent};
}
.tl_acc_balance,
.transferDropdown{
  background-color: ${primary3};
}
.landing_header_deposit_content a{
  background-color: ${primary3};
  border-color:  ${primary};
  color: ${textOnPrimary};
}
.landing_header_deposit_content a:hover{
  background-color: ${primary2};
}
.dropdown .links_container_home a{
  color: ${textOnPrimary};
}
.header__id_link_name{
  color: ${textOnPrimary2};
}


/*promos*/
.tl_head_promos a{
  color: ${textOnPrimary};
}
.tl_head_promos a:hover{
  color: ${accent};
}


/*header 2*/
.tl_header_bot_row_fix {
  background-color: ${primary2};
}
.tl_main_nav .navItem{ 
  background-color: ${primary2};
  color: ${textOnPrimary2};
}
.tl_main_nav .navItem:hover, .tl_main_nav .navItem.active{
  background-color: ${primary2};
  text-shadow: 0 0 6px ${accent};
  color: ${textOnPrimary} !important;
}

.header_nav__dropdown{
  background-color: ${primary};
}
.tl_main_nav .header_nav__dropdown a{
  border-color:  ${primary};
  color: ${textOnPrimary};
}
.tl_main_nav .header_nav__dropdown a:hover{
  color: ${textOnPrimary};
  border-color: ${accent};
}
.tl_main_nav a:hover{
  background-color: ${primary};
}

/*banner*/
.carousel-indicators > div{
  background-color: ${primary3};
}
.carousel-indicators > .active{
  background-color: ${accent};
}

/*paper navigation*/
.nav_item{
  background-color: ${primary3};
  border-radius: ${roundness * 5}px;
}
.nav_title{
  color: ${textOnPrimary};
}
.nav_item > img{
  filter: ${textOnPrimary === "#000" ? 'invert(1)' : 'invert(0)'};
}

.car_controls {
  background-color: ${primaryTransparent};
  color: ${textOnPrimary};
  opacity: 1;
}

/*blocks*/
.block_title {
  color: ${accent};
  background-color: ${primary2};
  border-color: ${accent};
  box-shadow:none;
}
.tl_game_banner, .tl_live_banner{
  background-color: ${primary};
}
.tl_casino_item{
  background-color: ${primary3};
  box-shadow: none;
}
.casino_top_balance {
  color: ${accent};
  text-shadow: none;
}
.tl_border_line{
  border-color: ${primary};
}
.tl_casino_banner{
  background-color: ${primary};
}

/*footer*/
.tl_footer_BG{
  background-color: ${primary2};
}

.tl_footer_links{
  border-color: ${primary3};
}

.toMobile {
  margin: 0;
  background: ${primary3};
  color: ${textOnPrimary} !important;
}
.footer_change_language .tl_acc_lang {
  background: ${primary3};
}
.footer_change_language .tl_acc_lang a{
  color: ${textOnPrimary} !important;
}

.tl_footer_links_row h2{
  color: ${textOnPrimary};
}
.tl_footer_links_row a{
  color: ${textOnPrimary3};
}
.tl_footer_links_row a:hover{
  color: ${textOnPrimary};
}
.powered-by,
.federbet_box,
.rng_box,
.footer_partners_logo{
  background-color: ${primary};
  color: ${textOnPrimary};
}
.footer_title,
.DrinkDepressedWarning_text{
  color: ${textOnPrimary3};
}
.iconsFoot .copy{
  color: ${accent};
}

/*casino*/
.tl_tabs_container{
  background: ${primary};
}
.tl_tab_item{
  color: ${textOnPrimary2};
}
.tl_tab_item:hover,
.tl_tab_item.active{
  background-color: ${primary2};
  color: ${textOnPrimary};
}
/*casino search*/

.game_search_cont .game_search_box .tl_input_popup::placeholder{
  color: ${textOnPrimary3};
}
.game_search_cont .tl_game_search{
  color: ${textOnPrimary};
} 
.tl_game_tabs_ul{
  margin-left: -${spacing}px;
  margin-right: -${spacing}px;
  padding: 0;
}
.tl_game_tabs_menu .tl_game_tab_item{
  color: ${textOnPrimary2};
  height: 36px;
  line-height: 36px;
  background-color: ${primary2};
  overflow: initial;
  text-overflow: initial;
  white-space: initial;
  border-radius: 8px;
  margin: ${spacing}px;
}
.tl_games_container .tl_game_tabs_menu .tl_game_tab_item.active,
.tl_game_tabs_menu .tl_game_tab_item:hover{
  color: ${textOnPrimary};
  background-color: ${primary3};
}
.tl_games_sm_container_bot{
  margin-left: -${spacing}px;
  margin-right: -${spacing}px;
}
.tl_promoted_game, .tl_games_sm_container_bot .tl_game{
  padding: ${spacing}px !important;
}

/*casino games*/
.tl_game .more{
  background-color: ${primaryTransparent};
  border-color: ${primary3};
}
.tl_game .more .title{
  color: ${accent};
}
.tl_game .more .play, .tl_game .more .playgame{
  border-color: ${accent};
  color: ${accent};
  background-color: transparent;
  border-radius: 5px;
  transition: all 0.2s;
}
.tl_game .more .play:hover{
  background-color: ${accent};
  color: ${textOnAccent};
}
/*casino show more*/
.moregame{
  background-color: ${primary3};
  color: ${textOnPrimary2};
}
.moregame:hover{
  background-color: ${primary2};
}

/*test*/
.promoted:after,
.promoted_drop:after,
.New:after{
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
.promoted_drop:after{
  top: -16px;
}
.New:after{
  top: -9px;
}

/*promotions*/
.tl_news_title{
  color: ${textOnPrimary};
}
.tl_news, .tl_news_single, .tl_promotions {
  width: 100%;
  background-color: ${primary};
}
.tl_news_title_content, .tl_promotions_title_content{
  border-color: ${primary};
}
.tl_prom_filters{
  background-color: ${primary};
  color: ${textOnPrimary};
}
.tl_prom_filters:hover,
.promo_clicked {
  background-color: ${accent};
  color: ${textOnAccent};
}
.tl_promo_news_type{
  background-color: ${primaryTransparent};
  color: ${textOnPrimary};
}
.tl_promo_news_name {
  background-color: ${primaryTransparent};
  border-color: ${accent};
  color: ${textOnPrimary};
}
.tl_promo_news_hover {
  background-color: ${primaryTransparent};
  border-color: ${accent};
  color: ${textOnPrimary};
}
.tl_promo_news_button{
  background-color: ${accent};
  color: ${textOnAccent};
}





/*optimisations*/








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



/*my acc*/
/*reset*/
.tl_sel_custom_popup_reg{
  color: transparent;
}
.colorWhite{
  color: ${textOnPrimary};
}
.colorOrange{
  color: ${accent};
}
/*reset end*/
.tl_my_acc_cont_nav{
  background-color: ${primary2};
}
a.tl_my_acc_nav_item, a.tl_my_acc_nav_itemsp{
  background-color: ${primary2};
  color: ${textOnPrimary};
  border-color: ${primary};
}
a.tl_my_acc_nav_item.active,
a.tl_my_acc_nav_item:hover{
  color: ${textOnPrimary};
}
.tl_my_acc_cont_content{
  background-color: ${primary};
}
.tl_head_close{
  color: ${textOnPrimary};
}
.popup_lbl, a.popup_lbl, .popup_lbl_2, a.popup_lbl_2{
  color: ${textOnPrimary};
}

/*inputs*/
.tl_my_acc_cont .tl_input{
  background-color: ${primary3};
  color: ${textOnPrimary};
}
.tl_sel_custom_popup_reg_selected{
  background-color: ${primary3};
  color: ${textOnPrimary};
}
/*dropdown*/
.tl_sel_custom_popup_reg_options,
.tl_sel_custom_popup_reg_selected.active{
  background-color: ${primary};
}
.tl_sel_custom_popup_reg_options li{
  background-color: ${primary};
  color: ${textOnPrimary};
}
.tl_sel_custom_popup_reg_options li.active,
.tl_sel_custom_popup_reg_options li:hover{
  background-color: ${primary2};
  color: ${textOnPrimary};
}
.btnSec, a.btnSec, .primBtn{
  background-color: ${accent};
  color: ${textOnAccent};
}
.btnSec:hover, a.btnSec:hover, .primBtn:hover{
  background-color: ${accentDark};
  color: ${textOnAccent};
}
#update_my_prof {
  background-color: ${accent} !important;
  color: ${textOnAccent} !important;
}
.walletsCont{
  background-color: ${primary2};
}
.wallets_row{
  color: ${textOnPrimary2};
}















`;
};