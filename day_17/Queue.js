class Queue{
    constructor(){
        this.items = []
    }

    enqueue(data){
        this.items.push(data)
    }

    dequeue(){
        if(this.items.length === 0){
            return "Queue is empty"
        }
        return this.items.shift()
    }

    front(){
        return this.items[0]
    }

    isEmpty(){
        return this.items.length === 0
    }
}

const que = new Queue()
que.enqueue("job1")
que.enqueue("job2")
que.enqueue("job3")
que.enqueue("job4")
que.enqueue("job5")

console.log(que.dequeue());
console.log(que.dequeue());
console.log(que.dequeue());
console.log(que.dequeue());
console.log(que.dequeue());
console.log(que.dequeue());