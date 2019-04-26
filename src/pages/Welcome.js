import React from 'react'
import styled from 'styled-components'
import staticImg from '../components/assets/pano-lake.jpg'

const Allpage= styled.div`
background-color:#202124;
hight:100vh;
width:100vw;
display: flex;
flex-direction:column;

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



` 
const LandingImg = styled.img`
        background-color: #282c34;
        max-width:100vw;  
        align-items: center;
        
`
const Footer = styled.footer`
  background-color:#AD9477;
  width:100vw;
  position:absolute;
 bottom:0;
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
            
            <Footer>
              Clint Earl
              link
              link
            </Footer>
        </Allpage>
        
    )
}

export default Welcome