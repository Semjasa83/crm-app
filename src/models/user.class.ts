export class User {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;


    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : ''; //obj ? : '' --> if obj exist else '' 
        this.lastName = obj ? obj.lastName : ''; // obj? then obj.xxx else ''
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    toJSON() {
        return{
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        birthDate: this.birthDate,
        street: this.street,
        zipCode: this.zipCode,
        city: this.city
        }
    }
}