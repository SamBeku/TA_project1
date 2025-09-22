function dateNowFormattedET() {
    let timeNow = new Date();
    let dateNow = timeNow.getDate();
    let monthNow = timeNow.getMonth();
    let yearNow = timeNow.getFullYear();

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

const partOfDay = function(){
    let dayPart = "suvaline aeg";
    let hourNow = new Date().getHours();
    if(hourNow <= 6){
        dayPart = "varahommik";
    } else if (hourNow < 12){
        dayPart = "hommik";
    } else if (hourNow == 12){
        daypart = "keskpäev";
    }
    return dayPart
}

//ekspordin vajaliku
module.exports = {fullDate: dateNowFormattedET, fullTime: timenowFormattedET, partOfDay: partOfDay};