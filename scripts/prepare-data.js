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

  summarizeData(preparedData);

  fs.writeFileSync('./src/data.json', JSON.stringify(preparedData));
}

function summarizeData(data) {
  const tableCounts = { total: 0 };
  const letterCounts = { total: 0 };

  for(const letter of Object.keys(data)) {
    letterCounts[letter] = data[letter].length;
    letterCounts.total += data[letter].length;

    for(const person of data[letter]) {
      tableCounts[person.Table] = (tableCounts[person.Table] || 0) + 1;
      tableCounts.total++;
    }
  }

  console.log(data);
  console.log({tableCounts, letterCounts});
}

const args = process.argv.slice(2);
if(args.length < 1) {
  console.error('Please specify the name of the file to prepare.');
}

processCsv(args[0]);