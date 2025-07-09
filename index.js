// console.log("2" > "10");
// console.log("2" > 10);


// console.log(1 + false)
// console.log(1 + true);
// console.log(1-false);


// let x =10;
// {
//     let x=20;
// }
// console.log(x);

// console.log(x);
// var x = "Hello";
// console.log(x);

// console.log([] + []);
// console.log([1] + []);
// console.log([1] + "abc");


// function getAge(...args){
//     console.log(typeof args);
// }
// getAge(20);

// const numbers = [1,2,3,4,5];
// const [x,...y] = numbers;
// console.log(x,y);

// let nums = [1,2,3,4];
// delete nums[2];
// console.log(nums.length);

// let num = 0;
// console.log(num++);
// console.log(++num);
// console.log(num);



// const x= {name:"sai"};
// const arr = ["name"];
// x[arr] = "krishna";
// console.log(x.name);

// const arr = [1,2];
// for(var i=0;i<arr.length;i++){
//     setTimeout(()=>{
//         console.log(i);
        
//     },[1000])
// }

// let x= "10";
// console.log(x++);

// const arr = [1,2,3,4];
// console.log(1 in arr);
// console.log(2 in arr);
// console.log(4 in arr);

// let x= "8";
// let a= 1;
// console.log(+x + a + 1);


// var countSubarrays = function(nums, k) {
//     let maxNum = Math.max(...nums);  
//     let left = 0;  
//     let countMax = 0;  
//     let res = 0;    
//     for (let right = 0; right < nums.length; right++) {
//         if (nums[right] === maxNum) {
//             countMax++;
//         }
//         while (countMax >= k) {
//             res += nums.length - right;
//             if (nums[left] === maxNum) {
//                 countMax--;
//             }
//             left++;
//         }
//     }
//     return res;
// };




// let x = [20,1,3].sort()
// console.log(x);


// console.log([1,2]+![]);

// let x =1;
// let y= 2;
// console.log(x++ + ++y);

// console.log(2+"3"+4);

// let x ="10";
// console.log(x++);

// console.log(+true);
// console.log(+false);
// console.log(+"123");
// console.log(+null);

// console.log("typeof null:", typeof null);           
// console.log("typeof undefined:", typeof undefined);   
// console.log("typeof NaN:", typeof NaN);              
// console.log("typeof function(){}:", typeof function(){}); 


// console.log(Boolean({}));
// console.log(Boolean([]));
// console.log(Boolean(""));
// console.log(Boolean(new Boolean(false)));



// console.log(0 || 1);
// console.log(1 || 2);
// console.log(0 && 1);
// console.log(1 && 2);




// let count = 0;
// const intervalId = setInterval(() => {
//   count++;
//   console.log("Count:", count);
//   if (count === 5) {
//     clearInterval(intervalId); // Stop the interval after 5 executions
//   }
// }, 1000);
// var isPalindrome = function(x) {
//   let reversedNum =0;
//     while (x!=0) {
//       let remainder = x%10;
//       reversedNum = reversedNum*10+remainder;
//       x = Math.floor(x/10);
      
//     }

// }
// let x = 121;
// console.log(isPalindrome(x));
  // if (x<0) {
  //   return false;
  // } 
  //    let orginal =x;
  // let reversedNum = 0;
  //  while (x!=0) {
  //   let remainder=x%10;

    
  //   reversedNum = reversedNum*10+remainder;
  //   x = Math.floor(x/10);
  //  }
   
   
  //  return reversedNum == orginal;

//  console.log(x==Number(x.toString().split('').reverse().join('')) );

// var isPalindrome = function(x) {

//  let string = x.toString();
//  let left =0;
//  let right = string.length-1;
//  while (left < right) {
//   if (string[left]!=string[right]) {
//     return false;
//   }
//   else{
//     right--;
//     left++;
//   }
//  }
//  return true;
 
  
// }
// // let x=-121;
// // console.log(isPalindrome(x));
// let nums1 = [1,3] 
// let nums2 = [2]
// // console.log(nums1+num2);
// nums1=nums1+nums2;
// nums1.sort()
// console.log(nums1);

// let letters = ["c","f","j"];
//  let start =0;
//          let end = letters.length-1;
// let middle =start+(end-start)/2 ;
// console.log(middle);

// var searchInsert = function(nums, target) {
//     let start = 0;
//     let end = nums.length-1;
    
//   while (start<=end) {
//     let mid = Math.floor((start + end)/2);
//    if(target == nums[mid]){
//        return mid;
//    }
//    else if(nums[mid]<target){
//     start = mid +1;
//    }
//    else{
//     end = mid-1;
//    }
//   }
//   return start;
// };
// let nums = [1,3,5,6]
// let target = 6;
// console.log(searchInsert(nums,target));
