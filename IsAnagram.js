function areAnagrams(word1, word2) {
    if (word1.length !== word2.length) {
        return "No";
    }
    
    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');
    
    if (sortedWord1 === sortedWord2) {
        return "Yes";
    } else {
        return "No";
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (word1) => {
    rl.question('', (word2) => {
        console.log(areAnagrams(word1, word2));
        rl.close();
    });
});