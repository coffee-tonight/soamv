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
        // console.log(`Result Fetched for ${vh_num}: `, response.result);
        show_data.style.display = "block";
        loading.style.display = "none";
        processResult(response.result);
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
    var vh_num = values[1][0];
    var reg_date = values[1][5];
    var age = values[1][7];

    var vh_details = values.slice(3, 9);
    var assignment_details = values.slice(9, 16);
    var insurance_details = values.slice(17, 21);
    var fitness_details = values.slice(22, 25);
    var permit_details = values.slice(26, 30);
    var puc_details = values.slice(30, 32);
    var battery_details = values.slice(33, 37);
    var tyre_details = values.slice(38, 46);
    var maintenance_records = values.slice(51);

    // console.log("Vehicle Details: ", vh_details);
    // console.log("Assignment Details: ", assignment_details);
    console.log("Insurance Details: ", insurance_details);
    console.log("Fitness Details: ", fitness_details);
    console.log("Permit Details: ", permit_details);
    console.log("PUC Details: ", puc_details);
    console.log("Battery Details: ", battery_details);
    console.log("Tyre Details: ", tyre_details);
    console.log("Maintenance Records: ", maintenance_records);

    // Vehicle Details
    update_rec(vh_num, "vh_num");
    update_rec(reg_date, "reg_date");
    update_rec(age, "age");
    update_rec(vh_details.slice(1)[0][2], "model");
    update_rec(vh_details.slice(1)[0][5], "enginecc");
    console.log(vh_details.slice(1)[3][8]);
    if (vh_details.slice(1)[3][8] !== undefined) {
        console.log("Undefined!");
        update_rec(vh_details.slice(1)[3][8], "mileage");
    }
    update_rec(vh_details.slice(1)[1][2], "engine_number");
    update_rec(vh_details.slice(1)[2][2], "chassis_number");
    update_rec(vh_details.slice(1)[2][5], "number_of_seats");
    update_rec(vh_details.slice(1)[3][2], "tax");
    update_rec(vh_details.slice(1)[3][5], "odometer_reading");
    
    // Assignment Details
    update_rec(assignment_details.slice(1)[0][2], "campus_assigned");
    update_rec(assignment_details.slice(1)[1][2], "operation_incharge");
    update_rec(assignment_details.slice(1)[1][6], "mobile_incharge");
    update_rec(assignment_details.slice(1)[2][2], "driver1");
    update_rec(assignment_details.slice(1)[3][2], "driver2");
    update_rec(assignment_details.slice(1)[2][6], "mobile1");
    update_rec(assignment_details.slice(1)[3][6], "mobile2");
    update_rec(assignment_details.slice(1)[4][2], "officer_assigned1");
    update_rec(assignment_details.slice(1)[5][2], "officer_assigned2");
    update_rec(assignment_details.slice(1)[4][6], "mobile_officer1");
    update_rec(assignment_details.slice(1)[5][6], "mobile_officer2");
    
    // Insurance Details
    update_rec(insurance_details.slice(1)[0][2], "insuring_company");
    update_rec(insurance_details.slice(1)[0][5], "policy_no");
    update_rec(insurance_details.slice(1)[1][2], "insurance_type");
    update_rec(insurance_details.slice(1)[1][5], "ins_valid_from");
    update_rec(insurance_details.slice(1)[2][5], "ins_valid_to");
    update_rec(insurance_details.slice(1)[2][2], "insurance_amount");
    update_rec(insurance_details.slice(1)[2][7], "ins_due");
    update_rec(insurance_details.slice(1)[2][9], "months");

    // Fitness Details
    update_rec(fitness_details.slice(1)[0][2], "fitness_friquency");
    update_rec(fitness_details.slice(1)[0][5], "fit_valid_from");
    update_rec(fitness_details.slice(1)[1][5], "fit_valid_to");
    update_rec(fitness_details.slice(1)[1][7], "fit_due");
    update_rec(fitness_details.slice(1)[1][9], "months");

    // Permit Details
    update_rec(permit_details.slice(1)[0][2], "type");
    update_rec(permit_details.slice(1)[0][5], "per_valid_from");
    update_rec(permit_details.slice(1)[1][5], "per_valid_to");
    update_rec(permit_details.slice(1)[1][7], "per_due");
    update_rec(permit_details.slice(1)[1][9], "months");

    // PUC Details
    update_rec(puc_details.slice(1)[0][0], "puc");
    update_rec(puc_details.slice(1)[0][2], "puc_valid_from");
    update_rec(puc_details.slice(1)[0][5], "puc_valid_to");
    update_rec(puc_details.slice(1)[0][7], "puc_due");

    // Battery Details
    update_rec(battery_details.slice(1)[0][2], "battery_spec");
    update_rec(battery_details.slice(1)[1][2], "installed_battery_brand");
    update_rec(battery_details.slice(1)[1][6], "battery_valid_from");
    update_rec(battery_details.slice(1)[2][6], "battery_valid_to");

    // Tyre Details
    update_rec(tyre_details.slice(1)[0][2], "tyre_size_spec");
    update_rec(tyre_details.slice(1)[1][2], "tyre_chagne_frequency");
    update_rec(tyre_details.slice(1)[2][3], "curent_tyre_brand");
    update_rec(tyre_details.slice(1)[3][4], "ofr");
    update_rec(tyre_details.slice(1)[4][4], "ofl");
    update_rec(tyre_details.slice(1)[5][4], "obr");
    update_rec(tyre_details.slice(1)[6][4], "obl");
    update_rec(tyre_details.slice(1)[3][5], "rfr");
    update_rec(tyre_details.slice(1)[4][5], "rfl");
    update_rec(tyre_details.slice(1)[5][5], "rbr");
    update_rec(tyre_details.slice(1)[6][5], "rbl");

    update_rec(tyre_details.slice(1)[3][0], "tyre_date_fr");
    update_rec(tyre_details.slice(1)[4][0], "tyre_date_fl");
    update_rec(tyre_details.slice(1)[5][0], "tyre_date_br");
    update_rec(tyre_details.slice(1)[6][0], "tyre_date_bl");

    // Maintenance Records
    update_maintennce_records(maintenance_records.slice(2));
    // vehicle_dets(maintenance_records.slice(1), "maintenance_records");
    // update_rec(maintenance_records.slice(1)[0][2], "campus_assigned");
    // update_rec(maintenance_records.slice(1)[1][2], "operation_incharge");
    // update_rec(maintenance_records.slice(1)[1][6], "mobile_incharge");
    // update_rec(maintenance_records.slice(1)[2][2], "driver1");
    // update_rec(maintenance_records.slice(1)[3][2], "driver2");
    // update_rec(maintenance_records.slice(1)[2][6], "mobile1");
    // update_rec(maintenance_records.slice(1)[3][6], "mobile2");
    // update_rec(maintenance_records.slice(1)[4][2], "officer_assigned1");
    // update_rec(maintenance_records.slice(1)[5][2], "officer_assigned2");
    // update_rec(maintenance_records.slice(1)[4][6], "mobile_officer1");
    // update_rec(maintenance_records.slice(1)[5][6], "mobile_officer2");
    
}

function update_rec(details, id_) {
    let fetch_id = document.getElementById(id_);
    // console.log("Fetch ID: ", fetch_id, "Details: ", details);

    fetch_id.innerText = details;
}

function update_maintennce_records(maintenance_records) {

    // 0: (9) ['12/21/2021', 'RH Drum, A/C GAS CHARGING & L.C', '', '', 'LALU AUTOMOBILES', '', 'रु 4,900.00', 'रु 100.00', 'रु 5,000.00']
    // 1: (9) ['11/2/2021', 'WORK DONE', '', '', 'BACK ON DUTY', '', '', '', '']
    // 2: (9) ['11/1/2021', 'GLOW PLUG SET', '', '', 'LALU AUTOMOBILES', '', 'रु 1,844.00', 'रु 200.00', 'रु 2,044.00']
    // 3: (9) ['10/30/2021', 'BATTERY REPLACEMENT', '', '', 'OHMS & COMPANY', '', 'रु 4,900.00', '', 'रु 4,900.00']
    // 4: (9) ['10/23/2021', 'DRIVER DOOR LOCK, RR BUMP- FIBER MOLDING, INSIDE STRECHER STEEL COLOUR, & L-C', '', '', 'RAMESWAR BODY BUILDERS', '', 'रु 4,189.00', 'रु 2,242.00', 'रु 6,431.00']

    console.log("Maintenance Records: ", maintenance_records);
    let tbody_mr = document.getElementById("tbody_mr");

    for (let i = 0; i < maintenance_records.length; i++) {
        let tr = document.createElement("tr");

        let td_date = document.createElement("td");
        let td_des = document.createElement("td");
        let td_work = document.createElement("td");
        let td_est = document.createElement("td");
        let td_spare = document.createElement("td");
        let td_labor = document.createElement("td");
        let td_tot = document.createElement("td");

        td_date.classList.add("td_");
        td_des.classList.add("td_");
        td_des.classList.add("des_");
        td_work.classList.add("td_");
        td_est.classList.add("td_");
        td_spare.classList.add("td_");
        td_labor.classList.add("td_");
        td_tot.classList.add("td_");

        td_date.innerText = maintenance_records[i][0];
        td_des.innerText = maintenance_records[i][1];
        td_work.innerText = maintenance_records[i][4];
        td_est.innerText = maintenance_records[i][5];
        td_spare.innerText = maintenance_records[i][6];
        td_labor.innerText = maintenance_records[i][7];
        td_tot.innerText = maintenance_records[i][8];

        tr.appendChild(td_date);
        tr.appendChild(td_des);
        tr.appendChild(td_work);
        tr.appendChild(td_est);
        tr.appendChild(td_spare);
        tr.appendChild(td_labor);
        tr.appendChild(td_tot);

        tbody_mr.appendChild(tr);

        // console.log(`Maintenance Record: ${i}`, maintenance_records[i]);
    }

}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
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