let content = document.getElementById("cover");
const sheetId = "1_WKqPRuOArfiQ0JeUuiooz67vjCsoLDYA7xuT2izycg"

async function read_vehicle_data(vh_num) {
    let loading = document.querySelector(".spinner-box");
    loading.style.display = "flex";

    var params = {
        spreadsheetId: '16Sw_vF06dEUQ5xmRDrxWFuKqR5O3bX-OTGx83v9nlY0',
        range: vh_num,
    };

    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response) {
        console.log(`Result Fetched for ${vh_num}: `, response.result);
        loading.style.display = "none";
        processResult(response.result);
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function processResult(result) {
    let array_rows = result.values.length;
    // console.log("Arrays_rows: ", array_rows);
    var par_table = document.getElementById("update_content");
  
    var table = document.createElement("table");
    table.classList.add("table_");
    table.setAttribute("id", "data_table");
    table.border = 1;
  
    var tableBody = document.createElement("tbody");
    tableBody.classList.add("tbody_");
    table.appendChild(tableBody);
  
    console.log("Values: ", result.values); 
    for(var row=0; row<array_rows; row++) {
        var tr = document.createElement("tr");
        //   tr.classList.add("");
        tableBody.appendChild(tr);
    
        // console.log("Row: ", result.values[row]);
    
        result.values[row].forEach(el => {
            var td = document.createElement("TD");
            td.classList.add("td_");
            var val = document.createElement("INPUT");
            val.classList.add("input_");
            val.setAttribute("type", "text");
            val.setAttribute("value", el);
            td.appendChild(val);
            tr.appendChild(td);
        });
    
        par_table.appendChild(table);
    }
    let btn = document.createElement("button");
    btn.classList.add("btn_");
    btn.setAttribute("onclick", "update_data()");
    btn.innerHTML = "Update";
    par_table.appendChild(btn);
}

async function search_vehicle() {
    search_val = document.getElementById("search").value;
    let content = document.getElementById("searchBox");
    if (search_val != "") {
        console.log("Hey! I'm in search_vehicle()", content);
        content.style.position = "absolute";
        content.style.top = "50px";
        content.style.transition = "2s";
        var data = await read_vehicle_data(search_val);
        // console.log("Data returned: ", data);
    }
}

search_val = document.getElementById("search").value;
if (search_val != "") {
    search_val.style.width = "250px";
}

function update_data() {
    console.log("Hey! I'm in update_data()");
}