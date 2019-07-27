import React, { Component } from 'react';
import styled from 'styled-components'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';


const AllPage= styled.main`
  color:#bec8c9;
  width:100vw;
  height:100vh;
  display:flex;
  text-align:center;
  justify-content: center;
  align-items: center;
  flex-direction:column;
    .form-row{
      display:flex;
      justify-content:center;
      width:60vw;
    }
    & h1{
      font-size: calc(20px + 2vmin);
      color:#c3562f;
      padding-bottom:25px;
    }
 `



class AddGear extends Component {  
  // constructor(props){
  //   super(props)
    state ={ 
      name:'',
      brand: '',
      weight: 0,
      category:'',
      units: ''
    // these aren't needed because I used arrow functions in the onClick
    // this.handleChange = this.handleChange.bind(this)
    // this.handleClick = this.handleClick.bind(this)
  }
  
  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value}
      , console.log(e.target.value))
  }
  handleClick=(e)=>{
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value})   
  }

handleSubmit= async (e)=>{
 e.preventDefault()

 const data = JSON.stringify(this.state)
 console.log("first", data)
//  debugger
  await fetch("https://hiking-api.herokuapp.com/",{
    method:"POST",
    body: data,
    headers:{
      "Content-Type": "application/json"
      }
    }
  // console.log("second", data)).then(response => console.log(response.json())
    )
    this.props.history.push('/gearlist')    
  }

  render() {
    
    console.log(this.state)
    
    return (
       <AllPage>
         <h1>Fill out the info about the gear</h1>
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
  <div className="form-row">
  
    <div className="form-group col-md-4">
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
    <div className="form-group col-md-3">
        <label HTMLfor="weight">Weight</label>
        <input type="number" step="0.01" className="form-control" name="weight" placeholder="Select the Units" value={this.state.value} onChange={this.handleChange}/>
    </div>
    </div>
    <div className="form-row" style={{justifyContent:'space-around'}}>
    <div className="form-group col-md-3">
    <div className="btn-group mr-2" role="group" aria-label="First group">
    {/* <button type="button" className="btn btn-secondary" value= "lb" onClick={e =>this.setState({units: e.target.value})} name="units">lb</button> */}
    <button type="button" className="btn btn-deep-orange darken-2y" value= "oz" onClick={this.handleChange} name="units">oz</button>
    <button type="button" className="btn btn-deep-orange darken-2" value= "g" onClick={this.handleChange} name="units">g</button> 
    </div>  
  </div>
  <div className="form-group col-md-3">
  <button type="submit" className="btn btn-deep-orange darken-2 " style={{justifyContent:'center', width:"100%"}}>Add Item</button>
      </div>
  </div>
</form>
       
      </AllPage>
    );
  }
}

export default AddGear;
