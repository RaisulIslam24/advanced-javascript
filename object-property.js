const students = [
    {id: 21, name: 'Nibir'},
    {id: 20, name: 'Dhrubo'},
    {id: 41, name: 'Pallab'},
    {id: 71, name: 'Sajal'},
]
const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find( s => s.id>40);
console.log(biggerOne);