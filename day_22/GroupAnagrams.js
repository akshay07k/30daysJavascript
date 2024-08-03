// https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function(strs) {
    const map = new Map();
    const output = [];

    for (let i = 0; i < strs.length; i++) {
        const sortedWord = strs[i].split('').sort().join('');

        if (map.has(sortedWord)) {
            map.get(sortedWord).push(strs[i]);
        } else {
            map.set(sortedWord, [strs[i]]);
        }
    }
    
    map.forEach(arr => output.push(arr));

    return output;
};