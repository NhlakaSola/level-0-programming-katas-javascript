function maximumNum(...args){
    let largest = 0;
    for (let i = 0; i < args.length; i++) {
        if(largest < args[i]){
            largest = args[i];
        }
    }
    console.log(largest);
}
