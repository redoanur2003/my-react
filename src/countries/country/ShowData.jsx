import React, { useState } from 'react';

const ShowData = ({ info, visitedHandle }) => {
    const [visited, setVisited] = useState(false);

    function handleButton() {
        if (visited === false) {
            setVisited(true)
            visitedHandle(true)
        }
        else {
            setVisited(false)
            visitedHandle(false)
        }
    }
    return (
        <>
            <div className={`data ${visited && 'visited-country'}`}>
                <div>
                    <p>Country name: {info.name.common} </p>
                    <p>Country capital: {info.capital.capital} </p>
                    <p>Country region: {info.region.region} </p>
                    <p>Country continents: {info.continents.continents} </p>
                    <p>Country code: {info.ccn3.ccn3} </p>
                    {/* <p>Country population: {info.population.population} </p> */}
                    <p>Country area: {info.area.area} {info.area.area > 120000 && ' This is a big country' || " This is a small country"} </p>
                    <button onClick={handleButton}>
                        {visited ? 'Visited' : 'Not visited'}
                    </button>
                </div>

                <div>
                    <img src={info.flags.flags.png} alt={info.flags.flags.alt} />
                </div>

            </div>
        </>
    );
};

export default ShowData;

function TotalVisited() {

}