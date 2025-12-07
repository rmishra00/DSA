class stack{

  constructor(){
    this.items = [];
  }
  push(element){
    this.items.push(element);
  }
  pop(){
   if(this.isEmpty()){
    console.log('stack is empty');
    return;
   }
   return this.items.pop();
  }
  peek(){
    if(this.isEmpty()){
      console.log('stack is empty');
      return;
    }
    return this.items[this.items.length-1];
  }

  isEmpty(){
    return this.items.length;
  }
  size(){
    return this.items.length;
  }
}

const stack = new stack();
stack.push(10);
stack.push(20);
console.log(stack);
