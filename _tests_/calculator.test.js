import { UserAge } from './../src/calculator.js';

describe  ('UserAge', () => {
  let samplePerson = new UserAge(33);

  test ('should test that the user age being received is returned in earth years.', () => {
    expect(samplePerson.age).toEqual(33);
  });

  test ('should test that the user age will be converted using mercury solar years.', () => {
    samplePerson.venusCalculation();
    expect(samplePerson.venusAge).toEqual(53);
  });
});