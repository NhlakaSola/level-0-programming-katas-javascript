function commoners(firstString,secondString) {
    let a = firstString.toLowerCase().split('');
    let b = secondString.toLowerCase().split('');
    let results = [];
    let checkingCharacter = "";

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                results.push(a[i]);
            }
        }
    }
    for (let i = 0; i < results.length; i++) {
        checkingCharacter = results[i];
        for (let j = i; j < results.length; j++) {
            if (checkingCharacter == results[j+1]) {
                results.splice(j+1,1);
            }
        }
    }
    console.log(`Common letters: ${results.toString()}`);
}
commoners("houses","computers");
