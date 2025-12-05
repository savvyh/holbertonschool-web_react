import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils functions', () => {
  test('getCurrentYear returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
  });

  test('getFooterCopy returns "Holberton School" when argument is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('getFooterCopy returns "Holberton School" when argument is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School');
  });

  test('getLatestNotification returns the correct string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
