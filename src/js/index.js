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
            if (firstArray[i] <= secondArray[i]) {
                biggerArray.push(secondArray[i]);
            } else {
                biggerArray.push(firstArray[i]);
            }
        }

        return biggerArray;
    }
}

let arr = new PracticeArray();
let firstArr = [1, 3, 5, 6],
    secondArr = [2, 4, 3, 1, 5]
let biggerArr = arr.compareTwoArray(firstArr, secondArr);
document.getElementById("demo").innerHTML = biggerArr;