
const findNumInArray = (num) => {
  const arr = Array.from({ length: 50000 }, () =>
    Math.floor(Math.random() * 50000)
  );

  const startTime = performance.now();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === num) {
      const endTime = performance.now();
      console.log(
        `your number is in array , it takes ${endTime - startTime} ms to find him`
      );
    }else{console.log(`we didnt couldn't find your number`);}
  }
};

findNumInArray(5);
