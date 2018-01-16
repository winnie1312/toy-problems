function CountingMinuteI(str) {
    let x = str.indexOf("-");
    let aOrP1 = str.charAt(x-2);
    let aOrP2 = str.charAt(str.length-2);
    
    let hour1 = parseInt(str[0]+str[1]);
    let firstHour = (str.indexOf(":")===2? hour1 : parseInt(str[0]));
    let convertFirstHour = ((aOrP1 === 'p' && hour1 === 12)? 12: (aOrP1 === 'a' && hour1 === 12)? 0 : (aOrP1 === 'p' && hour1 !== 12)? 12 + firstHour :firstHour);
    let convertFirstHourToMin =convertFirstHour *60 + parseInt(str[x-4]+ str[x-3]);
    console.log(convertFirstHourToMin);
       
    let hour2 = parseInt(str[x+1]+str[x+2]);
    let secondHour = (str.lastIndexOf(":")===x+3? hour2 : parseInt(str[x+1]))
    let convertSecondHour = ((aOrP2 === 'p' && hour2 === 12)? 12: (aOrP2 === 'a' && hour2 === 12)? 0 : (aOrP2 === 'p' && hour2 !== 12)? 12 + secondHour :secondHour);
    let hyphen2 =str.lastIndexOf(":");
    let convertSecondHourToMin =convertSecondHour *60 + parseInt(str[hyphen2+1]+ str[hyphen2+2]);
    console.log(convertSecondHourToMin);
    let result = (convertFirstHourToMin === convertSecondHourToMin? 12: convertFirstHourToMin < convertSecondHourToMin? convertSecondHourToMin - convertFirstHourToMin: 24*60 - convertFirstHourToMin + convertSecondHourToMin);
    return result;
    //check if it saved
};
console.log(CountingMinuteI("2:00pm-8:00am"));
