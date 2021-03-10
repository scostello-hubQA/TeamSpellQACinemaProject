import React from 'react'
import films from "../../../Resources/Movies.json"
import ToggleInput from './ToggleInput'

const ReadAll = ({basketid, query}) => {

    const byQuery = (query) => (films) => films.title.toLowerCase().includes(query.toLowerCase());

    let filteredList = [];
    filteredList = films.filter(byQuery(query));




    return (

        <>
            <div className="container">
                {filteredList.map((film) => (
                    <div key={film.id} >
                        <hr />
                        <div className="row" style={{marginLeft:"20px"}}>
                            <h4 style={{ color: 'gold' }} >{film.title}</h4>
                            <ToggleInput basketid={basketid} filmname={film.title} />
                        </div>
                        <h6 style={{ color: 'gold', marginTop: "3px", marginLeft:"20px" }}>Rated: {film.rating}</h6>

                        {/* <img style={{height:"300px", width:"300px"}} src={film.img} alt=""/> */}


                    </div>
                ))}
            </div>
        </>
    )
}

export default ReadAll