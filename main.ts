// FUNCTION
//EXAMPLE#1
let naame: string = "Kiran"; // use the varibale outside the function , this variable can used any were that is called "global variable"
function personName() {
  console.log(naame); // Access the variable inside the function
}
personName(); // call the function
//EXAMPLE#2
function nameOfPersons() {
  let namee: string = "Wajiha";
  let lastname: string = "salman khan";
  let fullName: string = namee + " " + lastname;
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
function detailsOfPerson(
  firstName: string,
  lastname: string,
  age: number,
  isItStudent: boolean,
  anyDisability: undefined
) {
  console.log(`${firstName} ${lastname} ${age} ${isItStudent} ${anyDisability}`);
}
detailsOfPerson("Ahad", "Ahmed", 22, true, undefined);
detailsOfPerson("Humza", "khan", 23, false, undefined);
//EXAMPLE#3
function totalNumber(num_1: number, num_2: number, num_3: number) {
  let sum = num_1 + num_2 + num_3;
  console.log(`The sum of ${num_1} and ${num_2} and  ${num_3} is : ${sum}`);
}
totalNumber(2, 4, 8);
//EXAMPLE#4
function tea(milk: number = 3, suger: number = 2, teaLeaves: number = 1.5) {
  console.log(milk + suger + teaLeaves);
}
tea(2, 1);
// RETURN FUNCTION
//EXAMPLE#1
function carsbrand(
  brandname: string,
  carName: string,
  color: string[],
  year: number,
  price?: number
) {
  let brndsDetails = brandname + carName + color + year + price;
  console.log(`${brandname} ${carName} ${color} ${year} ${price}`);
  return brndsDetails;
}
let brand_1 = carsbrand("Toyota", "Civic", ["Black", "White"], 2020);
let brand_2 = carsbrand("Honda", "Corolla", ["Black", "Gray"], 2022, 5000000);
//EXAMPLE#2
function anoumtCalculate(
  num_1: number,
  num_2: number,
  num_3: number,
  num_4: number
) {
  let sum_1 = num_1 * num_4;
  let sum_2 = num_2 * num_3;
  let sum = sum_1 + sum_2;
  return sum;
}
let answer = anoumtCalculate(2, 4, 6, 8);
console.log(answer);
//EXMPLE#3
function total(
  num_1: number = 45,
  num_2: number,
  num_3: number = 25,
  num_4: number = 5
) {
  let sum_1 = num_2 * num_4;
  let sum_2 = num_1 - num_3;
  let sum = sum_1 + sum_2;
  return sum;
}
let answerOfTotal = total(6, 4);
console.log(answerOfTotal);
