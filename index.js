let newData = [];

//JSON bestand inladen
fetch("./dataset_raw.json")
  .then(function (response) 
  {
    // JSON data
    return response.json();
  })
  .then(function (data) 
  {
    toLowercase(data);
    // console.table(data);
  })
  .catch(function (err) 
  {
    // Catch error
    console.log(err);
  });

// //Data verwerken
// function parseData(data) {
// 	/* Deze functie genereert een nieuwe Promise, dit zou ook gebeuren als je de dataset met een fetch() zou ophalen */
// 	return new Promise((resolve, reject) => {
// 		let dataSet = data;
// 		/* resolve stuurt de data naar de .then() onderin */
// 		resolve(dataSet);
// 	})
// }


// function removeNull(data) {
//   if(data.length < 1){
//     return "Geen antwoord"
//   }
//   };
  
// //Hoofdletters verwijderen
//   function removeCapitals(data) {
//     //Data omzetten naar string
//     if(typeof data === 'string') 
//     {
//       data = data.toLowerCase();
//       // console.log(data.split("{"));
//       return data;
//     } 
//     else 
//     {
//       return data;
//     }
//   }



function toLowercase(data) {

    for (let i = 0; i < data.length; i++) {
           const dataItem = data[i];
       
           for (let j = 0; j < Object.entries(dataItem).length; j++) {
             dataItemVariable = Object.entries(dataItem)[j];
            //  console.log( dataItemVariable)
             dataItemVariable[1] = dataItemVariable[1].toString().replace(/[^a-zA-Z0-9 .-/]/g, '').toLowerCase();
             Object.entries(dataItem)[j] = dataItemVariable;
           }
           console.log(dataItemVariable)
           data[i] = dataItem;

    }
    return data

}

  // function ifEmptyChangeToZero(data) {
  //   data = JSON.stringify(data)
  //   if(typeof data === 'string' && data.length < 1) {
  //     return "Geen antwoord";
  //   } else {
  //     return data
  //   }
  // }


