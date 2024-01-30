import React from 'react';
import Typography from '@mui/material/Typography';

import Job from './Job';

export default function Jobs({jobs}) {
    return (
        <div className="jobs">
            <Typography variant="h1">
                Engineering Jobs Australia
            </Typography>
            {
                jobs.map(
                    job => <Job job={job} />
            )
            }
        </div>
    )
}