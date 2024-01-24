var XMLHttpRequest = require('xhr2');

const url = "https://jooble.org/api/";
const key = "b595a9db-0c76-45b1-b48c-fc0e2ceb06d3";
const params = "{ keywords: 'junior developer, entry level, software', location: 'Australia'}";

async function fetchJooble(){
    const res = await fetch(url);
    const jobs = await res.json();
    console.log({jobs});
    console.log(jobs.length);
}


//create xmlHttpRequest object
const http = new XMLHttpRequest();
//open connection. true - asynchronous, false - synchronous
http.open("POST", url + key, true);
//Send the proper header information
http.setRequestHeader("Content-type", "application/json");
//Callback when the state changes
http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        console.log(http.responseText);
    }
}
//Send request to the server
http.send(params);

//fetchJooble();