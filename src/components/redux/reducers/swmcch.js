import * as ActionTypes from '../actions/ActionTypes';
import { take_CH_A01, return_CH_A01, take_CH_A02, return_CH_A02, take_CH_A03, return_CH_A03, take_CH_B01, return_CH_B01,
  take_CH_B02, return_CH_B02, take_CH_B03, return_CH_B03, take_CH_C01, return_CH_C01, take_CH_C02, return_CH_C02, take_CH_C03, return_CH_C03, take_CH_D01,
  return_CH_D01, take_CH_TELE_A01, return_CH_TELE_A01, take_CH_TELE_A02, return_CH_TELE_A02, take_CH_TELE_B01, return_CH_TELE_B01,
  take_CH_TELE_B02, return_CH_TELE_B02, take_CH_TELE_B03, return_CH_TELE_B03, take_CH_ICU_C01, return_CH_ICU_C01, take_CH_ICU_C02, return_CH_ICU_C02,
  take_CH_ICU_C03, return_CH_ICU_C03, display_SWMCCH
} from '../actions/ActionCreators';
import produce from 'immer';

const SWMCCHState = {
    id: "SWMCCH",
    name: "Swedish Medical Center Cherry Hill",
    availableBeds: {
    med: {
        CHA01: 1, 
        CHA02: 1,
        CHA03: 1,
        CHB01: 1,
        CHB02: 1,
        CHB03: 1,
        CHC01: 1,
        CHC02: 1,
        CHC03: 1,
        CHD01: 1
    },
    tele: {
        CHA01: 1,
        CHA02: 1,
        CHB01: 1,
        CHB02: 1,
        CHB03: 1
    },
    icu: {
        CHC01: 1,
        CHC02: 1,
        CHC03: 1
    },
    display: true 
    }
}


//med
export const take_CHA01 = take_CH_A01
export const return_CHA01 = return_CH_A01
export const take_CHA02 = take_CH_A02
export const return_CHA02 = return_CH_A02
export const take_CHA03 = take_CH_A03
export const return_CHA03 = return_CH_A03
export const take_CHB01 = take_CH_B01
export const return_CHB01 = return_CH_B01
export const take_CHB02 = take_CH_B02
export const return_CHB02 = return_CH_B02
export const take_CHB03 = take_CH_B03
export const return_CHB03 = return_CH_B03
export const take_CHC01 = take_CH_C01
export const return_CHC01 = return_CH_C01
export const take_CHC02 = take_CH_C02
export const return_CHC02  = return_CH_C02
export const take_CHC03 = take_CH_C03
export const return_CHC03 = return_CH_C03
export const take_CHD01 = take_CH_D01
export const return_CHD01 = return_CH_D01

//tele
export const take_CH_TELEA01 = take_CH_TELE_A01
export const return_CH_TELEA01 = return_CH_TELE_A01
export const take_CH_TELEA02 = take_CH_TELE_A02
export const return_CH_TELEA02 = return_CH_TELE_A02
export const take_CH_TELEB01 = take_CH_TELE_B01
export const return_CH_TELEB01 = return_CH_TELE_B01
export const take_CH_TELEB02 = take_CH_TELE_B02
export const return_CH_TELEB02 = return_CH_TELE_B02
export const take_CH_TELEB03  = take_CH_TELE_B03
export const return_CH_TELEB03 = return_CH_TELE_B03

//icu
export const take_CH_ICUC01 = take_CH_ICU_C01
export const return_CH_ICUC01 = return_CH_ICU_C01
export const take_CH_ICUC02 = take_CH_ICU_C02
export const return_CH_ICUC02 = return_CH_ICU_C02
export const take_CH_ICUC03 = take_CH_ICU_C03
export const return_CH_ICUC03 = return_CH_ICU_C03

//display
export const displaySWMCCH = display_SWMCCH
//SWMCCH


export const SWMCCH = (state = SWMCCHState, action) => {
  switch (action.type) {
    //medical beds
    case ActionTypes.TAKE_CH_MED_A01:
      return produce(state, draftState => {
        draftState.availableBeds.med.CHA01 -= 1
      });
    case ActionTypes.RETURN_CH_MED_A01:
      return produce(state, draftState => {
          draftState.availableBeds.med.CHA01 +=1
      });
    case ActionTypes.TAKE_CH_MED_A02:
      return produce(state, draftState => {
        draftState.availableBeds.med.CHA02 -= 1
      });
    case ActionTypes.RETURN_CH_MED_A02:
      return produce(state, draftState => {
          draftState.availableBeds.med.CHA02 +=1
      });
    case ActionTypes.TAKE_CH_MED_A03:
      return produce(state, draftState => {
        draftState.availableBeds.med.CHA03 -= 1
      });
    case ActionTypes.RETURN_CH_MED_A03:
      return produce(state, draftState => {
          draftState.availableBeds.med.CHA03 +=1
      });
    case ActionTypes.TAKE_CH_MED_B01:
      return produce(state, draftState => {
        draftState.availableBeds.med.CHB01 -= 1
      });
    case ActionTypes.RETURN_CH_MED_B01:
      return produce(state, draftState => {
          draftState.availableBeds.med.CHB01 +=1
      });
    case ActionTypes.TAKE_CH_MED_B02:
      return produce(state, draftState => {
        draftState.availableBeds.med.CHB02 -= 1
      });
    case ActionTypes.RETURN_CH_MED_B02:
      return produce(state, draftState => {
          draftState.availableBeds.med.CHB02 +=1
      });
    case ActionTypes.TAKE_CH_MED_B03:
      return produce(state, draftState => {
        draftState.availableBeds.med.CHB03 -= 1
      });
    case ActionTypes.RETURN_CH_MED_B03:
      return produce(state, draftState => {
          draftState.availableBeds.med.CHB03 +=1
      });
    case ActionTypes.TAKE_CH_MED_C01:
      return produce(state, draftState => {
        draftState.availableBeds.med.CHC01 -= 1
      });
    case ActionTypes.RETURN_CH_MED_C01:
      return produce(state, draftState => {
          draftState.availableBeds.med.CHC01 +=1
      });
    case ActionTypes.TAKE_CH_MED_C02:
      return produce(state, draftState => {
        draftState.availableBeds.med.CHC02 -= 1
      });
    case ActionTypes.RETURN_CH_MED_C02:
      return produce(state, draftState => {
          draftState.availableBeds.med.CHC02 +=1
      });
    case ActionTypes.TAKE_CH_MED_C03:
      return produce(state, draftState => {
        draftState.availableBeds.med.CHC03 -= 1
      });
    case ActionTypes.RETURN_CH_MED_C03:
      return produce(state, draftState => {
          draftState.availableBeds.med.CHC03 +=1
      });
    case ActionTypes.TAKE_CH_MED_D01:
      return produce(state, draftState => {
        draftState.availableBeds.med.CHD01 -= 1
      });
    case ActionTypes.RETURN_CH_MED_D01:
      return produce(state, draftState => {
          draftState.availableBeds.med.CHD01 +=1
      });
      //tele beds
    case ActionTypes.TAKE_CH_TELE_A01:
      return produce(state, draftState => {
        draftState.availableBeds.tele.CHA01 -= 1
      });
    case ActionTypes.RETURN_CH_TELE_A01:
      return produce(state, draftState => {
          draftState.availableBeds.tele.CHA01 +=1
      });
    case ActionTypes.TAKE_CH_TELE_A02:
      return produce(state, draftState => {
        draftState.availableBeds.tele.CHA02 -= 1
      });
    case ActionTypes.RETURN_CH_TELE_A02:
      return produce(state, draftState => {
          draftState.availableBeds.tele.CHA02 +=1
      });
    case ActionTypes.TAKE_CH_TELE_B01:
      return produce(state, draftState => {
        draftState.availableBeds.tele.CHB01 -= 1
      });
    case ActionTypes.RETURN_CH_TELE_B01:
      return produce(state, draftState => {
          draftState.availableBeds.tele.CHB01 +=1
      });
    case ActionTypes.TAKE_CH_TELE_B02:
      return produce(state, draftState => {
        draftState.availableBeds.tele.CHB02 -= 1
      });
    case ActionTypes.RETURN_CH_TELE_B02:
      return produce(state, draftState => {
          draftState.availableBeds.tele.CHB02 +=1
      });
    case ActionTypes.TAKE_CH_TELE_B03:
      return produce(state, draftState => {
        draftState.availableBeds.tele.CHB03 -= 1
      });
    case ActionTypes.RETURN_CH_TELE_B03:
      return produce(state, draftState => {
          draftState.availableBeds.tele.CHB03 +=1
      });
      // icu beds
    case ActionTypes.RETURN_CH_ICU_C01:
      return produce(state, draftState => {
          draftState.availableBeds.icu.CHC01 +=1
      });
    case ActionTypes.TAKE_CH_ICU_C01:
      return produce(state, draftState => {
        draftState.availableBeds.icu.CHC01 -= 1
      });
    case ActionTypes.RETURN_CH_ICU_C02:
      return produce(state, draftState => {
          draftState.availableBeds.icu.CHC02 +=1
      });
    case ActionTypes.TAKE_CH_ICU_C02:
      return produce(state, draftState => {
        draftState.availableBeds.icu.CHC02 -= 1
      });
    case ActionTypes.RETURN_CH_ICU_C03:
      return produce(state, draftState => {
          draftState.availableBeds.icu.CHC03 +=1
      });
    case ActionTypes.TAKE_CH_ICU_C03:
      return produce(state, draftState => {
        draftState.availableBeds.icu.CHC03 -= 1
      });
      default: 
      return state
  
  }
}