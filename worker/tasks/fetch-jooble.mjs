import("node-fetch");
import {createClient} from "redis";

const client = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

const baseURL = "https://jooble.org/api/";
const key = "b595a9db-0c76-45b1-b48c-fc0e2ceb06d3";
// required for jooble API
const params = "{ keywords: 'Junior Software Developer', location: 'Melbourne, Australia'}";
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

console.log("fetching jooble")

async function fetchJooble(){
    const res = await fetch(`${baseURL}${key}`, {method: 'POST', headers: myHeaders, body: params});
    let jobs = await res.json();
    // get the array of jobs itself
    jobs = jobs["jobs"];
    console.log('got', jobs.length, ' jobs');
    const success = await client.set("jooble", JSON.stringify(jobs));
    console.log({success});
}

fetchJooble()
