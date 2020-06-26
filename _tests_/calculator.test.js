import { UserAge } from './../src/calculator.js';

describe  ('UserAge', () => {
  let samplePerson = new UserAge(33);

  test ('should test that the user age being received is returned in earth years.', () => {
    expect(samplePerson.age).toEqual(33);
  });
});