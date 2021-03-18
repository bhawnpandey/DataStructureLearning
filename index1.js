const avenger= ["Hulk"];
const allAvengers = ["Iron Man","Black Widow","Hulk","Thor","Captain America", "Ant Man","Wasp","HawKeye","Black Panther"];

const largeArray = new Array(10000).fill("Hulk");
function findAvengers(d) {
  let t0 = new Date().getTime();
  for(var i = 0; i < d.length; i++){
    if(d[i] === "Hulk"){
      console.log("Found avenger");
    }
  }
  let t1 = new Date().getTime();
  console.log("Total time taken by program "+(t1-t0) +"miliseconds");
}

findAvengers(largeArray); 