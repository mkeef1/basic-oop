var prompt = require('sync-prompt').prompt;

var dog = {};

dog.name = 'fido';
dog.age = 3;
dog.gender = 'male';
dog.breed = 'labrador';

console.log(dog);

var dog2 = {name: 'sam', age:4};

console.log(dog2);

var dogs = [];

var option = prompt('(n)ame or (q)uit');
while (option !== 'q'){
  var n = prompt ('what is your dogs name: ');
  var a = prompt ('what is your dogs age: ');
  var dog ={name:n, age:a};
  dogs.push(dog);}

console.log(dogs);




