// Bubble Sort(O(N^2))⬇︎

function bubbleSort(arr) {
    let n = arr.length;
    let swapped = false; 

    for(let i = 0; i < n-1; i++){
        swapped = false;
        for(let j = 0; j < n-i-1; j++){
            if(arr[j] > arr[j+1]){
                // Swap
                arr[j] = arr[j] ^ arr[j+1];
                arr[j+1] = arr[j] ^ arr[j+1];
                arr[j] = arr[j] ^ arr[j+1];
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr;
}

let arr = [5,1,4,8,36,3,4];

// console.log("Sorted array:", bubbleSort(arr));



// Selection Sort(O(N^2))⬇︎

function selectionSort(arr) {
    let n = arr.length;
    let i = 0, min_idx = 0;
    for(let i = 0; i < n; i++){
        min_idx = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min_idx]){
                min_idx = j;
            }
        }
        if(min_idx != i){
            // Swap
            arr[i] = arr[i] + arr[min_idx];
            arr[min_idx] = arr[i] - arr[min_idx];
            arr[i] = arr[i] - arr[min_idx];
        }
    }
    return arr;
}

// console.log(selectionSort([1,6,2,4,8,3]));



// Quick Sort(O(N*logN))⬇︎

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low-1;
    for(let j = low; j < high; j++){
        if(arr[j] < pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
    return i+1;
}

function quickSort(arr, low, high) {
    if(low < high){

        let pi = partition(arr, low, high);

        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, high);
    }
}

let newarr = [12,4,14,5,2,3];
quickSort(newarr, 0 , newarr.length-1);
console.log(newarr);