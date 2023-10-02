import { datubasea } from "./datubasea.js";

const base= "https://covers.openlibrary.org/b/id/"
let irudia = document.querySelector("#irudia")
let izenburua = document.querySelector("#izenburua")
let egilea = document.querySelector("#Egilea")
let data = document.querySelector("#Urtea")
let isbn = document.querySelector("#ISBN")


let aldatu= () => {
    let irudia = document.querySelector("#irudia")
    irudia.src= base + datubasea[index%4].filename;

    let izenburua = document.querySelector("#izenburua")
    izenburua.value = datubasea[index%4].izenburua;

    let egilea = document.querySelector("#egile")
    egilea.value = datubasea[index%4].egilea;

    let isbn = document.querySelector("#ISBN")
    isbn.value = datubasea[index%4].isbn;

    let data = document.querySelector("#data")
    data.value = datubasea[index%4].data;
}

let index= 0



let botoia = document.querySelector("#botoia")
botoia.onclick= () => {
    index++;
    aldatu();

}
let botoia1 = document.querySelector("#botoia1")
botoia1.onclick= () => {
    index--;
    aldatu();

}

console.log(datubasea)