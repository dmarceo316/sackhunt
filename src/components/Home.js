import React, { useState } from 'react';
import { connect } from 'react-redux';
import RenderMap from './Map';
import SWMCCHBedInfoLoggedOff from './SWMCCHInfoLoggedOff';
import SWMCFHBedInfoLoggedOff from './SWMCFHBedInfoLoggedOff';
import OVLBedInfoLoggedOff from './OVLinfoLoggedOff';
import { tada, pulse} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { Button } from 'reactstrap'



const styles = {
    tada: {
        animation: 'x 1s',
        animationName: Radium.keyframes(tada, 'tada')
    },
    pulse: {
        animation: 'x 2s',
        animationName: Radium.keyframes(pulse, 'pulse')
    }

}


export default function Home(){
    const [swmcchdisplay, setSwmcchDisplay] = useState(false)
    const [swmcfhdisplay, setSwmcfhDisplay] = useState(false)
    const [ovldisplay, setOvlDisplay] = useState(false)
    const [swmcfhdisabled, setSwmcfhDisabled] = useState(false)
    const [swmcchdisabled, setSwmcchDisabled] = useState(false)
    const [ovldisabled, setOvlDisabled] = useState(false)

    return(
        <div className="bg">
            <div className="pt-5">
            <StyleRoot>
            <h1 className="title anime" style={styles.tada}>Sack Hunt</h1><p style={{fontWeight: "bold"}, styles.pulse}>Happy Hunting!</p>
            </StyleRoot>
            </div>
            <RenderMap/>
            <div className="container mb-5">
            <div className="row">
                <div className="col">
                    <Button 
                    color="primary" 
                    className="btn-text"
                    style={{marginRight: "20px"}}
                    onClick= {() => {
                        setSwmcfhDisplay(!swmcfhdisplay)
                        setSwmcchDisabled(swmcchdisabled)
                    }}
                    >SWMCFH</Button>
                    <Button 
                    color="primary" 
                    className="btn-text"
                    style={{marginRight: "20px"}}
                    onClick= {() => {
                        setSwmcchDisplay(!swmcchdisplay)
                        setSwmcfhDisplay(swmcfhdisplay)
                        setSwmcfhDisabled(!swmcfhdisabled)
                    }}
                    >SWMCCH</Button>
                    <Button 
                    color="primary" 
                    className="btn-text"
                    style={{marginRight: "20px"}}
                    onClick= {() => {
                        setOvlDisplay(!ovldisplay)
                        setOvlDisabled(!ovldisabled)
                    }}
                    >OVL</Button>
                </div>
            </div>
            <div className="row mt-5">
                {
                    swmcchdisplay ? 
                    <div>
                    <SWMCCHBedInfoLoggedOff/> 
                    </div>
                            : null
                }
                                {
                    swmcfhdisplay ? 
                    <div>
                    <SWMCFHBedInfoLoggedOff/>
                    </div>
                            : null
                }
                                {
                    ovldisplay ? 
                    <div>
                    <OVLBedInfoLoggedOff/>
                    </div>
                            : null
                }
            </div>
        </div>
            <div>
                <h3 className="pb-5">AA- Design</h3>
            </div>
        </div>
    )
}
