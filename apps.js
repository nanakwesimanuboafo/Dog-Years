// number 23 is store in variable myAge
const myAge = 23;
//number 2 is stored in variable earlyYears
let earlyYears = 2;

earlyYears *= 10.5;

// 2 is subtracted from myAge which is 23 and store in variable named laterYears
let laterYears = myAge - 2;
//laterYears is multiplied by 4 and its value is resigned to laterYears variaible
laterYears *=4;

console.log(earlyYears);
console.log(laterYears);

//the results  of the addition of numbers stored in variables earlyYears and laterYears is stored in myAgeInDogYears variable.
let myAgeInDogYears= earlyYears + laterYears;
//.toLowercase converts the string stored in myName variable to lowercase
let myName = 'Nana Kwesi Manu Boafo'.toLowerCase();
//this displays my name, age and age in dog years. Using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

