import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function getDateString(date) {
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    //const daysOfWeek = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"]
    date = new Date(date.split('T')[0])
    //return `${daysOfWeek[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

export default function Job({job}) {


    return (
    <Paper className={'job'}>
        <div>
            <Typography variant="h6">{job.title}</Typography>
            <Typography variant="h5">{job.company}</Typography>
            <Typography>{job.location}</Typography>
        </div>
        <div>
            <Typography>{getDateString(job.updated)}</Typography>
        </div>
    </Paper>
    )
}