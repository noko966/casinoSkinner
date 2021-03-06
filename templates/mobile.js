const leafViewCss = `
    border-top-right-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
`;

function mobile(c) {

    return `
    /*main*/
    .LogoMobilePlatform {
      background-image: url(${c.logo.smallUrlMobile});
      width: ${c.logo.smallWidthMobile}px;
      height: ${c.logo.smallHeightMobile}px;
    }
    @media screen and (min-width: 433px){
      .LogoMobilePlatform {
          background-image: url(${c.logo.bigUrlMobile});
          width: ${c.logo.bigWidthMobile}px;
          height: ${c.logo.bigHeightMobile}px;
      }
    }
    body, #wrapper{
        background-color:${c.customBodyBg2};
        color:${c.customBodyTxt};
    }
    .bgMain,
    .ui-collapsible-content {
        background-color: transparent !important;
    }
    .successmassage {
      background-color: #c9eac7;
      color: #000;
    }
    #EmailVerifieError, #MobileVerifieError {
      background-color: #eacdc7;
      color: #000;
    }
    /*checkboxes*/
   
    /*header*/
    #header {
        background-color: ${c.headerBg} !important;
        color: ${c.headerTxt};
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    }
    #header a{
        color: ${c.headerTxt};
    }
    .LinkToLeftPanel,
    a.LinkToLeftPanel,
    #menu-right .arrow:after {
        color: ${c.headerTxt};
    }    
    .btn_sec,
    a.btn_sec {
        background-color: ${c.primaryBg3} !important;
        color: ${c.primaryTxt2} !important;
    }
    
    .btn_prim,
    a.btn_prim {
        background-color: ${c.accent} !important;
        color: ${c.accentTxt} !important;
    }
    
    /*main nav*/
    .landing_contet {
      background-color:${c.customBodyBg2} !important;
      color:${c.customBodyTxt};
    }
    .nav_item {
        background-color: ${c.primaryBgTransparent} !important;
        border-radius: 8px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    }
    
    .nav_title {
        font-size: 14px;
        color: ${c.primaryTxt};
    }
    
    .nav_item > img {
        padding: 15px 45px 50px;
        max-height: 29vw;
        object-fit: contain;
    }
    
    /*sidebars*/
    #left-panel,
    #language-panel,
    #right-panel {
        background-color: ${c.customBodyBg2} !important;
        color: ${c.customBodyTxt} !important;
    }
    .menuBtn,
    a.menuBtn,
    .menuBtnSm,
    a.menuBtnSm,
    .menuRow,
    a.menuRow {
        background-color: ${c.customBodyBg3};
        color: ${c.customBodyTxt} !important;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    }
    
    .menuBtn a,
    a.menuBtn a {
        color: ${c.customBodyTxt} !important;
    }
    
    .collapse_dropdown_leftmenu_btn:after {
        border-color: ${c.customBodyTxt} transparent transparent transparent;
    }
    
    .platformLoginInput,
    .platformPassInput {
        background-color: ${c.customBodyBg2};
        color: ${c.customBodyTxt} !important;
    }
    
    /*widget name*/
    .name_vidget {
        background-color: ${c.primaryBgTransparent};
        color: ${c.primaryTxt} !important;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    }
    
    /*footer*/
    #footer{
        background-color:${c.footerBg} !important;
        color:${c.footerTxt2};
        padding: 24px 16px 100px 16px;
    }
    .MobileIcon{
        border:0;
        display: inline-flex !important;
        padding: 0 16px;
        align-items: center;
        width: auto;
    }
    
    .footer_title,
    .footer_links a {
        font-size: 13px;
        color:${c.footerTxt2};
    }
    
    .cannon_footer_txt,
    #copyright {
        color:${c.footerTxt2};
    }
    .promoted span:after {
        position: absolute;
        top: -13px;
        right: -5px;
        content: 'new';
        text-transform:uppercase;
        width: 23px;
        height: 15px;
        line-height: 15px;
        text-align:center;
        font-size:8px;
        border-radius:4px;
        background-color:${c.accent};
        color:${c.accentTxt};
    }
    
    /*payments*/
    .heading {
        background-color: ${c.customBodyBg2} !important;
        color: ${c.accent} !important;
        border-bottom: 2px solid ${c.accent};
    }
    .tl_mail_header:before{
        color: ${c.accent} !important;
    }
    #content_paym .paym_txt1,
    #content_paym .paym_txt,
    #content_paym .paym_cond {
        color: ${c.customBodyTxt};
    }
    #content_paym .paym_cond > span {
        color: ${c.customBodyTxt};
    }
    .collapse_btn h3 > a {
        background-color: ${c.customBodyBg};
        color: ${c.customBodyTxt} !important;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        border: 0;
    }
    .collapse_btn h3 > a:before {
        color: currentColor !important;
    }
    #content_paym label,
    .required-field {
        color: ${c.customBodyTxt};
    }
    #content_paym .inp {
        background-color: ${c.customBodyBg3};
        color: ${c.customBodyTxt};
    }

    /*my account*/
    .accRowClr{
        background-color: ${c.customBodyBg};
        color: ${c.customBodyTxt};
    }
    .accRowClr td{
        color: ${c.customBodyTxt};
    }
    .ui-input-text input,
    .tl_mail_send_area,
    .ui-select{
      background-color: ${c.customBodyBg3};
      color: ${c.customBodyTxt2};
    }
    /*inbox*/
    .deleteAll_icon, .readAll_icon {
      color: ${c.customBodyTxt2};
      padding: 9px 8px;
    }
    .tl_mail_item,
    .tl_mail_row,
    .tl_mail_message_body{
      background-color: ${c.customBodyBg};
      color: ${c.customBodyTxt2};
    }
    .tl_mail_icon,
    .tl_mail_details_title,
    .tl_mail_details_title{
      color: ${c.customBodyTxt2};
    }
    .tl_mail_details,
    .tl_mail_attachfiel_screp{
      color: ${c.customBodyTxt};
    }
    .tl_mail_msgId{
      color: ${c.accent};
    }
    .tl_mail_attachfiel_download_btn{
      background-color: ${c.customBodyBg};
      color: ${c.customBodyTxt2};
    }
    /*profile*/
    .reg_prof__element_row label{
      color: ${c.customBodyTxt};
    }

    /*promotions*/
    .filters_slider_cont{
      background-color: ${c.customBodyBg};
      color: ${c.customBodyTxt2};
    }
    .tl_prom_slider_items.btn_sec{
      color: ${c.customBodyTxt2} !important;
    }
    .tl_prom_slider_items.btn_sec.promo_clicked{
      color: ${c.accent} !important;
    }
    #slideLeft {
      background-color: rgba(0, 0, 0, 0.3);
      color: #fff;
      box-shadow: -20px 0px 41px 68px rgba(0, 0, 0, 0.3);
      background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
    }
    #slideRight {
      background-color: rgba(0, 0, 0, 0.3);
      color: #fff;
      box-shadow: -23px 0px 41px 68px rgba(0, 0, 0, 0.3);
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
    }
    .promo_mobile_cont{
      background-color: ${c.customBodyBg};
      color: ${c.customBodyTxt};
    }
    .promo_mobile_title{
      color: ${c.accent};
    }
    .tl_promotions_more_info {
      background-color: ${c.customBodyBg3};
      color: ${c.customBodyTxt} !important;
    }


    /*casino*/
    .casino_nav__links_block {
      background-color: ${c.customBodyBg};
      color: ${c.customBodyTxt};
    }
    a.casino_nav_links_mob,
    .casino_nav_links_mob{
      color: ${c.customBodyTxt};
    }
    a.casino_nav_links_mob.active,
    .casino_nav_links_mob.active{
      color: ${c.accent};
    }
    .casino__container .New:after{
      background-color: ${c.accent};
      color: ${c.accentTxt};
    }
    .casino__container .New:before {
      content: "";
      border: 3px solid transparent;
      position: absolute;
      z-index: 3;
      top: 15px;
      right: -10px;
      z-index: 4;
      border-top-color: ${c.accent};
      border-right-color: ${c.accent};
    }
    /*casino sticky menu bot*/
    .fixed_menu__play_button{
      background-color: ${c.customBodyBg2};
      color: ${c.customBodyTxt};
    }
    .menu_circle:before {
      box-shadow: 4px 3px 40px 1200px ${c.customBodyBg2};
    }
    .fixed_menu__li {
      color: ${c.customBodyTxt};
    }
    .fixed_menu__li.active {
      color: ${c.accent};
    }


  `
}


module.exports = mobile;