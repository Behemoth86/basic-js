module.exports = function getSeason(date){
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  else if ((date instanceof Date === false) || (typeof date !== "object")){
    throw new Error("Error");
  }
  else{
    if (((date.getMonth()+1)==1) || (date.getMonth()+1==2) || (date.getMonth()==12)) return "winter"
    else if (3<=(date.getMonth()+1)<=6) return "spring"
    else if (5<=(date.getMonth()+1)<=9) return "summer"
    else if (8<=(date.getMonth()+1)<=12) return "autumn";
  }
};