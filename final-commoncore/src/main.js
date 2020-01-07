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
    

let div_peliculas = document.getElementById("peliculas");
//funcion buscar cualquier pelicula.
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
            
            `;
        })
          .catch(error=>console.log(error));
     });        
   });
 };
});