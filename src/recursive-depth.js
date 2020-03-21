module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxdepth = 0;
    for (const i of arr) {
      if (Array.isArray(i)){
        maxdepth = Math.max(this.calculateDepth(i), maxdepth);
      }  
      else maxdepth;
    }
    return ++maxdepth;
  }
};