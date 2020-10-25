export class Employee  {

  firstName: string;
  middleName: string;
  lastName: string;
  position: string;
  birthDate: string;

  constructor() { }

  get fullName(): string {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }

  get Age(): number {
    const ageInMilliSeconds = Date.now() - Date.parse(this.birthDate);
    return Math.trunc(ageInMilliSeconds / 31536000000);
  }

}

