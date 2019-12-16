export class Friend {
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