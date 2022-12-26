export interface ScoreResource {
  farmFacility: FarmFacilityResource;
  products: ProductsResource;
  family: FamilyResource;
  card: CardResource;
}

export interface FarmFacilityResource {
  field: number;
  pastures: number;
  emtpyFamyard: number;
  fancedStable: number;
  room: {
    type: 'wood' | 'cray' | 'stone';
    count: number;
  };
  /**
   * @FIXME
   * コンポーネント設計が思いつかないため、臨時で設置した
   * オリジナルも同じ設計だし、とりあえずヨシ！
   */
  crayRoom?: number;
  stoneRoom?: number;
}

export interface ProductsResource {
  grain: number;
  vegetables: number;
  sheep: number;
  wildBoar: number;
  cattle: number;
}

export interface FamilyResource {
  familyMember: number;
  beggingCard: number;
}

export interface CardResource {
  basePoint: number;
  endBonus: number;
}
