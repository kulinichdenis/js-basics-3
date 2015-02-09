function range(start, end, step) {
  // Write a range function that takes two arguments, start and end,
  // and returns an array containing all the numbers from start up to (and including) end.
    var arr=[];
    if(!step){
        step = 1;
    }
    if(step < 0){
        for(var i=start; i>=end; i+=step){
            arr.push(i);
        }
    }
    for(var i=start; i<=end; i+=step){
        arr.push(i);
    }
    return arr;
}

function sum(numbers) {
  // Write a sum function that takes an array of numbers
  // and returns the sum of these numbers.
   
    var sum=0;
    for(var i = 0; i < numbers.length; i++){
//        if(typeof numbers[i] !== 'number'){
//            return NaN;
//        }
         sum +=numbers[i];

    }
    return sum;
}

function reverseArray(arr) {
  // Write a function which takes an array as argument
  // and produces a new array that has the same elements in the inverse order.
   var arrInner=[];
    for(var i = arr.length-1; 0 <= i; i--){

        arrInner.push(arr[i]);
    }
    return arrInner;
}

function reverseArrayInPlace(arr) {
  // Write a function that does what the reverse method does:
  // it modifies the array given as argument in order to reverse
  // its elements. It should not use the standard reverse method.
	if(arr.length >= 2){
    var k = 0;
    var mid = Math.floor(arr.length/2);
    var l = 0;
    var r = arr.length-1;
    while(k < mid){
        var leftTemp = arr[l+k];
        var rightTemp = arr[r-k];
        arr[l+k] = rightTemp;
        arr[r-k] = leftTemp;
        k++;
    }
    }
    return arr;
}

function arrayToList(arr) {
  // Objects, as generic blobs of values, can be used to build all
  // sorts of data structures. A common data structure is the list
  // (not to be confused with the array). A list is a nested set of
  // objects, with the first object holding a reference to the second,
  // the second to the third, and so on.
  // For example:
  //
  // var list = {
  //   value: 1,
  //   rest: {
  //     value: 2,
  //     rest: {
  //       value: 3,
  //       rest: null
  //     }
  //   }
  // };
  //
  // Write a function arrayToList that builds up a data structure like
  // the previous one when given [1, 2, 3] as argument. It should use
  // helper function prepend.
  var obj;
    for(var i = arr.length-1; 0 <= i; i--){
        if(!obj){
            obj = {value:arr[i], rest:null};
        }else{
            obj = {value:arr[i], rest:obj};
        }
    }
    return obj;
}

function listToArray(list) {
    // Write a function that produces an array from a list
    var arr = [];
    for (var item in list){
        if (typeof list[item] === 'object' && list[item] !== null) {
            arr = arr.concat(listToArray(list.rest));
        }
        if(typeof list[item] !== 'object'){
            arr.push(list.value);
        }
    }
    return arr;
}

function prepend(item, list) {
  // Write a function which takes an element and a list and creates a new list
  // that adds the element to the front of the input list.

    var newList = {value:item, rest:list};
    return newList;
}

function nth(n, list) {
  // Write which takes a list and a number and returns the element at the
  // given position in the list, or undefined when there is no such element.
  // It should be recursive.
    var obj;
    if(list === null){
        return undefined;
    }
    if(list['value'] === n+1){
         return list['value'];
     }else{
         obj = nth(n,list['rest']);
     }
    return obj;
}

function deepEqual(a, b) {
  // The == operator compares objects by identity. But sometimes,
  // you would prefer to compare the values of their actual properties.
  //
  // Write a function, deepEqual, that takes two values and returns true
  // only if they are the same value or are objects with the same
  // properties whose values are also equal when compared with
  // a recursive call to deepEqual.
    if(a === null || b === null){
        if(a !== b) {
            return false;
        }
    }
    if(typeof a === 'object' && typeof b === 'object'){
        for(var key in a){
            if(b.hasOwnProperty(key)){
                if(!deepEqual(a[key],b[key])){
                    return false;
                }
            }else{
                return false;
            }
        }
        for (var key in b) {
            if (!a.hasOwnProperty(key)) {
                return false;
            }
        }
    }else{
        if(a !== b){
            return false;
        }
    }
    return true;
}

module.exports = {
  range: range,
  sum: sum,
  reverseArray: reverseArray,
  reverseArrayInPlace: reverseArrayInPlace,
  arrayToList: arrayToList,
  listToArray: listToArray,
  prepend: prepend,
  nth: nth,
  deepEqual: deepEqual
}
