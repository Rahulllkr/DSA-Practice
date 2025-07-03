// let stack = [];


// stack.push("Book 1")
// stack.push("Book 2")
// stack.push("Book 3")

// console.log("Stack :",stack);

// let last = stack.pop()

// console.log("Removed Last :",last);

// console.log("Updated Stack :",stack);

// let queue = [];


// queue.push("Person 1");
// queue.push("Person 2");
// queue.push("Person 3");

// console.log("queue :",queue);

// let first = queue.shift();

// console.log("Removed first :",first);

// console.log("Updated queue :",queue);


const google = "https://www.google.com";
const news = "https://www.news.google.com";

const prog = Promise.all([
    fetch(google).then(function b() {
        console.log("Print b")
    }),
    fetch(news).then(function c() {
        console.log("Print c")
    }),
]).then(function after() {
    console.log("After")
});

console.log(prog);



// function num(n){
//     if(n >= 10){
//         return n;
//     }else{
        
//         console.log(n);
//         return num(n+1);
        
//     }
// }


// console.log(num(1));


