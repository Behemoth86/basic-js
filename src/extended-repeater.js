module.exports = function repeater(str, options) {
  let resultString ='';
  let {repeatTimes=1, separator='+', addition='', additionRepeatTimes=1, additionSeparator='|'} = options;
  let addseparator = addition + additionSeparator;
  let addrepeat = addseparator.repeat(additionRepeatTimes - 1) + addition;
  let newStr = str + addrepeat + separator;
  resultString = newStr.repeat(repeatTimes - 1) + str + addrepeat;
  return resultString;
};
  