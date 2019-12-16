class Friend {
    name: string;
    age: number;
    email: string;
    bff: boolean;

    constructor({ name, age, email, bff }: { name: string; age: number; email?: string; bff?: boolean; }) {
        this.name = name;
        this.age = age;

        //Check null on email and assign
        if(typeof email == "undefined"){
            this.email = <string>"";
        }
        else {
            this.email = <string>email;
        }
        //Check null on BFF and assign
        if(typeof bff == "undefined"){
            this.bff = false;
        }
        else {
            this.bff = <boolean>bff;
        }
    };

    print(): void {
        console.log(`${this.name} \t\t ${this.age} \t ${this.email} \t\t ${this.isBFF()}`);
    }
    private isBFF(): string {
        if(this.bff){
            return "Yes";
        }
        else{
            return "No";
        }
    }

}

let friends: Array<Friend> = new Array<Friend>();
friends.push(new Friend({name: "Mike", age: 29, email: "Mike@gmail.com"}));
friends.push(new Friend({name: "John", age: 29, email: "Landgrave@gmail.com", bff: false}));
friends.push(new Friend({name: "Greg", age: 28, bff: false}));
friends.push(new Friend({name: "Nick", age: 30, email: "rebirth@gmail.com", bff: false}));
friends.push(new Friend({name: "Beatrice", age: 31, email: "wife@gmail.com", bff: true}));

console.log("Name \t\t Age \t Email \t\t BFF");
friends.forEach(friend => { 
    friend.print();  
});