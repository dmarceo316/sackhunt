import React,{ Component, useState } from "react";
import {Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { useSelector, useDispatch} from 'react-redux';
import { SWMCCH_STAFF } from './redux/reducers/swmcch'

export default function SWMCCHBedInfoLoggedOff(){
    const SWMCCH = useSelector(state => state.SWMCCH)
    const dispatch = useDispatch()
    var d = new Date();
    var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

        // staffing values
        const LPNStaff = SWMCCH.staff.LPN;
        const RNStaff = SWMCCH.staff.RN;
        const CNAStaff = SWMCCH.staff.CNA;
        const availableStaff = LPNStaff + RNStaff + CNAStaff
    
        // total staffing values
        const totalLPN = 2
        const totalRN = 3
        const totalCNA = 5
        const totalStaff = totalLPN + totalRN + totalCNA 
    
        // staffing percentage 
        const SWMCCHStaff = availableStaff / totalStaff * 100
        const staffMessage = SWMCCHStaff <= 50 ? <h1>Due to staffing, Bed availbilty will be affected. Please call to see availabilty</h1> : null 
        const message = SWMCCH.staff.message + ': ' + datestring
        const onSubmit =  values => {
            dispatch(SWMCCH_STAFF(values))
        }
    
        // will turn string into int for staffing
        const parse = value => (isNaN(parseFloat(value)) ? "" : parseFloat(value));

    //total medical beds
    const totalMed = SWMCCH.availableBeds.med.CHA01 + SWMCCH.availableBeds.med.CHA02 + SWMCCH.availableBeds.med.CHA03 + SWMCCH.availableBeds.med.CHB01 +
    SWMCCH.availableBeds.med.CHB02 + SWMCCH.availableBeds.med.CHB03 + SWMCCH.availableBeds.med.CHC01 + SWMCCH.availableBeds.med.CHC02 + SWMCCH.availableBeds.med.CHC03 + SWMCCH.availableBeds.med.CHD01
    const totalTele = SWMCCH.availableBeds.tele.CHA01  + SWMCCH.availableBeds.tele.CHA02 + SWMCCH.availableBeds.tele.CHB01 + SWMCCH.availableBeds.tele.CHB02 + SWMCCH.availableBeds.tele.CHB03
    //total ICU beds
    const totalIcu = SWMCCH.availableBeds.icu.CHC01 + SWMCCH.availableBeds.icu.CHC02 + SWMCCH.availableBeds.icu.CHC03
    // variables for beds 
    const totalBeds = 18
    const totalMedBed = 10
    const totalTeleBed = 5
    const totalIcuBed = 3
    const SWMCFHBeds =  totalMed  + totalTele + totalIcu
    const totalCapacity = SWMCFHBeds / totalBeds * 100
    const medCapacity = totalMed / totalMedBed * 100
    const teleCapacity = totalTele / totalTeleBed * 100
    const icuCapacity = totalIcu / totalIcuBed * 100 
    const roundedIcu = Math.round(icuCapacity / 1)
    const rounded = Math.round(totalCapacity / 1) 
    // toggle modal
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

        return(
            <div className="container mb-5">
                <div>
                    <div className="col">
                        <h1 className="hospital-text">{SWMCCH.name}</h1><br/>
                        <div className="row">
                            <div className="row">
                            <Card className="col-3"
                                >
                                    <CardBody className="mt-5">
                                        <CardText tag="h3" className="card-text">Medical Beds: {totalMed}</CardText>
                                        <CardText tag="h3" className="card-text">Telemetry Beds: {totalTele}</CardText>
                                        <CardText tag="h3" className="card-text">ICU Beds: {totalIcu}</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="col-3">
                                    <CardBody>
                                        <CardText tag="h3" className="card-text">Medical Bed Availability: {medCapacity}%</CardText>
                                        <CardText tag="h3" className="card-text">Tele Bed Availability: {teleCapacity}%</CardText>
                                        <CardText tag="h3" className="card-text">ICU Bed Availability: {roundedIcu}%</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="col-3">
                                    <CardBody className="mt-5">
                                        <br/>
                                        <CardTitle tag="h2" className="card-text">Availability:</CardTitle><br/>
                                        <CardText tag="h1" className="card-text"
                                        >{rounded}%</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="col-3">
                                    <CardBody className="mt-5">
                                        <br/>
                                        <CardTitle tag="h2" className="card-text">Staffing:</CardTitle><br/>
                                        <CardText tag="h1" className="card-text"
                                        >{SWMCCHStaff}%</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        <div className="row mt-5 warning-text" style={{color:'#FF1B1C', fontWeight: "600"}}>
                            <div className="col">
                                {staffMessage}
                            </div>
                            
                        </div>
                        <div className="row mt-5 warning-text" style={{color:'#FF1B1C', fontWeight: "600"}}>
                            <div className="col">
                                <h3>{message}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }