import React, { useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import OVLView from './OVLView';
import SWMCCHView from './SWMCCHView';
import SWMCFHView from './SWMCFHView';



const mapStateToProps = (state) => {
    return {
        SWMCFH : state.SWMCFH,
        SWMCCH: state.SWMCCH,
        OVL: state.OVL
    }
}

const mapDispatchToProps = () => {
    return {
    }
}

// function Home() {
//     return <h2>Home</h2>;
// }

// function OVLView() {
//     return <h2>OVL</h2>;
// }

function Main(){

    return(
        <Router>
            <div>
                <nav>
                    <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/OVL">OVL</Link>
                    </li>
                    <li>
                    <Link to="/SWMCCH">SWMCCH</Link>
                    </li>
                    <li>
                    <Link to="/SWMCFH">SWMCFH</Link>
                    </li>
                    </ul>
                </nav>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/OVL">
                    <OVLView/>
                </Route>
                <Route path="/SWMCCH">
                    <SWMCCHView/>
                </Route>
                <Route path="/SWMCFH">
                    <SWMCFHView/>
                </Route>
            </Switch>
            </div>
        </Router> 
    )
}




export default connect(mapStateToProps, mapDispatchToProps)(Main)