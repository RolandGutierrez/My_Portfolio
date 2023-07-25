// Supongamos que tienes un arreglo de objetos con tu experiencia laboral
const experienciaLaboral = [{
        empresa: 'Empresa EpikoTechnology',
        puesto: 'Desarrollador Web FrontEnd',
        fecha: 'Agosto 2022 - marzo 2023',
        descripcion: 'Trabajé en el desarrollo y mantenimiento de sistema de facturación electrónoca.'
    },
    {
        empresa: 'Empresa EpikoTechnology',
        puesto: 'Desarrollador Web FrontEnd',
        fecha: 'Marzo 2023 - Julio 2023',
        descripcion: 'Me encargué del diseño de interfaces y la experiencia del usuario de un sistema de gestión de créditos.'
    },
    // Agrega más trabajos anteriores si es necesario
];

// Función para generar las tarjetas de experiencia laboral
function generarTarjetasExperiencia() {
    const experienciaContainer = document.getElementById('experiencia');

    experienciaLaboral.forEach((trabajo) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const empresaElement = document.createElement('h3');
        empresaElement.textContent = trabajo.empresa;
        card.appendChild(empresaElement);

        const puestoElement = document.createElement('p');
        puestoElement.textContent = trabajo.puesto;
        card.appendChild(puestoElement);

        const fechaElement = document.createElement('p');
        fechaElement.textContent = trabajo.fecha;
        card.appendChild(fechaElement);

        const descripcionElement = document.createElement('p');
        descripcionElement.textContent = trabajo.descripcion;
        card.appendChild(descripcionElement);

        experienciaContainer.appendChild(card);
    });
}

// Llamada a la función para generar las tarjetas
generarTarjetasExperiencia();