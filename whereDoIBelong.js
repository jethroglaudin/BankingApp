function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    // first Sort the array
    // then loop through sorted array
    let newArr = arr.sort(function (a, b) {
      return a - b
    })
    let tempArr = newArr;
    let index = 0
  
    for (let i = 0; i < newArr.length; i++) {
      if (num < newArr[i]) {
        tempArr.splice(i, 0, num)
        index = tempArr.indexOf(num)
        break;
      } 
       if(num != newArr[i] && num > newArr[i]) {
        tempArr.push(num)
        index = tempArr.indexOf(num);
      } else {
        return index;
      }
    }
    console.log(index)
    console.log(tempArr)
  
    return index;
  }
  getIndexToIns([2, 5, 10], 15)

//   function getIndexToIns(arr, num) {
//     // Find my place in this sorted array.
//     let newArr = arr;
//     newArr.push(num);
//     newArr.sort(function(a, b){
//       return a - b;
//     })
//    let index = newArr.indexOf(num);
//     return index ;
//   }
  
//   getIndexToIns([40, 60], 50);