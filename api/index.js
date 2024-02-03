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
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");

    return res.send(jobs)

})

app.listen(port, () => {
    console.log(`API listening on port ${port}`);
})