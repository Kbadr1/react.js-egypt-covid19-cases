import React from 'react';
import { Pie } from "react-chartjs-2";

const Chart = ({ data: { confirmed, deaths, recovered } }) => {
    return (
        <div className="chart">
            <Pie
                data={{
                    labels: ["Confirmed", "Deaths", "recovered"],
                    datasets: [{
                        backgroundColor: [
                            "rgba(0, 128, 0, 0.9)",
                            "rgba(255, 0, 0, 0.9)",
                            "rgba(0, 0, 255, 0.9)"
                        ],
                        hoverBackgroundColor: [
                            'rgba(0, 128, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(0, 0, 255, 1)'
                        ],
                        data: [confirmed, deaths, recovered]
                    }]
                }}
            />
        </div>
    );
}
 
export default Chart;