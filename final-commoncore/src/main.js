//funcion de sugerencias por Runtime
let imdbID=[ "tt0021884","tt0154506","tt0012349","tt0497351","tt0045758","tt4362764","tt1907704","tt6597824","tt2413134","tt0056119","tt0475224", "tt3472226"];
    imdbID.forEach(id => {
    
      let link = "http://www.omdbapi.com/?apikey=bab254d4&i="+ id
      fetch(link)
        .then(datos => datos.json())
        .then(datos =>{
        caja.innerHTML += `
          <p>${datos.Title} </p>
          <img src= "${datos.Poster}">
          <p>duracion ${datos.Runtime} </p>
          <p>año ${datos.Year} </p>
                
          `; 
      })
        .catch(error=>console.log(error))
    
  });
    
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
    
    console.log(data)
                  
    search.forEach(element => {
       array.push(element.imdbID)
    });
    array.forEach(id => {
      let link = "http://www.omdbapi.com/?apikey=bab254d4&i="+ id
      fetch(link)
        .then(datos => datos.json())
        .then(datos =>{
          caja.innerHTML += `
          <p>${datos.Title} </p>
          
          <img src= "${datos.Poster}">
          <p>duracion ${datos.Runtime} </p>
          <p>año ${datos.Year} </p>
          <p>id${datos.id} </p>
          
          `;
        })
        .catch(error=>console.log(error));
      });        
    
   });
 };
});

let peli = document.getElementById("").addEventListener('click',()=>{
 ` 
 `


})
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




     });