import React, { useState, useEffect } from 'react'

// API
import { fetchDailyData } from '../../api';

// For Charts
import { Line, Bar } from 'react-chartjs-2';

// Styles
import './Chart.css';

export const Chart = () => {
    
    const [dailyData, setDailyData] = useState([]);

    useEffect(() =>{
        const fetchAPI = async () => {
            const daily = await fetchDailyData();
            setDailyData(daily); 
        };

        console.log(dailyData);

        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length ? <Line 
                        data={{
                            labels: dailyData.map(({ date }) => date),
                            datasets: [{
                                data: dailyData.map(({ confirmed }) => confirmed),
                                label: 'Infected',
                                borderColor: '#3333ff',
                                fill: true
                            }, {
                                data: dailyData.map(({ deaths }) => deaths),
                                label: 'Deaths',
                                borderColor: 'red',
                                backgroundColor: 'rgba(90, 90, 90, 0.5)',
                                fill: true
                            }],
                        }}
                    /> : null
    );

    return (
        <div className="container-chart">
            { lineChart }
        </div>
    )
}
