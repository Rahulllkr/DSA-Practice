//basic count character

// let str = "banana"
// character = "a"
// let count = 0;

// for(let char of str){

//     if(character === char){
//         count++
//     }
    
// }
// console.log(count);


//count occurence of each character

// function occurence(str){

//   let freq = {};
//   for(let char of str){
//     if(freq[char]){
//         freq[char]++
//     }else{
//         freq[char] = 1;
//     }
//   }
//   for(let key in freq){
//     console.log(`${key} : ${freq[key]}`)
//   }

// }
// let str = "apple";
// occurence(str);


//find most frequent element

function mostFreq(arr){

    let freq = {}
    let maxCount = 0;
    let maxElement;

    for(let num of arr){
        if(freq[num]){
            freq[num]++;
        }else{
            freq[num] = 1;
        }

        if(freq[num] > maxCount){
            maxCount = freq[num];
            maxElement = num;
        }
    }
    console.log(maxElement);

}

let arr = [1,2,2,3,1,1]

mostFreq(arr);