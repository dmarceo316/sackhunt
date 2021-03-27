import React, { Component , useState } from 'react';
import { connect, useSelector } from 'react-redux';
import RenderMap from './Map';
import SWMCCHBedInfo from './SWMCCHInfo';
import SWMCFHBedInfo from './BedInfo';
import Switchboard from './switchboard';
import SWMCCHSwitchboard from './SWMCCHSwitchboard'
import { tada, pulse, fadeInDown } from 'react-animations';
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

const mapStateToProps = (state) => {
    return {
        SWMCFH : state.SWMCFH,
        SWMCCH: state.SWMCCH
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
    }
}

function Main(){
    const [swmcchdisplay, setSwmcchDisplay] = useState(false)
    const [swmcfhdisplay, setSwmcfhDisplay] = useState(false)
    const [swmcfhdisabled, setSwmcfhDisabled] = useState(false)
    const [swmcchdisabled, setSwmcchDisabled] = useState(false)

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
                    <Button color="warning" 
                    style={{marginRight: "20px"}}
                    onClick= {() => {
                        setSwmcfhDisplay(!swmcfhdisplay)
                        setSwmcchDisabled(swmcchdisabled)
                    }}
                    >SWMCFH</Button>
                    <Button color="warning" 
                    style={{marginRight: "20px"}}
                    onClick= {() => {
                        setSwmcchDisplay(!swmcchdisplay)
                        setSwmcfhDisplay(swmcfhdisplay)
                        setSwmcfhDisabled(!swmcfhdisabled)
                    }}
                    >SWMCCH</Button>
                </div>
            </div>
            <div className="row mt-5">
            {
                    swmcchdisplay ? 
                    <div>
                    <SWMCCHBedInfo/>
                    <SWMCCHSwitchboard />
                    </div>
                            : null
                }
                                {
                    swmcfhdisplay ? 
                    <div>
                    <SWMCFHBedInfo/>
                    <Switchboard/>
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
export default connect(mapStateToProps, mapDispatchToProps)(Main)