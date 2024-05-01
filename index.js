// 1 : Display Current Date and Time: Write a JavaScript function to display the current date and time in the format "YYYY-MM-DD HH:MM:SS".

// code : 

let date=new Date();
let year=date.getFullYear();
let month=date.getMonth();
let days=date.getDate();
let hour=date.getHours();
let mins=date.getMinutes();
let sec=date.getSeconds();
console.log(`${year}-${month+1}-${days}  ${hour}:${mins}:${sec}`);


// // 2 : Calculate Age: Create a function that takes a birthdate as input and returns the age of the person in years.
// i/p : year => 1990-05-15
// o/p : Age => 33

// code : 

const dt1=new Date(`1990-05-15`)
let yr=dt1.getFullYear();
let mon=dt1.getMonth()+1;
let day=dt1.getDate();
const dt=new Date();
let cyr=dt.getFullYear();
let cmon=dt.getMonth()+1;
let cday=dt.getDate();
if(cmon>mon && cday>day)
{
age=cyr-yr;
}
else {
age=cyr-yr-1;

}
console.log(`Age = ${age}`);


// 3 : Calculate Days Until Next Birthday: Write a function that takes a birthdate as input and calculates the number of days until the next birthday.
// i/p : year => 1990-05-15
// o/p : Days until next birthday:  15

// code : 

const dt2=new Date(`1990-05-15`)
let bmonth=dt2.getMonth()+1;
let bday=dt1.getDate();
const cdt=new Date();
let cmonth=dt.getMonth()+1;
let cuday=dt.getDate();
let rmonth=0;
let rdays=0;
if(bmonth==cmonth){
  rmonth=0;
}
else if(bmonth>cmonth){
rmonth =bmonth-cmonth;
}
else {
rmonth=12-(cmonth-bmonth);
}
if(bday>cuday)
{
    rdays=bday-cuday;
}
else{
    rdays=cuday-bday;
}
console.log(`Days until next birthday: ${rmonth} months ${rdays} days`);

// 4 : Calculate Days Between Two Dates: Create a function that takes two dates as input and calculates the number of days between them.
// i/p : "2024-04-20", "2024-04-30"
// o/p : Days between two dates:  10

// code : 

function days_between_days(day1,day2)
{
    let diff=0;
if(day1>day2)
{
    diff=day1-day2;
}
else
{
    diff=day2-day1;
}
console.log(`Days between two dates : ${diff}`);
}
const date1=new Date(`2024-04-20`);
const date2=new Date(`2024-04-30`);
let day1=date1.getDate();
let day2=date2.getDate();
days_between_days(day1,day2);


// 5 : Determine Leap Year: Write a function that takes a year as input and returns true if it's a leap year, otherwise false.
// i/p : 2024
// o/p : Is leap year?  True

// code : 

function leapYear(year)
{
if(year%4==0 || year%100==0 && year%400==0)
console.log(`${year} Given year is Leap Year True`);
else
console.log(`${year} Given year is not a Leap Year`);
}
leapYear(2024);