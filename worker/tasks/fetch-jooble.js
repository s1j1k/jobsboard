import "node-fetch";
import {createClient} from "redis";

const client = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

const baseURL = "https://jooble.org/api/";
const key = "b595a9db-0c76-45b1-b48c-fc0e2ceb06d3";
// required for jooble API
const params = { keywords: 'Engineer, Developer, Software, Computer', location: 'Australia'};
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

console.log("fetching jooble");

export async function fetchJooble(){

    let resultCount = 1, onPage = 1;
    const allJobs = [];

    while (resultCount > 0) {
        params["page"] = onPage;
        const res = await fetch(`${baseURL}${key}`, {method: 'POST', headers: myHeaders, body: JSON.stringify(params)});
        let jobs = await res.json();
        // get the array of jobs itself
        jobs = jobs["jobs"];
        allJobs.push(...jobs);
        resultCount = jobs.length;
        console.log('got', jobs.length, ' jobs');
        onPage++
    }
    console.log('got', allJobs.length, ' jobs');
    const success = await client.set("jooble", JSON.stringify(allJobs));
    console.log({success});
}

// testing only
fetchJooble();
