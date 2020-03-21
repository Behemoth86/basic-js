module.exports = function getSeason(date){
  if (!date) { return 'Unable to determine the time of year!'; }
  try { date.getTime(); } catch (e) { throw new Error(e); }
  if (((date.getMonth()+1)==1) || (date.getMonth()+1==2) || ((date.getMonth()+1)==12)) return "winter"
  else if (((date.getMonth()+1)>=3) && ((date.getMonth()+1)<=5)) return "spring"
  else if (((date.getMonth()+1)>=6) && ((date.getMonth()+1)<=8)) return "summer"
  else if (((date.getMonth()+1)>=9) && ((date.getMonth()+1)<=11)) return "autumn";
};