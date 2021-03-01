/* 
    3. დაწერეთ ფუნქცია რომელიც ღებულობს სტუდენტების 2 მასივს 
    (თითო სტუდენტი წარმოდგენილია ობიექტით შემდეგი ველებით 
    {id: number, name: string, gpa: number})
    და დააბრუნებს უდიდესი gpa-ს მქონე 5 სტუდენტს მასივის სახით.
    თუ რამდენიმე სტუდენტი არის ერთნაირი gpa-თი და შედის ტოპ 5 gpa-ებში უნდა დააბრუნოს
    ყველა ასეთი სტუდენტი (მაგალითად თუ სტუდენტებს შემდეგი gpa აქვთ: [2, 2, 3.5, 3.5 4, 4, 4, 4]
    ფუნქციამ უნდა დააბრუნოს შემდეგი gpa-ს მქონე სტუდენტი: [3.5, 3.5 4, 4, 4, 4]
    მიუხედავად იმსია რომ 5-ზე მეტი იქნება)
function getTopStudents(studentsArray1, studentsArray2){
}
*/
let student1 = [
    {iD: 0, name:"giorgi" , gpa:3.1},
    {iD: 1, name:"nata" , gpa:2.5},
    {iD: 2, name:"elene" , gpa:3.1},
    {iD: 3, name:"ziad" , gpa:3.2},
    {iD: 4, name:"nika" , gpa:2.5},
    {iD: 5, name:"vaja" , gpa: 1.2},
    {iD: 6, name:"salome" , gpa:3.3},
    {iD: 7, name:"anna" , gpa:2.8},
    {iD: 8, name:"givi" , gpa:1.6}
];

let student = [
    {iD: 9, name:"levani" , gpa:2.2},
    {iD: 10, name:"achi" , gpa:2.4},
    {iD: 11, name:"dachi" , gpa:2.6},
    {iD: 12, name:"gela" , gpa:3.7},
    {iD: 13, name:"gogita" , gpa:1.8},
    {iD: 14, name:"rati" , gpa: 3.0},
    {iD: 15, name:"tato" , gpa:3.6},
    {iD: 16, name:"zuka" , gpa:2.9},
    {iD: 17, name:"ako" , gpa:3.5}
];

function higherGpa (firstBase , secondBase){

    let result = [];

    for(let i=0 ; i<firstBase.length;i++){
        result.push(firstBase[i].gpa);
    }
    for(let i=0 ; i<secondBase.length;i++){
        result.push(secondBase[i].gpa);
    }
    result.sort();
    let j = result.length-1;

    let highGPA = [];
    for(let i = 0;i<5;i++){
        highGPA.push(result[j]);
        j--;
    }
    alert(highGPA);
}

higherGpa(student,student1);