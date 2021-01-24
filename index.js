const csv = require('csv-parser');
const fs = require('fs');

fs.unlink('canada.txt', (err) => {
    if(err) {
        console.log(err)
        return
    }
})

fs.unlink('usa.txt', (err) => {
    if(err) {
        console.log(err)
        return
    }
})

fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (row) => {
     if (row["country"] == "Canada") {
       fs.appendFile('canada.txt', String(row["country"] + ',' + row["year"] + ',' + row["population"] + '\n'), (err) => {
           if (err) throw err;
       });
     }
     else if (row["country"] == "United States") {
       fs.appendFile('usa.txt', String(row["country"] + ',' + row["year"] + ',' + row["population"] + '\n'), (err) => {
           if (err) throw err;
       });
     }
  });