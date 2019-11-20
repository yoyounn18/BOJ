const num = [12, 7, 19, 20, 17, 14, 9, 10];

const compare = (num) => {
    num.sort(sortNumber);
    for(const i = 0; i < num.length; i ++){
        console.log(num[i]);
    }
}

const sortNumber =  (a, b) => {
    return a - b;
}

compare(num);

