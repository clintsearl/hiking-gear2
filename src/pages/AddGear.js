import React, { Component } from 'react';
import styled from 'styled-components'

const AllPage= styled.main`{
  margin: auto;
  max-width:80%; 
  textAlign: center;
  alignItems: center; 
}`

class AddGear extends Component {



  render() {
    return (
      <AllPage>
        <form>
            <div class="form-row">
                <div class="form-group col-md-5">
                    <label for="gearName">Gear Item</label>
                    <input type="text" class="form-control" id="gearName" placeholder="What do you call it?"/>
                </div>
                <div class="form-group col-md-5">
                    <label for="inputPassword4">Brand</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div className="form row">
  <div class="form-group col-md-3">
    <label for="weight">Weight</label>
    <input type="text" class="form-control" id="weight" placeholder="Select the Units"/>
    </div>
    <div class="form-group col-md-5">
      <label for="Catagory">Catagory</label>
      <select id="Catagory" class="form-control">
        <option selected>Choose...</option>
        <option>Essentials</option>
        <option>Sleep</option>
        <option>Kitchen</option>
        <option>Clothing</option>
        <option>Personal</option>
        <option>Emergency</option>
      </select>
    </div>

    </div>
    <div class="form-group col-md-2">
    <div class="btn-group mr-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-secondary">lb</button>
    <button type="button" class="btn btn-secondary">oz</button>
    <button type="button" class="btn btn-secondary">g</button> 
    </div> 
  
  
 
     
  </div>
  <button type="submit" class="btn btn-primary">Add Item</button>
</form>
      </AllPage>
    );
  }
}

export default AddGear;
