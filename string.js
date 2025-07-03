// function length(str){
//     str = str.split("")
//     let first = 0;
//     let last = str.length-1;
//     while(first < last){
//         [str[first],str[last]] = [str[last],str[first]]
//         first++;
//         last--;
//     }
//     console.log(str.join(""))

// }
// length("rahul");


// function recurtion(str){

//     if(str.length === 0){
//         return "";
//     }else{
//         return str[str.length-1] + recurtion(str.slice(0,-1));
//     }
// };
// console.log(recurtion("coding"));



function replace(str){
    console.log(str.substring(0,5)+str.substring(6));

}

replace("Hello World");