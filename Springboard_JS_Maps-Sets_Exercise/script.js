//# ****Maps and Sets Exercise****

//## **Quick Question #1**

//What does the following code return?
console.log(new Set([1, 1, 2, 2, 3, 4])); // {1, 2, 3, 4}

//## **Quick Question #2**

//What does the following code return?
[...new Set("referee")].join("")
console.log(new Set("referee").size); // 3

//## **Quick Questions #3**

//What does the Map ***m*** look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1, 2, 3], false);
console.log(m); // Map(2) {Array(3) => true, Array(3) => false}

//## **hasDuplicate**

function hasDuplicate(arr) {
    // Create a new Set from the array
    const set = new Set(arr);
    // If the size of the Set is less than the length of the array, then there are duplicates
    return set.size !== arr.length;
}

console.log(hasDuplicate([1,3,2,1])); // true
console.log(hasDuplicate([1, 5, -1, 4])); // false


//## **vowelCount**
//**HINT**: Don't forget to convert the string to lowercase!
function vowelCount(str) {
    // Convert the string to lowercase
    const lowerCaseStr = str.toLowerCase();
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Initialize a new Map
    const vowelMap = new Map();
    // Loop through each character in the string
    for (let char of lowerCaseStr) {
        // If the character is a vowel
        if (vowels.includes(char)) {
            // If the vowel is already in the map, increment its count
            if (vowelMap.has(char)) {
                vowelMap.set(char, vowelMap.get(char) + 1);
            } else {
                // Otherwise, add the vowel to the map with a count of 1
                vowelMap.set(char, 1);
            }
        }
    }
    // Return the vowel map
    return vowelMap;
}

console.log(vowelCount('awesome')); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')); // Map { 'o' => 1 }


