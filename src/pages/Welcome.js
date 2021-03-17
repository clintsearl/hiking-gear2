import React from 'react'
import styled from 'styled-components'
import staticImg from '../components/assets/pano-lake.jpg'

const Allpage= styled.div`
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  width:100vw;
  padding:0;
`

const Background =styled.section`
    background-image: url(${staticImg}); 
    height: 50vh;
    width:100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
   
`
const Message = styled.main`
padding:5vw 5vh;
display:flex;
max-width:80vw;
margin-left:auto;
margin-right:auto;
flex-direction:column;
justify-content:center;
align-items:center;
`

const Welcome =()=> {
    return(
      <Allpage>  
            {/* <LandingImg src={staticImg}/> */}
          <Background>
          </Background>
                
          <Message>
            <h1>Welcome to Backpackers database</h1>
            
            <p>“It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing 
            where you might be swept&nbsp;off&nbsp;to.”</p> 
            <p><i>- JRR Tolkien</i></p>
            </Message>
            
            
        </Allpage>
        
    )
}

export default Welcome