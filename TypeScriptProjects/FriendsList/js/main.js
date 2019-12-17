"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friends_list_1 = require("./friends-list");
var friends = [];
friends.push(new friends_list_1.Friend({ name: "Mike", age: 29, email: "Mike@gmail.com" }));
friends.push(new friends_list_1.Friend({ name: "John", age: 29, email: "Landgrave@gmail.com", bff: false }));
friends.push(new friends_list_1.Friend({ name: "Greg", age: 28, bff: false }));
friends.push(new friends_list_1.Friend({ name: "Nick", age: 30, email: "rebirth@gmail.com", bff: false }));
friends.push(new friends_list_1.Friend({ name: "Beatrice", age: 31, email: "wife@gmail.com", bff: true }));
friends.push(new friends_list_1.Friend({ name: "Nym", age: 2 }));
console.log("Name \t\t Age \t Email \t\t BFF");
friends.forEach(function (friend) {
    friend.print();
});
