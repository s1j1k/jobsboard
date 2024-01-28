import('node-fetch');
const baseURL = "https://jooble.org/api/";
const key = "b595a9db-0c76-45b1-b48c-fc0e2ceb06d3";
const url = baseURL + key;
const keywords = "Junior Software Developer";
const location = "Melbourne, Australia";
const params = "{ keywords: 'Junior Software Developer', location: 'Melbourne, Australia'}";
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

async function fetchJooble(){

    let resultCount = 1; //, onPage = 0;
    const allJobs = [];
    const res = await fetch(`${url}`, {method: 'POST', headers: myHeaders, body: params});
    let jobs = await res.json();
    console.log(jobs);
    jobs = jobs["jobs"];
    allJobs.push(...jobs);
    console.log('got', allJobs.length, ' jobs')
}

fetchJooble();