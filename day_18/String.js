
function countOccurance(str) {
    let mp = new Map();
    for(let i of str){
        if(!mp[i]){
            mp[i] = 1;
            continue;
        }
        mp[i]++;
    }
    return mp;
}

// console.log(countOccurance("hello"));

let str = "hellokgls";
let mp = countOccurance(str);
let maxStr = "", currStr = "";

for(let i of str){
    if(mp[i] > 1){
        currStr = "";
    }
    else{
        currStr += i;
        if(currStr.length > maxStr.length){
            maxStr = currStr;
        }
    }
}
console.log(maxStr);