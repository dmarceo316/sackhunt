import React, { useState } from 'react';
import RenderMap from './Map';
import { tada, pulse} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { Button } from 'reactstrap';
import OVLBedInfo from './OVLinfo';
import OVLSwitchboard from './OVLswitchboard';




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


export default function OVLView(){
    
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
                <OVLBedInfo />
                <OVLSwitchboard/>
            </div>
        </div>
            <div>
                <h3 className="pb-5">AA- Design</h3>
            </div>
        </div>
    )
}
