//find the maximum number
// let arr = [3,5,1,8,2]

// function maximum(arr){
//     let max = 0
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     console.log(max);

// }

// maximum(arr);


//sum of all elements

// let arr = [1,2,3,4,5]

// function sum(arr){
// let sum = 0;
// for(let i = 0 ; i < arr.length ; i++){
//     sum += arr[i]
// }
// console.log(sum)
// }
// sum(arr);



//reverse an array

// let arr = [1,2,3,4,5]

// function reverse(arr){

//     let last =arr.length-1;
//     let first = 0;

//     while ( first < last){
//         [arr[first],arr[last]] = [
//             arr[last],arr[first]
//         ]
//           first++
//           last--
//     }

//     return arr;

// }

// console.log(reverse(arr));



//Count Even or Odd Number

// const arr = [1,4,3,6,8,9]
// function count(arr){

//     let evenCount = 0;
//     let oddCount = 0;

//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] % 2 === 0){
//             evenCount++;
//         }else{
//             oddCount++
//         }
//     }

//     console.log(`Even Count ${evenCount} : Odd Count ${oddCount}`)

// }
// count(arr);



//check if array is sorted


const arr = [1,2,3,4,5]

function checkSorted(arr){

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > arr[i+1]){
            return false
        }
    }
    return true
}
console.log(checkSorted(arr));
