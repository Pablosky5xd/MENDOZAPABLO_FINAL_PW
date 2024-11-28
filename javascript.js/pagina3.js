// Inicializar EmailJS
emailjs.init("kPLpAuQGHlNKJBmB5");

document.addEventListener('DOMContentLoaded', () => {
    const personalForm = document.getElementById('personalForm');
    const limpiarForm = document.getElementById('limpiarForm');

    // Envío del formulario
    personalForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(personalForm);
        const data = {
            firstName: formData.get('nombre'),
            lastName: formData.get('apellido'),
            email: formData.get('email'),
        };

        emailjs.send('service_ehs41qb', 'template_2qe41t7', data)
            .then(() => {
                alert('Formulario enviado correctamente');
                personalForm.reset();
            })
            .catch(() => {
                alert('Hubo un error al enviar el formulario');
            });
    });

    // Limpiar formulario
    limpiarForm.addEventListener('click', () => {
        personalForm.reset();
    });

    // Cargar API de imagen aleatoria
    function loadImageAPI() {
        const randomImage = document.getElementById('randomImage');
        randomImage.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;
    }

    // Cambiar la imagen al presionar el botón
    const changeImageBtn = document.getElementById('changeImageBtn');
    changeImageBtn.addEventListener('click', loadImageAPI);

    // Llamar la función para cargar la imagen inicialmente
    loadImageAPI();

    // Cargar API de AUTOS
    function loadRaceCarAPI() {
        const carList = document.getElementById('carGallery').querySelector('.car-list');
        
        fetch('https://api.unsplash.com/photos?query=race-car&client_id=YOUR_ACCESS_KEY')
            .then(response => response.json())
            .then(data => {
                data.forEach(car => {
                    const listItem = document.createElement('li');
                    
                    // Crear un elemento de imagen y asignar la URL
                    const carImage = document.createElement('img');
                    carImage.src = car.urls.small;
                    carImage.alt = car.description || 'Imagen de auto de carrera';
                    carImage.style.width = '200px'; // Ajuste de tamaño de la imagen
    
                    listItem.appendChild(carImage); // Añadir la imagen al item de la lista
                    carList.appendChild(listItem);  // Añadir el item de la lista al contenedor
                });
            })
            .catch(error => {
                console.error('Error al cargar las fotos de autos de carrera:', error);
            });
    }
    loadRaceCarAPI();
});