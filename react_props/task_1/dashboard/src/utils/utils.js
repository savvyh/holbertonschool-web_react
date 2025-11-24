export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex) {
    return 'Holberton School';
  }
  return 'Holberton School';
}

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
