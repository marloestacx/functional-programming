const fetching = fetch("https://genius.p.rapidapi.com/artists/1177/songs?sort=popularity", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "genius.p.rapidapi.com",
		"x-rapidapi-key": "0825494c1bmsh1828917831cd0c7p18e3e7jsn3a9c6a86182c"
	}
})

let allSongs = [];

async function geSongsFromAPI() {
    const response =  await fetching;
    //response omzetten naar json
    const songTitle = await response.json();
    const songs = songTitle.response.songs

    //loop door song titels heen en zet deze in een array
    for (let i=0; i < songs.length; i++){
      allSongs.push(songs[i].title);
    }   

    return songs;  
  }

  //wanneer klaar met functie dan dit
  geSongsFromAPI().then( songs => {
  //sorteer liedjes op alfabetische volgorde
  console.log(allSongs.sort());
})
