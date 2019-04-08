import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AddGear from '../pages/AddGear';
// import App from '../App';
import GearList from '../pages/GearList';

// class Routing extends Component {
    // render() {
    //   return (

const Routing = () =>(
    <Router>
        <Switch>    
            {/* <Route exact path="/" component={Home}/> */}
            <Route path="/addgear" component={AddGear}/>
            <Route path="/gearlist" component={GearList}/>
        </Switch>
    </Router>
 );
// }
// }

export default Routing;

