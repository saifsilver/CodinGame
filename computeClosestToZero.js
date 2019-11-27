function computeClosestToZero(ts) {
  // Write your code here
  // To debug: console.error('Debug messages...');
  if(ts && ts.length > 0 && ts.length <= 10000){
      var posNums = ts.filter(t => t > 0);
      var posMin = posNums.length > 0 ? posNums.reduce((min, t) => t < min ? t : min) : 0;
      
      var negNums = ts.filter(t => t < 0);
      var negMax = negNums.length > 0 ? negNums.reduce((max, t) => t > max ? t : max) : 0;
      
      if(negMax !== 0 && posMin !== 0){
          var diff = (negMax + posMin);
          
          if( diff == 0 || diff < 0){
              return posMin;
          }
          
          return negMax;
      }
      
      return negMax === 0 ? posMin : negMax;
  }
  
  return 0;
}

/* Ignore and do not change the code below */
const n = parseInt(readline());
const ts = readline().split(' ').map(j => parseInt(j)).slice(0, n);
const oldWrite = process.stdout.write;
process.stdout.write = chunk => console.error(chunk);
var solution = computeClosestToZero(ts);
process.stdout.write = oldWrite;
console.log(solution);
