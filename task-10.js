function commoners(firstString,secondString) {
    let a = firstString.toLowerCase().split('');
    let b = secondString.toLowerCase().split('');
    let results = [];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                results.push(a[i]);
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

