import React from 'react'
import "./Screen.css"
const ScreenInfoCard = ({title,cost,desc}) => {

    return (
        <center>
            <div className="container" style={{backgroundColor:"gray"}} type="hidden">
                <div className="col-4">
                <p id="myInfoTitle" style={{fontSize:"6vmin", color:"black", fontWeight:"800"}}>{title}</p>
                <p id="myInfo">{cost}</p>
                <p id="myInfo">{desc}</p>

                </div>
            </div>
        </center>
    )
}

export default ScreenInfoCard