const langBtn = document.getElementById("langbtn");
const langInput = document.getElementById("langinput");

langBtn.addEventListener("click", () => {
    let langName = langInput.value;
    let finalURL = `https://restcountries.com/v3.1/lang/${langName}`;
    console.log(finalURL);
});