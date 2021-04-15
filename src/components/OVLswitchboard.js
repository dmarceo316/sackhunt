import React,{ Component, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap'
import { take_OVLA01, return_OVLA01, take_OVLA02, return_OVLA02, take_OVLA03, return_OVLA03, take_OVLB01,
    return_OVLB01, take_OVLB02, return_OVLB02, take_OVLB03, return_OVLB03, take_OVLC01, return_OVLC01, take_OVLC02,
    return_OVLC02, take_OVLC03, return_OVLC03, take_OVLD01, return_OVLD01, take_OVL_TELEA01, return_OVL_TELEA01,
    take_OVL_TELEA02, return_OVL_TELEA02, take_OVL_TELEB01, return_OVL_TELEB01, take_OVL_TELEB02, return_OVL_TELEB02,
    take_OVL_TELEB03, return_OVL_TELEB03, take_OVL_ICUC01, return_OVL_ICUC01, take_OVL_ICUC02, return_OVL_ICUC02,
    take_OVL_ICUC03, return_OVL_ICUC03 } from './redux/reducers/ovl'

export default function OVLSwitchboard(){
    const dispatch = useDispatch()
    const OVL = useSelector(state => state.OVL)

    return(
        <div className="container">
            <h1 className="hospital-text">OVL Switchboard:</h1>
            <h2>Medical Beds</h2>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>OVL_MED_A01</h3> 
                    <Button
                    color="danger"
                    disabled={OVL.availableBeds.med.OVLA01 !== 1}
                    onClick={() => dispatch(take_OVLA01())}>Take Bed</Button> 
                    <Button 
                    color="success"
                    disabled={OVL.availableBeds.med.OVLA01 !== 0}
                    onClick={() => dispatch(return_OVLA01())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>OVL_MED_A02</h3> 
                    <Button 
                    color="danger"
                    disabled={OVL.availableBeds.med.OVLA02 !== 1}
                    onClick={() => dispatch(take_OVLA02())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={OVL.availableBeds.med.OVLA02 !== 0}
                    onClick={() => dispatch(return_OVLA02())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>OVL_MED_A03</h3> 
                    <Button
                    color="danger" 
                    disabled={OVL.availableBeds.med.OVLA03 !== 1}
                    onClick={() => dispatch(take_OVLA03())}>Take Bed</Button> 
                    <Button 
                    color="success"
                    disabled={OVL.availableBeds.med.OVLA03 !== 0}
                    onClick={() => dispatch(return_OVLA03())}>Return Bed</Button> 
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>OVL_MED_B01</h3> 
                    <Button 
                    color="danger"
                    disabled={OVL.availableBeds.med.OVLB01 !== 1}
                    onClick={() => dispatch(take_OVLB01())}>Take Bed</Button> 
                    <Button 
                    color="success"
                    disabled={OVL.availableBeds.med.OVLB01 !== 0}
                    onClick={() => dispatch(return_OVLB01())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>OVL_MED_B02</h3> 
                    <Button
                    color="danger" 
                    disabled={OVL.availableBeds.med.OVLB02 !== 1}
                    onClick={() => dispatch(take_OVLB02())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={OVL.availableBeds.med.OVLB02 !== 0}
                    onClick={() => dispatch(return_OVLB02())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>OVL_MED_B03</h3> 
                    <Button
                    color="danger" 
                    disabled={OVL.availableBeds.med.OVLB03 !== 1}
                    onClick={() => dispatch(take_OVLB03())}>Take Bed</Button> 
                    <Button 
                    color="success"
                    disabled={OVL.availableBeds.med.OVLB03 !== 0}
                    onClick={() => dispatch(return_OVLB03())}>Return Bed</Button> 
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>OVL_MED_C01</h3> 
                    <Button
                    color="danger" 
                    disabled={OVL.availableBeds.med.OVLC01 !== 1}
                    onClick={() => dispatch(take_OVLC01())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={OVL.availableBeds.med.OVLC01 !== 0}
                    onClick={() => dispatch(return_OVLC01())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>OVL_MED_C02</h3> 
                    <Button
                    color="danger" 
                    disabled={OVL.availableBeds.med.OVLC02 !== 1}
                    onClick={() => dispatch(take_OVLC02())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={OVL.availableBeds.med.OVLC02 !== 0}
                    onClick={() => dispatch(return_OVLC02())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>OVL_MED_C03</h3> 
                    <Button
                    color="danger" 
                    disabled={OVL.availableBeds.med.OVLC03 !== 1}
                    onClick={() => dispatch(take_OVLC03())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={OVL.availableBeds.med.OVLC03 !== 0}
                    onClick={() => dispatch(return_OVLC03())}>Return Bed</Button> 
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>OVL_MED_D01</h3> 
                    <Button
                    color="danger" 
                    disabled={OVL.availableBeds.med.OVLD01 !== 1}
                    onClick={() => dispatch(take_OVLD01())}>Take Bed</Button> 
                    <Button
                    color="success"
                    disabled={OVL.availableBeds.med.OVLD01 !== 0}
                    onClick={() => dispatch(return_OVLD01())}>Return Bed</Button> 
                </div>
            </div>
            <h2> Telemetry Beds</h2>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>OVL_TELE_A01</h3> 
                    <Button
                    color="danger" 
                    disabled={OVL.availableBeds.tele.OVLA01 !== 1}
                    onClick={() => dispatch(take_OVL_TELEA01())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={OVL.availableBeds.tele.OVLA01 !== 0}
                    onClick={() => dispatch(return_OVL_TELEA01())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>OVL_TELE_A02</h3> 
                    <Button
                    color="danger" 
                    disabled={OVL.availableBeds.tele.OVLA02 !== 1}
                    onClick={() => dispatch(take_OVL_TELEA02())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={OVL.availableBeds.tele.OVLA02 !== 0}
                    onClick={() => dispatch(return_OVL_TELEA02())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>OVL_TELE_B01</h3> 
                    <Button
                    color="danger" 
                    disabled={OVL.availableBeds.tele.OVLB01 !== 1}
                    onClick={() => dispatch(take_OVL_TELEB01())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={OVL.availableBeds.tele.OVLB01 !== 0}
                    onClick={() => dispatch(return_OVL_TELEB01())}>Return Bed</Button> 
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>OVL_TELE_B02</h3> 
                    <Button
                    color="danger" 
                    disabled={OVL.availableBeds.tele.OVLB02 !== 1}
                    onClick={() => dispatch(take_OVL_TELEB02())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={OVL.availableBeds.tele.OVLB02 !== 0}
                    onClick={() => dispatch(return_OVL_TELEB02())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>OVL_TELE_B03</h3> 
                    <Button
                    color="danger" 
                    disabled={OVL.availableBeds.tele.OVLB03 !== 1}
                    onClick={() => dispatch(take_OVL_TELEB03())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={OVL.availableBeds.tele.OVLB03 !== 0}
                    onClick={() => dispatch(return_OVL_TELEB03())}>Return Bed</Button> 
                </div>
            </div>
            <h2>ICU beds</h2>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>OVL_ICU_C01</h3> 
                    <Button
                    color="danger" 
                    disabled={OVL.availableBeds.icu.OVLC01 !== 1}
                    onClick={() => dispatch(take_OVL_ICUC01())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={OVL.availableBeds.icu.OVLC01 !== 0}
                    onClick={() => dispatch(return_OVL_ICUC01())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>OVL_ICU_C02</h3> 
                    <Button
                    color="danger" 
                    disabled={OVL.availableBeds.icu.OVLC02 !== 1}
                    onClick={() => dispatch(take_OVL_ICUC02())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={OVL.availableBeds.icu.OVLC02 !== 0}
                    onClick={() => dispatch(return_OVL_ICUC02())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>OVL_ICU_C03</h3> 
                    <Button
                    color="danger" 
                    disabled={OVL.availableBeds.icu.OVLC03 !== 1}
                    onClick={() => dispatch(take_OVL_ICUC03())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={OVL.availableBeds.icu.OVLC03 !== 0}
                    onClick={() => dispatch(return_OVL_ICUC03())}>Return Bed</Button> 
                </div>
            </div>
        </div>
    )
}