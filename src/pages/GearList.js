import React, { Component } from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBTableFoot, MDBIcon, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBModal, MDBContainer, MDBRow, MDBCol, MDBInput} from 'mdbreact';
import styled from 'styled-components'

const Allpage = styled.main`{
  color:white;
  margin-left:auto;
  margin-right:auto;
  width:100vw;
}`
const Loading =styled.main`{
  color:white;
  width:100vw;
  min-height:90vh;
  text-align:center;
}`
const LoadMessage =styled.div`{
  color:white;
  min-height: 80vh;
  display:flex;
  align-items: center;
  justify-content: space-around;
}`
const Pmessage = styled.p`{
  display:flex;

}`



class GearList extends Component {
  //State is what the data is presently
  state = {
    gear: [],
    modal: false,
    editGearItem: {
      _id: null,
      name: "",
    },
    edited: {
      _id: 0,
      name: ""
    }
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
  toggle =()=>{
    this.setState({
      modal: !this.state.modal
    })
  }
  openModal = async (e) => {
    await fetch(`https://hiking-api.herokuapp.com/${e}`)
      .then(result => {
        return result.json();
      })
      .then(data => {
        this.setState({ editGearItem: data })
      })
      .then(
        this.toggle())
    console.log("toggle", this.state.editGearItem)

  }
  

  editItem = async (e) => {
    e.preventDefault()
    // console.log("all", this.state)
    let id = this.state.edited._id
    let data = JSON.stringify(this.state.edited)
    console.log("edit", data)
    await fetch(`https://hiking-api.herokuapp.com/gearlist/${id}`, {
      method: "PUT",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
      
    }
    ).then(
      this.toggle()); 
      this.componentDidMount()
  }

  deleteItem = async (e) => {
    console.log("here", e.target.value)
    if (e === undefined) { return console.log("err") }
    let data = { _id: e.target.value }
    // maybe add an if statement here to pevent it from sending an empty {} and deleting the first whatever it finds. or maybe it's not all that important because when it refreshes it will be gone and you wont need to worry about it.
    data = JSON.stringify(data)
    // debugger
    await fetch("https://hiking-api.herokuapp.com/gearlist/", {
      method: "DELETE",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    }
    ); this.componentDidMount()
  }

  handleChange = (e) => {
    // debugger
    let edited = { ...this.state.editGearItem }
    // let fn= (edited)=>{
    // {edited:{e.target.name= e.target.value}}
    // return edited}
    // this.setState(fn(e, edited))
    edited.name = e
    this.setState({ edited })
    //looks for the object key editGearItem then the object inside with the key name: and assigns it the new value.
    // {editGearItem: {name: e.target.value}},
    // this.setState({edited: {_id: this.state.editGearItem.id}});
  }

  render() {
    const { editGearItem } = this.state
    //because of references one [] does not equal another [] it passes a reference not the exact object I decided to compare the length I could have stringified it and then compared them to see if they were identical.
    if (this.state.gear.length === 0 ){
return(
    // add if statement here for loading
    <Loading>
   
    <LoadMessage>
  <strong>Loading...</strong>
  
  <div big className="spinner-border text-warning" role="status" color='primary'></div>
  </LoadMessage>
  <p>Just a minute as the Database wakes up.</p>
</Loading>
)}
    console.log("here",this.state.gear)
    return (

        <Allpage>
        <MDBContainer fluid> 
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
            <MDBTableHead color="blue-grey lighten-4" >
              <tr>
                <th>Gear Name</th>
                <th>Brand</th>
                <th>Weight</th>
                <th>Catagory</th>
                <th>Edit / Delete</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody color="blue-grey lighten-4">
              {this.state.gear.map((gear, index) => (
                <tr key={index}>
                  <td>{gear.name}</td>
                  <td>{gear.brand}</td>
                  <td>{gear.weight}</td>
                  <td>{gear.category}</td>
                  <td>
                    <MDBBtn className="btn btn-outline-secondary waves-effect" value={gear._id}
                      onClick={(e) => this.openModal(e.target.value)}>
                      <MDBIcon icon="edit"/>
                    </MDBBtn>
                    <MDBBtn className="btn btn-outline-secondary waves-effect" value={gear._id}
                      onClick={(e) => this.deleteItem(e)}>
                      <MDBIcon icon="trash-alt" className="ml-1" />
                    </MDBBtn>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
            <MDBTableFoot color="blue-grey lighten-4">
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </MDBTableFoot>
          </MDBTable>
          
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
              <MDBModalHeader toggle={this.toggle}>
              <p className="h4 text-center mb-4" color="black">Write to us</p>
               </MDBModalHeader>
              <form onSubmit={this.editItem}>
                <MDBModalBody>
                  <MDBRow>
                  <MDBCol md="8">
                    <MDBInput type="text" name='name' label={this.state.editGearItem.name} onChange={(e) => this.handleChange(e.target.value)}>
                    </MDBInput>
                    <MDBInput type="text" name='brand' label={this.state.editGearItem.brand} placeholder={this.state.editGearItem.brand} onChange={(e) => this.handleChange(e.target.value)}>
                    </MDBInput>
                    <MDBInput type="text" name='weight' label={this.state.editGearItem.weight} onChange={(e) => this.handleChange(e.target.value)}>
                    </MDBInput>
                    <MDBInput type="text" name='category' label={this.state.editGearItem.category} onChange={(e) => this.handleChange(e.target.value)}>
                    </MDBInput>
                  </MDBCol>
                    </MDBRow>
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                  <MDBBtn color="primary" type="submit">Save changes</MDBBtn>

                </MDBModalFooter>

              </form>

            </MDBModal>
         
        </MDBContainer>
        </Allpage>



    );
  }
}

export default GearList;
