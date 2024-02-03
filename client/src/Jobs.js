import React from 'react';
import Typography from '@mui/material/Typography';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import Job from './Job';
const N_JOBS_PER_PAGE = 50;

export default function Jobs({jobs}) {

    const numJobs = jobs.length;
    const numPages = Math.ceil(numJobs / N_JOBS_PER_PAGE);
    const [activeStep, setActiveStep] = React.useState(0);

    const jobsOnPage = jobs.slice(activeStep * N_JOBS_PER_PAGE, activeStep * N_JOBS_PER_PAGE + N_JOBS_PER_PAGE);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return <div className="jobs">
        <Typography variant="h4" component="h1">
            Entry Level Engineering Jobs
        </Typography>
        <Typography variant="h6" component="h2">
            Found {numJobs} Jobs
        </Typography>
        {
            jobsOnPage.map(
                job => <Job job={job} />
        )
        }
        <div>Page {activeStep + 1} of {numPages}</div>
        <MobileStepper
            variant="progress"
            steps={numPages}
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: 400, flexGrow: 1 }}
            nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === numPages-1}>
                    Next
                    <KeyboardArrowRight />
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    <KeyboardArrowLeft />
                    Back
                </Button>
            }
        />
    </div>
}