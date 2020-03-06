function add(num1, num2){
    console.log([...arguments]);
    return num1 + num2 + arguments[3];     

}

const result = add(2, 78, 1, 4 );
console.log(result);   