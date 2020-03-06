const students = [
{id: 50, name: 'ag'},
{id: 60, name: 'sg'},
{id: 70, name: 'dg'},
{id: 80, name: 'fg'},
{id: 90, name: 'hg'},

]

const names = students.map(s => s.name);
console.log(names);

const ids = students.map(s => s.id);
console.log(ids);

const bigger = students.filter(s => s.id<90);
console.log(bigger);

const biggerOne = students.find(s => s.id<90);
console.log(biggerOne);

