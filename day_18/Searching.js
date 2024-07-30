// Linear Search(O(N))⬇︎

let arr = [1,2,3,5,32,34,23];
let target = 34;

function linerSearch(arr, target) {
    for(let i in arr){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}

// console.log(linerSearch(arr, target));



// Binary Search(O(logN))⬇︎
let sortedArr = [1,2,3,4,5,6,7];

function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;

    while(low < high){
        let mid = Math.floor((low + high)/2);

        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid] > target){
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch(sortedArr, 4));