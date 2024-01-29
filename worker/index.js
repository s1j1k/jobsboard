var CronJob  = require('cron').CronJob;

const fetchJooble = require('./tasks/fetch-jooble.js')

const job = new CronJob(
    '*/1 * * * * *', // cronTime
    fetchJooble, // onTick
    null, // onComplete
    true, // start
    'America/Los_Angeles' // timeZone
);
// job.start() is optional here because of the fourth parameter set to true.