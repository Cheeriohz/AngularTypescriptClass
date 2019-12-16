"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend = /** @class */ (function () {
    function Friend(_a) {
        var name = _a.name, age = _a.age, email = _a.email, bff = _a.bff;
        this.name = name;
        this.age = age;
        //Check null on email and assign
        if (typeof email == "undefined") {
            this.email = "";
        }
        else {
            this.email = email;
        }
        //Check null on BFF and assign
        if (typeof bff == "undefined") {
            this.bff = false;
        }
        else {
            this.bff = bff;
        }
    }
    ;
    Friend.prototype.print = function () {
        console.log(this.name + " \t\t " + this.age + " \t " + this.email + " \t\t " + this.isBFF());
    };
    Friend.prototype.isBFF = function () {
        if (this.bff) {
            return "Yes";
        }
        else {
            return "No";
        }
    };
    return Friend;
}());
exports.Friend = Friend;
