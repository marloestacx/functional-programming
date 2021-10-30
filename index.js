//JSON bestand inladen
fetch("./dataset_raw.json")
  .then(function (response) 
  {
    // JsSON data
    return response.json();
  })
  .then(function (data) 
  {
    parseData(data);
    removeCapitals(data);
  })
  .catch(function (err) 
  {
    // Catch error
    console.log(err);
  });

//Data verwerken
function parseData(data) {
	/* Deze functie genereert een nieuwe Promise, dit zou ook gebeuren als je de dataset met een fetch() zou ophalen */
	return new Promise((resolve, reject) => {
		let dataSet = data;
		/* resolve stuurt de data naar de .then() onderin */
		resolve(dataSet);
	})
}

//Hoofdletters verwijderen
  function removeCapitals(data) {
    //Data omzetten naar string
    data = JSON.stringify(data)
    if(typeof data === 'string') 
    {
      data = data.toLowerCase();
      console.log(data.split("{"));
      return data;
    } 
    else 
    {
      return data;
    }
  }
