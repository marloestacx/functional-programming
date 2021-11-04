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
    console.table(newData);
  })
  .catch(function (err) 
  {
    // Catch error
    console.log(err);
  });

function toLowercase(data) {
// loop door de data heen
    for (let i = 0; i < data.length; i++) {
           let dataItem = data[i];
          // loop door alle objecten heen
           for (let j = 0; j < Object.entries(dataItem).length; j++) {
             dataItemVariable = Object.entries(dataItem)[j];
            // vervang vage tekekens en zet alle waardes om naar kleine letters
             dataItemVariable[1] = dataItemVariable[1].toString().replace(/[^a-zA-Z0-9 .-/]/g, '').toLowerCase();
             //push data in nieuwe array
             newData.push(dataItemVariable);
           }
    }
    return newData
}


