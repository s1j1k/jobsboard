import {CronJob} from 'cron';
import {fetchJooble} from './tasks/fetch-jooble.js';

const job = new CronJob(
    '* * * * *', // cronTime
    fetchJooble, // onTick
    null, // onComplete
    true, // start
    'America/Los_Angeles' // timeZone
);
// job.start() is optional here because of the fourth parameter set to true.