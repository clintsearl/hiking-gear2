import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import App from '../App';//this breaks it!! You'll have a never ending loop because you're 
//putting the Router on the App page and then trying to put the App page in the router 
import GearList from '../pages/GearList';
import AddGear from '../pages/AddGear';
import Welcome from '../pages/Welcome'
import About from '../pages/About'
// class Routing extends Component {
    // render() {
    //   return (

const Routing = () =>(
    <Router>
        <Switch>    
            <Route exact path="/" component={Welcome}/>
            <Route path="/about" component={About}/>
            <Route path="/addgear" component={AddGear}/>
            <Route path="/gearlist" component={GearList}/>
        </Switch>
    </Router>
 );


export default Routing;

