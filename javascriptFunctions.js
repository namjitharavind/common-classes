Alert a random value from a given array

function randomValFromArray(array){
//We need to get a random integer from 0 to array.length-1(inclusive);
//The Math.random() function returns a floating-point, pseudo-random number in the range [0, 1) that is, from
//0 (inclusive) up to but not including 1 (exclusive)
//Instead of array.length-1 we can use Math.floor
var rand=Math.floor(Math.random()*array.length);
return rand;
}
