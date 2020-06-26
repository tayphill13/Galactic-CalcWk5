export class UserAge {
  constructor(age)  {
    this.age = age;
  }

  venusYears()  {
    this.venusAge = Math.floor(this.age/.62);
  }

  mercuryYears()  {
    this.mercuryAge = Math.floor(this.age/.24);
  }

  marsYears() {
    this.marsAge = Math.floor(this.age / 1.88);
  }
}