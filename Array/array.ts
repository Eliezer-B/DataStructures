const arr = Array.from({ length: 50000 }, () =>
  Math.floor(Math.random() * 50000)
);

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
};

findNumInArray(5, arr);
