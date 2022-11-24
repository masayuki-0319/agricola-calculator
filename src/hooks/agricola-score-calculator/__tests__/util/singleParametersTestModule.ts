export interface TestCase {
  input: number;
  expected: number;
}

export function singleParametersTest(
  fn: (args: number) => number,
  testCases: TestCase[]
): void {
  test.each(testCases)('parameters ( %o )', (testCase) => {
    expect(fn(testCase.input)).toBe(testCase.expected);
  });
}
