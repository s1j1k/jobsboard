import express from "express";
import {createClient} from "redis";

const app = express();
const port = 3001;

// connect to redis client
const client = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

app.get('/jobs', async (req, res) => {

    const jobs = await client.get('jooble');

    return res.send(jobs)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})