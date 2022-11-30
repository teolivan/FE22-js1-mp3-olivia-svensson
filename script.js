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
        .then((data) => {
            const dataSort = data.sort((a, b) => b.population - a.population);
            console.log(dataSort);
         
            
            
            });

            document.getElementById("officialname").innerText = "Country: ${data.name.common}";
            document.getElementById("subregion").innerText = "Subregion: ${data.subregion}"
            document.getElementById("capital").innerText = "Capital: ${data.capital}"
            document.getElementById("population").innerText = "Population: ${data.population}"
        };
    }
}

/* 
langBtn.addEventListener("click", () => {
    let langName = langInput.value;
    let finalURL = `https://restcountries.com/v3.1/lang/${langName}`;
    console.log(finalURL);
});

*/