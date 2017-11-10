var chocolateBars = ["snickers", "hundred grand", "kitkat", "and", "skittles"]

function addElementToBeginningOfArray (array,element){
  var addElement1 = [element,...array]
  return addElement1
}

function destructivelyAddElementToBeginningOfArray (array,element){
  array.unshift(element)
  return array
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift();
  return array; //this modify the original array; destructive
}

function removeElementFromBeginningOfArray (array){
  var newArray = array.slice(1);
  return newArray; //this doesn't modify the original array; not destructive
}

function destructivelyRemoveElementFromEndOfArray (array){
  array.pop();
  return array;
}

function addElementToEndOfArray (array, element){
<<<<<<< HEAD
  var newArray = [...array, element]; //...array is just to identify the array itself
=======
  var newArray = [...array, element]; //...array is just to identify the array itself  
>>>>>>> d5043969979af6a506c22aa65f3545b97006973c
  return newArray;
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}

function removeElementFromEndOfArray (array) {
  var newArray = array.slice(0, array.length -1);
<<<<<<< HEAD
  return newArray; //non-destructive
=======
  return newArray; //non-destructive 
>>>>>>> d5043969979af6a506c22aa65f3545b97006973c
}
