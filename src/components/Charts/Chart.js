import React, { useState, useEffect } from 'react'

// API
import { fetchDailyData } from '../../api';

// For Charts
import { Line, Bar } from 'react-chartjs-2';

// Styles
import './Chart.css';

export const Chart = ({ data, country }) => {
    
    const [dailyData, setDailyData] = useState({});

    useEffect(() =>{
        const fetchAPI = async () => {
            const daily = await fetchDailyData();
            setDailyData(daily); 
        };

        console.log(dailyData);

        fetchAPI();
    });

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

    const barChart = (
        data.confirmed ? (
            <Bar
                data={{
                    labels: [
                        'Infected',
                        'Recovered',
                        'Deaths'
                    ],
                    datasets: [{
                        label: 'People', 
                        backgroundColor: [
                            'rgba(90, 90, 185, 0.5)',
                            'rgba(90, 185, 90, 0.5)',
                            'rgba(185, 90, 90, 0.5)'
                        ],
                        data: [
                            data.confirmed.value,
                            data.recovered.value,
                            data.deaths.value
                        ]
                    }]
                }}
                options={{
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: `Current State in ${country}`
                    }
                }}
            />
        ) : null
    );

    return (
        <div className="container-chart">
            { country ? barChart : lineChart }
        </div>
    )
}
