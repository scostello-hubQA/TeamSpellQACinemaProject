import React from 'react'
import ReadAll from '../FilmList/ReadAll'
import Sidebar from '../Sidebar/Sidebar'
import "../Resources/TicketBooking.css"

const TicketBooking = () => {
    return (

        <>
            <div className="row">
                <div className="col-9">
                    <br />
                    <h2 style={{ color: "white", backgroundColor:"grey", marginLeft:"25px" }}><center>Ticket Booking:</center></h2>
                    
                    <br/>
                    <br/>
                    <div className="">
                    <ReadAll />
                    </div>
                </div>
                <div className="col-3">
                    <Sidebar />
                </div>
            </div>
        </>

    )

}

export default TicketBooking
