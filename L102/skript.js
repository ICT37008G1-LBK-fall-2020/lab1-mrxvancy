/* 
    2. დაწერეტ ფუნქცია რომელიც ღებულობს რიცხვენის მასივს 
    და ანრუნებს დადებითი რიცხვების საშუალო მნიშვნელობას. 
    (მაგალითად თუ გადაეცემა მასივი [-1, 2, 4] უნდა დააბრუნოს 3: (4 + 2) / 2)
    function getPositiveNumbersAverage(numbersArray){
    }
*/

function getPositiveNumbersAverage(numbersArray){
    var negativeNumbers = [];
    var positiveNumbers = [];
    for(let i=0;i < numbersArray.length;i++){
        if(numbersArray[i] >= 0){
            positiveNumbers.push(numbersArray[i]);
        }
        else if(numbersArray[i]<0){
            negativeNumbers.push(numbersArray[i]);
        }
    }
    var count = 0;
    for(let i =0;i<positiveNumbers.length;i++){
        count += positiveNumbers[i];
    }

    count /= positiveNumbers.length;
    alert(count);
}

let arr = [-7,-11,14,87,13,76,-45,-42,-79,21,71,99];

getPositiveNumbersAverage(arr);