import csvToJson from 'csvtojson';
import fs from 'fs';

async function processCsv(file) {
  const data = await csvToJson().fromFile(file);

  const preparedData = {};

  for(const row of data) {
    if(row.First.length === 0) {
      continue;
    }

    const letter = row.Last[0];
    if(!(letter in preparedData)) {
      preparedData[letter] = [];
    }

    preparedData[letter].push(row);
  }

  console.log(preparedData);

  fs.writeFileSync('./src/data.json', JSON.stringify(preparedData));
}

const args = process.argv.slice(2);
if(args.length < 1) {
  console.error('Please specify the name of the file to prepare.');
}

processCsv(args[0]);