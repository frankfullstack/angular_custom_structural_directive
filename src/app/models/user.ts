export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}
