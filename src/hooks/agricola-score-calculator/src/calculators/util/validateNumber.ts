export function validateNumber(number: number) {
  if (number < 0) {
    throw new Error('[Error] Input only positive number.');
  }

  if (Number.isInteger(number) === false) {
    throw new Error('[Error] Input only integer number.');
  }

  return null;
}
