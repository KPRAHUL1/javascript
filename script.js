// Hoisting
// function fruit() {
//     console.log(name);
//     console.log(price);

//     var name = "apple";
//     let price = 20;  
// }
// fruit();
//////////////////////////////////////////////////
// for (let i = 0; i < 3; i++) {
//     setTimeout(()=> console.log(i),1); 
    
// }
// for (var i = 0; i < 3; i++) {
//     setTimeout(()=> console.log(i),1);
    
// }
//////////////////////////////////////////////////
// console.log(+true);
// console.log(typeof +true);
// console.log(!"apple");
// console.log(typeof "apple");
//////////////////////////////////////////////////
// let data = "size";
// const bird = {
//     size: "small",
// }
// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);
//////////////////////////////////////////////////
// let c = {name: "kavin"};
// let d;
// d=c;
// c.name = "rahul"; 
// console.log(d.name);
//////////////////////////////////////////////////
// let a=3;
// let b = new Number(3);
// console.log(a == b);
// console.log(a === b);


//////////////////////////////////////////////////
// function getAge() {
//     // 'use strict';
//     age = 21;
//     console.log(age); 
// }
// getAge();
//////////////////////////////////////////////////
// const sum = eval('10*10+5');
// console.log(sum);
//////////////////////////////////////////////////
// for (let i = 0; i < 5; i++) {
//     if (i === 3) break;
//     console.log(i);
// }
//////////////////////////////////////////////////
// const foo = () =>console.log('First');
// const bar = ()=> setTimeout(() => console.log('Second'));
// const baz = ()=> console.log('Third');
// bar();
// foo();
// baz();
//////////////////////////////////////////////////
// console.log(['1','10','100'].map(parseInt));
//////////////////////////////////////////////////
// console.log(5 > '15' < 5);
// console.log(7 < '15' < 7);
// console.log(7 < '85' > 5);
//////////////////////////////////////////////////
// console.log(1);
// setTimeout(() => {
//     console.log(2);
    
// }, 1000);
// setTimeout(() => {
//     console.log(3);
// }, 0);
// console.log(4);
//////////////////////////////////////////////////
// console.log(1);
// setTimeout(() => {
//     console.log(2);
    
// }, 1000);
// setTimeout(() => {
//     console.log(3);
// }, 0);
// Promise.resolve(1).then(function resolve() {
//     setTimeout(() => {
//         console.log(4);  
//     }, 0);
// })
// console.log(5);
//////////////////////////////////////////////////
// console.log(["a"] + ["b"]);
// console.log([] + []);
// console.log(![]);
// console.log(![] +[]);
//////////////////////////////////////////////////
// console.log(3 < 4 < 5);
// console.log(3 > 4 > 5);
// console.log(3 > 4 > -1);
//////////////////////////////////////////////////
// const h1 = { h: "Thor", i: "IM"};
// const h2 = { h: "Thor", i: "IM"};
// const h3 = h2;
// console.log(h1 == h2);
// console.log(h3 === h2);
// console.log( h1 === h3);s
//////////////////////////////////////////////////
// console.log((1 && 2) || 0 || 3);
// console.log(null && undefined);
// console.log(0 || (1 && 2) || 3);
// console.log(null || (2 && 3) || 4);
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// let s = "anagram";
// let t = "nagaram";

// let value1= s.split('').sort().join();
// let vlaue2 = t.split('').sort().join();
// console.log(value1,vlaue2);





// const groupAnagrams=(strs) =>{
// // const sortedWord = strs.split("").sort().join("");
// let result={};
// for (let i = 0; i < strs.length; i++) {
//     const sortedWord = strs[i].split("").sort().join("");
//     if (result[sortedWord]) {
//         console.log(result[sortedWord]);
        
//         result[sortedWord].push(strs[i])
//         console.log(result);
        
//     } else {
//         result[sortedWord] = [strs[i]]
//     }

// }
//      return Object.values(result);
// }
// let strs = ["act","pots","tops","cat","stop","hat"]

// console.log(groupAnagrams(strs));
// const groupAnagrams = (strs) => {
//   const result = {}; // Object to store grouped anagrams

//   for (const word of strs) {
//     const sortedWord = word.split("").sort().join(""); // Sort characters of the word
//     console.log(sortedWord);
    
//     if (result[sortedWord]) { // Check if the sorted word exists as a key
//       result[sortedWord].push(word); 
//       console.log(result[sortedWord].push(word));
//       // Add the word to the existing group
//     } else {
    
        
//       result[sortedWord] = [word]; 
//          console.log(result[sortedWord] = [word]); // Create a new group with the sorted word as key
//     }
//   }
// console.log(Object.values(result));

//   return Object.values(result);
//    // Return the grouped anagrams
// };

// let strs = ["act", "pots", "tops", "cat", "stop", "hat"];
// const grouped = groupAnagrams(strs);
// console.log(grouped);

// const pushZerosToEnd=(arr)=> {
//         // code here
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]==0){
//                 arr.push(arr[i]);
//             }
//         }
//     }
// let arr = [1, 2, 0, 4, 3, 0, 5, 0]
//     console.log(pushZerosToEnd(arr));
    
const pushZerosToEnd=(arr)=> {
        // code here
        let count =0;
        let temp =[];
        for(let i=0;i<arr.length;i++){
            
            if(arr[i]!=0){
                temp.push(arr[i]);
            }
            else{
                count ++;
            }
        }
        for (let i=0;i<count;i++){
         temp.push(0);
        }
        return temp;
    }
    let arr = [3,5,0,0,4]
console.log(pushZerosToEnd(arr));

//    let  s = "cat";
//    let t = "car";
//  let sortS = s.split('').sort().join('')
//  let sortT=  t.split('').sort().join('')
// //    console.log();
// //    console.log();
//    if (sortS==sortT) {
//     console.log(true);
    
//    } else {
//     console.log(false);
    
//    }