import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBTableFoot, MDBIcon  } from 'mdbreact';






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
    .then(result =>  {
      return result.json();
    })

    .then(result => {
      this.setState({gear: result})
    });}
   
  

  render() {

   const deleteItem = async (e)=>{
     debugger
      const data = JSON.stringify(this.state._id)
      await fetch("http://localhost:4001/",{
        method:"DELETE",
        body: data,
        headers:{
          "Content-Type": "application/json"
        }
      }
  
  
      )}
      
    
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
            <MDBTable responsive striped={`true`} bordered>
      <MDBTableHead>
        <tr>
          <th>Gear Name</th>
          <th>Brand</th>
          <th>Weight</th>
          <th>Catagory</th>
          <th>Edit / Delete</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {this.state.gear.map((gear, index)=>(
        <tr key={index} striped>
          <td>{gear._id}</td>
          <td>{gear.brand}</td>
          <td>{gear.weight}</td>
          <td>{gear.category}</td>
          <td><MDBIcon icon="edit" onClick={e =>deleteItem(gear._id)} /><MDBIcon icon="trash-alt" className="ml-4" value={gear._id} onClick={e=>deleteItem(this.state.gear._id)}/></td>
        </tr>
        ))}
      </MDBTableBody>
      <MDBTableFoot>
        <tr>
          <td></td>
          <td></td>
          <td>Total</td>
          <td></td>

        </tr>
      </MDBTableFoot>
    </MDBTable>
      </div>


    );
  }
}

export default GearList;
