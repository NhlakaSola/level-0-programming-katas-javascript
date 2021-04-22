function hourMinuteConvertor(int){
    if (int < 60) {
        let result = int % 60;
        if (result < 1) {
            console.log(result + " minute.");
        }else{
            console.log(result + " minutes.");
        }
    } else{
        let result = parseInt(int / 60);
        let minutes = parseInt(int % 60);
        if (result <= 1) {
                minutes = 0;
                console.log(result + " hour, " + minutes + " minutes.");
        }else{
            if (minutes <= 1) {
                console.log(result + " hours, " + minutes + " minute.");
            }else{
                console.log(result + " hours, " + minutes + " minutes.");
            }
        }

    }
}

