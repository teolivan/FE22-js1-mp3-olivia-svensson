const langBtn = document.getElementById("langbtn");
const langInput = document.getElementById("langinput");
const errormsg = document.getElementById("errormessage");

function api() {
    const langName = langInput.value;
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
            const dataSort = data.sort((1, 2) => 2.population - 1.population);
            
        }
    }
}

/* 
langBtn.addEventListener("click", () => {
    let langName = langInput.value;
    let finalURL = `https://restcountries.com/v3.1/lang/${langName}`;
    console.log(finalURL);
});

*/