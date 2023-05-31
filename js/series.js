console.log(Series);

const nombre = document.querySelector('#nombre');
const genero = document.querySelector('#genero');

Series.forEach((opcionAnime)=>{
    const opcion = document.createElement("option");
    opcion.value = opcionAnime.nombre;
    opcion.textContent = opcionAnime.nombre;
    document.querySelector("#nombre").appendChild(opcion);
})


nombre.addEventListener("input",(e)=>{
    busqueda.nombre = e.target.value;
    filtrarAnime();  
})

genero.addEventListener("input",(e)=>{
    busqueda.genero = e.target.value;
    filtrarAnime();
});

document.addEventListener("DOMContentLoaded", ()=>{
    Serie(Series)
})

function Serie(Series) {
    const contenedor = document.querySelector(".galeria");
    limpiar()
    Series.forEach((series) => {
        const serieHTML = document.createElement("p")
        const {imagen, nombre, genero, link} = series;

        serieHTML.innerHTML = `
        <div class="serie">
            <a target="_blank" href="${link}" nombre="${nombre}" genero="${genero}"><img class="I"  src="../img/${imagen}"  alt=""></a>
        </div>
        `
        contenedor.appendChild(serieHTML);
    });

}

const busqueda = {
    nombre: "",
    genero: "",
}

function filtrarAnime() {
    const resultado = Series
    .filter(filtrarNombre)
    .filter(filtrarGenero)

    Serie(resultado);
    console.log(resultado);
}

function filtrarNombre(series) {
    if (busqueda.nombre) {
        return series.nombre === busqueda.nombre
    }
    return series;
}

function filtrarGenero(series) {
    if (busqueda.genero){
       return series.genero === busqueda.genero
    }
    return series;
}

function limpiar(){
    let m = document.querySelectorAll('p');
    for (let n = 0 ; n < m.length ; n++){
        m[n].remove();
    }
}


























/* Series.forEach((opcionAnime)=>{
    const opcion = document.createElement("option");
    opcion.value = opcionAnime.PrimeraCategoriaSerie;
    opcion.textContent = opcionAnime.PrimeraCategoriaSerie;
    document.querySelector("#PrimeraCategoriaz").appendChild(opcion);
})


SegundaCategoriaSerie.addEventListener("input",(e)=>{
    parametros.genero1 = e.target.value;
    parametros.genero2 = e.target.value;
    parametros.genero3 = e.target.value;
    parametros.genero4 = e.target.value;
    parametros.genero5 = e.target.value;
    parametros.genero6 = e.target.value;
    filtrarAnime();
});


PrimeraCategoriaSerie.addEventListener("input",(e)=>{
    parametros.PrimeraCategoriaSerie = e.target.value;
    filtrarAnime();  
})

document.addEventListener('DOMContentLoaded', ()=>{
    showSeries(Series);
})
const parametros = {
    link: "",
    imagen :"",
    nombre : "",
    genero1 : "",
    genero2 : "",
    genero3 : "",
    genero4 : "",
    genero5 : "",
    genero6 : "",
}

function showSeries(Series){
    const contenedorSeries = document.querySelector('.galeria');
    limpiar()
 
    Series.forEach((UnaSerie)=>{
        const SerieHTML = document.createElement('a');

        //Destructuring
        const {imagen, link,nombre ,genero1, genero2, genero3, genero4, genero5, genero6} = UnaSerie;

        SerieHTML.innerHTML = `
    <div class="serie">
        <a target="_blank" href="${link}" nombre="${nombre}" generos="${genero1} ${genero2} ${genero3} ${genero4} ${genero5} ${genero6}">
            <img src="${imagen}" alt="">
        </a>
    </div>
  `
        contenedorSeries.appendChild(SerieHTML);
    })
}
function filtrarAnime(){
    const resultado = Series
    .filter(filtrarSerie)
    Serie(resultado);
    console.log(resultado);
}

function filtrarSerie(UnaSerie){
    if (parametros.genero1){
        return UnaSerie.genero1 === parametros.genero1;
    }
    else if (parametros.genero2){
        return UnaSerie.genero2 === parametros.genero2;
    }
    else if (parametros.genero3){
        return UnaSerie.genero3 === parametros.genero3;
    }
    else if (parametros.genero4){
        return UnaSerie.genero4 === parametros.genero4;
    }
    else if (parametros.genero5){
        return UnaSerie.genero5 === parametros.genero5;
    }
    else if (parametros.genero6){
        return UnaSerie.genero6 === parametros.genero6;
    }Series.forEach((opcionAnime)=>{
    const opcion = document.createElement("option");
    opcion.value = opcionAnime.PrimeraCategoriaSerie;
    opcion.textContent = opcionAnime.PrimeraCategoriaSerie;
    document.querySelector("#PrimeraCategoriaz").appendChild(opcion);
})


SegundaCategoriaSerie.addEventListener("input",(e)=>{
    parametros.genero1 = e.target.value;
    parametros.genero2 = e.target.value;
    parametros.genero3 = e.target.value;
    parametros.genero4 = e.target.value;
    parametros.genero5 = e.target.value;
    parametros.genero6 = e.target.value;
    filtrarAnime();
});


PrimeraCategoriaSerie.addEventListener("input",(e)=>{
    parametros.PrimeraCategoriaSerie = e.target.value;
    filtrarAnime();  
})

document.addEventListener('DOMContentLoaded', ()=>{
    showSeries(Series);
})
const parametros = {
    link: "",
    imagen :"",
    nombre : "",
    genero1 : "",
    genero2 : "",
    genero3 : "",
    genero4 : "",
    genero5 : "",
    genero6 : "",
}

function showSeries(Series){
    const contenedorSeries = document.querySelector('.galeria');
    limpiar()
 
    Series.forEach((UnaSerie)=>{
        const SerieHTML = document.createElement('a');

        //Destructuring
        const {imagen, link,nombre ,genero1, genero2, genero3, genero4, genero5, genero6} = UnaSerie;

        SerieHTML.innerHTML = `
    <div class="serie">
        <a target="_blank" href="${link}" nombre="${nombre}" generos="${genero1} ${genero2} ${genero3} ${genero4} ${genero5} ${genero6}">
            <img src="${imagen}" alt="">
        </a>
    </div>
  `
        contenedorSeries.appendChild(SerieHTML);
    })
}
function filtrarAnime(){
    const resultado = Series
    .filter(filtrarSerie)
    Serie(resultado);
    console.log(resultado);
}

function filtrarSerie(UnaSerie){
    if (parametros.genero1){
        return UnaSerie.genero1 === parametros.genero1;
    }
    else if (parametros.genero2){
        return UnaSerie.genero2 === parametros.genero2;
    }
    else if (parametros.genero3){
        return UnaSerie.genero3 === parametros.genero3;
    }
    else if (parametros.genero4){
        return UnaSerie.genero4 === parametros.genero4;
    }
    else if (parametros.genero5){
        return UnaSerie.genero5 === parametros.genero5;
    }
    else if (parametros.genero6){
        return UnaSerie.genero6 === parametros.genero6;
    }
    return showSeries(Series);
}
function limpiar(){
    let m = document.querySelectorAll('a');
    for (let n = 0 ; n < m.length ; n++){
        m[n].remove();
    }
}
    return showSeries(Series);
}
function limpiar(){
    let m = document.querySelectorAll('a');
    for (let n = 0 ; n < m.length ; n++){
        m[n].remove();
    }
} */
