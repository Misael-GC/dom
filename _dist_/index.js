/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')
const baseUrl = 'https://platzi-avo.vercel.app';
const appNode = document.querySelector('#app');

appNode.addEventListener('click', (event)=>{
    if(event.target.nodeName === 'H2'){
        window.alert('hola, modal');
    }
});


const formatPrice = (price) =>{
    const newPrice = new window.Intl.NumberFormat('es',{
        style:'currency',
        currency:'USD'
    }).format(price)

    return newPrice;
};

//web api: fetch: permite traer recursos desde cualquier web
//Pasos:
//Conectarnos al servidor
window.fetch(`${baseUrl}/api/avo`)
// procesar la respuesta y convertirla en JSON
.then((respuesta) => respuesta.json())
//JSON --> Data -> Renderizar información en el navegador
.then((responseJSON) =>{
    const todosLosItems = [];

    responseJSON.data.forEach(item => {
        //crear imagen
        const image = document.createElement('img')
        image.src = `${baseUrl}${item.image}`;
        image.className = 'h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6'

        //crear titulo
        const title = document.createElement('h2')
        title.textContent = item.name;
        title.className = 'text-2xl text-gray-600'

        //crear precio
        const price = document.createElement('div')
        price.textContent = formatPrice(item.price);
        

        //contenedor para el titulo y el precio
        const priceAndTitle = document.createElement('div')
        priceAndTitle.appendChild(title)
        priceAndTitle.appendChild(price)
        priceAndTitle.className = 'text-center md:text-left'

        //creamos un contenedor de los elementos
        const container =  document.createElement('div');
        container.append(image, priceAndTitle);
        container.className = 'md:flex bg-white rounded-lg p-6 hover:bg-gray-300'

        todosLosItems.push(container);
    });
    appNode.append(...todosLosItems);
});


