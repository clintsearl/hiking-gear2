import React from 'react'
import styled from 'styled-components'
import staticImg from '../components/assets/pano-lake.jpg'

const Allpage= styled.div`
background:
`

const Background =styled.section`
    text-align: center;
    background-image: url(${staticImg}); 
    height: 50vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
` 
const LandingImg = styled.img`
        background-color: #282c34;
        max-width:100vw;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        
`
const Welcome =()=> {
    return(
      <Allpage>  
            {/* <LandingImg src={staticImg}/> */}
          <Background>
          </Background>
                
             
            <h1>Welcome to Backpackers database</h1>
            
            <p>“It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing 
            where you might be swept off to.”</p> 
        </Allpage>
        
    )
}

export default Welcome