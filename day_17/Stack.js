class Stack{
    constructor(){
        this.items = []
    }

    push(data){
        this.items.push(data)
    }

    pop(){
        if(this.items.length === 0){
            return "Stack is empty"
        }
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length === 0
    }
}

// const st = new Stack();
// st.push(1);
// st.push(3);
// st.push(5);
// st.push(7);
// console.log(st.pop());
// st.push(9);
// console.log(st.peek());



let str = "hello"
console.log("Before: ", str);
const sc = new Stack();
for(let i of str){
    sc.push(i);
}
str = ""
while(!sc.isEmpty()){
    str += sc.pop();
}
console.log("After: ", str);
