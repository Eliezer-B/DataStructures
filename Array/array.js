var findNumInArray = function (num) {
    var arr = Array.from({ length: 50000 }, function () {
        return Math.floor(Math.random() * 50000);
    });
    var startTime = performance.now();
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (element === num) {
            var endTime = performance.now();
            console.log("your number is in array , it takes ".concat(endTime - startTime, " ms to find him"));
        }
    }
};
findNumInArray(5);
