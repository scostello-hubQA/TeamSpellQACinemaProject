import React from 'react'
import "../../Css/AboutStyle.css";
import Container from 'react-bootstrap/Container'


const FindUs = () => {
    return (
        <Container maxWidth="md" className="beauty  ">
            <h1> How To Find Us </h1>
            <hr></hr>
            <p> The region is well served by motorways, good public transport and Manchester International Airport is just 10 miles (16km) south of the city centre, with fast and frequent rail travel to Manchester.

Our building is situated close to Manchester's city centre and the routes most commonly travelled by students are well served by public transport. There's a free hop-on/hop-off city centre shuttle service that covers the main city centre areas, parking the main city centre railway stations, main NCP car parks and many bus and Metropark tram stops.</p>
            <br></br>
            {/* <br></br>
            <br></br> */}

            <h5>We look forward to seeing you!</h5>
        </Container>
    )
}

export default FindUs
