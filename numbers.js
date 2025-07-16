// Given a number N return the sum of its digits

// function sumDigit(n){
//     let sum = 0;
//     while(n > 0){
//         sum = sum + n % 10
//         n = Math.floor(n/10);

//     }
//     return sum;

// }

// console.log(sumDigit(123456))


//Given a number N return the product of its digit

// function product(n){

//     let product = 1;
//     while(n>0){
//         // let last = n % 10;
//         product = product * (n % 10)
//         n = Math.floor(n/10);
//     }
//     return product;

// }

// console.log(product(234))


//check ArmStrong Number

// function armStrong(n){

//     let length = n.toString().length
//     let sum = 0;
//     let temp = n

//     while(n > 0){
//         let digit = n % 10;
//         sum += Math.pow(digit,length)
//         n = Math.floor(n/10);
//     }

//     if( sum == temp){
//         console.log("ArmStrong Number")
//     }else{
//         console.log("Not! ArmStrong")
//     }

// }

// armStrong(408);


//count number of digit

// function count(n){

//     let count = 0;

//     while(n > 0){
//         n % 10
//         count++
//         n = Math.floor(n/10);
//     }
//     return count;

// }

// console.log(count(1024))


//reverse  or palindrome a number


// function reverse(n){

//     let reverse = 0
//     let checker = n;

//     while(n > 0){
//         let last = n % 10;
//         reverse = reverse * 10 + last
//         n = Math.floor(n/10)
//     }
//     console.log(reverse)
    
//     if(reverse === checker){
//         return "Palindrome"
//     }else{
//         return "Not Palindrome"
//     }

// }

// console.log(reverse(12345))


//Sum of Even and Odd digit


// function sumEvenOdd(n){

//     let evenSum = 0;
//     let oddSum = 0;

//     while(n > 0){

//         let digit = n % 10;

//         if(digit % 2 === 0){
//             evenSum += digit;
//         }else{
//             oddSum += digit;
//         }

//         n = Math.floor(n/10);
//     }

//     console.log(`oddSum : ${oddSum} evenSum : ${evenSum}`);

// }

// sumEvenOdd(1234)//4 6


//find digital root (single digit sum);

// function digitalRoot(n){

//     if( n === 0) return 0;
//     return 1 + ((n-1)%9)

// }

// console.log(digitalRoot(9875))


//replace each digit by its square and sum


// function squareSum(n){
//     let sum = 0;
//     let power = 2;

//     while(n > 0){
//         let digit = n % 10;
//         sum += digit ** power
//         n = Math.floor(n/10)
//     }
//     console.log(sum);
// }

// squareSum(123)


//find largest digit

function largestDigit(n){
    let largest = 0

    while(n > 0){
        let digit = n % 10
        if(digit > largest){
            largest = digit
        }
        n = Math.floor(n/10)
    }

    return largest;

}

console.log(largestDigit(97456))

