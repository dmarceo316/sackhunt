import React,{ Component, useState } from "react";
import { Button } from 'reactstrap'
import SWMCCHBedInfo from './SWMCCHInfo';
import SWMCCHSwitchboard from './SWMCCHSwitchboard';

export default function HospitalButtons(){

    const [display, setDisplay] = useState(true)
    
    return(
        <div className="container mb-5">
            <div className="row">
                {
                    display ? 
                    <SWMCCHBedInfo/> : null
                }
                <div className="col">
                    <Button color="warning" style={{marginRight: "20px"}}>SWMCFH</Button>
                    <Button color="warning" 
                        style={{marginRight: "20px"}}
                        onClick= {() => {
                            setDisplay(!display)
                        }}
                    >SWMCCH</Button>
                </div>
            </div>
        </div>
    )
}