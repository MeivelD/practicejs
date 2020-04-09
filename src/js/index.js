class Car {
    constructor(brand) {
        this.carname = brand;
    }
}

mycar = new Car("Ferrari");


class PracticeArray {
    constructor() {


    }

    compareTwoArray(firstArray, secondArray) {
        try {
            let biggerArray = []
            let length = firstArray.length;
            if (firstArray.length < secondArray.length) {
                length = secondArray.length;
                for (var i = firstArray.length; i < secondArray.length; i++) {
                    firstArray.push(0);
                }
            } else {
                for (var i = secondArray.length; i < firstArray.length; i++) {
                    secondArray.push(0);
                }
            }
            for (var i = 0; i < length; i++) {
                let firstArrayValue = firstArray[i];
                let secondArrayValue = secondArray[i];
                if (isNaN(firstArrayValue)) {
                    throw firstArrayValue + " is not a number.";
                }
                if (isNaN(secondArrayValue)) {
                    throw secondArrayValue + " is not a number.";
                }
            }
            for (var i = 0; i < length; i++) {
                if (firstArray[i] <= secondArray[i]) {
                    biggerArray.push(secondArray[i]);
                } else {
                    biggerArray.push(firstArray[i]);
                }
            }
            return biggerArray;
        } catch (error) {
            alert(error);
        } finally {
            alert("Re-evaluate the given input(s).");
        }
    }
}
let arr = new PracticeArray();
let firstArr = [1, 3, "a", 6],
    secondArr = [2, 4, 3, 1, 5]
let biggerArr = arr.compareTwoArray(firstArr, secondArr);
document.getElementById("demo").innerHTML = biggerArr;