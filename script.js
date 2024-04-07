let btn = document.querySelector('button');
let input = document.querySelector('input');
let boxes = document.querySelector('#box')

btn.addEventListener("click", () => {
    let input_box = input.value.trim(); // white space
    let url = `https://restcountries.com/v3.1/name/${input_box}?fullText=true`;
    console.log(url)
    input_value ="";
    fetch(url)
        .then((responce) => responce.json())
        .then((data) => {

            const  countryData = data[0];

            // Strore the Country Languages 
            const languages = [] ;
            for (const languageCode in countryData.languages) 
            {
                languages.push(countryData.languages[languageCode]);
            }

            boxes.innerHTML = `
                <img src= "${countryData.flags.svg}" alt="Flage">
                <h1> ${countryData.name.common} </h1>
                
                <div class="pera">
                <p> <b> Capital : </b> ${countryData.capital[0]} </p>
                    <p> <b> continents : </b> ${countryData.continents[0]} </p>
                    <p> <b> Population : </b> ${countryData.population} </p>
                    
                    <p> <b> Languages : </b>  ${languages} </p>
                    <p> <b> Another Name : </b> ${countryData.altSpellings[1]} </p>
                    </div> 
                        `
        })
})
