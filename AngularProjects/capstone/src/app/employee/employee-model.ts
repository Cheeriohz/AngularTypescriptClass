export class EmployeeModel {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    isActive: boolean;
    salary: number;
    ptoDays: number;

    get fullAddress(): string {
        return `${this.address}, ${this.city}, ${this.state} ${this.zip}`;
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