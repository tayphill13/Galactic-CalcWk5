import { UserAge } from './../src/calculator.js';

describe  ('UserAge', () => {
  let samplePerson = new UserAge(33);

  test ('should test that the user age being received is returned in earth years.', () => {
    expect(samplePerson.age).toEqual(33);
  });

  test ('should test that the user age will be converted using venus solar years.', () => {
    samplePerson.venusYears();
    expect(samplePerson.venusAge).toEqual(53);
  });

  test ('should test that the user age will be converted using mercury solar years.', () => {
    samplePerson.mercuryYears();
    expect(samplePerson.mercuryAge).toEqual(137);
  });

  test ('should test that the user age will be converted using the mars solar years.', () =>  {
    samplePerson.marsYears();
    expect(samplePerson.marsAge).toEqual(17);
  });

  test ('should test that the user age will be converted using jupiter solar year length.', () => {
    samplePerson.jupiterYears();
    expect(samplePerson.jupiterAge).toEqual(2);
  });
});

describe  ('UserAge', () => {     //Earth life expetancy test
  test ('should subtract given age from projected life expectancy in Earth years and give remaining earth years.', () => {
    let samplePerson = new UserAge(33);
    expect(samplePerson.earthYearsRemain()).toEqual('You have 47 Earth years remaining');
  });
  test ('should calculate how many years passed life expectancy on Earth.', () => {
    let samplePerson = new UserAge(85);
    samplePerson.age;
    expect(samplePerson.earthYearsRemain()).toEqual('You have exceeded by 5 Earth years');
  });
  test ("should calculate if you're at life expectancy on Earth.", () => {
    let samplePerson = new UserAge(80);
    expect(samplePerson.earthYearsRemain()).toEqual('You are right at the life expectancy on Earth');
  });
});

describe ('UserAge', () =>  {     //Mercury life expectancy tests
  test ('should calculate the years remaining on Mercury', ()  =>  {
    let samplePerson = new UserAge(33);
    samplePerson.mercuryYears(); 
    expect(samplePerson.mercuryYearsRemain()).toEqual('You have 196 Mercury years remaining');
  });
  test ('should calculate the years over life expectancy on Mercury', () => {
    let samplePerson = new UserAge(85);
    samplePerson.mercuryYears();
    expect(samplePerson.mercuryYearsRemain()).toEqual("You've exceeded by 21 Mercury years");
  });
  test ('should calculate whether you are at life expectancy on Mercury', () => {
    let samplePerson = new UserAge(80);
    samplePerson.mercuryYears();
    expect(samplePerson.mercuryYearsRemain()).toEqual("You're at life expectancy on Mercury");
  });
});

describe  ('UserAge', () => {     //Venus Life expectancy tests
  test ('should calculate the years remaining with regard to life expectancy on Venus', () => {
    let samplePerson = new UserAge(33);
    samplePerson.venusYears();
    expect(samplePerson.venusYearsRemain()).toEqual("You have 76 Venus years remaining");
  });
  test ('Should calculate the years over the life expectancy on Venus', () => {
    let samplePerson = new UserAge(85);
    samplePerson.venusYears();
    expect(samplePerson.venusYearsRemain()).toEqual("You've exceeded by 8 Venus years");
  });
  test ("Should calculate whether you've reached life expectancy on Venus", () => {
    let samplePerson = new UserAge(80);
    samplePerson.venusYears();
    expect(samplePerson.venusYearsRemain()).toEqual("You're at life expectancy on Venus");
  });
});

describe ('UserAge', () =>  {
  test('should calculate the years remaining with regard to life expectancy on Mars', ()  =>  {
    let samplePerson = new UserAge(33);
    samplePerson.marsYears();
    expect(samplePerson.marsYearsRemain()).toEqual("You have 25 Mars years remaining");
  });
  test('should calculate the years over life expectancy on Mars', () => {
    let samplePerson = new UserAge(85);
    samplePerson.marsYears();
    expect(samplePerson.marsYearsRemain()).toEqual("You've exceeded by 3 Mars years");
  });
  test("should calculate whether you've reached life expectancy on Mars", () => {
    let samplePerson = new UserAge(80);
    samplePerson.marsYears();
    expect(samplePerson.marsYearsRemain()).toEqual("You're at life expectancy on Mars");
  });
});

describe ('UserAge', () =>  {
  test('should calculate the years remaining with regard to life expectancy on Jupiter', () =>  {
    let samplePerson = new UserAge(33);
    samplePerson.jupiterYears();
    expect(samplePerson.jupiterYearsRemain()).toEqual("You have 4 Jupiter years remaining");
  });
  test('should calculate the years over life expectancy on Jupiter', () =>  {
    let samplePerson = new UserAge(85);
    samplePerson.jupiterYears();
    expect(samplePerson.jupiterYearsRemain()).toEqual("You've");
  });
});
