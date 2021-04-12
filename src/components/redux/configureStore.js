import { createStore, combineReducers } from 'redux';
import SWMCFHBedInfo from '../BedInfo';
import  {SWMCFH}  from './reducers/swmcfh';
import {SWMCCH} from './reducers/swmcch';
import {OVL} from './reducers/ovl';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            SWMCFH: SWMCFH,
            SWMCCH: SWMCCH,
            OVL: OVL 
        }
    ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};