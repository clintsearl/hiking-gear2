import React, { Component, useState} from 'react';
// import {BrowserRouter, Link} from 'react-router-dom'
import { MDBCard, MDBCardHeader, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBTableFoot, MDBIcon, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBModal, MDBContainer } from 'mdbreact';
// import Modal from '../components/Modal'
import styled from 'styled-components'
import EditGear from './EditGear'

const allpage = styled.main`{
}`



class GearList extends Component {
  //State is what the data is presently
  state = {
    gear: [],
    modal: false,
    // editGear: {},
    editGearItem:{
      _id:null,
      name:"",
    },
    edited:{
      _id:0,
      name:""
    }
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
    fetch('https://hiking-api.herokuapp.com/')
      .then(result => {
        return result.json();
      })
      .then(result => {
        this.setState({ gear: result })
      });
  }

  toggle = async (e) => {
    await fetch(`https://hiking-api.herokuapp.com/${e}`)
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
    e.preventDefault()
    // console.log("all", this.state)
    debugger
    let id = this.state.edited._id
    let data = JSON.stringify(this.state.edited)
    debugger
    console.log("edit",data)
    await fetch(`https://hiking-api.herokuapp.com/gearlist/${id}`, {
      method: "PUT",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    }
    ).then(
      this.setState({
        modal: !this.state.modal
      }));this.componentDidMount()
  }

  deleteItem = async (e) => {
    // console.log("here",e)
    //  debugger
    let data = { _id: e }
    // maybe add an if statement here to pevent it from sending an empty {} and deleting the first whatever it finds. or maybe it's not all that important because when it refreshes it will be gone and you wont need to worry about it.
    data = JSON.stringify(data)
    await fetch("https://hiking-api.herokuapp.com/gearlist/", {
      method: "DELETE",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    }
    );this.componentDidMount()
// reload() 
// const reload=()=>{this.setState(this.state)}
// this.props.history.push('/gearlist')
  }
  
  handleChange=(e)=>{

    // debugger
    let edited = {...this.state.editGearItem}
    // let fn= (edited)=>{
    // {edited:{e.target.name= e.target.value}}
    // return edited}
    // this.setState(fn(e, edited))
    edited.name = e
    this.setState({edited})
      //looks for the object key editGearItem then the object inside with the key name: and assigns it the new value.
      // {editGearItem: {name: e.target.value}},
    // this.setState({edited: {_id: this.state.editGearItem.id}});
    
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
        
        <MDBTable responsive striped >
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
            {this.state.gear.map((gear, index) => (
              <tr key={index}>
                <td>{gear.name}</td>
                <td>{gear.brand}</td>
                <td>{gear.weight}</td>
                <td>{gear.category}</td>
                <td>
                  <button className="btn btn-outline-secondary waves-effect" value={gear._id} 
                  onClick={(e) => this.toggle(e.target.value)}
                  // onClick={t}
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
        
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
              <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
              <form onSubmit={this.editItem}>
              <MDBModalBody>
                <p>Edit your gear</p>
              
                <input type="text" name='name' placeholder={this.state.editGearItem.name} onChange={(e)=>this.handleChange(e.target.value)}></input>
                <input type="text" name={this.state.editGearItem.name} placeholder={this.state.editGearItem._id} onChange={(e)=>this.handleChange(e.target.value)}></input>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" >Close</MDBBtn>
                <MDBBtn color="primary" type="submit">Save changes</MDBBtn>

              </MDBModalFooter>
                  </form>
            </MDBModal> 
            {/* </MDBContainer>*/}

            
       </div>


    );
  }
}

export default GearList;
