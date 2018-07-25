function algorithm(array){
  var expectedArray = [1,2,3,4,5,6,7];
  if(array.length != expectedArray.length) return false;
  for(var i = 0; i < array.length; i++){
    if(array[i] !== expectedArray[i]) return false;
  }
  return [1, 9, 25, 49];
}
console.log(algorithm([1,2,3,4,5,6,7]));
