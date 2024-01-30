var CronJob  = require('cron').CronJob;


const fetchJooble = require('./tasks/fetch-jooble.mjs')

const job = new CronJob(
    '* * * * *', // cronTime
    fetchJooble, // onTick
    null, // onComplete
    true, // start
    'America/Los_Angeles' // timeZone
);
// job.start() is optional here because of the fourth parameter set to true.