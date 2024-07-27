// Activity1
// Understanding Closures⬇︎
// Task1
function outer() {
    let x = 7;
    function inner() {
        console.log(x);
    }
    return inner()
}
// outer()



// Task2
function counter() {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment() {
            changeBy(1);
        },
        value() {
            return privateCounter;
        }
    }
}


const ctr1 = counter()

// console.log(ctr1.value());
// ctr1.increment();
// ctr1.increment();
// console.log(ctr1.value());






// Activity2
// Practical Closures⬇︎
// Task3

function generateUniqueId() {
    let id = 0;
    function generate() {
        console.log("Last id: ", id);
        id++;
        return id;
    }
    return generate;
}
// const generateId = generateUniqueId();
// console.log(generateId());
// console.log(generateId());
// console.log(generateId());



// Task4
function createGreeting(name) {
    function greet() {
        console.log(`Hello, ${name}!`);
    }
    return greet;
}
// const greet1 = createGreeting('Akshay');
// const greet2 = createGreeting('Aryan');
// greet1();
// greet2();







// Activity3
// Closures in Loop⬇︎
// Task5
function loopClosure() {
    const arr = []
    for(let i=0; i<5; i++){
        arr.push(
            (function (idx) {
                return function(){
                    console.log(idx);
                }
            })(i)
        );
    }
    return arr;
}
const arr = loopClosure()
// arr.forEach(func => func())




// Activity4
// Module Pattern⬇︎
// Task6
const createItemManager = () => {
    let items = [];

    function addItem(item) {
        items.push(item);
        console.log(`${item} added.`);
    }

    function removeItem(item) {
        const index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
            console.log(`${item} removed.`);
        } else {
            console.log(`${item} not found.`);
        }
    }

    function listItems() {
        console.log('Items:', items);
    }

    return {
        addItem,
        removeItem,
        listItems
    };
};

const itemManager = createItemManager();

// itemManager.addItem('Apple');
// itemManager.addItem('Banana');
// itemManager.listItems();
// itemManager.removeItem('Apple');
// itemManager.listItems();
// itemManager.removeItem('Cherry');






// Activity5
// Memoization⬇︎
// Task7
function memoize(fn) {
    let obj = {}
    return function (arg) {
        let idx = JSON.stringify(arg);
        if(obj[idx]){
            return obj[idx];
        }
        else{
            obj[idx] = fn(arg);
            // console.log(obj);
            return obj[idx];
        }
    }
}

function addTwo(num) {
    return num+2;
}

function fact(num) {
    if(num==0){
        return 1;
    }
    return num*fact(num-1);
}

const memoFunction = memoize(addTwo);
// console.log(memoFunction(2));
// console.log(memoFunction(4));
// console.log(memoFunction(7));
// console.log(memoFunction(1));


// Task8
const memoFunction2 = memoize(fact);
console.log(memoFunction2(3));
console.log(memoFunction2(6));
console.log(memoFunction2(5));