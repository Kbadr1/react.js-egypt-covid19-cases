import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from "axios";
import Count from './components/Count';
import Header from './components/Header';
import Chart from "./components/Chart";


function App() {

    const [data, setData] = useState({
        confirmed: null,
        deaths: null,
        recovered: null,
        lastUpdate: null
    });

    useEffect(() => {
        getData();
    },[])

    const getData = () => {
        axios.get(`https://covid19.mathdro.id/api/countries/egypt`)
            .then(res => {
                console.log(res.data);
                const { confirmed, deaths, recovered, lastUpdate } = res.data;
                setData({
                    confirmed: confirmed.value,
                    deaths: deaths.value,
                    recovered: recovered.value,
                    lastUpdate: lastUpdate
                });
            })
            .catch(err => console.log(err));
    }    

    return (
        <div className="App container">
            <Header data={data}/>
            <div className="row count-chart">
                <div className="col-lg-4">
                    <Count data={data}/>
                </div>
                <div className="col-lg-8">
                    <Chart data={data} />
                </div>
            </div>
        </div>
    );
}

export default App;
