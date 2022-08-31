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
.then((data) =>{
    console.log(data)
});