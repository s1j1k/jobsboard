import('node-fetch');

const baseURL = "https://jobs.github.com/positions.json";

async function fetchGithub(){
    const res = await fetch(baseURL);
    const jobs = await res.json();
    console.log({jobs});
    console.log(jobs.length);
}

fetchGithub();