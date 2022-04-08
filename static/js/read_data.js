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
        console.log(`Result Fetched for ${sheet}: `, response.result);
        show_data.style.display = "block";
        processResult(response.result);
        loading.style.display = "none";
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

    // vehicle_dets(vh_details.slice(1), "vehicle_det");
    update_rec(vh_details.slice(1)[0][2], "model");
    update_rec(vh_details.slice(1)[0][4], "enginecc");
    update_rec(vh_details.slice(1)[1][2], "engine_number");
    update_rec(vh_details.slice(1)[2][2], "chassis_number");
    update_rec(vh_details.slice(1)[2][5], "number_of_seats");
    update_rec(vh_details.slice(1)[3][2], "tax");
    update_rec(vh_details.slice(1)[3][5], "odometer_reading");
    // vehicle_dets(assignment_details.slice(1), "assign_det");
    // vehicle_dets(insurance_details.slice(1), "insurance_det");
    // vehicle_dets(fitness_details.slice(1), "fitness_det");
    // vehicle_dets(permit_details.slice(1), "permit_det");
    // vehicle_dets(puc_details.slice(1), "puc_det");
    // vehicle_dets(battery_details.slice(1), "battery_det");
    // vehicle_dets(tyre_details.slice(1), "tyre_det");
    // vehicle_dets(maintenance_records.slice(1), "maintenance_records");
    // 0: ['Vehicle Details :']
    // 1: (8) ['', 'MODEL :', 'WagonR', '', 'Engine CC :', '998', '', 'MILEAGE']
    // 2: (7) ['', 'Engine Number :', 'K10BN4800081', '', 'Type of Rg :', 'LMV', 'dt']
    // 3: (7) ['', 'Chassis Number :', 'MA3EWDE1S00A23251', '', 'Number of Seats :', '5', 'ml']
    // 4: (7) ['', 'Tax :', '3/31/2031', '', 'Odometer Reading :', '146646(24-10-21)', 'odo']
    // 5: (9) ['', '', '', '', '', '', '', 'old', 'new']


}

function update_rec(details, id_) {
    let fetch_id = document.getElementById(id_);
    console.log("Fetch ID: ", fetch_id, "Details: ", details);

    fetch_id.innerText = details;
}

function vehicle_dets(vh_det, name) {
    console.log("Vehicle Details: ", vh_det);
    let vehicle_det = document.getElementById(name);

    // document.getElementsByClassName(".vh_det_div").forEach(element => {
        
    // });

    // vehicle_det.removeChild();

    // for (let i = 0; i < vh_det.length; i++) {
    //     let vh_det_row = document.createElement("div");
    //     vh_det_row.style.display = "flex";
    //     vh_det_row.style.flexDirection = "row";

    //     for (let j = 0; j < vh_det[i].length; j++) {
    //         var vh_det_div = "";
    //         if (document.querySelector("vh_det_div") != null) {
    //             vh_det_div = document.querySelector("vh_det_div");
    //         } else {
    //             vh_det_div = document.createElement("div");
    //         }
            
    //         vh_det_div.classList.add("vh_det_div");
    //         vh_det_div.innerHTML = vh_det[i][j];
    //         vh_det_div.style.margin = "0px 4px";
    //         vh_det_div.style.font_size = "28px";
    //         vh_det_row.appendChild(vh_det_div);
    //     }
    //     vehicle_det.appendChild(vh_det_row);
    // }
}

// function assignment_dets(assignment_det) {
    
// }

// function insurance_dets(insurance_det) {
    
// }

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