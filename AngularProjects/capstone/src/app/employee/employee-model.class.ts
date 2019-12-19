export class EmployeeModel {
    id: number;
    name: string;
    address: string;
    city: string;
    stateCode: string;
    zip: string;
    isActive: boolean;
    salary: number;
    ptoDays: number;
    password:string;
    username:string;
    constructor() {
        this.isActive = true;
        this.salary = 50000;
        this.ptoDays = 15;
    }
}

/* 
 * id: number not null; primary key; generated;
 * username: String; Max 30; Not Null;
 * password: String; Max 30; Not Null;
 * name: String; max 50; Not Null;
 * address: String; Max 30; Not Null;
 * city: String; Max 30; Not Null;
 * state: String; Max 2; Not Null;
 * zip: String; Max 10; Not Null;
 * isActive: Boolean; Not Null; Default true;
 * salary: Integer: Not Null;
 * ptoDays: Integer; Not Null;
*/