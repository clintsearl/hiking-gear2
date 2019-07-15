import React, {useState} from 'react'
import styled from 'styled-components'
import {MDBIcon, MDBCol, MDBRow, MDBContainer} from 'mdbreact'
import path from '../components/assets/path-down.jpg'
import Lightbox from 'react-image-lightbox'


const AllPage = styled.main`
    color:#bec8c9;
  width:100vw;
  min-height:100vh;
`
const LeftSide= styled.div`
    padding:5%;

    @media (max-width: 850px){
        width:100vw;
        height:auto;
        padding:0;

    }
`
const RightSide= styled.div`
    padding:5vh 5vw;
    
        & h1{
        font-size: calc(12px + 2vmin);
        color:#c3562f;
        }
        & p{
        text-align:left;
        }
`
const List = styled.div`
    padding:5vh 20vw;
    min-height:100vh;
    text-align:left;
    & h3{
        font-size: calc(10px + 2vmin);
        color:#c3562f;
        text-align:center;
        }
    dd{
        margin-left:25px;
    }
    @media (max-width:850px) {
        padding:2vh 5vw;
    }

`

const bigImage = '../components/assets/path-down.jpg'

const About=()=>{
    const [isOpen, setisOpen] = useState()
    return(
        <AllPage>
            <MDBContainer fluid className="p-0">
            <MDBRow>
            <MDBCol className="ml-auto">
           <LeftSide>
            <img src={path} className="img-fluid"
            onClick={()=> setisOpen(true)}
            />
            
            {isOpen &&(
          <Lightbox
            mainSrc={bigImage}     
            onCloseRequest={() =>setisOpen(false) }  
          />
        )}
            <fig-caption>Looking down at the trail to dead horse lake.</fig-caption>
           </LeftSide>
           </MDBCol>
           <MDBCol className="ml-auto">
           <RightSide>
           <h1>About this Project</h1>
            <p>Just like this picture from my hike to dead horse lake in the Uintas the path can be seen far below. However, the trail to get to the bottom disapears in the steep mountain switchbacks.</p>
            <p>There are a number of things I hope to add in the future.  Some of them being short term and others I'll need to learn a number of things before they can be added.</p>
            </RightSide>
            </MDBCol>
            </MDBRow>
            <MDBRow className="ml-auto">
            <List>
               <h3>List of upcoming features</h3>
            <dl>
                <dt><MDBIcon icon="hiking" className='p-3'/>Authentication / User login</dt>
                <dd><MDBIcon icon="code" className='p-2'/>Yes currently my gear list is what everyone sees. Anyone could perhaps delete the data in my database or add the kitchen sink to my gear list.</dd>
                <dd><MDBIcon icon="code" className='p-2'/>This will also be nessasary for when I want to send it out and let others have their own list as well.</dd>
                <dd><MDBIcon icon="code" className='p-2'/>However, currently it's convinent to let friends, family, and hiring managers checkout my work without creating their own account and data.</dd>
                <dt><MDBIcon icon="hiking" className='p-3'/>Adding functionality to the gear list</dt>
                <dd><MDBIcon icon="code" className='p-2'/>
                Sorting by catagories and weight
                </dd>
                <dd><MDBIcon icon="code" className="p-2"/>
                    Total weight at the bottom
                </dd>
                <dt><MDBIcon icon="hiking" className='p-3'/>Add to pack button</dt>
                <dd><MDBIcon icon="code" className="p-2"/>
                    This button will help make a list of what you want to bring with you and see the total of what you want to take.
                </dd>
                <dd><MDBIcon icon="code" className="p-2"/>
                    Save lists of what you took and name them. Then you can pull up lists for short hikes or long as well as summer or fall.
                </dd>
            </dl>
            </List>
            </MDBRow>
            </MDBContainer>
        </AllPage>
    )
}

export default About
