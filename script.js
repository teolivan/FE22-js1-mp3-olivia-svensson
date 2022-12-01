const langBtn = document.getElementById("langbtn");
const langInput = document.getElementById("langinput");
const errormsg = document.getElementById("errormessage");

function api() {
    const langName = document.getElementById("langinput").value;
    const errormsg = document.getElementById("errormessage");

    errormsg.innerText = "";

    const divResult = document.getElementById("result");
    divResult.innerHTML = "";

    fetch(`https://restcountries.com/v3.1/lang/${langName}`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
       errormsg.innerText = "Not a valid language";
       throw "Error"
        })
        .then((value) => {
            const dataSort = value.sort((a, b) => b.population - a.population);
 
            
            createContainer = (value, index) => {
                //parent
                const div = document.createElement("div");
        
                //children
                const officialname = document.createElement("p");
                const subregion = document.createElement("p");
                const capital = document.createElement("p");
                const capita = document.createElement("p");
                const flag = document.createElement("img");
            
                if (index === 0) {
                    div.setAttribute("id", "mostpeople");
                }

            officialname.innerText = `Country: ${value.name.common}`;
            subregion.innerText = `Subregion: ${value.subregion}`;
            capital.innerText = `Capital: ${value.capital}`;
            capita.innerText = `Population: ${value.population}`;            
            flag.setAttribute("src", value.flags.png);
            div.appendChild(flag);
            div.appendChild(officialname);
            div.appendChild(subregion);
            div.appendChild(capital);
            div.appendChild(capita);
            return div;
            }
            console.log(dataSort);
            dataSort.forEach((value, index) => {
                console.log(value,index);
                const result = createContainer(value, index);
                const divResult = document.getElementById("result");
                console.log(divResult);
                divResult.appendChild(result);
            });
            
        
                
        });

    
        };
    
