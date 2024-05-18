const func =()=>{
const city = document.getElementById("city").value;
const cases=document.getElementById("cases")
const deaths = document.getElementById("deaths");
const recovered = document.getElementById("recovered");
console.log(city);

const apiurl=`https://disease.sh/v3/covid-19/countries/${city}`;
coronadata()
async function coronadata(){
    const response=await fetch(apiurl);
    var data=await response.json();
    console.log(data)
    cases.innerHTML = `Cases:  ${data.cases}`;
    deaths.innerHTML = `Deaths: ${data.deaths}`;
    recovered.innerHTML = `Recovered: ${data.deaths}`;
}
}