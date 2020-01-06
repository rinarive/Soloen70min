/*let searchPeli = document.getElementById('search').addEventListener('keydown', (e) => {
	if (e.keyCode === 13) {
        fetch(`http://www.omdbapi.com/?s=${e.target.value}&plot=full&apikey=3d9ea92f`)
         .then(function(response) {
            return response.json();
        })
         .then(function(myJson) {
          console.log(myJson);
        });

      console.log(searchPeli);
    }
});*/
let searchPeli = document.getElementById('search').addEventListener('keydown', (e) => {
	if (e.keyCode === 13) {
fetch(`http://www.omdbapi.com/?t=${e.target.value}&plot=full&apikey=3d9ea92f`)
         .then(function(response) {
            return response.json();
        })
         .then(function(myJson) {
          console.log(myJson);
        });
        console.log(searchPeli);
      }
  });
  
