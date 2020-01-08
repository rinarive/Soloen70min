
//funcion de sugerencias por Runtime
let imdbID=[ "tt0021884","tt0154506","tt0012349","tt0497351","tt0045758","tt4362764","tt1907704","tt6597824","tt2413134","tt0056119","tt0475224", "tt3472226"];
    imdbID.forEach(id => {
    
      let link = "http://www.omdbapi.com/?apikey=bab254d4&i="+ id
      fetch(link)
        .then(datos => datos.json())
        .then(datos =>{
        /*caja.innerHTML += `

        
        <div class="col-sm-12 col-md-6 col-lg-3 tar">
        
        <img src= "${datos.Poster}" class="img-fluid">
        </div>

          `; */      })
        .catch(error=>console.log(error))
    
  });


// carrusel
let first= document.getElementById("first"), second= document.getElementById("second"),
    thirt= document.getElementById("third")
let url ;
let indice = 0;

imdbID.forEach(id =>{
url = 'http://www.omdbapi.com/?apikey=bab254d4&i='+id;
 
fetch(url)
  .then(datos => datos.json())
  .then(peli=>{
    if(indice <4){
console.log(peli.Poster)
    first.innerHTML +=`
    <div class="col-md-3">
    <img class="card-img-top w-100" src="${peli.Poster}" alt="Card image cap">
    </div>
    `
  }

    if(indice >=4  && indice<= 7){
      
      second.innerHTML +=`
      <div class="col-md-3">
      <img class="card-img-top w-100" src="${peli.Poster}" alt="Card image cap">
      </div>
      `
    }else if(indice>=8 ){
      third.innerHTML +=`
      <div class="col-md-3">
      <img class="card-img-top w-100" src="${peli.Poster}" alt="Card image cap">

      </div>
      `
    }

    indice++
  }).catch(e =>{

    console.log(e)
  })

})



//funcion mostrar barra de busqueda
let open = document.getElementById("open").addEventListener("click",()=>{
let search=document.getElementById("buscar");
search.style.display="block";
});
//funcion buscar cualquier pelicula.
let div_peliculas = document.getElementById("peliculas");
let searchPeli = document.getElementById('buscar').addEventListener('keydown', (e) => {
if (e.keyCode === 13) {
 fetch(`http://www.omdbapi.com/?s=${e.target.value}&plot=full&apikey=3d9ea92f`)
  .then(datos => datos.json())    
  .then(data => {

    let caja = document.getElementById("caja")
    let search = data.Search
    let array =[]
             
search.forEach(element => {
   array.push(element.imdbID)
});

array.forEach(id => {
  let link = "http://www.omdbapi.com/?apikey=bab254d4&i="+ id
  fetch(link)
    .then(datos => datos.json())
    .then(datos =>{
      caja.innerHTML += `
      <div class="busqueda">
      <div class="card bg-dark text-white">
      <img src="${datos.Poster}" class="card-img" alt="...">
      <div class="card-img-overlay">
      <h5 class="card-title"></h5>
      <p class="card-text">duracion ${datos.Runtime} </p>
      </div>
      </div>
      </div>
      `;
    })
    .catch(error=>console.log(error));
  });        

});
};
});
  // FUNCIÓN DE BOTON "VER MAS"

  // Oculta peliculas
  /*function ocultar(){
    document.getElementById("caja").style.display = "none";
  }
  ocultar();

  // Al apretar boton "ver mas" despliega peliculas
  let boton = document.getElementById("btn").addEventListener("click", ()=>{

  function mostrar(){  
    document.getElementById("caja").style.display = "block";

  }
  mostrar();
  
  });*/


/*let peli = document.querySelector(".carousel-item").addEventListener('click',()=>{

const showModal = (datos) => {
  modal.style.display = 'block';`

  document.getElementById('modal-name').innerHTML = `<h1> ${datos.Runtime}</h1>`;
  document.getElementById('modal-title').innerHTML = `<h2> ${datos.Title} </h2>`;
  document.getElementById('modal-attack').innerHTML = `<P> ${datos.year} </p>`;

    modal.style.display = 'none';
  };`
};
 


});
//por genero 

let mejorPeli = document.getElementById('genero').addEventListener('click', (show)=>{

  console.log("sirve");

  let link = `https://api.themoviedb.org/3/genre/movie/list?api_key=385428d3c9bd5516fe74173c3835c604`
  fetch(link)
    .then(datos => datos.json())    
    .then(datos =>{
          console.log (datos);
       
        })
          .catch(error=>console.log(error));
 
      });

      // 
     //por personas
  let actor = document.getElementById('actores').addEventListener('click', (show)=>{

    console.log('sorve');

      let link = `https://api.themoviedb.org/3/person/28?api_key=385428d3c9bd5516fe74173c3835c604`
      fetch(link)
        .then(datos => datos.json())    
        .then(datos =>{
              console.log (datos);
           
            })
              .catch(error=>console.log(error));




     });*/
