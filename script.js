const langBtn = document.getElementById("langbtn");
const langInput = document.getElementById("langinput");
const errormsg = document.getElementById("errormessage");

function api() {
    const langName = document.getElementById("langinput").value;
    const errormsg = document.getElementById("errormessage");
    const result = document.getElementById("result");

    fetch(`https://restcountries.com/v3.1/lang/${langName}`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
       errormsg.innerText = "Not a valid language";
        })
        .then((value) => {
            console.log(value);
            const dataSort = value.sort((a, b) => b.population - a.population);
            console.log(dataSort);
         

            document.getElementById("officialname").innerText = `Country: ${dataSort[0].name.common}`;
            document.getElementById("subregion").innerText = `Subregion: ${dataSort[0].subregion}`;
            document.getElementById("capital").innerText = `Capital: ${dataSort[0].capital}`;
            document.getElementById("capita").innerText = `Population: ${dataSort[0].population}`;            
            
            });

        };
    


/* 
langBtn.addEventListener("click", () => {
    let langName = langInput.value;
    let finalURL = `https://restcountries.com/v3.1/lang/${langName}`;
    console.log(finalURL);
});

*/