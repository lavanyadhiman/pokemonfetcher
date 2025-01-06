// fetch- function for making HTTP requests to browser to feth resources
// (JSON style data,images, files)
// Simplifies asynchronous data fetching in js and used for interacting 
// with APIs to retreive and send data asynchronous over the web.
// fetch (url,{options})
//fetch fn returns a promise ie. either resolve or reject
async function fetchData() {
    try {
      const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  
      if (!response.ok) {
        throw new Error("Could not fetch data. Make sure the Pokemon name is correct.");
      }
  
      const data = await response.json();
      console.log(data);
  
      // Display Pokemon sprite
      const pokemonSprite = document.getElementById("pokemonSprite");
      pokemonSprite.src = data.sprites.front_default;
      pokemonSprite.style.display = "block"; // Show the image
    } catch (error) {
      console.log("Error: " + error);
      alert(error.message); // Show user-friendly error
    }
  }
  