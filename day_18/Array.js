function rotateArray(arr, k){
    const n = arr.length;
    k = k % n;

    const rotatedPart = arr.slice(-k);
    const remainingPart = arr.slice(0, n - k);

    return rotatedPart.concat(remainingPart);
}

const array = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
// console.log(rotateArray(array, k));





function mergeSortedArrays(arr1, arr2){
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        } 
        else{
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length){
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2));
