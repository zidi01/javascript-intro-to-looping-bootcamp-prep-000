
var makeArray = [];

function forLoop(makeArray) { // passed
  var i;
    for (i = 0; i < 25; i++) {
      if (i === 1) {
        makeArray.push(`I am 1 strange loop.`);
      }
      else 
        makeArray.push(`I am ${i} strange loops.`);
    }
  return makeArray;
}


function whileLoop(countdown) { // 
  let countdown1 = countdown -1;
  while (countdown1 >= 0){
    --countdown1;
    console.log('done');
  }
  return 'done';
}

function doWhileLoop(makeArray) { // 
  function maybeTrue() {
   return Math.random() >= 0.5;
  }
  
    do {
      makeArray.pop();
    } while (makeArray.length > 0 || maybeTrue())
    
  return makeArray;
}
