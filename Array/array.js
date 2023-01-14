var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr = Array.from({ length: 50 }, function () {
    return Math.floor(Math.random() * 50);
});
// console.log(arr);
var findNumInArray = function (num, arr) {
    var startTime = performance.now();
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (element === num) {
            var endTime = performance.now();
            console.log("your number is in array , it takes ".concat(endTime - startTime, " ms to find him"));
            return "your number is in array , it takes ".concat(endTime - startTime, " ms to find him");
        }
    }
    console.log("we couldn't find your number");
};
// findNumInArray(5, arr);
// console.log(arr);
/////////////////////////////////////////////////////////
/////// SORT ARRAY - BY MERGE SORT //////////////////////
/////////////////////////////////////////////////////////
var merge = function (leftArr, rightArr) {
    var output = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        var leftEl = leftArr[leftIndex];
        var rightEl = rightArr[rightIndex];
        if (leftEl < rightEl) {
            output.push(leftEl);
            leftIndex++;
        }
        else {
            output.push(rightEl);
            rightIndex++;
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], output, true), leftArr.slice(leftIndex), true), rightArr.slice(rightIndex), true);
};
var mergeSort = function (array) {
    if (array.length <= 1) {
        return array;
    }
    var middleIndex = Math.floor(array.length / 2);
    var leftArr = array.slice(0, middleIndex);
    var rightArr = array.slice(middleIndex);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
};
console.log(mergeSort(arr));
// console.log(mergeSort([
//   45, 32,  5,  5, 21, 40, 11,  0, 37, 44, 29,
//   48, 39, 23,  7, 31, 49,  1, 39, 29, 15, 31,
//   32, 22, 28, 49, 45, 46, 12, 32, 27, 41, 44,
//   29,  4, 14,  7, 47, 15,  6, 27, 14, 36, 24,
//   49, 24, 18, 32,  8, 49
// ]));
// console.log(mergeSort([
//   4, 24,  6, 12,  1, 42, 31, 33, 43, 43,  0,
//  33,  5, 47, 19, 16, 41, 28, 10, 48, 39, 33,
//  28,  4, 14,  3, 45, 42, 37, 40, 35, 45, 24,
//  23, 41, 48, 37,  4, 30, 35, 28, 23, 40, 39,
//  46,  2, 24,  2, 49, 24
// ]));
