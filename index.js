// resverse string
function reverse(str){
  //console.log(str);
  if(!str || str.length < 2 || typeof str != "string"){
    return "Invalid string";
  }
  const backwards = [];
  const sringLength = str.length - 1;
  for(let i = sringLength; i >=0 ; i--){
    backwards.push(str[i]);
  }
  
  return backwards.join("");;

}

reverse('Hi how are you doin');

