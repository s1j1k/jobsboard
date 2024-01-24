import('node-fetch');

let url = "https://jooble.org/api/";
const key = "b595a9db-0c76-45b1-b48c-fc0e2ceb06d3";
url = url + key;
const keywords = "Junior Software Developer";
const location = "Melbourne, Australia";
const params = "{ keywords: 'Junior Software Developer', location: 'Melbourne, Australia'}";

async function fetchJooble(){
    //const res = await fetch(`${url}?keywords=${keywords}&location=${location}`, {method: 'POST'});

    // add correct headers information
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const res = await fetch(url, {method: 'POST', headers: myHeaders, body: params});
    const jobs = await res.json();
    //console.log(jobs);
    console.log(jobs.length)

}

fetchJooble();