import React from 'react';

// Styles
import './Cards.css';

// Material UI
import { Card, CardContent, Typography, Grid, CircularProgress } from '@material-ui/core';

// CountUp, Delay
import CountUp from 'react-countup';
// import Delay from 'react-delay';



export const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if(!confirmed){
        return (
            <CircularProgress color="primary" />
        );
    }

    return (
        <div className="container-card">
                <Grid container spacing={3} justify="center">
                    <Grid item component={ Card } xs={12} md={3} variant="outlined" className="card infected">
                        <CardContent>
                            <Typography className="heading-card" color="textSecondary" gutterBottom>
                                Infected
                            </Typography> 
                            <Typography variant="h5">
                                <CountUp 
                                    start={0}
                                    end={confirmed.value}
                                    duration={1.5}
                                    separator=","
                                />
                            </Typography>
                            <Typography color="textSecondary">
                                { new Date(lastUpdate).toDateString() }
                            </Typography>
                            <Typography className="subtitle-card" variant="body2" color="textSecondary">
                                Number of active cases of COVID-19
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={ Card } xs={12} md={3} variant="outlined" className="card recovered">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Recovered
                            </Typography> 
                            <Typography variant="h5">
                                <CountUp 
                                    start={0}
                                    end={recovered.value}
                                    duration={1.5}
                                    separator=","
                                />
                            </Typography>
                            <Typography color="textSecondary">
                                { new Date(lastUpdate).toDateString() }
                            </Typography>
                            <Typography className="subtitle-card" variant="body2" color="textSecondary">
                                Number of recovery cases from COVID-19
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={ Card } xs={12} md={3} variant="outlined" className="card deaths">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Deaths
                            </Typography> 
                            <Typography variant="h5">
                                <CountUp 
                                    start={0}
                                    end={deaths.value}
                                    duration={1.5}
                                    separator=","
                                />
                            </Typography>
                            <Typography color="textSecondary">
                                { new Date(lastUpdate).toDateString() }
                            </Typography>
                            <Typography className="subtitle-card" variant="body2" color="textSecondary">
                                Number of deaths because of COVID-19
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
        </div>
    )
}
