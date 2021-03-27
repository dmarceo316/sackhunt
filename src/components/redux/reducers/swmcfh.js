import * as ActionTypes from '../actions/ActionTypes';
import { takeA14, returnA14, takeA13, returnA13, takeA12, returnA12, takeB19, returnB19, takeB24, returnB24,
  takeB27, returnB27, takeC10, returnC10, takeC11, returnC11, takeC16, returnC16, takeD12, returnD12, takeA20, 
  returnA20, takeA24, returnA24, takeB03, returnB03, takeB04, returnB04, takeB05, returnB05, takeC01, returnC01, 
  takeC02, returnC02, takeC06, returnC06
} from '../actions/ActionCreators'
import produce from 'immer'

const SWMCFHState = {
  id: "SWMCFH",
  name: "Swedish Medical Center First Hill",
  LAT: 47.609,
  LNG: -122.328,
  availableBeds: {
    med: {
      A14: 1, 
      A13: 1,
      A12: 1,
      B19: 1,
      B24: 1,
      B27: 1,
      C10: 1,
      C11: 1,
      C16: 1,
      D12: 1
    },
    tele: {
      A20: 1,
      A24: 1,
      B03: 1,
      B04: 1,
      B05: 1
    },
    icu: {
      C01: 1,
      C02: 1,
      C06: 1
    },
    display: true
  }
};



// sends to switchboard.js

//SWMCFH
//medical beds
export const take_A14 = takeA14
export const return_A14 = returnA14
export const take_A13 = takeA13
export const return_A13 = returnA13
export const take_A12 = takeA12
export const return_A12 = returnA12
export const take_B19 = takeB19
export const return_B19 = returnB19
export const take_B24 = takeB24
export const return_B24 = returnB24
export const take_B27 = takeB27
export const return_B27 = returnB27
export const take_C10 = takeC10
export const return_C10 = returnC10
export const take_C11 = takeC11
export const return_C11 = returnC11
export const take_C16 = takeC16
export const return_C16 = returnC16
export const take_D12 = takeD12
export const return_D12 = returnD12


//telemetry beds
export const take_A20 = takeA20
export const return_A20 = returnA20
export const take_A24 = takeA24
export const return_A24 = returnA24
export const take_B03 = takeB03
export const return_B03 = returnB03
export const take_B04 = takeB04
export const return_B04 = returnB04
export const take_B05 = takeB05
export const return_B05 = returnB05

//icu beds
export const take_C01 = takeC01
export const return_C01 = returnC01
export const take_C02 = takeC02
export const return_C02 = returnC02
export const take_C06 = takeC06
export const return_C06 = returnC06



export const SWMCFH = (state = SWMCFHState, action) => {
    switch (action.type) {
      //medical beds
      case ActionTypes.TAKE_A14:
        return produce(state, draftState => {
          draftState.availableBeds.med.A14 -= 1
        });
      case ActionTypes.RETURN_A14:
        return produce(state, draftState => {
            draftState.availableBeds.med.A14 +=1
        });
      case ActionTypes.TAKE_A13:
        return produce(state, draftState => {
          draftState.availableBeds.med.A13 -= 1
        });
      case ActionTypes.RETURN_A13:
        return produce(state, draftState => {
            draftState.availableBeds.med.A13 +=1
        });
      case ActionTypes.TAKE_A12:
        return produce(state, draftState => {
          draftState.availableBeds.med.A12 -= 1
        });
      case ActionTypes.RETURN_A12:
        return produce(state, draftState => {
            draftState.availableBeds.med.A12 +=1
        });
      case ActionTypes.TAKE_B19:
        return produce(state, draftState => {
          draftState.availableBeds.med.B19 -= 1
        });
      case ActionTypes.RETURN_B19:
        return produce(state, draftState => {
            draftState.availableBeds.med.B19 +=1
        });
      case ActionTypes.TAKE_B24:
        return produce(state, draftState => {
          draftState.availableBeds.med.B24 -= 1
        });
      case ActionTypes.RETURN_B24:
        return produce(state, draftState => {
            draftState.availableBeds.med.B24 +=1
        });
      case ActionTypes.TAKE_B27:
        return produce(state, draftState => {
          draftState.availableBeds.med.B27 -= 1
        });
      case ActionTypes.RETURN_B27:
        return produce(state, draftState => {
            draftState.availableBeds.med.B27 +=1
        });
      case ActionTypes.TAKE_C10:
        return produce(state, draftState => {
          draftState.availableBeds.med.C10 -= 1
        });
      case ActionTypes.RETURN_C10:
        return produce(state, draftState => {
            draftState.availableBeds.med.C10 +=1
        });
      case ActionTypes.TAKE_C11:
        return produce(state, draftState => {
          draftState.availableBeds.med.C11 -= 1
        });
      case ActionTypes.RETURN_C11:
        return produce(state, draftState => {
            draftState.availableBeds.med.C11 +=1
        });
      case ActionTypes.TAKE_C16:
        return produce(state, draftState => {
          draftState.availableBeds.med.C16 -= 1
        });
      case ActionTypes.RETURN_C16:
        return produce(state, draftState => {
            draftState.availableBeds.med.C16 +=1
        });
      case ActionTypes.TAKE_D12:
        return produce(state, draftState => {
          draftState.availableBeds.med.D12 -= 1
        });
      case ActionTypes.RETURN_D12:
        return produce(state, draftState => {
            draftState.availableBeds.med.D12 +=1
        });
        //tele beds
      case ActionTypes.TAKE_A20:
        return produce(state, draftState => {
          draftState.availableBeds.tele.A20 -= 1
        });
      case ActionTypes.RETURN_A20:
        return produce(state, draftState => {
            draftState.availableBeds.tele.A20 +=1
        });
      case ActionTypes.TAKE_A24:
        return produce(state, draftState => {
          draftState.availableBeds.tele.A24 -= 1
        });
      case ActionTypes.RETURN_A24:
        return produce(state, draftState => {
            draftState.availableBeds.tele.A24 +=1
        });
      case ActionTypes.TAKE_B03:
        return produce(state, draftState => {
          draftState.availableBeds.tele.B03 -= 1
        });
      case ActionTypes.RETURN_B03:
        return produce(state, draftState => {
            draftState.availableBeds.tele.B03 +=1
        });
      case ActionTypes.TAKE_B04:
        return produce(state, draftState => {
          draftState.availableBeds.tele.B04 -= 1
        });
      case ActionTypes.RETURN_B04:
        return produce(state, draftState => {
            draftState.availableBeds.tele.B04 +=1
        });
      case ActionTypes.TAKE_B05:
        return produce(state, draftState => {
          draftState.availableBeds.tele.B05 -= 1
        });
      case ActionTypes.RETURN_B05:
        return produce(state, draftState => {
            draftState.availableBeds.tele.B05 +=1
        });
        // icu beds
      case ActionTypes.RETURN_C01:
        return produce(state, draftState => {
            draftState.availableBeds.icu.C01 +=1
        });
      case ActionTypes.TAKE_C01:
        return produce(state, draftState => {
          draftState.availableBeds.icu.C01 -= 1
        });
      case ActionTypes.RETURN_C02:
        return produce(state, draftState => {
            draftState.availableBeds.icu.C02 +=1
        });
      case ActionTypes.TAKE_C02:
        return produce(state, draftState => {
          draftState.availableBeds.icu.C02 -= 1
        });
      case ActionTypes.RETURN_C06:
        return produce(state, draftState => {
            draftState.availableBeds.icu.C06 +=1
        });
      case ActionTypes.TAKE_C06:
        return produce(state, draftState => {
          draftState.availableBeds.icu.C06 -= 1
        })
        default: 
        return state
      }
    }