import { isValidEmail } from './index';

test('must pass correct values of emails', () => {
  expect(isValidEmail('example@gmail.com')).toBe(true);
});
