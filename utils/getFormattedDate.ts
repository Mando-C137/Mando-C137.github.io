export const formatDates = (
  date1: string,
  date2: string,
  stillWorkHere?: boolean
): string => {
  const dateFormat = new Date(date1);

  let res = `${dateFormat.getMonth()}/${dateFormat.getFullYear()}`;

  if (stillWorkHere) {
    return `since ${res}`;
  }

  const secondDateFormat = new Date(date2);

  res = res.concat(
    ` - ${secondDateFormat.getMonth()}/${secondDateFormat.getFullYear()}`
  );

  return res;
};
