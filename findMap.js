const numbers = [10, 1, 3, 4, 8, 9]

const square = numbers.map( x => x * x );

console.log(square);

const large = numbers.filter(x => x>5);
console.log(large);

const firstLarge = numbers.find(x => x>5);
console.log(firstLarge); 