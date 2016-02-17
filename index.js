var maj_index = 0;
var count = 1;
var candidate = function(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[maj_index] == arr[i])
      count++;
    else {
      count --;
    }
    if(count == 0) {
      maj_index = i;
      count = 1;
    }
  }
  return arr[maj_index];
}

console.log(candidate([1,3,3,2,1,2,3,4,4]));
