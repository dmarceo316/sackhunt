import React,{ Component, } from "react";
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';
import { useSelector} from 'react-redux';

export default function SWMCCHBedInfo(){
    const SWMCCH = useSelector(state => state.SWMCCH)

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
    // dispatching action 

        return(
            <div className="container mb-5">
                <div>
                    <div className="col">
                        <h1 className="hospital-text">{SWMCCH.name}</h1><br/>
                        <div className="row ml-5">
                                <Card className="col-3 ml-4"
                                >
                                    <CardBody className="mt-5">
                                        <CardText tag="h3" className="card-text">Medical Beds: {totalMed}</CardText>
                                        <CardText tag="h3" className="card-text">Telemetry Beds: {totalTele}</CardText>
                                        <CardText tag="h3" className="card-text">ICU Beds: {totalIcu}</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="col-3 ml-4 fadeIn">
                                    <CardBody>
                                        <CardText tag="h3" className="card-text">Medical Bed Availability: {medCapacity}%</CardText>
                                        <CardText tag="h3" className="card-text">Tele Bed Availability: {teleCapacity}%</CardText>
                                        <CardText tag="h3" className="card-text">ICU Bed Availability: {roundedIcu}%</CardText>
                                    </CardBody>
                                </Card>
                                <Card className="col-3 ml-4 fadeIn">
                                    <CardBody className="mt-5">
                                        <br/>
                                        <CardTitle tag="h2" className="card-text">Availability:</CardTitle><br/>
                                        <CardText tag="h1" className="card-text"
                                        >{rounded}%</CardText>
                                    </CardBody>
                                </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }