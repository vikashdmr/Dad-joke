const btnE1 = document.getElementById("btn")
const jokeE1 = document.getElementById("joke")

const apikey = "2ufxh18vY1qsTX9Nsi8SPQ==IUgyeIJfVlvEwDwm";

const options = {
    method: "GET",
    headers: {
       "X-Api-Key": apikey,
},
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjoke(){
    try {
        jokeE1.innerText = "updating...";
        btnE1.disabled = true;
        btnE1.innerText = "Loading";
        const reponse = await fetch(apiURL, options);
        const data = await reponse.json();
        btnE1.disabled = false;
        btnE1.innerText = "Tell me a joke";
        jokeE1.innerText = data[0].joke;
    } catch (error) {
        jokeE1.innerText = "an error happned, try again later";
        btnE1.disabled = false;
        btnE1.innerText = "Tell me a joke";  
    } 

   
}

btnE1.addEventListener("click", getjoke)