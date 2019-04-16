import React, { Component, useState} from 'react';
// import {BrowserRouter, Link} from 'react-router-dom'
import { MDBCard, MDBCardHeader, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBTableFoot, MDBIcon, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBModal, MDBContainer } from 'mdbreact';
// import Modal from '../components/Modal'
import styled from 'styled-components'


const allpage = styled.main`{
}`



class GearList extends Component {
  //State is what the data is presently
  state = {
    gear: [],
    modal: false,
    // editGear: {},
    editGearItem:{}
    // name:'',
    // brand: '',
    // weight: 0,
    // catagory:'',
    // units: ''
  }
  //Props are the properties themselves 
  //constructor and state building the bookshelf
  //go and fetch the books
  componentDidMount() {
    fetch('http://localhost:4001/')
      .then(result => {
        return result.json();
      })
      .then(result => {
        this.setState({ gear: result })
      });
  }

  toggle = async (e) => {
    await fetch(`http://localhost:4001/${e}`)
      .then(result => {
        return result.json();
      })
      .then(data => {
        this.setState({ editGearItem:data})
      })
      .then(
        this.setState({
          modal: !this.state.modal
        }))
    console.log("toggle", this.state.editGearItem)

  }

  editItem = async (e) => {
    // e.preventDefault()
    // console.log("all", this.state)
    // let data = 
    const data = JSON.stringify(this.state)
    await fetch(`http://localhost:4001/gearlist/:${data._id}`, {
      method: "PUT",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    }
    ).then(
      this.setState({
        modal: !this.state.modal
      }))
  }

  deleteItem = async (e) => {
    // console.log("here",e)
    //  debugger
    let data = { _id: e }
    data = JSON.stringify(data)
    await fetch("http://localhost:4001/gearlist/", {
      method: "DELETE",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    }
    )
    // .then.props.push(Link ="/gearlist")
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value}
      , console.log(e.target.value))
  }

  render() {


    const { editGearItem } = this.state

    console.log(this.state.editGear)
    return (

      <div className="allpage">
      {/* <MDBContainer> */}
        <h1>List of all your stuff</h1>
        {/* <div>
          {this.state.gear.map((gear, index)=>(
            <div key={index}>
                <h3>{gear.name}</h3>
            </div>
          )
            )}
        </div> */}
        
        <MDBTable responsive striped color='black'>
          <MDBTableHead color='black'>
            <tr>
              <th>Gear Name</th>
              <th>Brand</th>
              <th>Weight</th>
              <th>Catagory</th>
              <th>Edit / Delete</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {this.state.gear.map((gear, index) => (
              <tr key={index}>
                <td>{gear._id}</td>
                <td>{gear.brand}</td>
                <td>{gear.weight}</td>
                <td>{gear.category}</td>
                <td>
                  <button className="btn btn-outline-secondary waves-effect" value={gear._id} 
                  // onClick={(e) => this.toggle(e.target.value)}
                  onClick={lin}
                  >Edit</button>
                  {/* <MDBIcon icon="edit"/> */}

                  <button className="btn btn-outline-primary waves-effect" value={gear._id}
                    onClick={(e) => this.deleteItem(e.target.value)}>
                    <MDBIcon icon="trash-alt" className="ml-4" aria-hidden="true" />
                    {/* </MDBBtn> */}
                  </button>
                </td>
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
        
            {/* <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
              <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
              <form onSubmit={(e)=>this.editItem(e.target)}>
              <MDBModalBody>
                <p>Edit your gear</p>
              
                <input type="text" name="name" placeholder={this.state.editGearItem.name} onChange={this.handleChange}></input>

              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" >Close</MDBBtn>
                <button color="primary" type="submit">Save changes</button>

              </MDBModalFooter>
                  </form>
            </MDBModal> */}
            {/* </MDBContainer> */}

            
       </div>


    );
  }
}

export default GearList;
