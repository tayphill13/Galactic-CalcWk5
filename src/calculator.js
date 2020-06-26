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
    if (this.age < this.lifeExpectancy) {
      let yearsRemain = (this.lifeExpectancy - this.age);
      return `You have ${yearsRemain} Earth years remaining`;
    } else if (this.age > this.lifeExpectancy)  {
      let yearsRemain = (this.age - this.lifeExpectancy);
      return `You have exceeded by ${yearsRemain} Earth years`;
    } else {
      return "You are right at the life expectancy on Earth";
    }
  }

  mercuryYearsRemain()  {
    const lifeExpect = (80/.24);
  }
}