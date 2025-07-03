// function camelCase(str){
//     let words = str.split(" ")
//     for(let i = 0 ; i < words.length ; i++){
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");

// }

// console.log(camelCase("hello world"));

// function camelCase(str){
//     for(let i = 0 ; i < str.length ; i++){
//         if(str[i] >= "A" && str[i] <= "Z"){
//             str =str.substring(0,i) + str[i].toLowerCase()+str.substring(i+1)
//         }
//     }
//     return str;

// }

// console.log(camelCase("helloWorldFromJs"));

//Toggle case Upper to Lower and Lower to Upper;

// const toggleStr = (str) => {

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "A" && str[i] <= "Z") {
//       str = str.substring(0, i) + str[i].toLowerCase() + str.substring(i + 1);
//     } else {
//       str = str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1);
//     }
//   }
//   return str;

// };

// console.log(toggleStr("HeLLo WoRLD"));



//Capitalize first letter of each word.

// function CapitalizeStr(str){

//     str = str.split(" ")
    

//     for(let i = 0 ; i < str.length ; i++){

//         str[i] = str[i][0].toUpperCase() + str[i].substring(1)
//     }

//     return str.join(" ");

// }

// console.log(CapitalizeStr("hello world from js"));




//Remove All Upper case letters

// function removeUpperCase(str){

//     let newStr = ""
//     for(let i = 0 ; i < str.length ; i++){

//         if(str[i] >= "a" && str[i] <= "z" || str[i] === " "){
//             newStr = newStr + str[i]
//         }
//     }
//     return newStr;
// }

// console.log(removeUpperCase("HeLLo WoRLD"));


//Count Upper and Lower case letters


// function countUpperLower(str){
//     let lower = 0 , Upper = 0;

//     for(let i = 0 ; i < str.length ; i++){
//         if(str[i] >= "A" && str[i] <= "Z"){
//             Upper++
//         }else if(str[i] >= "a" && str[i] <= "z"){
//             lower++
//         }
//     }
//     console.log(`Upper case is ${Upper} & Lower case is ${lower}`)
// }
// countUpperLower("HeLLo");


// codeWord : Resume from Question 7 - Split Camel Case Words
