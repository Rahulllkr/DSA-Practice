//1.Create a object
const product = {
  Title: "Ball Pen",
  color: "Black",
  Price: 270,
  Rating: 4,
};
console.log(product.Title);
console.log(product.Price);
console.log(product.color);

const profile = {
  Name: "Rahul Kr",
  IsFollow: false,
  Message: "Hello",
  Posts: 241,
  Followers: 145,
  Following: 30,
  Thead_ID: "@rahullkr_09",
  Bio: "ENTREPRENEUR Apna Collage | To educate someone is the highest previlege",
};
console.log(profile);
console.log(profile.Posts);

//2.if-else & else if
// check number is multiple of 5 or not.

let num = 25;

if (num % 2 === 0) {
  console.log(num, "is a EVEN number");
} else {
  console.log(num, "is a ODD number");
}

let score = 59;

if (score >= 90 && score <= 100) {
  console.log("Grade A");
} else if (score >= 80 && score < 90) {
  console.log("Grade B");
} else if (score >= 70 && score < 80) {
  console.log("Grade C");
} else if (score >= 60 && score < 70) {
  console.log("Grade D");
} else {
  console.log("Not Expected Need More Improvement");
}

//3.Write a JavaScript program that displays the largest integer among two integers.

let num1 = 20;
let num2 = 15;

if (num1 > num2) {
  console.log("The larger Number between", num1, "And", +num2, "is", num1);
} else if (num2 > num1) {
  console.log("The larger Number between", num1, "And", +num2, "is", num2);
} else {
  console.log("Both Are Equal Numbers");
}

//4.Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.

// Sample numbers : 3, -7, 2
// Output : The sign is -

let x = 15;
let y = -7;
let z = 0;

if (x > 0 && y > 0 && z > 0) {
  console.log(x, y, z, "The Sign is +");
} else if (x < 0 && y < 0 && z > 0) {
  console.log(x, y, z, "The Sign is +");
} else if (x > 0 && y < 0 && z < 0) {
  console.log(x, y, z, "The Sign is +");
} else if (x < 0 && y > 0 && z < 0) {
  console.log(x, y, z, "The Sign is +");
} else {
  console.log(x, y, z, "The Sign is -");
}

//5.Write a JavaScript conditional statement to sort three numbers.
//Sample numbers : 0, -1, 4
//Output : 4, 0, -1

// let m = 9;
// let n = 8;
// let o = 3;

function sorting(m, n, o) {
  if (m > n && m > o) {
    if (n > o) {
      console.log(m, n, o);
    } else {
      console.log(m, o, n);
    }
  } else if (n > o && n > m) {
    if (o > m) {
      console.log(n, o, m);
    } else {
      console.log(n, m, o);
    }
  } else if (o > m && o > n) {
    if (m > n) {
      console.log(o, m, n);
    } else {
      console.log(o, n, m);
    }
  }
}

sorting(3, 6, 4);

//6.Check if input variable is a number or not
//Print “Variable is not a number” if isNaN() returns true.
//Else print “Variable is a valid number” if isNaN() returns false.

const checkNum = (param) => {
  if (isNaN(param)) {
    console.log(`${param} is not a valid number`);
  } else {
    console.log(`${param} is a valid number`);
  }
};
checkNum("100020.1000");

//7.Find the largest of three number
//Print num1 is the largest if num1>num2.
//Print num2 is the largest if num1<num2.
//Else print num1 and num2 are equal when num1==num2.

const Greater = (a, b, c) => {
  if (a > b && a > c) {
    console.log(`${a} is Greater Number`);
  } else if (b > a && b > c) {
    console.log(`${b} is Greater Number`);
  } else if (c > a && c > b) {
    console.log(`${c} is Greater Number`);
  } else if (a == b && b == c) {
    console.log("All Numbers are Equal");
  } else {
    console.log("Please Provide a VALID NUMBER");
  }
};

Greater(-1, -8, -4);

//8.Check if a triangle is equilateral, scalene, or isosceles
//Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
//Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
//Else “Scalene triangle.” since values of all sides are unequal.

const checkAngle = (a, b, c) => {
  if (a == b && a == c) {
    return "Equilateral Triangle";
  } else if (a == b || c == a || b == c) {
    return "isosceles Triangle";
  } else if (a !== b && b !== c) {
    return "Scalene Triangle";
  } else {
    return "Please Provide valid number for comparison each sides";
  }
};

console.log(checkAngle(40, 50, 20));

//9. Find the a number is present in given range 1 to 1000.
//Print “Between the range” if num is between range.
//Else Print “Outside the range” since num is outside range.

const checkNumber = (num) => {
  if (num >= 1 && num <= 1000) {
    console.log(num, "is Between The Range");
  } else {
    console.log(num, "is outside The Range");
  }
};
checkNumber(598);

//10.Find the a number is present in given range
//Print “Between the range” if num is between start and end values
//Else Print “Outside the range” since num is outside start and end values.

const checkStartEndNum = (num, start, end) => {
  if (num >= start && num <= end) {
    return `${num} is Between The Range.`;
  } else {
    return `${num} is Outside The Range.`;
  }
};

console.log(checkStartEndNum(61, 50, 56));

//11.Perform arithmetic operations on two numbers
// Print result of num1+num2 if operation is “add”
// Print result of num1-num2 if operation is “subtract”
// Print result of num1*num2 if operation is “multiply”
// Print result of num1/num2 if operation is “divide”
// Print result of num1%num2 if operation is “modulus”
// Else print “Invalid operation”

function operations(num1, num2, op) {
  if (op == "+") {
    console.log(`${num1} add ${num2} = ${num1 + num2}`);
  } else if (op == "-") {
    console.log(`${num1} subtract ${num2} = ${num1 - num2}`);
  } else if (op == "*") {
    console.log(`${num1} multiply ${num2} = ${num1 * num2}`);
  } else if (op == "/") {
    console.log(`${num1} divide ${num2} = ${num1 / num2}`);
  } else if (op == "%") {
    console.log(`${num1} modulus ${num2} = ${num1 % num2}`);
  } else {
    console.log(
      "Invalid Operation !! Please provide a operation sign to know the answer"
    );
  }
}

operations(25, 25, "+");

//12.check if a year is leap year or not
// If year is divisible by 4 and not divisible by 100 then print “leap year”.
// Or if year is divisible by 400 then print “leap year”.
// Else print “not a leap year”.

const isLeapYear = (num) => {
  if (num % 4 === 0 && num % 100 !== 0) {
    return num, "This is Leap Year";
  } else if (num % 400 === 0) {
    return num, "This is a Leap Year";
  } else if (num % 100 === 0) {
    return num, "This is Not a Leap year";
  } else {
    return "This is not a Leap year";
  }
};
console.log(isLeapYear(2400));

//13.Find the grade for input marks
// Print “S grade” if marks is between 90 and 100.
// Print “A grade” if marks is between 80 and 90.
// Print “B grade” if marks is between 70 and 80.
// Print “C grade” if marks is between 60 and 70.
// Print “D grade” if marks is between 50 and 60.
// Print “E grade” if marks is between 40 and 50.
// Print “Student has failed” if marks is between 0 and 40.
// Else print “Invalid marks”.

function findGrade(num) {
  if (num > 90 && num <= 100) {
    console.log("S Grade");
  } else if (num > 80 && num <= 90) {
    console.log("A Grade");
  } else if (num > 70 && num <= 80) {
    console.log("B Grade");
  } else if (num > 60 && num <= 70) {
    console.log("C Grade");
  } else if (num > 50 && num <= 60) {
    console.log("D Grade");
  } else if (num > 40 && num <= 50) {
    console.log("E Grade");
  } else if (num <= 40) {
    console.log("Student Has Failed");
  } else {
    console.log("Invalid Marks !!");
  }
}

findGrade(26);

//14.Find number of days in a given month
// If month is outside the range of 1 and 12 print “Invalid month”.
// If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
// Else if month is equal to 4, 6, 9 or 11 print “30 days”.
// Else print “31 days”.

const numberOfDays = (month, year) => {
  function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  if (12 <= month >= 1) {
    console.log("Please Provide a VALID MONTH NUMBER");
  } else if (month == 2) {
    if (isLeapYear(year)) {
      console.log("No. of days in this month 29");
    } else {
      console.log("No. of days in this month 28");
    }
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log("No. of days in this month 30");
  } else {
    console.log("No. of days in this month 31");
  }
};
numberOfDays(2, 2024);

//15.Display Current Day and Time

let today = new Date();
let day = today.getDay();

const dayList = [
  "Sunday.",
  "Monday.",
  "Tuesday.",
  "Wednesday.",
  "Thursday.",
  "friday.",
  "Saturday.",
];

console.log("Today is :", dayList[day]);

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

console.log("Current Time :", hour, ":", minute, ":", second);

//16.Get Current Date in Various Formats
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let todayDate = new Date();
let date = todayDate.getDate();
let month = todayDate.getMonth();
let year = todayDate.getFullYear();

console.log(`${month}-${date}-${year}`);
console.log(`${month}-${date}-${year}`);
console.log(`${date}/${month}/${year}`);
console.log(`${date}/${month}/${year}`);

//17.Calculate Area of Triangle (Sides: 5, 6, 7)

function triangle(a, b, c) {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
  console.log(area);
}
triangle(5, 6, 7);

//18.Write a program that determines whether a given number is positive or negative.

const oddEven = (num) => {
  if (num % 2 === 0) {
    console.log(`${num} is even number`);
  } else {
    console.log(`${num} is odd number`);
  }
};

oddEven(46);

//19.Write a program that determines whether a given number is positive or negative.

const posNeg = (num) => {
  if (num > 0) {
    console.log(`${num} is positive number`);
  } else if (num < 0) {
    console.log(`${num} is negative number`);
  } else {
    console.log(`${num} is not a number`);
  }
};

posNeg(2);

//20.Write a program to determine the greater of two numbers.

function checkingNum(a, b) {
  if (a > b) {
    console.log(a, "is greater than", b);
  } else if (a < b) {
    console.log(b, "is greater than", a);
  } else {
    console.log(a, "and", b, "equal number");
  }
}

checkingNum(-51, -50);

//21.Write a program that assigns a letter grade based on a numerical grade.

function gradeCheck(score) {
  if (score >= 90) {
    return "Grade : A";
  } else if (score >= 80) {
    return "Grade : B";
  } else if (score >= 70) {
    return "Grade : C";
  } else if (score >= 60) {
    return "Grade : D";
  } else if (score >= 50) {
    return "Grade : E";
  } else {
    return "Student has been fail";
  }
}

console.log(gradeCheck(40));

//22.Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 pay a ticket price of 15.

const ticketPrice = (age) => {
  if (age <= 12) {
    return "Please give Rs.5 for ticket";
  } else if (age <= 18) {
    return "please give Rs.10 for ticket";
  } else if (age <= 60) {
    return "please give Rs.20 for ticket";
  } else {
    return "please give Rs.15 for ticket";
  }
};
console.log(ticketPrice(18));

//23.Write a program that determines if a year is a leap year.

function checkLeapYear(year) {
  if (year % 4 === 0) {
    return `${year} is Leap Year`;
  } else if (year % 400 === 0 && year % 100 !== 0) {
    return `${year} is Leap year`;
  } else {
    return `${year} is not a Leap year`;
  }
}

console.log(checkLeapYear(2017));

//24.Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0.

const discountCheck = (price) => {
  if (price >= 100) {
    return "you will get discount of Rs.20 on Purchase more than Rs.100";
  } else if (price >= 50) {
    return "you will get discount of Rs.10 on Purchase more than Rs.50";
  } else {
    return "You are not eligible for any discount";
  }
};

console.log(discountCheck(101));

//25.Write a program that greets the user based on the time of day. Display good morning, good afternoon or good evening based on the time of day when you run the code.

function greetingToUser() {
  let today = new Date();
  let time = today.getHours();
  if (time > 0 && time < 12) {
    return "Good Morning !!";
  } else if (time >= 12 && time <= 16) {
    return "Good Afternoon !!";
  } else {
    return "Good Evening !!";
  }

  return time;
}
console.log(greetingToUser());

//26.Write a program that calculates the Body Mass Index (BMI) and categorizes it. The formula for BMI is: weight / (height * height).

const checkBMI = (height, weight) => {
  if (height > 0 && weight > 0) {
    console.log("your BMI is :", weight / height ** 2);
  } else {
    console.log("Please Provide valid number");
  }
};
checkBMI(2, 56);

//27.Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.

const guessNum = (num) => {
  let secretNum = 56;
  if (num > 60 || num < 50) {
    return "Please Provide Number Between 50 to 60";
  } else if (num > secretNum) {
    return "Your Guessed Number Is Higher";
  } else if (num < secretNum) {
    return "your Guessed Number Is Lower";
  } else {
    return "Weldone !! You Have Guessed Correct Number";
  }
};

console.log(guessNum(56));

//28.Given 2 numbers n and r. Your task is to calculate nPr n!/(n-r)!.
//input = 5,2
//output = 20

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
function permutation(n, r) {
  if (r > n) {
    return 0;
  }

  return factorial(n) / factorial(n - r);
}
console.log(permutation(5, 2));

//29.Calculate nCr
//input = 5,2;
//output = 10;

function factorial(num) {
  if (num == 0 && num == 1) {
    return 1;
  } else {
    let fact = 1;
    for (let i = 2; i <= num; i++) {
      fact = fact * i;
    }
    return fact;
  }
}
function nCr(n, r) {
  if (r > n) {
    return 0;
  } else {
    return factorial(n) / (factorial(r) * factorial(n - r));
  }
}
console.log(nCr(5, 2));

//30.Check Array Input

function checkArray(arr) {
  if (Array.isArray(arr)) {
    return true;
  } else {
    return false;
  }
}
//31.Write a JavaScript function to clone an array

function cloneArray(arr) {
  return arr.splice(0);
}
console.log(cloneArray([1, 2, 4, 0]));
console.log(cloneArray([1, 2, [4, 0]]));

let m = [1, 2, 3, 4, 5];
console.log("Orignal Array ->", m);
let n = Array.from(m);
n.splice(1, 3);
console.log("clone Array ->", n);

//32.Write a JavaScript function to get the first element of an array.Passing the parameter 'n' will return the first 'n' element of the array

function checkFirstElement(arr, n) {
  if (arr == null) return 0;
  if (n == null) return arr[0];
  if (n < 0) {
    return [];
  }
  return arr.splice(0, n);
}
console.log(checkFirstElement([7, 9, 0, -2]));

//33.Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

function checkLastElement(arr, n) {
  if (arr == null) return 0;
  if (n == null) return arr[arr.length - 1];
  if (n < 0) {
    return [];
  }
  return arr.splice(Math.max(arr.length - n, 0));
}
console.log(checkLastElement([7, 9, 0, -2], 3));

//34.Write a JavaScript program that accept a number as input and insert dashes (-) between even number.

function dashes(num) {
  let str = num.toString();
  let res = [str[0]];
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 == 0 && str[i] % 2 == 0) {
      res.push("-", str[i]);
    } else {
      res.push(str[i]);
    }
  }
  return res.join("");
}
console.log(dashes(246810));

//35.Write a JavaScript program to sort the items of an array.

function sortArray(array) {
  let len = array.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
console.log(sortArray([5, 4, 1, 6, 8, 2]));

//36.Write a JavaScript program to find the most frequent item in an array.

function mostFrequentItem(arr) {
  let mostCount = 0;
  let mostFrequent = null;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > mostCount) {
      mostCount = count;
      mostFrequent = arr[i];
    }
  }
  return `${mostFrequent} (${mostCount} times)`;
}
let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
console.log(mostFrequentItem(arr1));

//37.Write a JavaScript program that accepts a string as input and swaps the case of each character.
//for ex -> input "The Quick Brown Box" the output should be "tHE qUICK bROWN bOX".

function swapCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      result = result + char.toLowerCase();
    } else {
      result = result + char.toUpperCase();
    }
  }
  console.log(str);
  return result;
}
console.log(swapCase("Hello World"));

//38.reverse an array using recurtion

function revArray(arr) {
  if (arr.length == 0) {
    return [];
  }
  return revArray(arr.slice(1)).concat(arr[0]);
}
console.log(revArray([5, 6, 7, 8, 9]));

//39.Print 1 to n numbers using recurtion

function printNum(num, current = 1) {
  if (current > num) {
    return;
  }
  console.log(current);
  return printNum(num, current + 1);
}
printNum(5);

//40.Print n to 1 number using recurtion.

function printNums(num) {
  if (num <= 1) {
    return 1;
  }
  console.log(num);
  return printNums(num - 1);
}
console.log(printNums(5));

//41.sum of natural numbers.

function sumOfNumbers(num) {
  if (num <= 0) {
    return 0;
  }
  console.log(num);
  return num + sumOfNumbers(num - 1);
}
console.log(sumOfNumbers(3));

//42.Decimal to binary number using recursion

function recursiveBinary(n) {
  if (n == 0) {
    return 0;
  }
  console.log(n);
  return (n % 2) + 10 * recursiveBinary(Math.floor(n / 2));
}
console.log(recursiveBinary(10));

//43.sum of array element using recurtion

function sumOfArray(arr) {
  if (arr.length == 0) {
    return 0;
  }
  return arr[0] + sumOfArray(arr.slice(1));
}
console.log(sumOfArray([1, 2, 3, 4, 5]));

//44.reverse a string using recurtion

function revString(str) {
  if (str.length <= 0) {
    return "";
  }
  return revString(str.substring(1)) + str[0];
}
console.log(revString("Hello Js"));

//45.Program for length of a string using recurtion

function lengthOfString(str) {
  if (str.length == 0) {
    return 0;
  }
  return 1 + lengthOfString(str.substring(1));
}
console.log(lengthOfString("abcd"));

//46.Sum of digit using recurtion

function sumOfDigit(d) {
  if (d <= 0) {
    x;
    return 0;
  }
  return (d % 10) + sumOfDigit(Math.floor(d / 10));
}
console.log(sumOfDigit(98765));

//47.Find factorial of a number using recurtion.

function facto(num) {
  if (num == 0) {
    return 1;
  }
  return num * facto(num - 1);
}
console.log(facto(5));

//48.Recursive program to find minimum and maximum element of array.

function minElement(arr, n) {
  if (n == 1) {
    return arr[0];
  }
  return Math.min(arr[n - 1], minElement(arr, n - 1));
  // return Math.max(arr[n-1],minElement(arr,n-1));
}
let arr = [1, 4, 9, 8, 5];
let nlen = arr.length;
console.log(minElement(arr, nlen));

//49.Join all elements of an array into a string

let myColor = ["Red", "Green", "Blue"];

console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join("+"));

//50.sort the item of an array

let array = [1, 0, 5, 4, 3, 7, 2];

for (let i = 0; i <= array.length; i++) {
  for (let j = 0; j <= array.length; j++) {
    if (array[j] > array[j + 1]) {
      [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }
  }
}
console.log(array);

//51.Find minimum short distance between two even positive number;

function minDist(arr) {
  let previous = -1;
  let minDistance = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
      if (previous !== -1) {
        minDistance = Math.min(minDistance, i - previous);
      }
      previous = i;
    }
  }
  return minDistance === Infinity ? -1 : minDistance;
}
console.log(minDist([2, 4, 1, 6, 7]));

//52.check palindrome using recurtion

function checkPalindrome(str) {
  if (str.length == 0) {
    return "";
  }
  return checkPalindrome(str.substring(1)).concat(str[0]);
}

let originalstr = "hello";
let reversedstr = checkPalindrome(originalstr);

console.log(originalstr == reversedstr ? "Yes" : "No");

//53.Print alternative number of an array.

function alternativePrintNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      console.log(arr[i]);
    }
  }
}
alternativePrintNum([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

//54.Print 2d array

function printElements(arr, n, m) {
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < m; j++) {
      temp.push(arr[i][j]);
    }

    console.log(temp.join(" "));
  }
}

//   let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//   ];
//   let n = 2;
//   let m = 3;
printElements(arr, n, m);

//55.searching a character in string

function searchCharacter(s, ch) {
  // code here
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ch) {
      process.stdout.write(`${i} `);
    }
  }
  return -1;
}

const s = "rajaranji";
const ch = "j";
console.log(searchCharacter(s, ch));

//56. reverse string
function revStr(s) {
  let left = 0;
  let right = s.length - 1;
  s = s.split("");
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    console.log(s);
    left++;
    right--;
  }
  return s.join("");
}
console.log(revStr("ark ask"));

//57.An e-commerce clothing store wants to target customers who browsed items in both "Men's Wear" and "Women's Wear" categories in the last week. This data will be used to send personalized discounts on unisex accessories (e.g., watches, bags).

const browsingData = [
  { userId: "U1", viewedCategories: new Set(["Men's Wear", "Kids"]) },
  { userId: "U2", viewedCategories: new Set(["Women's Wear", "Men's Wear"]) },
  { userId: "U3", viewedCategories: new Set(["Women's Wear"]) },
  {
    userId: "U4",
    viewedCategories: new Set(["Men's Wear", "Women's Wear", "Electronics"]),
  },
];

function newArray(browsingData) {
  let newArr = [];
  for (let i = 0; i < browsingData.length; i++) {
    if (
      browsingData[i].viewedCategories.has("Men's Wear") &&
      browsingData[i].viewedCategories.has("Women's Wear")
    ) {
      newArr.push(browsingData[i].userId);
    }
  }
  console.log(newArr);
}
newArray(browsingData);

//58.find common element with the help of SET FUNCTION.

let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 2]);

function intersaction(setA, setB) {
  let res = [];
  for (let ele of setA) {
    if (setB.has(ele)) {
      res.push(ele);
    }
  }
  console.log(res);
}
intersaction(setA, setB);

//59.Add two number of array with any length

let arr1 = [6,4,3,5,10]
let arr2 = [4,5,8,1]
let newArr = []
let maxLength = Math.max(arr1.length,arr2.length)
let carry = 0;
for(let i = 0 ; i < maxLength ; i++){
    let ele1 = arr1[i] ||0;
    let ele2 = arr2[i] ||0;
    let sum = ele1+ele2+carry;
    newArr.push(sum%10);
    carry = Math.floor(sum/10);   
}
if(carry > 0){
    newArr.push(carry);
}

console.log(newArr);

//60.Longest Substring without repeating characters

let s = "pwwkew";
let maxLength = 0;
for (let j = 0; j < s.length; j++) {
    let newStr = "";
  for (let i = j; i < s.length; i++) {
    if (newStr.includes(s[i])) {
      break;
    }else{
        newStr += s[i]
    }
  }
  maxLength = Math.max(maxLength,newStr.length)
;}
console.log(maxLength);

//61.Find number with even number of digits.

let nums = [12,124556, 345, 2, 6, 7896];
function check(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let digits = 0;
    while(num > 0){
        digits++
        num = Math.floor(num/10)
    }

    if(digits % 2 == 0){
        count++
    }
  }
  console.log(count);
}
check(nums);

//62 find Number of year or months or days;

function convert(days){
    let year = Math.floor(days/365)// we found the year 
    let remainingDays = days%365;
    let months = Math.floor(remainingDays/30);
    let day = remainingDays%30;
    return `${year} year ${months} months ${day} days`;
}
let days = 400
console.log(convert(days));

//63 check date is valid or not.

function valid(day, month, year) {
  if (month > 12 && month < 1) return "invalid";
  if (day > 31 && day < 1) return "invalid";

  let day31 = [1, 3, 5, 7, 8, 10, 12];
  let day30 = [4, 6, 9, 11];
  if (month === 2) {
    console.log("h")
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    if (isLeapYear && day > 29){console.log("h")
         return "invalid";}
    if (!isLeapYear && day > 28) return "invalid";
  } else if (day31.includes(month) && day > 31) {
    return "invalid";
  } else if (day30.includes(month) && day > 30) {
    return "invalid";
  }

  return "valid";
}
let day = 31;
let month = 2;
let year = 2024;
console.log(valid(day, month,year));


