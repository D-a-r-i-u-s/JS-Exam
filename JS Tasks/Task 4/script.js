/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'cars.json';

async function getData() {
    try {
        const response = await fetch('./cars.json');
        if (response.ok) {
            const data = await response.json();
            renderData(data);
            console.log(data);
        }
    }
    catch (error) {
        console.log(error);
    }
}

const renderData = (data) => {
    const output = document.querySelector('#output');
    let postData = '';
    data.forEach(post => {
        postData += `<div class="card">
                        <h2 class="brand">${post.brand}</h2>                        
                        <p class="models">${post.models.join(", ")}</p>   
                                         
                    </div>`
    })
    output.innerHTML = postData;
}

getData();
