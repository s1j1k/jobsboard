import React, { useState, useEffect } from 'react';
import './App.css';
import Jobs from './Jobs';

const JOB_API_URL = 'http://localhost:3001/jobs';

async function fetchJobs(updateCb: React.Dispatch<React.SetStateAction<any[]>>) {
    try {
        const res = await fetch(JOB_API_URL);
        const json = await res.json();
        updateCb(json);
    } catch (error) {
        console.error('Error fetching jobs:', error);
        // Handle error, you might want to update the state accordingly
    }
}

function App() {
    const [jobList, updateJobs] = useState([]);

    useEffect(() => {
        fetchJobs(updateJobs);
    }, []);

    return (
        <div className="App">
            <Jobs jobs={jobList} />
        </div>
    );
}

export default App;
