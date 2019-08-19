const bootContainer = document.getElementById('boot_container');

function getJSON(json, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', json);
    xhr.onload = () => {
        if (xhr.readyState === 4) {
            let data = JSON.parse(xhr.responseText);
            callback(data);
        }
    };
    xhr.send();
}

function getProducts(json) {
    json.map(boot => {
        generateHTML(boot);        
    });
}

document.addEventListener("DOMContentLoaded", () => {
    getJSON('bootdata.json', getProducts);
});

function generateHTML(data) {
    const boot = document.createElement('div');
    boot.className = 'boot';
    bootContainer.appendChild(boot);
    boot.innerHTML = `
        <a><img src="${data.thumbnail.source}"></a>
        <div class="price_sec">
            <h3>${data.bootname} Boot</h3>
            <p>in ${data.material}</p>
            <p>${data.price}</p>
            <div class="review_star">
                <i class="material-icons">star_rate</i> 
                <i class="material-icons">star_rate</i> 
                <i class="material-icons">star_rate</i> 
                <i class="material-icons">star_rate</i> 
                <i class="material-icons">star_rate</i> 
                <span class=review_count> (49) </span> 
            </div>
        `;
}