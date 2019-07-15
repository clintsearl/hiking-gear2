import React, { Component } from 'react';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBTableFoot, MDBIcon, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBModal, MDBContainer, MDBRow, MDBCol, MDBInput} from 'mdbreact';
import styled from 'styled-components'

const Allpage = styled.main`
  color:white;
  margin-left:auto;
  margin-right:auto;
  width:90vw;
  padding: 5% ;
`
const Loading = styled.main`
  color:white;
  width:100vw;
  margin-left:auto;
  margin-right:auto;
  padding: 100px;
  `
const LoadMessage = styled.div`
  color:white;
  padding:8%;
`

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

    // try {
    //   const response = await fetch(`https://hiking-api.herokuapp.com/${e}`);
    //   if (response.ok) {
    //     const data = response.json();
    //     this.setState({ editGearItem: data })
    //   }
    // } catch (err) {

    // }
  }
  

  editItem = async (e) => {
    e.preventDefault()
    let id = this.state.edited._id
    console.log('circular?', this.state.edited);
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
    if (e === undefined) { return console.log("err") }
    let data = { _id: e.target.value }
    data = JSON.stringify(data)
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
    // let edited = { ...this.state.editGearItem }
    // // let fn= (edited)=>{
    // // {edited:{e.target.name= e.target.value}}
    // // return edited}
    // // this.setState(fn(e, edited))
    // edited.name = e
    // this.setState({ edited})
    // e.persist();
    console.log('AAAA', e);
    this.setState({ edited: { ...this.state.editGearItem, [e.target.name]: e.target.value } })
    //looks for the object key editGearItem then the object inside with the key name: and assigns it the new value.
    // {editGearItem: {name: e.target.value}},
    // this.setState({edited: {_id: this.state.editGearItem.id}});
  }

  render() {
    const { editGearItem } = this.state
    //because of references one [] does not equal another [] it passes a reference not the exact object I decided to compare the length I could have stringified it and then compared them to see if they were identical.
    if (this.state.gear.length === 0 ){
return(
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
          {/* <MDBContainer fluid> 
       
         <MDBRow middle>
         <MDBCol middle size="12"> */}
          <h1>List of all your stuff</h1>
          <MDBTable responsive striped center>
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
                    <MDBBtn className="btn-outline-deep-orange darken-2 waves-effect" value={gear._id}
                      onClick={(e) => this.openModal(e.target.value)}>
                      <MDBIcon icon="edit"/>
                    </MDBBtn>
                    <MDBBtn className="btn-outline-deep-orange darken-2 waves-effect" value={gear._id}
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
                    <MDBInput type="text" name='name' label={this.state.editGearItem.name} onChange={this.handleChange}>
                    </MDBInput>
                    <MDBInput type="text" name='brand' label={this.state.editGearItem.brand} placeholder={this.state.editGearItem.brand} onChange={this.handleChange}>
                    </MDBInput>
                    <MDBInput type="text" name='weight' label={this.state.editGearItem.weight} onChange={this.handleChange}
                    >
                    </MDBInput>
                    <MDBInput type="text" name='category' label={this.state.editGearItem.category} onChange={this.handleChange}
                    >
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
          {/* </MDBCol>
          </MDBRow>
        </MDBContainer> */}
         </Allpage>



    );
  }
}

export default GearList;
