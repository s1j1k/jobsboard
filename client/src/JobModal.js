import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function JobModal({job, open, handleClose}) {

    if (!job.title) {
        return <div/>
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    {job.title} -
                    {job.company}
                    <img className={'detail-logo'} src={job.company_logo} />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" dangerouslySetInnerHTML={{__html: job.snippet}} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <a href={job.link} target="_blank">
                    <Button>Apply</Button>
                    </a>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}