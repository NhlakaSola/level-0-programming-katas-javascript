function vowelChecker(string) {
    let vowels = ["a","e","i","o","u"];
    string = string.toLowerCase();
    let checkingArray = string.split('');
    let results = [];

    for (let i = 0; i < vowels.length; i++) {
        for (let j = 0; j < checkingArray.length; j++) {
            if (vowels[i] == checkingArray[j]) {
                results.unshift(vowels[i]);
            }
        }
    }
    for (let i = 0; i < results.length; i++) {
        if (results[i] == results[i+1]) {
            results.splice(i,1);
        }
    }
    console.log(`Vowels: ${results.toString()}`);    
}
