
//const cityInput = document.querySelector()


const searchInput = document.querySelector("#countryInput")
const searchBtn = document.querySelector("#searchBtn")

const defaultApi = 'https://api.api-ninjas.com/v1/country?name=Pakistan'


//const cityApi = 'https://api.api-ninjas.com/v1/city?name=karachi'

const main = document.querySelector("#main")

const getCountryInfo = async (api) => {

    const res = await fetch(api, {
        method: "GET",
        headers: {
            "X-Api-Key": "bpaKtt7r1LWzRmdQ1sP5DSubBzKhUoAzA90R2gYB"
        }
    });


    const data = await res.json()
    console.log(data);


    if (data.length === 0) {
        Swal.fire({
            title: "Not Found",
            text: "No Country Found",
            icon: "error"
        });
        return;

    }

    main.innerHTML = ""

    data.map(item => {
        main.innerHTML = `
        
 <div class="country-card">
                <div class="country-info">
                    <h2>${item.name}</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <div class="info-label">🏛️ Capital</div>
                            <div class="info-value">${item.capital}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">👥 Population</div>
                            <div class="info-value">${item.population}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">🌏 Region</div>
                            <div class="info-value">${item.region}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">💰 Currency</div>
                            <div class="info-value">${item.currency.code}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">� Phone Code</div>
                            <div class="info-value">${item.telephone_country_codes[0]}</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
}


searchBtn.addEventListener("click", function () {

    const countryName = searchInput.value


    if (countryName == '') {
        Swal.fire({
            title: "Empty Input",
            text: "Enter Any Country Name",
            icon: "warning"
        });

        return;
    }

    const countryApi = `https://api.api-ninjas.com/v1/country?name=${countryName}`


    getCountryInfo(countryApi)

})


getCountryInfo(defaultApi)






