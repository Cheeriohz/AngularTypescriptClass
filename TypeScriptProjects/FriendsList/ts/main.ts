import {Friend} from './friends-list'

let friends: Friend[] = [];
friends.push(new Friend({name: "Mike", age: 29, email: "Mike@gmail.com"}));
friends.push(new Friend({name: "John", age: 29, email: "Landgrave@gmail.com", bff: false}));
friends.push(new Friend({name: "Greg", age: 28, bff: false}));
friends.push(new Friend({name: "Nick", age: 30, email: "rebirth@gmail.com", bff: false}));
friends.push(new Friend({name: "Beatrice", age: 31, email: "wife@gmail.com", bff: true}));

console.log("Name \t\t Age \t Email \t\t BFF");
friends.forEach(friend => { 
    friend.print(); 
});