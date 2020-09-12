let allCodes=require('./iata.json');

let temp={};
console.log(allCodes.length)
for(let i in allCodes){
    temp[allCodes[i].city]=allCodes[i].code;
}
// for(let i in allCodes){
//     temp[allCodes[i]].push(allCodes[i].code);
// }

var json = JSON.stringify(temp);
var fs = require('fs');
fs.writeFile ("iataLookUp.json", JSON.stringify(temp), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);