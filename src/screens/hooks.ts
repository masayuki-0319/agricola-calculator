import { ScoreResourceImage } from '../assets';
import {
  calculateField,
  FarmFacilityResource,
  calculatePastures,
  calculateGrain,
  ProductsResource,
  calculateVegetables,
  calculateSheep,
  calculateWildBoar,
  calculateCattle,
  calculateEmtpyFamyard,
  calculateFancedStable,
  calculateRoom,
  calculateCardBasePoint,
  CardResource,
  calculateFamilyMember,
  FamilyResource,
  calculateBeggingCard,
} from '../hooks/agricola-score-calculator/src';
import { useInitialResourceCalculate } from '../hooks/useInitialResourceCalculate';

type CalculateItem = {
  resourceTitle: string;
  resourceImage: string;
  resourceTitleResult: number;
  calculateScore: Function;
  setResourceResult: Function;
};

export const useCalculateItems = (): { calculateItems: CalculateItem[] } => {
  const { resourceResult, onChangeResourceResult } =
    useInitialResourceCalculate();

  const calculateItems: CalculateItem[] = [
    {
      resourceTitle: 'Fields',
      resourceImage: ScoreResourceImage.Fields,
      resourceTitleResult: resourceResult.farmFacility.field,
      calculateScore: calculateField,
      setResourceResult:
        onChangeResourceResult<FarmFacilityResource>('farmFacility')('field'),
    },
    {
      resourceTitle: 'Pastures',
      resourceImage: ScoreResourceImage.Pastures,
      resourceTitleResult: resourceResult.farmFacility.pastures,
      calculateScore: calculatePastures,
      setResourceResult:
        onChangeResourceResult<FarmFacilityResource>('farmFacility')(
          'pastures'
        ),
    },
    {
      resourceTitle: 'Grain',
      resourceImage: ScoreResourceImage.Grain,
      resourceTitleResult: resourceResult.products.grain,
      calculateScore: calculateGrain,
      setResourceResult:
        onChangeResourceResult<ProductsResource>('products')('grain'),
    },
    {
      resourceTitle: 'Vegetables',
      resourceImage: ScoreResourceImage.Vegetables,
      resourceTitleResult: resourceResult.products.vegetables,
      calculateScore: calculateVegetables,
      setResourceResult:
        onChangeResourceResult<ProductsResource>('products')('vegetables'),
    },
    {
      resourceTitle: 'Sheep',
      resourceImage: ScoreResourceImage.Sheep,
      resourceTitleResult: resourceResult.products.sheep,
      calculateScore: calculateSheep,
      setResourceResult:
        onChangeResourceResult<ProductsResource>('products')('sheep'),
    },
    {
      resourceTitle: 'WildBoar',
      resourceImage: ScoreResourceImage.WildBoar,
      resourceTitleResult: resourceResult.products.wildBoar,
      calculateScore: calculateWildBoar,
      setResourceResult:
        onChangeResourceResult<ProductsResource>('products')('wildBoar'),
    },
    {
      resourceTitle: 'Cattle',
      resourceImage: ScoreResourceImage.Cattle,
      resourceTitleResult: resourceResult.products.cattle,
      calculateScore: calculateCattle,
      setResourceResult:
        onChangeResourceResult<ProductsResource>('products')('cattle'),
    },
    {
      resourceTitle: 'EmtpyFamyard',
      resourceImage: ScoreResourceImage.EmtpyFamyard,
      resourceTitleResult: resourceResult.farmFacility.emtpyFamyard,
      calculateScore: calculateEmtpyFamyard,
      setResourceResult:
        onChangeResourceResult<FarmFacilityResource>('farmFacility')(
          'emtpyFamyard'
        ),
    },
    {
      resourceTitle: 'FancedStable',
      resourceImage: ScoreResourceImage.FancedStable,
      resourceTitleResult: resourceResult.farmFacility.fancedStable,
      calculateScore: calculateFancedStable,
      setResourceResult:
        onChangeResourceResult<FarmFacilityResource>('farmFacility')(
          'fancedStable'
        ),
    },
    /**
     * @FIXME
     * Room の種類によって出力が分かれるため、他の項目の共通化に不具合あり
     */
    {
      resourceTitle: 'ClayRooms',
      resourceImage: ScoreResourceImage.ClayRooms,
      resourceTitleResult: resourceResult.farmFacility.crayRoom as number,
      calculateScore: (inputScore: number) =>
        calculateRoom({ type: 'cray', count: inputScore }),
      setResourceResult:
        onChangeResourceResult<FarmFacilityResource>('farmFacility')(
          'crayRoom'
        ),
    },
    {
      resourceTitle: 'StoneRooms',
      resourceImage: ScoreResourceImage.StoneRooms,
      resourceTitleResult: resourceResult.farmFacility.stoneRoom as number,
      calculateScore: (inputScore: number) =>
        calculateRoom({ type: 'stone', count: inputScore }),
      setResourceResult:
        onChangeResourceResult<FarmFacilityResource>('farmFacility')(
          'stoneRoom'
        ),
    },
    {
      resourceTitle: 'Bonus',
      resourceImage: ScoreResourceImage.CardBasePoints,
      resourceTitleResult: resourceResult.card.basePoint,
      calculateScore: calculateCardBasePoint,
      setResourceResult:
        onChangeResourceResult<CardResource>('card')('basePoint'),
    },
    {
      resourceTitle: 'End Bonus` From Cards',
      resourceImage: ScoreResourceImage.CardEndBonus,
      resourceTitleResult: resourceResult.card.endBonus,
      calculateScore: calculateCardBasePoint,
      setResourceResult:
        onChangeResourceResult<CardResource>('card')('endBonus'),
    },
    {
      resourceTitle: 'FamilyMember',
      resourceImage: ScoreResourceImage.FamilyMember,
      resourceTitleResult: resourceResult.family.familyMember,
      calculateScore: calculateFamilyMember,
      setResourceResult:
        onChangeResourceResult<FamilyResource>('family')('familyMember'),
    },
    {
      resourceTitle: 'BeggarCards',
      resourceImage: ScoreResourceImage.BeggarCards,
      resourceTitleResult: resourceResult.family.beggingCard,
      calculateScore: calculateBeggingCard,
      setResourceResult:
        onChangeResourceResult<FamilyResource>('family')('beggingCard'),
    },
  ];

  return { calculateItems };
};
