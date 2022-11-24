export interface ScoreCoefficient {
  score1: {
    resultCount: number;
    scorePoint: number;
  };
  score2: {
    resultCount: number;
    scorePoint: number;
  };
  score3: {
    resultCount: number;
    scorePoint: number;
  };
  score4: {
    resultCount: number;
    scorePoint: number;
  };
  score5: {
    resultCount: number;
    scorePoint: number;
  };
}

export type CoefficientResource = [number, number, number, number, number];

export function scoreGenerator(scoreCoefficients: CoefficientResource): ScoreCoefficient {
  return {
    score1: {
      resultCount: scoreCoefficients[0],
      scorePoint: -1,
    },
    score2: {
      resultCount: scoreCoefficients[1],
      scorePoint: 1,
    },
    score3: {
      resultCount: scoreCoefficients[2],
      scorePoint: 2,
    },
    score4: {
      resultCount: scoreCoefficients[3],
      scorePoint: 3,
    },
    score5: {
      resultCount: scoreCoefficients[4],
      scorePoint: 4,
    },
  };
}
