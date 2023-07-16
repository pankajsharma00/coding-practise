const arr = [1,2,3];
const arr2 = [4,1,9];  

let obj = {
   1: 1,
   2: 4,
   3: 9
}

// O(N2)

const same3 = (arr1, arr2) => {
   for(let i=0; i<arr1.length;i++) {
   const correctIndex = arr2.indexOf(arr1[i] ** 2);
   if (correctIndex === -1) {
     return false;
   }
    console.log(arr2);
   arr2.splice(correctIndex, 1);
  }
  return true;
}

// O(2N)

const same2 = (arr1, arr2) => {
  const arrObj = {};
  for(let i=0; i<arr1.length;i++) {
     arrObj[arr1[i] * arr1[i]] = arr1[i]; 
  }
  
  for (let j=0;j<arr2.length;j++) {
     if (!arrObj[arr2[j]]) {
         return false
     } 
  }
  return true;
}

// O(N2)

const same = (arr1, arr2) => {
   let squareExist = false;
   for(let i =0; i<arr1.length; i++) {
      for(let j=0;j<arr2.length; j++) {
          if (arr1[i] * arr1[i] === arr2[j]) {
              squareExist = true;
              break;
          } else {
              squareExist = false;
          }
      }
   }
    if (!squareExist) {
         return false
      }
   return true;
}


const result = same3(arr, arr2);

console.log(result);


// WHat i Have learn new here

// EMPTY OBJECT CHECK

// Object.keys(arr2).length === 0

// indexOf

// arr2.indexOf(arr1[i] ** 2) it will check if index exist return index else return -1