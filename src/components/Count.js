import React from 'react';
import CountUp from "react-countup";

const Header = ({ data: { confirmed, deaths, recovered } }) => {
    return (
        <div className="Count row">
            <div className="count-box confirmed text-center col-12">
                <div className="count col-12">
                <h3><i className="fa fa-check"></i> <CountUp start={0} end={confirmed} duration={3} separator="," /></h3>
                <h5>Total Confirmed Cases</h5>
                </div>
            </div>
            <div className="count-box deaths text-center col-12">
                <div className="count col-12">
                <h3><i className="fa fa-exclamation"></i> <CountUp start={0} end={deaths} duration={3} separator="," /></h3>
                <h5>Total Deaths</h5>
                </div>
            </div>
            <div className="count-box recovered text-center col-12 ">
                <div className="count col-12">
                <h3><i className="fa fa-heartbeat"></i> <CountUp start={0} end={recovered} duration={3} separator="," /></h3>
                <h5>Total recovered</h5>
                </div>
            </div>
        </div>
    );
}
 
export default Header;