const {
    lighten,
    darken,
    transparentize
} = require("polished");
const {
    guessVisibleColor
} = require("../nn/guessVisibleColor");

function createTheme(config) {

    let _config = config || {};

    let generateDarkTints = _config.generateDarkTints || false;
    let generateCustomBodyDarkTints = _config.generateCustomBodyDarkTints || false;

    let customCasinoAccent = Boolean(_config.customCasinoAccent) || false;

    let leafView = _config.leafView || false;

    let defaultLogo = {
        bigUrl: "/Img/partners/111/big.png",
        bigWidth: 150,
        bigHeight: 32,
        smallUrl: "/Img/partners/111/small.png",
        smallWidth: 50,
        smallHeight: 32,

        bigUrlMobile: "/img/mobile/partners/111/big.png",
        bigWidthMobile: 150,
        bigHeightMobile: 32,
        smallUrMobilel: "/img/mobile/partners/111/small.png",
        smallWidthMobile: 50,
        smallHeightMobile: 32,
    };

    let logoConfig = _config.logo || {};

    let logo = Object.assign(defaultLogo, logoConfig);

    let accent, accentTxt, popupHeaderBg, popupHeaderTxt, tabBg, tabTxt, accent2, borderRadius, headerBg, customCasinoAccentBg, customCasinoAccentBgHov, customCasinoAccentTxt;

    let primaryBg = _config.primaryBg;
    let spacing = _config.spacing || 2;

    let primaryBg2 = generateDarkTints ? darken(0.09, primaryBg) : lighten(0.09, primaryBg);
    let primaryBg3 = generateDarkTints ? darken(0.16, primaryBg) : lighten(0.16, primaryBg);

    let primaryBg2Hov = generateDarkTints ? darken(0.08, primaryBg) : lighten(0.08, primaryBg);
    let primaryBg3Hov = generateDarkTints ? darken(0.15, primaryBg) : lighten(0.15, primaryBg);

    let isAccentGradient = Array.isArray(_config.accent);

    if (isAccentGradient) {
        accent = _config.accent[0];
        accentBg = `linear-gradient(180deg, ${_config.accent[1]} 0%, ${_config.accent[0]} 100%)`;
        accent2 = darken(.1, accent);
        accentTxt = guessVisibleColor(accent);
    } else {
        accent = _config.accent;
        accentBg = _config.accent;
        accent2 = darken(.1, accent);
        accentTxt = guessVisibleColor(accent);
    }

    if (customCasinoAccent) {
        customCasinoAccentBg = _config.customCasinoAccent;
        customCasinoAccentBgHov = darken(.1, customCasinoAccentBg);
        customCasinoAccentTxt = guessVisibleColor(customCasinoAccentBg);
    } else {
        customCasinoAccentBg = accent;
        customCasinoAccentBgHov = accent2;
        customCasinoAccentTxt = accentTxt;
    }

    let primaryBgTransparent = transparentize(0.123, primaryBg);

    let primaryTxt = guessVisibleColor(primaryBg);

    let primaryTxt2 =
        primaryTxt === "#000" ?
        lighten(0.3, primaryTxt) :
        darken(0.3, primaryTxt);


    let customBodyBg = _config.customBodyBg ? _config.customBodyBg : primaryBg;
    let customBodyBg2 = _config.customBodyBg ? (generateCustomBodyDarkTints ? darken(0.06, customBodyBg) : lighten(0.06, customBodyBg)) : primaryBg2;
    let customBodyBg3 = _config.customBodyBg ? (generateCustomBodyDarkTints ? darken(0.08, customBodyBg) : lighten(0.08, customBodyBg)) : primaryBg3;
    let customBodyBg2Hov = _config.customBodyBg ? (generateCustomBodyDarkTints ? darken(0.07, customBodyBg) : lighten(0.07, customBodyBg)) : primaryBg2Hov;
    let customBodyBg3Hov = _config.customBodyBg ? (generateCustomBodyDarkTints ? darken(0.09, customBodyBg) : lighten(0.09, customBodyBg)) : primaryBg3Hov;

    let customBodyTxt = _config.customBodyBg ? guessVisibleColor(customBodyBg) : primaryTxt;
    let customBodyTxt2 = _config.customBodyBg ? (customBodyTxt === "#000" ? lighten(0.3, customBodyTxt) : darken(0.3, customBodyTxt)) : primaryTxt2;


    if (_config.popupHeaderBg) {
        popupHeaderBg = _config.popupHeaderBg;
        popupHeaderTxt = guessVisibleColor(popupHeaderBg);
    } else {
        popupHeaderBg = customBodyBg2;
        popupHeaderTxt = customBodyTxt;
    }

    //create tab
    if (_config.tabBg) {
        tabBg = _config.tabBg;
        tabTxt = guessVisibleColor(tabBg);
    } else {
        tabBg = accentBg;
        tabTxt = accentTxt;
    }

    //create header
    if (_config.headerBg) {
        headerBg = _config.headerBg;
        headerTxt = guessVisibleColor(headerBg);
        headerTxt2 = headerTxt === "#000" ?
            lighten(0.3, headerTxt) :
            darken(0.3, headerTxt);
    } else {
        headerBg = customBodyBg;
        headerTxt = customBodyTxt;
        headerTxt2 = customBodyTxt2;
    }

    //create footer
    if (_config.footerBg) {
        footerBg = _config.footerBg;
        footerTxt = guessVisibleColor(footerBg);
        footerTxt2 = footerTxt === "#000" ?
            lighten(0.3, footerTxt) :
            darken(0.3, footerTxt);
    } else {
        footerBg = customBodyBg;
        footerTxt = customBodyTxt;
        footerTxt2 = customBodyTxt2;
    }


    if (_config.borderRadius) {
        borderRadius = _config.borderRadius;
    } else {
        borderRadius = '0'
    }

    return {
        fileName: _config.fileName,
        leafView: leafView,

        logo: logo,

        spacing: spacing,

        primaryBg: _config.primaryBg,

        primaryBg2: primaryBg2,
        primaryBg3: primaryBg3,

        primaryBg2Hov: primaryBg2Hov,
        primaryBg3Hov: primaryBg3Hov,

        primaryTxt: primaryTxt,
        primaryTxt2: primaryTxt2,
        primaryBgTransparent: primaryBgTransparent,

        customBodyBg: customBodyBg,
        customBodyBg2: customBodyBg2,
        customBodyBg3: customBodyBg3,
        customBodyBg2Hov: customBodyBg2Hov,
        customBodyBg3Hov: customBodyBg3Hov,
        customBodyTxt: customBodyTxt,
        customBodyTxt2: customBodyTxt2,

        popupHeaderBg: popupHeaderBg,
        popupHeaderTxt: popupHeaderTxt,

        headerBg: headerBg,
        headerTxt: headerTxt,
        headerTxt2: headerTxt2,


        footerBg: footerBg,
        footerTxt: footerTxt,
        footerTxt2: footerTxt2,



        tabBg: tabBg,
        tabTxt: tabTxt,

        accent: accent,
        accentBg: accentBg,
        accent2: accent2,
        accentTxt: accentTxt,

        borderRadius: borderRadius,

        customCasinoAccent: customCasinoAccent,
        customCasinoAccentBg: customCasinoAccentBg,
        customCasinoAccentBgHov: customCasinoAccentBgHov,
        customCasinoAccentTxt: customCasinoAccentTxt
    }
}

module.exports.createTheme = createTheme;