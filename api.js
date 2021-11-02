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
    //respons omzetten naar json
    const songTitle = await response.json();


    for (let i=0; i < songTitle.response.songs.length; i++){
      let tempt = songTitle.response.songs[i].title;
      allSongs.push(tempt);
    }   

    return songTitle.response.songs;  
  }

  //wanneer klaar met functie dan dit
  geSongsFromAPI().then( songs =>{
  console.log(allSongs);
})
