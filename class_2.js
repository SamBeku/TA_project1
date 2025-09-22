const firstName = "Samuel";
const lastName = "Beekmann";
let oneRandomNumber = 0;

console.log(firstName + " " + lastName);
function tellAuthorsName(){
    console.log("Programmi autor on " + firstName + " " + lastName);
}

function generateNumberValue() {
    let newNumber = Math.round(Math.random()*10);
    //oneRandomNumber = newNumber;
    return newNumber
}
function dateNowFormattedET() {
    let timeNow = new Date();
    let dateNow = timeNow.getDate();
    let monthNow = timeNow.getMonth();
    let yearNow = timeNow.getFullYear();
    //get.Year annab 125 (1 - sajandi number, 25 aasta number selles sajandis)
    //getFullYear annab lihtsalt aastaaja
    const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

    //return dateNow + "." +  (monthNow + 1) + "." + yearNow + " " + hourNow  + "." + minutesNow + "." + secondsNow;
    return dateNow + ". " + monthNamesET[monthNow] + " " + yearNow;
}

function timenowFormattedET(){
    let timeNow = new Date();
    let hourNow = timeNow.getHours();
    let minutesNow = timeNow.getMinutes();
    let secondsNow = timeNow.getSeconds();
    return hourNow + ":" + minutesNow + ":" + secondsNow;
}

tellAuthorsName();
oneRandomNumber = generateNumberValue();
console.log("Genereerisin juhusliku arvu " + oneRandomNumber);
//console.log(new Date());
console.log("Täna on " + dateNowFormattedET());
console.log("Kell on " + timenowFormattedET());