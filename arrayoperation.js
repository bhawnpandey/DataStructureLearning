class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }

  get(index){
    return this.data[index];
  }

  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index){
    const item = this.data[index];
    this.shiftItem(index);
  }

  shiftItem(index){
    for(let i = index; i< this.length-1; i++){
      this.data[i]= this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

const myArr = new MyArray();
console.log(myArr.push("hi"));
console.log(myArr.push("you"));
console.log(myArr.push("!"));
myArr.delete(1);
console.log(myArr);