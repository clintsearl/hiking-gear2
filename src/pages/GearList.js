import React, { Component } from 'react';
// import {Link} from 'react-router-dom'





class GearList extends Component {
  state ={
      gear:[]
      // name:'',
      // brand: '',
      // weight: 0,
      // catagory:'',
      // units: ''
    }
  
 componentDidMount(){
  fetch('http://localhost:4001/')
  // const loadGear = async()=>{
  //  await fetch("http://api.randomuser.me")
  //  const data = await results.json()
  //  this.setState({ gear: data.results[0]})
    // fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
  // fetch('https://raw.githubusercontent.com/CivilServiceUSA/us-senate/master/us-senate/data/us-senate.json')
    //this turns the returned data in JSON
    .then(result =>  {
      return result.json();
    })

    .then(result => {
      this.setState({gear: result})
    });
  
    
  }




  render() {
    console.log(this.state)
    return (
      
      <div className="GearList">
        <h1>List of all your stuff</h1>
        <div>
          {this.state.gear.map((gear, index)=>(
            <div key={index}>
                <h3>{gear.name}</h3>
            </div>
          )
            )}
        </div>
      </div>
    );
  }
}

export default GearList;
