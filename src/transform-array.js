module.exports = function transform(arr) {
  const a = '--discard-next';
  const b = '--discard-prev';
  const c = '--double-next';
  const d = '--double-prev';
  let transform = [];
  if (!(arr instanceof Array)) throw new Error();
  if (arr.length==0) return arr;
  if (Array.isArray(arr)){
    for (let i=0; i<arr.length; i++){
      if (arr[i] == a) {
        if (arr.length-1>i) i++;
      }
      else if (arr[i] == b) {
        if (i!=0){transform.pop()}
      }
      else if (arr[i] == c) {
        if (arr.length-1>i) transform.push(arr[i+1]);
      }
      else if (arr[i] == d){
        if (i>0) transform.push(arr[i-1]);
      }
      else {transform.push(arr[i]);}
    }
    return transform;
  }
  else return [];
};
