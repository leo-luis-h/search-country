



let btnSearch= document.getElementById('search-btn')

let country = document.getElementById('ip-country')

function searchCountry(){
    let countryName = country.value
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    //console.log(finalURL)
    if(countryName!==''){
        fetchCountry(finalURL)
    }else{
        
        result = document.querySelector('.result')
        result.innerHTML =  `<h3> input cannot be empty  </h3>`
    }
}

function fetchCountry(finalURL){
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
   
     result = document.querySelector('.result')
     result.innerHTML =  `
     <div class="img-wrapper"> 
     <img src="${data[0].flags.svg}" alt="" class="flag-img">
     <img src="${data[0].coatOfArms.png}" alt="" class="flag-img"  >
     </div>  
     <h2> ${data[0].name.common} </h2>

        <div class="wrapper"> 
            <div class="data-wrapper">
             <h4>Capital:</h4>
              <span> ${data[0].capital[0]} </span>
             </div>
         </div>  

    

         <div class="wrapper"> 
            <div class="data-wrapper">
              <h4>Continent:</h4>
              <span> ${data[0].continents[0]} </span>
          </div>
        </div>  

        <div class="wrapper"> 
          <div class="data-wrapper">
            <h4>Population:</h4>
             <span> ${data[0].population} </span>
          </div>
         </div>  

         <div class="wrapper"> 
            <div class="data-wrapper">
               <h4>Currenci:</h4>
               <span> ${data[0].currencies[Object.keys(data[0].currencies)].name} </span>
           </div>
         </div>

         <div class="wrapper"> 
         <div class="data-wrapper">
            <h4>Languages:</h4>
            <span> ${Object.values(data[0].languages).toString().split(",").join(", ")} </span>
        </div>
      </div>
         
     `

    })

    .catch(() => {
        result = document.querySelector('.result')
        result.innerHTML =  `<h3> country not found  </h3>`

    })

    
}

document.addEventListener("click",(e)=>{
    if(e.target.matches(".search-btn")){
        searchCountry()
    }
 });