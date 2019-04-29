import React, {useState} from 'react'
import styled from 'styled-components'


const AllPage = styled.main`
    color:white
`
const LeftSide= styled.div`

`
const RightSide= styled.div`

`


const About=()=>{
    return(
        <AllPage>
            <LeftSide>
            <h1>About this Project</h1>
            <p>This is a work of passion, and still in progress...</p>
            <p>There are a number of things I hope to add in the future. Some of them being short term and others I'll need to learn a number of things before they can be added.</p>
           </LeftSide>
           <RightSide>
               <h3>List of upcoming features</h3>
            <dl>
                <dt>Authentication </dt>
                <dd>Yes currently my gear list is what everyone sees. Anyone could perhaps delete the data in my database or add the kitchen sink to my gear list.</dd>
                <dd>This will also be nessasary for when I want to send it out and let others have their own list as well.</dd>
                <dd>However, currently it's convinent to let friends, family, and hiring managers checkout my work without creating their own account and data.</dd>
            </dl>
            </RightSide>
        </AllPage>
    )
}

export default About
