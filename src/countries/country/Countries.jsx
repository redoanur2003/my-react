import React, { use, useState } from 'react';
import ShowData from './ShowData';
import './Countries.css'

const Countries = ({ countryData }) => {
    const data = use(countryData);
    const countryInfo = data.countries;
    // console.log(countryInfo);
    const [count, setCount] = useState(0);
    const visitedHandle = (visited) => {
        if (visited === true) {
            const newd = count + 1;
            setCount(newd)
        }
        else {
            const newd = count - 1;
            setCount(newd)
        }
    }
    return (
        <div>
            <h1>Country : {countryInfo.length}</h1>
            <h3>Total visited country: {count}</h3>
            {/* <ShowData></ShowData> */}
            <div className='desh'>
                {countryInfo.map(info =>
                    <ShowData key={info.ccn3.ccn3} info={info} visitedHandle={visitedHandle}></ShowData>)}
            </div>

        </div>
    );
};

export default Countries;