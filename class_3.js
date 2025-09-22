const fs = require("fs");
const textRef = "txt/vanasonad.txt";

function pickOneSentence(rawText){
    //jagan teksti ";" järgi massiviks, listiks
    let oldWisdomList = rawText.split(";");
    //console.log(oldWisdomList);
    let WisdomCount = oldWisdomList.length
    //console.log(WisdomCount)
    //loosin jha väljastan ühe vanasõna
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

readTextFile();