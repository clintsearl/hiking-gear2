import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBTableFoot, MDBIcon  } from 'mdbreact';






class GearList extends Component {
  //State is what the data is presently
  state ={
      gear:[]
      // name:'',
      // brand: '',
      // weight: 0,
      // catagory:'',
      // units: ''
    }
  //Props are the properties themselves 
  //constructor and state building the bookshelf
  //go and fetch the books
 componentDidMount(){
  fetch('http://localhost:4001/')
    .then(result =>  {
      return result.json();
    })

    .then(result => {
      this.setState({gear: result})
    });}
   
   deleteItem = (id) = async (e)=>{
     e.preventDefault()
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
            <MDBTable responsive striped={true} bordered>
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
          <td><MDBIcon icon="edit"/><MDBIcon icon="trash-alt" className="ml-4" key={index} 
          value={gear._id} 
          onClick={this.deleteItem(this.value)}/></td>
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
