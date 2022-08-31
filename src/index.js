/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')
const url = 'https://platzi-avo.vercel.app/api/avo';

//web api: fetch: permite traer recursos desde cualquier web
//Pasos:
//Conectarnos al servidor
window.fetch(url)
// procesar la respuesta y convertirla en JSON
.then((respuesta) => respuesta.json())
//JSON --> Data -> Renderizar información en el navegador
.then((responseJSON) =>{
    const todosLosItems = [];

    responseJSON.data.forEach(item => {
        //crear imagen
        const image = document.createElement('img')

        //crear titulo
        const title = document.createElement('h2')

        //crear precio
        const price = document.createElement('div')

        //creamos un contenedor de los elementos
        const container =  document.createElement('div');
        container.append(image, title, price);

        todosLosItems.push(container);
    });
    document.body.append(...todosLosItems);
});
