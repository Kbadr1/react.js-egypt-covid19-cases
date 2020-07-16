import React from 'react';
import flag from "../images/flag.jpg";
import CountUp from "react-countup";

const Header = ({ data: { lastUpdate }}) => {
    return (
        <div className="header mb-5">
            <h1 className="covid text-center ">COVID-19</h1>
            <h1 className="navbar-brand" href="#">
                <img src={flag} width="50" height="30" className="d-inline-block align-top mr-3"/>
                Egypt
            </h1>
            <p> Population: <CountUp start={0} end={102334404} duration={3} separator="," /></p>
            <hr/>
            <p className="date">Last updated: {new Date(lastUpdate).toDateString()}</p>
        </div>
    );
}
 
export default Header;