import csv from 'csvtojson';
import fs from 'fs';

csv().fromFile('./data.csv').then(data => {
  fs.writeFileSync('./src/data.json', JSON.stringify(data));
});
