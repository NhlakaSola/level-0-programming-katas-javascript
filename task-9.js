function vowelChecker(string) {
    let vowels = ["a","e","i","o","u"];
    string.toLowerCase();
    let checkingArray = string.split('');
    let results = [];

    for (let i = 0; i < vowels.length; i++) {
        for (let j = 0; j < checkingArray.length; j++) {
            if (vowels[i] == checkingArray[j]) {
                results.push(vowels[i]);
            }
        }
    }
    for (let i = 0; i < results.length; i++) {
        if (results[i] == results[i+1]) {
            results.shift();
        }
    }
    console.log(results.toString());
}
