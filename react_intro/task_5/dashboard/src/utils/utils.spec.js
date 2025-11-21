import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils', () => {
  test('getCurrentYear returns the current year', () => {
    const expectedYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(expectedYear);
  });

  test('getFooterCopy returns correct value', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  test('getLatestNotification returns string', () => {
    expect(getLatestNotification()).toBe(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
});

