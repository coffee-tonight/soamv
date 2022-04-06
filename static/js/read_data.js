let content = document.getElementById("cover");
const sheetId = "1_WKqPRuOArfiQ0JeUuiooz67vjCsoLDYA7xuT2izycg"

async function read_vehicle_data(vh_num) {
    // var sheet = sheetName[vh_num]
    // console.log(sheet);
    let loading = document.querySelector(".spinner-box");
    let show_data = document.querySelector(".show_data");
    loading.style.display = "flex";
    show_data.style.display = "none";

    var params = {
        // spreadsheetId: '1_WKqPRuOArfiQ0JeUuiooz67vjCsoLDYA7xuT2izycg',
        spreadsheetId: '16Sw_vF06dEUQ5xmRDrxWFuKqR5O3bX-OTGx83v9nlY0',
        // range: sheet,
        range: vh_num,
    };

    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response) {
        // console.log(`Result Fetched for ${sheet}: `, response.result);
        processResult(response.result);
        loading.style.display = "none";
        show_data.style.display = "block";
        // return response.result;
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
        // return "Not Found";
    });
}

function processResult(data) {
    // console.log("Data in Process Result: ", data);
    const values = data.values;

    // Decrease the lower limit of the range to ommit the header row
    var vh_details = values.slice(3, 9);
    var assignment_details = values.slice(9, 16);
    var insurance_details = values.slice(17, 21);
    var fitness_details = values.slice(22, 25);
    var permit_details = values.slice(26, 30);
    var puc_details = values.slice(30, 32);
    var battery_details = values.slice(33, 37);
    var tyre_details = values.slice(38, 46);
    var maintenance_records = values.slice(51);

    console.log("Vehicle Details: ", vh_details);
    console.log("Assignment Details: ", assignment_details);
    console.log("Insurance Details: ", insurance_details);
    console.log("Fitness Details: ", fitness_details);
    console.log("Permit Details: ", permit_details);
    console.log("PUC Details: ", puc_details);
    console.log("Battery Details: ", battery_details);
    console.log("Tyre Details: ", tyre_details);
    console.log("Maintenance Records: ", maintenance_records);
    
}

async function search_vehicle() {
    search_val = document.getElementById("search").value;
    if (search_val != "") {
        // console.log("Hey! I'm in search_vehicle()", content);
        content.style.position = "absolute";
        content.style.top = "100px";
        content.style.transition = "2.4s";
        var data = await read_vehicle_data(search_val);
        // console.log("Data returned: ", data);
    }
}