const fs = require("fs");

const mobile = require("./templates/mobile");
const webNew = require("./templates/webNew");

const {
  createTheme
} = require('./utils/createTheme')

let configs = [{
    fileName: 'cb',
    primaryBg: '#1a1a1a',
    accent: '#00E777',
    borderRadius: '2',
    spacing: '4',
    generateDarkTints: false,
    customCasinoAccent: '#ffb700',
    logo: {
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
    },
  },
  {
    fileName: 'oynabet',
    primaryBg: '#005C70',
    accent: '#F27404',
    borderRadius: '2',
    spacing: '4',
    generateDarkTints: true,
  },
];


configs.forEach(c => {
  let config = createTheme(c);
  fs.writeFile(
    `output/${config.fileName}_web_new.css`,
    webNew(config),
    err => {
      if (err) throw err;
    },
    () => {
      console.log(`${config.fileName}.css web has been created`);
    }
  );

  fs.writeFile(
    `output/${config.fileName}_mob_new.css`,
    mobile(config),
    err => {
      if (err) throw err;
    },
    () => {
      console.log(`${config.fileName}.css mobile has been created`);
    }
  );
})