// FUNCTION
//EXAMPLE#1
var naame = "Kiran"; // use the varibale outside the function , this variable can used any were that is called "global variable"
function personName() {
    console.log(naame); // Access the variable inside the function
}
personName(); // call the function
//EXAMPLE#2
function nameOfPersons() {
    var namee = "Wajiha";
    var lastname = "salman khan";
    var fullName = namee + " " + lastname;
    console.log(naame);
    console.log(fullName);
}
nameOfPersons();
console.log(naame); //global variable that can be accessed and used anywhere in the program, both inside and outside functions.  e.g line 13 ,17
//Parameter and Argument function
//EXAMPLE#1
function nameOfStudent(firstName, lastname) {
    console.log(firstName + " " + lastname);
}
nameOfStudent("Wajiha", "khan"), // argument is basically the answer of parameter
    nameOfStudent("Ahmed", "Khan"); //you can call the function many time
//EXAMPLE#2
function detailsOfPerson(firstName, lastname, age, isItStudent, anyDisability) {
    console.log("".concat(firstName, " ").concat(lastname, " ").concat(age, " ").concat(isItStudent, " ").concat(anyDisability));
}
detailsOfPerson("Ahad", "Ahmed", 22, true, undefined);
detailsOfPerson("Humza", "khan", 23, false, undefined);
//EXAMPLE#3
function totalNumber(num_1, num_2, num_3) {
    var sum = num_1 + num_2 + num_3;
    console.log("The sum of ".concat(num_1, " and ").concat(num_2, " and  ").concat(num_3, " is : ").concat(sum));
}
totalNumber(2, 4, 8);
//EXAMPLE#4
function tea(milk, suger, teaLeaves) {
    if (milk === void 0) { milk = 3; }
    if (suger === void 0) { suger = 2; }
    if (teaLeaves === void 0) { teaLeaves = 1.5; }
    console.log(milk + suger + teaLeaves);
}
tea(2, 1);
// RETURN FUNCTION
//EXAMPLE#1
function carsbrand(brandname, carName, color, year, price) {
    var brndsDetails = brandname + carName + color + year + price;
    console.log("".concat(brandname, " ").concat(carName, " ").concat(color, " ").concat(year, " ").concat(price));
    return brndsDetails;
}
var brand_1 = carsbrand("Toyota", "Civic", ["Black", "White"], 2020);
var brand_2 = carsbrand("Honda", "Corolla", ["Black", "Gray"], 2022, 5000000);
//EXAMPLE#2
function anoumtCalculate(num_1, num_2, num_3, num_4) {
    var sum_1 = num_1 * num_4;
    var sum_2 = num_2 * num_3;
    var sum = sum_1 + sum_2;
    return sum;
}
var answer = anoumtCalculate(2, 4, 6, 8);
console.log(answer);
//EXMPLE#3
function total(num_1, num_2, num_3, num_4) {
    if (num_1 === void 0) { num_1 = 45; }
    if (num_3 === void 0) { num_3 = 25; }
    if (num_4 === void 0) { num_4 = 5; }
    var sum_1 = num_2 * num_4;
    var sum_2 = num_1 - num_3;
    var sum = sum_1 + sum_2;
    return sum;
}
var answerOfTotal = total(6, 4);
console.log(answerOfTotal);
