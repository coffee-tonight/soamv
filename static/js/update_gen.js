let content = document.getElementById("cover");
const sheetId = "1_WKqPRuOArfiQ0JeUuiooz67vjCsoLDYA7xuT2izycg"

async function read_vehicle_data(vh_num) {
    // var sheet = sheetName[vh_num]
    // console.log(sheet);
    let loading = document.querySelector(".spinner-box");
    // let show_data = document.querySelector(".show_data");

    loading.style.display = "flex";
    // show_data.style.display = "none";

    var params = {
        // spreadsheetId: '1_WKqPRuOArfiQ0JeUuiooz67vjCsoLDYA7xuT2izycg',
        spreadsheetId: '16Sw_vF06dEUQ5xmRDrxWFuKqR5O3bX-OTGx83v9nlY0',
        // range: sheet,
        range: vh_num,
    };

    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response) {
        console.log(`Result Fetched for ${vh_num}: `, response.result);
        // show_data.style.display = "block";
        loading.style.display = "none";
        processResult(response.result);
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function processResult(result) {
    let array_rows = result.values.length;
    console.log("Arrays_rows: ", array_rows);
    var par_table = document.getElementById("update_content");
  
    var table = document.createElement("TABLE");
    table.setAttribute("id", "data_table");
    table.border = 1;
  
    var tableBody = document.createElement("TBODY");
    table.appendChild(tableBody);
  
    console.log("Values: ", result.values); 
    for(var row=0; row<array_rows; row++) {
      var tr = document.createElement("TR");
      tableBody.appendChild(tr);
  
      console.log("Row: ", result.values[row]);
  
      result.values[row].forEach(el => {
        var td = document.createElement("TD");
        var val = document.createElement("INPUT");
        val.setAttribute("type", "text");
        val.setAttribute("value", el);
        td.appendChild(val);
        tr.appendChild(td);
      });
  
      par_table.appendChild(table);
    }
}

async function search_vehicle() {
    search_val = document.getElementById("search").value;
    if (search_val != "") {
        console.log("Hey! I'm in search_vehicle()", content);
        content.style.position = "absolute";
        content.style.top = "100px";
        content.style.transition = "2.4s";
        var data = await read_vehicle_data(search_val);
        // console.log("Data returned: ", data);
    }
}