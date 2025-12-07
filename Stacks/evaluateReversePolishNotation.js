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
    return this.items.length===0;
  }
  size(){
    return this.items.length;
  }
}
class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const newStack = new stack();
        for(let i=0; i<tokens.length; i++){
            let token = tokens[i];
            if(token !== '+'&& token !== '-' && token !== '*' && token!=='/'){
                newStack.push(Number(token))
            }else{
                let op2 = newStack.pop();
                let op1 = newStack.pop();
                if(token==='+'){
                    newStack.push(op1+op2);
                }
                  else if(token==='-'){
                    newStack.push(op1-op2);
                }  else if(token==='*'){
                    newStack.push(op1*op2);
                }  else if(token==='/'){
                    newStack.push(Math.trunc(op1/op2));
                }
            }
        }
        return newStack.peek();
    }
}
