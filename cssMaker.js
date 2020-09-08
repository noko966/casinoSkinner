const fs = require("fs");

const web = require("./templates/web");
const mobile = require("./templates/mobile");
const webNew = require("./templates/webNew");

const { createTheme } = require('./utils/createTheme')

let configs = [
  {
    fileName: 'grey',
    primaryBg: '#343434',
    accent:'#f14100',
    borderRadius: '8',
    spacing: '4',
    generateDarkTints: true,
  },
  {
    fileName: 'light',
    primaryBg: '#fff',
    accent:'#ffb700',
    borderRadius: '2',
    spacing: '4',
    generateDarkTints: true,
    headerBg: '#f00'
  }
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
      console.log(`${config.fileName}.css has been created`);
    }
  );
})




