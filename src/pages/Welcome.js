import React from 'react'
import styled from 'styled-components'
import staticImg from '../components/assets/pano-lake.jpg'

const Allpage= styled.div`
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Background =styled.section`
    text-align: center;
    background-image: url(${staticImg}); 
    height: 50vh;
    width:100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
   
`
const Message = styled.main`
padding:5%;
padding-bottom:2.5rem;
      
`

const Welcome =()=> {
    return(
      <Allpage>  
            {/* <LandingImg src={staticImg}/> */}
          <Background>stay in front!!!
          </Background>
                
          <Message>
            <h1>Welcome to Backpackers database</h1>
            
            <p>“It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing 
            where you might be swept off to.”</p> 
            </Message>
            
            
        </Allpage>
        
    )
}

export default Welcome