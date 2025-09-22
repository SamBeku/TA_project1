const fs = require("fs");
//impordime oma kuupäeva mooduli
const dateET = require("./dateET");
const textRef = "txt/vanasonad.txt";

function listWisdom(rawData){
    let folkWisdom = rawData.split(";");
    for (let i = 0; i < folkWisdom.length; i ++){
        console.log((i + 1 + ") " + folkWisdom[i]));
    }
}

function readTextFile(){
    fs.readFile (textRef, "utf8", (err, data)=>{
        if(err){
            console.log(err);
        } else {
            //console.log(data);
            listWisdom(data);
        }
    });
}

console.log("Täna on " + dateET.fullDate() + " " + dateET.fullTime());
console.log("tänane vanasõna on:");
console.log("On " + dateET.partOfDay());
readTextFile();