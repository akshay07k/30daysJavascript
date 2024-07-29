// Linked List⬇︎
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addNode(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    removeNode(){
        if(!this.head){
            console.log("List is empty");
            return;
        }
        if(!this.head.next){
            this.head = null;
        }
        let curr = this.head;
        while(curr.next.next){
            curr = curr.next;
        }
        curr.next = null;
        this.last = curr;
    }

    displayNodes() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + "->";
            current = current.next;
        }
        result += "null";
        return result.trim();
    }
}


const list = new LinkedList();
list.addNode(1)
list.addNode(2)
list.addNode(3)
list.addNode(4)
console.log(list.displayNodes())
list.removeNode()
console.log(list.displayNodes())
// console.log(list.head.value);
