import { useState } from 'react';

type UseBaseScoreState = (
  calculator: (arg: number) => number
) => [number, number, (count: 1 | -1) => void];

export const useBaseScoreState: UseBaseScoreState = (calculator) => {
  const [input, setInput] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const onUpdate = (count: 1 | -1): void => {
    const currentCount = input + count;
    if (currentCount < 0) return;
    setInput(currentCount);

    const currentScore = calculator(currentCount);
    setScore(currentScore);
  };

  return [input, score, onUpdate];
};
