import React, { useState } from 'react'
import styled from 'styled-components'
import { MDBIcon, MDBCol, MDBRow, MDBContainer } from 'mdbreact'
import path from '../components/assets/path-down.jpg'
import Lightbox from 'react-image-lightbox'


const AllPage = styled.main`
    color:#bec8c9;
  width:100vw;
  min-height:100vh;
`
const LeftSide = styled.div`
    padding:5%;

    @media (max-width: 850px){
        width:100vw;
        height:auto;
        padding:0;

    }
`
const RightSide = styled.div`
    padding:5vh 5vw;
    
        & h1{
        font-size: calc(12px + 2vmin);
        color:#c3562f;
        }
        & h3{
        font-size: calc(10px + 2vmin);
        color:#c3562f;
        text-align:center;
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

const About = () => {
    const [isOpen, setisOpen] = useState()
    return (
        <AllPage>
            <MDBContainer fluid className="p-0">
                <MDBRow>
                    <MDBCol className="ml-auto">
                        <LeftSide>
                            <img src={path} className="img-fluid"
                                onClick={() => setisOpen(true)}
                            />

                            {isOpen && (
                                <Lightbox
                                    mainSrc={bigImage}
                                    onCloseRequest={() => setisOpen(false)}
                                />
                            )}
                            <fig-caption>Looking down at the trail to dead horse lake.</fig-caption>
                        </LeftSide>
                    </MDBCol>
                    <MDBCol className="ml-auto">
                        <RightSide>
                            <h1>About this Project</h1>
                             <p>First the technical details. I build this full stack app using React, and for the design I used a combination  of things. The Styled Components, Material Design Bootstrap, and the Add Gear form is regular Bootstrap. The back end is built with Express, the Node.js framework and it is RESTful. The React frontend is hosted on Netlify and the Express API is hosted on Heroku. Perhaps you were lucky enough to glimpse the loading message on the gear list page. The API on Heroku falls asleep, but it usually doesn’t take more than 15 seconds to wake up and load. The front end on the other hand I moved to Netlify because it occasionally it took too long to load and an error message would appear.</p>

                            <h3>On a less technical note</h3>
                                <p>This project is somewhat like my picture from a hike I took to dead horse lake in the Uintas. The path can be seen far below however, the trail to get to the bottom disappears in the steep mountain switchbacks. There’s a vision I have of the project including user logins, functionality to help packing, and trip planning resources. Like the trail, these features are what I see off in the distance. The switchbacks down the trail are all the things I am learning and experimenting with to get to the final vision. </p>

                        </RightSide>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="ml-auto">
                    <List>
                        <h3>List of upcoming features</h3>
                        <dl>
                            <dt><MDBIcon icon="hiking" className='p-3' />Authentication / User login</dt>
                            <dd><MDBIcon icon="code" className='p-2' />Yes currently my gear list is what everyone sees. Anyone could perhaps delete the data in my database or add the kitchen sink to my gear list.</dd>
                            <dd><MDBIcon icon="code" className='p-2' />This will also be nessasary for when I want to send it out and let others have their own list as well.</dd>
                            <dd><MDBIcon icon="code" className='p-2' />However, currently it's convinent to let friends, family, and hiring managers checkout my work without creating their own account and data.</dd>
                            <dt><MDBIcon icon="hiking" className='p-3' />Adding functionality to the gear list</dt>
                            <dd><MDBIcon icon="code" className='p-2' />
                                Sorting by catagories and weight
                </dd>
                            <dd><MDBIcon icon="code" className="p-2" />
                                Total weight at the bottom
                </dd>
                            <dt><MDBIcon icon="hiking" className='p-3' />Add to pack button</dt>
                            <dd><MDBIcon icon="code" className="p-2" />
                                This button will help make a list of what you want to bring with you and see the total of what you want to take.
                </dd>
                            <dd><MDBIcon icon="code" className="p-2" />
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
