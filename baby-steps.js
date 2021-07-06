const numbersList = process.argv.slice(2);

const result = numbersList.reduce((a, b) => Number(a) + Number(b), 0);

console.log(result);
