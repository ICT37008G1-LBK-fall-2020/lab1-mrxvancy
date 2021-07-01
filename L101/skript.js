/* 
     ფუნქცია რომელიც მიღებული რიცხვების მასივიდან დააბრუნებს უდიდეს ელემენტს
    function getMaxNumber(numbersArray){
}
*/

function getMaxNumber(numbersArray){
    numbersArray.sort();
    let lastOne = numbersArray.length;
    alert(numbersArray[lastOne-1]);
}

let arr = [6,7,9,45,34,49,85,91,2,5,78,46,71,54,31,87];

getMaxNumber(arr);