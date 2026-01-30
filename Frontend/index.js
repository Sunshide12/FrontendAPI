const productsList = document.querySelector("#products-list");
const vehiclesList = document.querySelector("#vehicles-list");
const personsList = document.querySelector("#persons-list");


// Theme Management
const themeToggle = document.querySelector("#theme-toggle");

const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';
};

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
};

themeToggle.addEventListener('change', toggleTheme);
initTheme();


/* API */
const consultApi = async routes => {
    const response = await fetch(`https://products-api-ug0k.onrender.com/${routes}`)
    const { data } = await response.json();
    return data;
}


/* Render Products */
const renderProducts = async () => {
    try {
        const products = await consultApi("api/products");

        if (!products || products.length === 0) {
            productsList.innerHTML = '<li class="empty-state">No hay productos disponibles</li>';
            return;
        }

        products.forEach(product => {
            const li = document.createElement("li")
            li.setAttribute('data-product-id', product.id);
            li.style.cursor = 'pointer'; // Indicar que es clickeable
            li.innerHTML = `
            <div>
                <h2 class="product-name">${product.name}</h2>
                <p>${product.description || 'Sin descripción'}</p>
                <h3>${product.category}</h3>
                <p>$${parseFloat(product.price).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>`;


            // Agregar event listener
            li.addEventListener('click', () => {
                openModal(product);
            });
            productsList.appendChild(li);
        })
    } catch (error) {
        productsList.innerHTML = '<li class="empty-state">Error al cargar productos</li>';
        console.error('Error loading products:', error);
    }
}

/* Render Vehicles */
const renderVehicles = async () => {
    try {
        const vehicles = await consultApi("api/vehicles");

        if (!vehicles || vehicles.length === 0) {
            vehiclesList.innerHTML = '<li class="empty-state">No hay vehículos disponibles</li>';
            return;
        }

        vehicles.forEach(vehicle => {
            const li = document.createElement("li")
            li.setAttribute('data-vehicle-id', vehicle.id);
            li.style.cursor = 'pointer'; // Indicar que es clickeable
            li.innerHTML = `
            <div>
                <h2 class="product-name">${vehicle.brand}</h2>
                <p>${vehicle.description || 'Sin descripción'}</p>
                <h3>${vehicle.model}</h3>
                <p>$${parseFloat(vehicle.price).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>`;

            // Agregar event listener
            li.addEventListener('click', () => {
                openVehicleModal(vehicle);
            });

            vehiclesList.appendChild(li);
        })
    } catch (error) {
        vehiclesList.innerHTML = '<li class="empty-state">Error al cargar vehículos</li>';
        console.error('Error loading vehicles:', error);
    }
}

/* Render Persons */
const renderPersons = async () => {
    try {
        const persons = await consultApi("api/persons");

        if (!persons || persons.length === 0) {
            personsList.innerHTML = '<li class="empty-state">No hay personas disponibles</li>';
            return;
        }

        persons.forEach(person => {
            const li = document.createElement("li")
            li.setAttribute('data-person-id', person.id);
            li.style.cursor = 'pointer'; // Indicar que es clickeable
            li.innerHTML = `
            <div>
                <h2 class="product-name">${person.name}</h2>
                <p>${person.email || 'Sin email'}</p>
                <h3>${person.phone}</h3>
                <p>${person.address || 'Sin dirección'}</p>
            </div>`;

            // Agregar event listener
            li.addEventListener('click', () => {
                openPersonModal(person);
            });

            personsList.appendChild(li);
        })
    } catch (error) {
        personsList.innerHTML = '<li class="empty-state">Error al cargar personas</li>';
        console.error('Error loading persons:', error);
    }
}


renderProducts();
renderVehicles();
renderPersons();
