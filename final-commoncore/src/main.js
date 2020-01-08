
//funcion de sugerencias por Runtime
let imdbID=[ "tt0021884","tt0154506","tt0012349","tt0497351","tt0045758","tt4362764","tt1907704","tt6597824","tt2413134","tt0056119","tt0475224", "tt3472226"];
    imdbID.forEach(id => {
    
      let link = "http://www.omdbapi.com/?apikey=bab254d4&i="+ id
      fetch(link)
        .then(datos => datos.json())
        .then(datos =>{
        caja.innerHTML += `

        
        <div class="col-sm-12 col-md-6 col-lg-3 tar">
        
        <img src= "${datos.Poster}" class="img-fluid">
        </div>

          `; 
      })
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



  // FUNCIÓN DE BOTON "VER MAS"

  // Oculta peliculas
  function ocultar(){
    document.getElementById("caja").style.display = "none";
  }
  ocultar();

  // Al apretar boton "ver mas" despliega peliculas
  let boton = document.getElementById("btn").addEventListener("click", ()=>{

  function mostrar(){  
    document.getElementById("caja").style.display = "block";

  }
  mostrar();
  
  });

    

// let div_peliculas = document.getElementById("peliculas");
// //funcion buscar cualquier pelicula.
// let searchPeli = document.getElementById('buscar').addEventListener('keydown', (e) => {
// 	if (e.keyCode === 13) {
//      fetch(`http://www.omdbapi.com/?s=${e.target.value}&plot=full&apikey=3d9ea92f`)
//       .then(datos => datos.json())    
//       .then(data => {

//         let caja = document.getElementById("caja")
//         let search = data.Search
//         let array =[]
    
//     console.log(data)
                  
//     search.forEach(element => {
//        array.push(element.imdbID)
//     });
//     array.forEach(id => {
//       let link = "http://www.omdbapi.com/?apikey=bab254d4&i="+ id
//       fetch(link)
//         .then(datos => datos.json())
//         .then(datos =>{
           
//           caja.innerHTML += `
            
//             <p>${datos.Title} </p>
//             <img src= "${datos.Poster}">
//             <p>duracion ${datos.Runtime} </p>
//             <p>año ${datos.Year} </p>
            
//             `;
//         })
//           .catch(error=>console.log(error));
//      });        
//    });
//  };
// });
