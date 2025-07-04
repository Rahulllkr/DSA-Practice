//1.square with same letter

// function square(num){
    
//     for(let i = 0 ; i < num ; i++){
//         let row = "";
//         for(let j = 0 ; j < num ; j++){
//             row = row + "A ";
            
//         }
//         console.log(row);
//     }

    
// }
// square(5);



//2.square with A to N

// function differentAlphabets(n){


// for(let i = 0 ; i < n ; i++){
//     let row = "";
//     for(let j = 0 ; j < n ; j++){
//         row = row + String.fromCharCode(65 + j) + " ";
//     }
//     console.log(row);
// }
// }
// differentAlphabets(26);



//3.right angle triangle A to N


// function rightAngleAlphabet(num){

//     for(let i = 0 ; i < num ; i++){
//         let row = "";
//         for(let j = 0 ; j <= i ; j++){
//             row = row + String.fromCharCode(65 + j) + " ";
//         }
//         console.log(row);
//     }

// }

// rightAngleAlphabet(5)



//4.row start with same letter as right angle shape

// function rawSameLetter(num){

//     for(let i = 0 ; i < num ; i++){
//         let row = "";
//         let char = String.fromCharCode(65 + i);
        
//         for(let j = 0 ; j <= i ; j++){
//             row = row + char + " ";
//         }
//         console.log(row);
//     }

// }

// rawSameLetter(5);



//5.continuous letter

// function continuousLetter(num){
//     let ch = 65;
//     for(let i = 0 ; i < num ; i++){
//         let row = "";
//         for(let j = 0 ; j <= i ; j++){
//             row = row + String.fromCharCode(ch) + " ";
//             ch++;
//         }
//         console.log(row);
        
//     }
    

// }

// continuousLetter(6);


//6.inverted right angle

// function invertedRightAngle(num){

//     for(let i = 0 ; i < num ; i++){
//         let row = "";
//         for(let j = 0 ; j < num - i ; j++){
//             row = row + String.fromCharCode(65 + j) + " ";
//         }
//         console.log(row);
//     }

// }

// invertedRightAngle(5)


//7. pyramid with alphabets

// function pyramidAlphabets(num){

//     for(let i = 0 ; i < num ; i++){
//         let row = "";
//         for(let space = 0 ; space < num - i -1 ; space++){
//             row += " ";
//         }
//         for(let j = 0 ; j <= i ; j++){
//             row += String.fromCharCode(65+j);
//         }
//         for(let k = i - 1 ; k >= 0 ; k--){
//             row += String.fromCharCode(65+k);
//         }
//         console.log(row);
//     }

// }

// pyramidAlphabets(5)



//8.increasing square a-b-c-d


// function increasingAlphabets(num){

//     for(let i = 0 ; i < num ; i++){
//         let row = "";
//         for(let j = 0 ; j < num ; j++ ){
//             row += String.fromCharCode(65+j) + " ";
//         }
//         console.log(row);
//     }

// }

// increasingAlphabets(4);




// function inccreamentAlpha(num){

//     for(let i = 0 ; i < num ; i++){
//         let row = "";
//         for(let j = 0 ; j < num ; j++){
//             row = row + String.fromCharCode(65 + j) + " ";
//         }
//         console.log(row)
//     }

// }

// inccreamentAlpha(5)


// right angle increment

// function rightAngle(num){

//     for(let i = 0 ; i < num ; i++){
//         let row = "";
//         for(let j = 0 ; j <= i ; j++){
//             row = row + String.fromCharCode(65 + j) + " ";
//         }
//         console.log(row);
//     }

// }

// rightAngle(5)



// function continouoschar(num){

//     let ch = 65;

//     for(let i = 0 ; i <  num ; i++){
//         let row = "";
//         for(let j = 0 ; j <= i ; j++){
//             row = row + String.fromCharCode( ch + j) + " ";
//             ch++;
//         }
//         console.log(row);
//     }

// }
// continouoschar(5);




const a = {
    age : 23,
}

const b = a

b.age = 100;
console.log(b);