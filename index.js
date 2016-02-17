var maj_index = 0;
var count = 1;
var elect = function(arr, cb) {
    process.nextTick(function() {
        for (var i = 0; i < arr.length; i++) {
            if (arr[maj_index] == arr[i])
                count++;
            else {
                count--;
            }
            if (count == 0) {
                maj_index = i;
                count = 1;
            }
        }
        isMajority(arr, arr[maj_index], cb);
    });

}

function isMajority(arr, candidate, cb) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == candidate)
            count++;
    }
    if (count > arr.length / 2)
        cb(null, true, candidate);
    else {
        cb(null, false, candidate);
    }

};
module.exports = elect;
