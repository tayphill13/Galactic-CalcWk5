export class UserAge {
  constructor(age)  {
    this.age = age;
    this.lifeExpectancy = 80;
  }

  venusYears()  {
    this.venusAge = Math.floor(this.age/.62);
  }

  mercuryYears()  {
    this.mercuryAge = Math.floor(this.age/.24);
  }

  marsYears() {
    this.marsAge = Math.floor(this.age/1.88);
  }

  jupiterYears()  {
    this.jupiterAge = Math.floor(this.age/11.86);
  }

  earthYearsRemain()  {
    let yearsRemain = (this.lifeExpectancy - this.age);
    return yearsRemain;
  }
}