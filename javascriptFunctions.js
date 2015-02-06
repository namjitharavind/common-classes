Alert a random value from a given array

function randomValFromArray(array){
//We need to get a random integer from 0 to array.length-1(inclusive);
//The Math.random() function returns a floating-point, pseudo-random number in the range [0, 1) that is, from
//0 (inclusive) up to but not including 1 (exclusive)
//Instead of array.length-1 we can use Math.floor
var rand=Math.floor(Math.random()*array.length);
return rand;
}

function findValIndexFromArrayByValue(array, value) {

  for(var i=0; i<array.length; i++) {
    if (array[i] == value) return i;
  }
   
  return -1;
}
//An object has a className property which keeps it's class names delimited by spaces:
/*
var obj ={
  className:'open menu'
}
Write a function addClass(obj,cls) which adds a class cls, but only if it doesnt yet exist
*/
function addClass(){
  for(var c=elam.className.split(' '),i=c.length-1; i>=0;i--){
    if(c[i]==cls) return
    elem.className+=' '+cls
  }
  
  /*
  Create a function camelize(str) which transform a string from "my-short-string" to "myShortString".
  Such functions may be useful when operating with CSS.
  */
function camelize(str){
  var arr=str.split('-');
  var word='';
  for(i=1;i<arr.length;i++){
    word+=arr[0];
    word+=arr[i].charAt(0).toUpperCase();
      for(j=1;j<arr[i].length;j++){
        word+=arr[i].charAt(j);
      }
}
return word;
}
  /*
  An object has a className property which keep it's class names delimited by spaces:
  var obj={
    className:'open menu'
  }
  Write a function removeClass(obj,cls) which removes a class cls if it is set:
  removeClass(obj,'open')// obj.className ='menu'
  removeClass(obj,'blabla')// no changes (no class to remove)
  Solution:
  The solution is to split the className and loop over pieces. If there is a match , then remove it from the array and join the 
  array back to the end.
  */
  
  function removeClass(elam,cls){
    for(var c=elam.className.split(' '),i=c.length-1; i>=0; i--){
      if(c[i]==cls) c.splice(i,1)
    }
    elam.className=c.join(' ')
  }
  

}
//The function to check for numericality:
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
