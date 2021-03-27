import React,{ Component, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ChangingProgressProvider from './changingProgressProvider';
import 'react-circular-progressbar/dist/styles.css';
import {Card, CardText, CardBody, CardTitle} from 'reactstrap';
import { fadeInDown } from 'react-animations';
import { useSelector} from 'react-redux';



export default function SWMCFHBedInfo(){
    const SWMCFH = useSelector(state => state.SWMCFH)
    
    //total medical beds
    const totalMed = SWMCFH.availableBeds.med.A14 + SWMCFH.availableBeds.med.A13 + SWMCFH.availableBeds.med.A12 + SWMCFH.availableBeds.med.B19 +
    SWMCFH.availableBeds.med.B24 + SWMCFH.availableBeds.med.B27 + SWMCFH.availableBeds.med.C10 + SWMCFH.availableBeds.med.C11 + SWMCFH.availableBeds.med.C16 + SWMCFH.availableBeds.med.D12
    // total tele beds 
    const totalTele = SWMCFH.availableBeds.tele.A20  + SWMCFH.availableBeds.tele.A24 + SWMCFH.availableBeds.tele.B03 + SWMCFH.availableBeds.tele.B04 + SWMCFH.availableBeds.tele.B05
    //total ICU beds
    const totalIcu = SWMCFH.availableBeds.icu.C01 + SWMCFH.availableBeds.icu.C02 + SWMCFH.availableBeds.icu.C06 
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
                        <h1 className="hospital-text">{SWMCFH.name}</h1><br/>
                        <div className="row ml-5">
                                <Card className="col-3 ml-4">
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





