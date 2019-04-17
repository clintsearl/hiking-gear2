import React, { Component } from 'react';
import styled from 'styled-components'

//!!!!!!
// 
//      Current plan, this is a copy of the add gear page I want to route to it
//     then from here make the GET, and then the data placeholders. let them 
//          change it, and then do the PUT  and redirect to the GearList
// !!!!!

const AllPage= styled.main`{
  margin-left:auto;
  max-width:70%;
}`



class EditGear extends Component {  
  // constructor(props){
  //   super(props)
    state ={
     
      name:'',
      brand: '',
      weight: 0,
      category:'',
      units: ''
    // }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleClick = this.handleClick.bind(this)
  }
  
  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value}
      , console.log(e.target.value))
  }
  handleClick(e){
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value})
    
  }

handleSubmit= async (e)=>{
 e.preventDefault()

 const data = JSON.stringify(this.state)
 console.log("first", data)
//  debugger
  await fetch("http://localhost:4001",{
    method:"POST",
    body: data,
    headers:{
      "Content-Type": "application/json"
    }
   

  },console.log("second", data)).then(response => console.log(response.json()))
    
  }

  render() {
    
    console.log(this.state)
    
    return (
      <AllPage>
        <form onSubmit= {this.handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label HTMLfor="gearName">Gear Item</label>
                    <input type="text" className="form-control" name="name" placeholder="What do you call it?" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-4">
                    <label HTMLfor="brand">Brand</label>
      <input type="text" className="form-control" name="brand" placeholder="Brand" value={this.state.brand} onChange={this.handleChange} />
    </div>
  </div>
  <div className="form row">
  <div className="form-group col-md-3">
    <label HTMLfor="weight">Weight</label>
    <input type="number" step="0.01" className="form-control" name="weight" placeholder="Select the Units" value={this.state.value} onChange={this.handleChange}/>
    </div>
    <div className="form-group col-md-5">
      <label HTMLfor="category">Category</label>
      <select name="category" className="form-control" onChange={this.handleChange}>
        <option defaultValue="uncatagorized">Choose...</option>
        <option value="essentials">Essentials</option>
        <option value="sleep">Sleep</option>
        <option value="kitchen">Kitchen</option>
        <option value="clothing">Clothing</option>
        <option value="personal">Personal</option>
        <option value="emergency">Emergency</option>
      </select>
    </div>

    </div>
    <div className="form-group col-md-2">
    <div className="btn-group mr-2" role="group" aria-label="First group">
    {/* <button type="button" className="btn btn-secondary" value= "lb" onClick={e =>this.setState({units: e.target.value})} name="units">lb</button> */}
    <button type="button" className="btn btn-secondary" value= "oz" onClick={this.handleChange} name="units">oz</button>
    <button type="button" className="btn btn-secondary" value= "g" onClick={this.handleChange} name="units">g</button> 
    </div> 
  
  
 
     
  </div>
  <button type="submit" className="btn btn-primary" style={{justifyContent:'center'}}>Add Item</button>
</form>
      </AllPage>
    );
  }
}

export default EditGear;
