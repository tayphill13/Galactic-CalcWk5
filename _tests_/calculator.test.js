import { UserAge } from './../src/calculator.js';

describe  ('UserAge', () => {
  let samplePerson = new UserAge(85);

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

  test ('should subtract given age from projected life expectancy in Earth years.', () => {
    expect(samplePerson.earthYearsRemain()).toEqual(`You have 47 Earth years remaining`);
  });

  test('should calculate how many years passed life expectancy on Earth', () => {
    expect(samplePerson.age).toEqual();
  });
});
