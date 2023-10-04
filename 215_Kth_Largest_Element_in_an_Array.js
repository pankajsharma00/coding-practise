const secondHighestNum = (arr, k, hValue = 0) => {
    let index = 0;
    if(k === 0) {
       return hValue
    } else {
      for(let i=1; i<arr.length; i++) {
           if(arr[index] < arr[i]) {
              index = i
           }
        }
        hValue = arr[index]
        arr.splice(index, 1)
    }
    return secondHighestNum(arr, k-1, hValue)
}


const res = secondHighestNum([8,3,2,1,10,5,6,7,9,8,4], 9);

console.log(res)
