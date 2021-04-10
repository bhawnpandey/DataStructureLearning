// reverse string
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

//reverse funcion using in built function
function reverse2(str){
  return str.split('').reverse().join('');
}

//using es6 
reverse3 = str => [...str].reverse().join(''); 


reverse3('Hi how are you doin');

