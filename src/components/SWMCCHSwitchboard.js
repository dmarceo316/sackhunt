import React,{ Component, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap'
import { take_CHA01, return_CHA01, take_CHA02, return_CHA02, take_CHA03, return_CHA03, take_CHB01, return_CHB01,
    take_CHB02, return_CHB02, take_CHB03, return_CHB03, take_CHC01, return_CHC01, take_CHC02, return_CHC02, take_CHC03,
    return_CHC03, take_CHD01, return_CHD01, take_CH_TELEA01, return_CH_TELEA01, take_CH_TELEA02, return_CH_TELEA02, take_CH_TELEB01,
    return_CH_TELEB01, take_CH_TELEB02, return_CH_TELEB02, take_CH_TELEB03, return_CH_TELEB03, take_CH_ICUC01, return_CH_ICUC01,
    take_CH_ICUC02, return_CH_ICUC02, take_CH_ICUC03, return_CH_ICUC03
} from './redux/reducers/swmcch';


export default function SWMCCHSwitchboard(){
    const dispatch = useDispatch()
    const SWMCCH = useSelector(state => state.SWMCCH)

    return(
        <div className="container">
            <h1 className="hospital-text">SWMCCH Switchboard:</h1>
            <h2>Medical Beds</h2>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>CH_MED_A01</h3> 
                    <Button
                    color="danger"
                    disabled={SWMCCH.availableBeds.med.CHA01 !== 1}
                    onClick={() => dispatch(take_CHA01())}>Take Bed</Button> 
                    <Button 
                    color="success"
                    disabled={SWMCCH.availableBeds.med.CHA01 !== 0}
                    onClick={() => dispatch(return_CHA01())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>CH_MED_A02</h3> 
                    <Button 
                    color="danger"
                    disabled={SWMCCH.availableBeds.med.CHA02 !== 1}
                    onClick={() => dispatch(take_CHA02())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCCH.availableBeds.med.CHA02 !== 0}
                    onClick={() => dispatch(return_CHA02())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>CH_MED_A03</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCCH.availableBeds.med.CHA03 !== 1}
                    onClick={() => dispatch(take_CHA03())}>Take Bed</Button> 
                    <Button 
                    color="success"
                    disabled={SWMCCH.availableBeds.med.CHA03 !== 0}
                    onClick={() => dispatch(return_CHA03())}>Return Bed</Button> 
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>CH_MED_B01</h3> 
                    <Button 
                    color="danger"
                    disabled={SWMCCH.availableBeds.med.CHB01 !== 1}
                    onClick={() => dispatch(take_CHB01())}>Take Bed</Button> 
                    <Button 
                    color="success"
                    disabled={SWMCCH.availableBeds.med.CHB01 !== 0}
                    onClick={() => dispatch(return_CHB01())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>CH_MED_B02</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCCH.availableBeds.med.CHB02 !== 1}
                    onClick={() => dispatch(take_CHB02())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCCH.availableBeds.med.CHB02 !== 0}
                    onClick={() => dispatch(return_CHB02())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>CH_MED_B03</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCCH.availableBeds.med.CHB03 !== 1}
                    onClick={() => dispatch(take_CHB03())}>Take Bed</Button> 
                    <Button 
                    color="success"
                    disabled={SWMCCH.availableBeds.med.CHB03 !== 0}
                    onClick={() => dispatch(return_CHB03())}>Return Bed</Button> 
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>CH_MED_C01</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCCH.availableBeds.med.CHC01 !== 1}
                    onClick={() => dispatch(take_CHC01())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCCH.availableBeds.med.CHC01 !== 0}
                    onClick={() => dispatch(return_CHC01())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>CH_MED_C02</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCCH.availableBeds.med.CHC02 !== 1}
                    onClick={() => dispatch(take_CHC02())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCCH.availableBeds.med.CHC02 !== 0}
                    onClick={() => dispatch(return_CHC02())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>CH_MED_C03</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCCH.availableBeds.med.CHC03 !== 1}
                    onClick={() => dispatch(take_CHC03())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCCH.availableBeds.med.CHC03 !== 0}
                    onClick={() => dispatch(return_CHC03())}>Return Bed</Button> 
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>CH_MED_D01</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCCH.availableBeds.med.CHD01 !== 1}
                    onClick={() => dispatch(take_CHD01())}>Take Bed</Button> 
                    <Button
                    color="success"
                    disabled={SWMCCH.availableBeds.med.CHD01 !== 0}
                    onClick={() => dispatch(return_CHD01())}>Return Bed</Button> 
                </div>
            </div>
            <h2> Telemetry Beds</h2>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>CH_TELE_A01</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCCH.availableBeds.tele.CHA01 !== 1}
                    onClick={() => dispatch(take_CH_TELEA01())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCCH.availableBeds.tele.CHA01 !== 0}
                    onClick={() => dispatch(return_CH_TELEA01())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>CH_TELE_A02</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCCH.availableBeds.tele.CHA02 !== 1}
                    onClick={() => dispatch(take_CH_TELEA02())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCCH.availableBeds.tele.CHA02 !== 0}
                    onClick={() => dispatch(return_CH_TELEA02())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>CH_TELE_B01</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCCH.availableBeds.tele.CHB01 !== 1}
                    onClick={() => dispatch(take_CH_TELEB01())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCCH.availableBeds.tele.CHB01 !== 0}
                    onClick={() => dispatch(return_CH_TELEB01())}>Return Bed</Button> 
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>CH_TELE_B02</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCCH.availableBeds.tele.CHB02 !== 1}
                    onClick={() => dispatch(take_CH_TELEB02())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCCH.availableBeds.tele.CHB02 !== 0}
                    onClick={() => dispatch(return_CH_TELEB02())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>CH_TELE_B03</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCCH.availableBeds.tele.CHB03 !== 1}
                    onClick={() => dispatch(take_CH_TELEB03())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCCH.availableBeds.tele.CHB03 !== 0}
                    onClick={() => dispatch(return_CH_TELEB03())}>Return Bed</Button> 
                </div>
            </div>
            <h2>ICU beds</h2>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>CH_ICU_C01</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCCH.availableBeds.icu.CHC01 !== 1}
                    onClick={() => dispatch(take_CH_ICUC01())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCCH.availableBeds.icu.CHC01 !== 0}
                    onClick={() => dispatch(return_CH_ICUC01())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>CH_ICU_C02</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCCH.availableBeds.icu.CHC02 !== 1}
                    onClick={() => dispatch(take_CH_ICUC02())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCCH.availableBeds.icu.CHC02 !== 0}
                    onClick={() => dispatch(return_CH_ICUC02())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>CH_ICU_C03</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCCH.availableBeds.icu.CHC03 !== 1}
                    onClick={() => dispatch(take_CH_ICUC03())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCCH.availableBeds.icu.CHC03 !== 0}
                    onClick={() => dispatch(return_CH_ICUC03())}>Return Bed</Button> 
                </div>
            </div>
        </div>
    )
}