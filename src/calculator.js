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
    const lifeExpect = 333;

    if (this.mercuryAge < lifeExpect)  {
      let yearsRemain = (lifeExpect - this.mercuryAge);
      return `You have ${yearsRemain} Mercury years remaining`;
    } else if (this.mercuryAge > lifeExpect)  {
      let yearsRemain = (this.mercuryAge - lifeExpect);
      return `You've exceeded by ${yearsRemain} Mercury years`;
    } else {
      return "You're at life expectancy on Mercury";
    }
  }
  venusYearsRemain() {
    const lifeExpect = 129;

    if (this.venusAge < lifeExpect) {
      let yearsRemain = (lifeExpect - this.venusAge);
      return `You have ${yearsRemain} Venus years remaining`;
    } else if (this.venusAge > lifeExpect) {
      let yearsRemain = (this.venusAge - lifeExpect);
      return `You've exceeded by ${yearsRemain} Venus years`;
    } else {
      return "You're at life expectancy on Venus";
    }
  }

  marsYearsRemain() {
    const lifeExpect = 42;

    if (this.marsAge < lifeExpect)  {
      let yearsRemain = (lifeExpect - this.marsAge);
      return `You have ${yearsRemain} Mars years remaining`;
    } else if (this.marsAge > lifeExpect) {
      let yearsRemain = (this.marsAge - lifeExpect);
      return `You've exceeded by ${yearsRemain} Mars years`;
    }
  }
}