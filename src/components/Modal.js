import React from 'react'
import {  } from "";







toggle = async (e) => {
    await fetch(`http://localhost:4001/${e}`)
      .then(result => {
        return result.json([]);
      })
      .then(result => {
        this.setState({ editGearItem:{...result}})
      })
      .then(
        this.setState({
          modal: !this.state.modal
        }))
    console.log("toggle", this.state.editGearItem)

  }
editItem = async (item) => {
    console.log("all", item)
    let data = item
    data = JSON.stringify(data)
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



const Modal = () =>{
    const [editItem, setItem] = 
    render(
<MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
          <form onSubmit={(e)=>this.editItem(e)}>
          <MDBModalBody>
            <p>Edit your gear</p>
           
            <input type="text" placeholder={this.state.editGearItem.name}></input>

          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" >Close</MDBBtn>
            <button color="primary" type="submit" onClick={(e) => this.editItem(editGearItem)}>Save changes</button>

          </MDBModalFooter>
              </form>
        </MDBModal>



    )}

    export default Modal
