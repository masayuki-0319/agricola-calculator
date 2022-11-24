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
