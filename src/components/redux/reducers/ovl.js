import * as ActionTypes from '../actions/ActionTypes';
import produce from 'immer';
import { take_OVL_A01, return_OVL_A01, take_OVL_A02, return_OVL_A02, take_OVL_A03, return_OVL_A03,
    take_OVL_B01, return_OVL_B01, take_OVL_B02, return_OVL_B02, take_OVL_B03, return_OVL_B03, 
    take_OVL_C01, return_OVL_C01, take_OVL_C02, return_OVL_C02, take_OVL_C03, return_OVL_C03, take_OVL_D01, return_OVL_D01, take_OVL_TELE_A01,
    return_OVL_TELE_A01, take_OVL_TELE_A02, return_OVL_TELE_A02, take_OVL_TELE_B01, return_OVL_TELE_B01, take_OVL_TELE_B02,
    return_OVL_TELE_B02, take_OVL_TELE_B03, return_OVL_TELE_B03, take_OVL_ICU_C01, return_OVL_ICU_C01, take_OVL_ICU_C02, return_OVL_ICU_C02,
    take_OVL_ICU_C03, return_OVL_ICU_C03, ovl_staff
} from '../actions/ActionCreators'

const OVLState = {
    id: "OVL",
    name: "Overlake Medical Center",
    LAT: 47.6209,
    LNG: -122.1868,
    availableBeds: {
    med: {
        OVLA01: 1, 
        OVLA02: 1,
        OVLA03: 1,
        OVLB01: 1,
        OVLB02: 1,
        OVLB03: 1,
        OVLC01: 1,
        OVLC02: 1,
        OVLC03: 1,
        OVLD01: 1
    },
    tele: {
        OVLA01: 1,
        OVLA02: 1,
        OVLB01: 1,
        OVLB02: 1,
        OVLB03: 1
    },
    icu: {
        OVLC01: 1,
        OVLC02: 1,
        OVLC03: 1
    },
    display: true 
    },
    staff: {
        LPN: 2,
        RN: 3,
        CNA: 5,
        message: ""
    }
}


//med
export const take_OVLA01 = take_OVL_A01
export const return_OVLA01 = return_OVL_A01
export const take_OVLA02 = take_OVL_A02
export const return_OVLA02 = return_OVL_A02
export const take_OVLA03 = take_OVL_A03
export const return_OVLA03 = return_OVL_A03
export const take_OVLB01 = take_OVL_B01
export const return_OVLB01 = return_OVL_B01
export const take_OVLB02 = take_OVL_B02
export const return_OVLB02 = return_OVL_B02
export const take_OVLB03 = take_OVL_B03
export const return_OVLB03 = return_OVL_B03
export const take_OVLC01 = take_OVL_C01
export const return_OVLC01 = return_OVL_C01
export const take_OVLC02 = take_OVL_C02
export const return_OVLC02  = return_OVL_C02
export const take_OVLC03 = take_OVL_C03
export const return_OVLC03 = return_OVL_C03
export const take_OVLD01 = take_OVL_D01
export const return_OVLD01 = return_OVL_D01

//tele
export const take_OVL_TELEA01 = take_OVL_TELE_A01
export const return_OVL_TELEA01 = return_OVL_TELE_A01
export const take_OVL_TELEA02 = take_OVL_TELE_A02
export const return_OVL_TELEA02 = return_OVL_TELE_A02
export const take_OVL_TELEB01 = take_OVL_TELE_B01
export const return_OVL_TELEB01 = return_OVL_TELE_B01
export const take_OVL_TELEB02 = take_OVL_TELE_B02
export const return_OVL_TELEB02 = return_OVL_TELE_B02
export const take_OVL_TELEB03  = take_OVL_TELE_B03
export const return_OVL_TELEB03 = return_OVL_TELE_B03

//icu
export const take_OVL_ICUC01 = take_OVL_ICU_C01
export const return_OVL_ICUC01 = return_OVL_ICU_C01
export const take_OVL_ICUC02 = take_OVL_ICU_C02
export const return_OVL_ICUC02 = return_OVL_ICU_C02
export const take_OVL_ICUC03 = take_OVL_ICU_C03
export const return_OVL_ICUC03 = return_OVL_ICU_C03

//staffing 
export const OVL_STAFF = ovl_staff


export const OVL = (state = OVLState, action) => {
    switch (action.type) {
      //medical beds
    case ActionTypes.TAKE_OVL_MED_A01:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLA01 -= 1
        });
    case ActionTypes.RETURN_OVL_MED_A01:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLA01 +=1
        });
    case ActionTypes.TAKE_OVL_MED_A02:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLA02 -= 1
        });
    case ActionTypes.RETURN_OVL_MED_A02:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLA02 +=1
        });
    case ActionTypes.TAKE_OVL_MED_A03:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLA03 -= 1
        });
    case ActionTypes.RETURN_OVL_MED_A03:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLA03 +=1
        });
    case ActionTypes.TAKE_OVL_MED_B01:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLB01 -= 1
        });
    case ActionTypes.RETURN_OVL_MED_B01:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLB01 +=1
        });
    case ActionTypes.TAKE_OVL_MED_B02:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLB02 -= 1
        });
    case ActionTypes.RETURN_OVL_MED_B02:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLB02 +=1
        });
    case ActionTypes.TAKE_OVL_MED_B03:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLB03 -= 1
        });
    case ActionTypes.RETURN_OVL_MED_B03:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLB03 +=1
        });
    case ActionTypes.TAKE_OVL_MED_C01:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLC01 -= 1
        });
    case ActionTypes.RETURN_OVL_MED_C01:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLC01 +=1
        });
    case ActionTypes.TAKE_OVL_MED_C02:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLC02 -= 1
        });
    case ActionTypes.RETURN_OVL_MED_C02:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLC02 +=1
        });
    case ActionTypes.TAKE_OVL_MED_C03:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLC03 -= 1
        });
    case ActionTypes.RETURN_OVL_MED_C03:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLC03 +=1
        });
    case ActionTypes.TAKE_OVL_MED_D01:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLD01 -= 1
        });
    case ActionTypes.RETURN_OVL_MED_D01:
        return produce(state, draftState => {
            draftState.availableBeds.med.OVLD01 +=1
        });
        //tele beds
    case ActionTypes.TAKE_OVL_TELE_A01:
        return produce(state, draftState => {
            draftState.availableBeds.tele.OVLA01 -= 1
        });
    case ActionTypes.RETURN_OVL_TELE_A01:
        return produce(state, draftState => {
            draftState.availableBeds.tele.OVLA01 +=1
        });
    case ActionTypes.TAKE_OVL_TELE_A02:
        return produce(state, draftState => {
            draftState.availableBeds.tele.OVLA02 -= 1
        });
    case ActionTypes.RETURN_OVL_TELE_A02:
        return produce(state, draftState => {
            draftState.availableBeds.tele.OVLA02 +=1
        });
    case ActionTypes.TAKE_OVL_TELE_B01:
        return produce(state, draftState => {
            draftState.availableBeds.tele.OVLB01 -= 1
        });
    case ActionTypes.RETURN_OVL_TELE_B01:
        return produce(state, draftState => {
            draftState.availableBeds.tele.OVLB01 +=1
        });
    case ActionTypes.TAKE_OVL_TELE_B02:
        return produce(state, draftState => {
            draftState.availableBeds.tele.OVLB02 -= 1
        });
    case ActionTypes.RETURN_OVL_TELE_B02:
        return produce(state, draftState => {
            draftState.availableBeds.tele.OVLB02 +=1
        });
    case ActionTypes.TAKE_OVL_TELE_B03:
        return produce(state, draftState => {
            draftState.availableBeds.tele.OVLB03 -= 1
        });
    case ActionTypes.RETURN_OVL_TELE_B03:
        return produce(state, draftState => {
            draftState.availableBeds.tele.OVLB03 +=1
        });
        // icu beds
    case ActionTypes.RETURN_OVL_ICU_C01:
        return produce(state, draftState => {
            draftState.availableBeds.icu.OVLC01 +=1
        });
    case ActionTypes.TAKE_OVL_ICU_C01:
        return produce(state, draftState => {
            draftState.availableBeds.icu.OVLC01 -= 1
        });
    case ActionTypes.RETURN_OVL_ICU_C02:
        return produce(state, draftState => {
            draftState.availableBeds.icu.OVLC02 +=1
        });
    case ActionTypes.TAKE_OVL_ICU_C02:
        return produce(state, draftState => {
            draftState.availableBeds.icu.OVLC02 -= 1
        });
    case ActionTypes.RETURN_OVL_ICU_C03:
        return produce(state, draftState => {
            draftState.availableBeds.icu.OVLC03 +=1
        });
    case ActionTypes.TAKE_OVL_ICU_C03:
        return produce(state, draftState => {
            draftState.availableBeds.icu.OVLC03 -= 1
        });
        case ActionTypes.OVL_STAFF:
            return produce(state, draftState =>{
            draftState.staff = action.payload
        });
        default: 
        return state
    
    }
}