import React,{ Component, useState } from "react";
import {Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { useSelector, useDispatch} from 'react-redux';
import { OVL_STAFF } from './redux/reducers/ovl'

export default function OVLBedInfoLoggedOff(){
    const OVL = useSelector(state => state.OVL)
    const dispatch = useDispatch()
    var d = new Date();
    var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

        // staffing values
        const LPNStaff = OVL.staff.LPN;
        const RNStaff = OVL.staff.RN;
        const CNAStaff = OVL.staff.CNA;
        const availableStaff = LPNStaff + RNStaff + CNAStaff
    
        // total staffing values
        const totalLPN = 2
        const totalRN = 3
        const totalCNA = 5
        const totalStaff = totalLPN + totalRN + totalCNA 
    
        // staffing percentage 
        const OVLStaff = availableStaff / totalStaff * 100
        const staffMessage = OVLStaff <= 50 ? <h1>Due to staffing, Bed availbilty will be affected. Please call to see availabilty</h1> : null 
        const message = OVL.staff.message + ': ' + datestring
        const onSubmit =  values => {
            dispatch(OVL_STAFF(values))
            
        }
    
        // will turn string into int for staffing
        const parse = value => (isNaN(parseFloat(value)) ? "" : parseFloat(value));

    //total medical beds
    const totalMed = OVL.availableBeds.med.OVLA01 + OVL.availableBeds.med.OVLA02 + OVL.availableBeds.med.OVLA03 + OVL.availableBeds.med.OVLB01 +
    OVL.availableBeds.med.OVLB02 + OVL.availableBeds.med.OVLB03 + OVL.availableBeds.med.OVLC01 + OVL.availableBeds.med.OVLC02 + OVL.availableBeds.med.OVLC03 + OVL.availableBeds.med.OVLD01
    const totalTele = OVL.availableBeds.tele.OVLA01  + OVL.availableBeds.tele.OVLA02 + OVL.availableBeds.tele.OVLB01 + OVL.availableBeds.tele.OVLB02 + OVL.availableBeds.tele.OVLB03
    //total ICU beds
    const totalIcu = OVL.availableBeds.icu.OVLC01 + OVL.availableBeds.icu.OVLC02 + OVL.availableBeds.icu.OVLC03
    // variables for beds 
    const totalBeds = 18
    const totalMedBed = 10
    const totalTeleBed = 5
    const totalIcuBed = 3
    const OVLBeds =  totalMed  + totalTele + totalIcu
    const totalCapacity = OVLBeds / totalBeds * 100
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
                        <h1 className="hospital-text">{OVL.name}</h1><br/>
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
                                        >{OVLStaff}%</CardText>
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