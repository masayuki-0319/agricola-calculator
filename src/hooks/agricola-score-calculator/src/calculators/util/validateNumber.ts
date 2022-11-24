export function validateNumber(number: number): void {
  if (number < 0) {
    throw new Error('[Error] Input only positive number.');
  }

  if (!Number.isInteger(number)) {
    throw new Error('[Error] Input only integer number.');
  }
}
