var arr = Array.from({ length: 50 }, () =>
 Math.floor(Math.random() * 50)
);
// console.log(arr);

var findNumInArray = (num: number, arr: number[]) => {
  const startTime = performance.now();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === num) {
      const endTime = performance.now();
      console.log(
        `your number is in array , it takes ${
          endTime - startTime
        } ms to find him`
      );
      return `your number is in array , it takes ${
        endTime - startTime
      } ms to find him`;
    }
  }
  console.log(`we couldn't find your number`);
};

// findNumInArray(5, arr);
// console.log(arr);

/////////////////////////////////////////////////////////
/////// SORT ARRAY - BY MERGE SORT //////////////////////
/////////////////////////////////////////////////////////

var merge = (leftArr: number[], rightArr: number[]) => {
  const output: number[] = [];
  let leftIndex: number = 0;
  let rightIndex: number = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];
    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }
  return [
    ...output,
    ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex),
  ];
};

var mergeSort = (array: number[]): any => {
  if (array.length <= 1) {
    return array;
  }
  const middleIndex = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middleIndex);
  const rightArr = array.slice(middleIndex);

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

