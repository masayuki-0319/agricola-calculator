import { singleParametersTest, TestCase } from './singleParametersTestModule';
import { validateNumberTestModule } from './validateNumberTestModule';

export function baseScoreTest(
  testFunction: (args: number) => number,
  fineTestCases: TestCase[]
) {
  describe('[Fine]', () => {
    return singleParametersTest(testFunction, fineTestCases);
  });

  describe('[Bad]', () => {
    validateNumberTestModule(testFunction);
  });
}
