export class UserAge {
  constructor(age)  {
    this.age = age;
  }

  venusCalculation()  {
    this.venusAge = Math.floor(this.age/.62);
  }
}