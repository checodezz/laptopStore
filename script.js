//laptops page

const laptops = [
    {
        id: 1,
        brand: "Dell",
        model: "Inspiron 15",
        details: "Powerful performance in a sleek design.",
        laptopImg: "https://placehold.co/300x200/EFEFEFF/grey?text=Dell%20Inspiron%2015",
        processor: "Intel Core i7",
        RAM: "16GB",
        storage: "512GB SSD",
        price: 1200,
    },
    {
        id: 2,
        brand: "HP",
        model: "Pavilion x360",
        details: "Versatile 2-in-1 laptop for productivity and entertainment.",
        laptopImg: "https://placehold.co/300x200/EFEFEFF/grey?text=HP%20Pavilion%20x360",
        processor: "AMD Ryzen 5",
        RAM: "8GB",
        storage: "256GB SSD",
        price: 900,
    },
    {
        id: 3,
        brand: "Lenovo",
        model: "ThinkPad X1 Carbon",
        details: "Ultra-lightweight and durable business laptop.",
        laptopImg: "https://placehol.co/300x200/EFEFEFF/grey?text=Lenovo%20ThinkPad%20X1%20Carbon",
        processor: "Intel Core i5",
        RAM: "8GB",
        storage: "256GB SSD",
        price: 1500,
    },
];

const showlistOfLaptops = document.getElementById('showlistOfLaptops');



function createListOfLaptops(data) {

    for (let i = 0; i < data.length; i++) {

        const col = document.createElement('div');
        col.className = 'col-md-6';

        const card = document.createElement('div');
        card.className = 'card my-3'

        const cardHeader = document.createElement('h2');
        cardHeader.className = 'card-header';
        cardHeader.textContent = data[i].model;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerHTML = `<strong>Price: $</strong>${data[i].price}`;

        const detailsBtn = document.createElement('a');
        detailsBtn.className = 'btn btn-primary';
        detailsBtn.textContent = 'Details'
        detailsBtn.href = `laptopDetails.html?=${data[i].id}`;

        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        cardBody.appendChild(cardText);
        cardBody.appendChild(detailsBtn);
        col.appendChild(card);

        showlistOfLaptops.appendChild(col)
    }
}

createListOfLaptops(laptops)

//Brand filter
const applyBrandFilter = document.querySelector('#applyBrandFilter');
applyBrandFilter.addEventListener('change', applyFilter)

function applyFilter() {
    const selectedBrand = applyBrandFilter.value;
    console.log(selectedBrand);

    const filteredBrand = [];

    if (selectedBrand === 'All') {
        showlistOfLaptops.innerHTML = '';
        createListOfLaptops(laptops)
    } else {
        for (let i = 0; i < laptops.length; i++) {
            if (laptops[i].brand === selectedBrand) {
                showlistOfLaptops.textContent = ''
                filteredBrand.push(laptops[i]);
            }
        }
    }
    createListOfLaptops(filteredBrand);
}

//priceFilter

const applyPriceFilter = document.querySelector('#applyPriceFilter');

applyPriceFilter.addEventListener('change', priceFilter)

function priceFilter() {

    const selectedPriceFilter = parseInt(applyPriceFilter.value);
    const filteredPrice = [];

    showlistOfLaptops.innerHTML = ''

    if (isNaN(selectedPriceFilter) || selectedPriceFilter === 'All') {
        createListOfLaptops(laptops)
    } else {


        for (let i = 0; i < laptops.length; i++) {
            if (selectedPriceFilter === 500) {
                if (laptops[i].price <= 500) {
                    filteredPrice.push(laptops[i]);
                }
            } else if (selectedPriceFilter === 1000) {

                if (laptops[i].price > 500) {
                    filteredPrice.push(laptops[i])
                }
            }
        }
        createListOfLaptops(filteredPrice)

    }
}