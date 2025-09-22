const fs = require("fs");
//impordime oma kuupäeva mooduli
const dateET = require("./dateET");
const textRef = "txt/vanasonad.txt";

function pickOneSentence(rawText){
    //jagan teksti ";" järgi massiviks, listiks
    let oldWisdomList = rawText.split(";");
    //console.log(oldWisdomList);
    let WisdomCount = oldWisdomList.length
    //console.log(WisdomCount)
    //loosin ja väljastan ühe vanasõna
    let wisdomOfTheDay = oldWisdomList[Math.round(Math.random() * (WisdomCount - 1))]
    console.log(wisdomOfTheDay);
}

function readTextFile(){
    fs.readFile (textRef, "utf8", (err, data)=>{
        if(err){
            console.log(err);
        } else {
            //console.log(data);
            pickOneSentence(data);
        }
    });
}

console.log("Täna on " + dateET.fullDate() + " " + dateET.fullTime());
console.log("tänane vanasõna on:");
console.log("On " + dateET.partOfDay());
readTextFile();