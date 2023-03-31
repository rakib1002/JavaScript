function isEven(number){
    const reminder = number % 2;
    if(reminder === 0){
        console.log(number , 'is even number');
    }
    else{
        console.log(number , 'is odd number');
    }

}

function isEven(number1){
    const reminder = number1 % 2;
    if(reminder === 0){
        return true;
    }
    else{
        return false;
    }

}
const myNumberIsEven = isEven(66);
console.log(myNumberIsEven);