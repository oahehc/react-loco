/* eslint-disable no-console */
const axios = require('axios');
const flatten = require('flat');
const fs = require('fs');
const LOCO_API_KEY = 'lu1ND32iGXhviEFvaLM9AGdq4N80aWez';

console.log('Downloading localise file...');
axios
  .get(`https://localise.biz/api/export/locale/en.json?key=${LOCO_API_KEY}`)
  .then((response) => {
    const flatResponse = flatten(response.data);
    fs.writeFile('./src/strings/loco.json', JSON.stringify(flatResponse), (err) => {
      if (err) {
        throw err;
      }
      console.log('localise update successfully');
    });
  }).catch((err) => {
    console.error('localise file download fail', err);
  });
