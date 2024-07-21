function arrayAnagrams(strs) {
    const hashTable = {};

    strs.forEach(str => {
        const sortedStr = str.split('').sort().join('');
        if (!hashTable[sortedStr]) {
            hashTable[sortedStr] = [];
        }
        hashTable[sortedStr].push(str);
    });

    return Object.values(hashTable);
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(arrayAnagrams(input));  // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]