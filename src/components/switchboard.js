import React,{ Component, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {take_A14, return_A14, take_A13, return_A13, take_A12, return_A12, take_B19, return_B19, take_B24,
    return_B24, take_B27, return_B27, take_C10, return_C10, take_C11, return_C11, take_C16, return_C16, 
    take_D12, return_D12, take_A20, return_A20, take_A24, return_A24, take_B03, return_B03, take_B04, return_B04,
    take_B05, return_B05, take_C01, return_C01, take_C02, return_C02, take_C06, return_C06
} from './redux/reducers/swmcfh'
import { Button } from 'reactstrap'

export default function Switchboard(){
    const dispatch = useDispatch()
    const SWMCFH = useSelector(state => state.SWMCFH)

    return(
        <div className="container">
            <h1 className="hospital-text">SWMCFH Switchboard:</h1>
            <h2>Medical Beds</h2>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>A-14</h3> 
                    <Button
                    color="danger"
                    disabled={SWMCFH.availableBeds.med.A14 !== 1}
                    onClick={() => dispatch(take_A14())}>Take Bed</Button> 
                    <Button 
                    color="success"
                    disabled={SWMCFH.availableBeds.med.A14 !== 0}
                    onClick={() => dispatch(return_A14())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>A-13</h3> 
                    <Button 
                    color="danger"
                    disabled={SWMCFH.availableBeds.med.A13 !== 1}
                    onClick={() => dispatch(take_A13())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCFH.availableBeds.med.A13 !== 0}
                    onClick={() => dispatch(return_A13())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>A-12</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCFH.availableBeds.med.A12 !== 1}
                    onClick={() => dispatch(take_A12())}>Take Bed</Button> 
                    <Button 
                    color="success"
                    disabled={SWMCFH.availableBeds.med.A12 !== 0}
                    onClick={() => dispatch(return_A12())}>Return Bed</Button> 
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>B-19</h3> 
                    <Button 
                    color="danger"
                    disabled={SWMCFH.availableBeds.med.B19 !== 1}
                    onClick={() => dispatch(take_B19())}>Take Bed</Button> 
                    <Button 
                    color="success"
                    disabled={SWMCFH.availableBeds.med.B19 !== 0}
                    onClick={() => dispatch(return_B19())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>B-24</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCFH.availableBeds.med.B24 !== 1}
                    onClick={() => dispatch(take_B24())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCFH.availableBeds.med.B24 !== 0}
                    onClick={() => dispatch(return_B24())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>B-27</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCFH.availableBeds.med.B27 !== 1}
                    onClick={() => dispatch(take_B27())}>Take Bed</Button> 
                    <Button 
                    color="success"
                    disabled={SWMCFH.availableBeds.med.B27 !== 0}
                    onClick={() => dispatch(return_B27())}>Return Bed</Button> 
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>C-10</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCFH.availableBeds.med.C10 !== 1}
                    onClick={() => dispatch(take_C10())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCFH.availableBeds.med.C10 !== 0}
                    onClick={() => dispatch(return_C10())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>C-11</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCFH.availableBeds.med.C11 !== 1}
                    onClick={() => dispatch(take_C11())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCFH.availableBeds.med.C11 !== 0}
                    onClick={() => dispatch(return_C11())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>C-16</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCFH.availableBeds.med.C16 !== 1}
                    onClick={() => dispatch(take_C16())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCFH.availableBeds.med.C16 !== 0}
                    onClick={() => dispatch(return_C16())}>Return Bed</Button> 
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>D-12</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCFH.availableBeds.med.D12 !== 1}
                    onClick={() => dispatch(take_D12())}>Take Bed</Button> 
                    <Button
                    color="success"
                    disabled={SWMCFH.availableBeds.med.D12 !== 0}
                    onClick={() => dispatch(return_D12())}>Return Bed</Button> 
                </div>
            </div>
            <h2> Telemetry Beds</h2>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>A-20</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCFH.availableBeds.tele.A20 !== 1}
                    onClick={() => dispatch(take_A20())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCFH.availableBeds.tele.A20 !== 0}
                    onClick={() => dispatch(return_A20())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>A-24</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCFH.availableBeds.tele.A24 !== 1}
                    onClick={() => dispatch(take_A24())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCFH.availableBeds.tele.A24 !== 0}
                    onClick={() => dispatch(return_A24())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>B-03</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCFH.availableBeds.tele.B03 !== 1}
                    onClick={() => dispatch(take_B03())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCFH.availableBeds.tele.B03 !== 0}
                    onClick={() => dispatch(return_B03())}>Return Bed</Button> 
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>B-04</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCFH.availableBeds.tele.B04 !== 1}
                    onClick={() => dispatch(take_B04())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCFH.availableBeds.tele.B04 !== 0}
                    onClick={() => dispatch(return_B04())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>B-05</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCFH.availableBeds.tele.B05 !== 1}
                    onClick={() => dispatch(take_B05())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCFH.availableBeds.tele.B05 !== 0}
                    onClick={() => dispatch(return_B05())}>Return Bed</Button> 
                </div>
            </div>
            <h2>ICU beds</h2>
            <div className="row mb-5">
                <div className="col-4">
                    <h3>C-01</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCFH.availableBeds.icu.C01 !== 1}
                    onClick={() => dispatch(take_C01())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCFH.availableBeds.icu.C01 !== 0}
                    onClick={() => dispatch(return_C01())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>C-02</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCFH.availableBeds.icu.C02 !== 1}
                    onClick={() => dispatch(take_C02())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCFH.availableBeds.icu.C02 !== 0}
                    onClick={() => dispatch(return_C02())}>Return Bed</Button> 
                </div>
                <div className="col-4">
                    <h3>C-06</h3> 
                    <Button
                    color="danger" 
                    disabled={SWMCFH.availableBeds.icu.C06 !== 1}
                    onClick={() => dispatch(take_C06())}>Take Bed</Button> 
                    <Button
                    color="success" 
                    disabled={SWMCFH.availableBeds.icu.C06 !== 0}
                    onClick={() => dispatch(return_C06())}>Return Bed</Button> 
                </div>
            </div>
        </div>
    )
}