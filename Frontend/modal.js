const myModal = document.getElementById('myModal');

// Modal para Productos
const openModal = (product) => {
    const modalContent = document.querySelector('#modal-product-content');
    const modalTitle = document.querySelector('.modal-title');

    if (modalTitle) {
        modalTitle.textContent = 'Detalles del Producto';
    }

    // Renderizar el contenido del producto de forma profesional
    modalContent.innerHTML = `
        <div class="modal-product-card">
            <div class="modal-product-image">
                <img src="${product.image || 'https://via.placeholder.com/150'}" alt="Imagen del producto">
            </div>
            <div class="modal-product-info">
                <h3 class="modal-product-name">${product.name}</h3>
                <div class="modal-product-description">
                    <strong>Descripción:</strong><br>
                    ${product.description || 'Sin descripción disponible'}
                </div>
                <div>
                    <span class="modal-product-category">${product.category || 'Sin categoría'}</span>
                </div>
                <div>
                    <p class="modal-product-price-label">Precio</p>
                    <p class="modal-product-price">$${parseFloat(product.price).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
            </div>
        </div>
    `;

    // Mostrar el modal con animación
    myModal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body

    // Hacer scroll al inicio del modal
    setTimeout(() => {
        const modalBody = document.querySelector('.modal-body');
        if (modalBody) {
            modalBody.scrollTop = 0;
        }
    }, 10);
};

// Modal para Vehículos
const openVehicleModal = (vehicle) => {
    const modalContent = document.querySelector('#modal-product-content');
    const modalTitle = document.querySelector('.modal-title');

    if (modalTitle) {
        modalTitle.textContent = 'Detalles del Vehículo';
    }

    // Renderizar el contenido del vehículo de forma profesional
    modalContent.innerHTML = `
        <div class="modal-product-card">
            <div class="modal-product-image">
                <img src="${vehicle.image || 'https://via.placeholder.com/150'}" alt="Imagen del vehículo">
            </div>
            <div class="modal-product-info">
                <h3 class="modal-product-name">${vehicle.brand}</h3>
                <div class="modal-product-description">
                    <strong>Descripción:</strong><br>
                    ${vehicle.description || 'Sin descripción disponible'}
                </div>
                <div>
                    <span class="modal-product-category">${vehicle.model || 'Sin modelo'}</span>
                </div>
                <div>
                    <p class="modal-product-price-label">Precio</p>
                    <p class="modal-product-price">$${parseFloat(vehicle.price).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
            </div>
        </div>
    `;

    // Mostrar el modal con animación
    myModal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body

    // Hacer scroll al inicio del modal
    setTimeout(() => {
        const modalBody = document.querySelector('.modal-body');
        if (modalBody) {
            modalBody.scrollTop = 0;
        }
    }, 10);
};

// Modal para Personas
const openPersonModal = (person) => {
    const modalContent = document.querySelector('#modal-product-content');
    const modalTitle = document.querySelector('.modal-title');

    if (modalTitle) {
        modalTitle.textContent = 'Detalles de la Persona';
    }

    // Renderizar el contenido de la persona de forma profesional
    modalContent.innerHTML = `
        <div class="modal-product-card">
            <div class="modal-product-image">
                <img src="${person.image || 'https://via.placeholder.com/150'}" alt="Imagen de la persona">
            </div>
            <div class="modal-product-info">
                <h3 class="modal-product-name">${person.name || 'Sin nombre'}</h3>
                <div class="modal-product-description">
                    <strong>Email:</strong><br>
                    ${person.email || 'Sin email disponible'}
                </div>
                <div>
                    <span class="modal-product-category">📞 ${person.phone || 'Sin teléfono'}</span>
                </div>
                <div class="modal-product-description" style="margin-top: 1rem;">
                    <strong>Dirección:</strong><br>
                    ${person.address || 'Sin dirección disponible'}
                </div>
            </div>
        </div>
    `;

    // Mostrar el modal con animación
    myModal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body

    // Hacer scroll al inicio del modal
    setTimeout(() => {
        const modalBody = document.querySelector('.modal-body');
        if (modalBody) {
            modalBody.scrollTop = 0;
        }
    }, 10);
};

const closeModal = () => {
    myModal.classList.remove('show');
    document.body.style.overflow = ''; // Restaurar scroll del body

    // Limpiar contenido después de la animación
    setTimeout(() => {
        const modalContent = document.querySelector('#modal-product-content');
        if (modalContent) {
            modalContent.innerHTML = '';
        }
    }, 300);
};

// Cerrar modal al hacer click fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === myModal) {
        closeModal();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && myModal.classList.contains('show')) {
        closeModal();
    }
});