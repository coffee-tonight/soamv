let content = document.getElementById("cover");
const sheetId = "1_WKqPRuOArfiQ0JeUuiooz67vjCsoLDYA7xuT2izycg"

var sheetName = {
    "OD-0234-22" : "Sheet1",
    "OD-2342-22" : "Sheet2",
    "OD-2342-21" : "Sheet3",
    "OD-2342-12" : "Sheet4",
    "OD-2342-23" : "Sheet5",
    "OD-2342-24" : "Sheet6",
    "OD-2342-25" : "Sheet7",
    "OD-2342-26" : "Sheet8",
    "OD-2342-27" : "Sheet9",
    "OD-2342-28" : "Sheet10",
    "OD-2342-29" : "Sheet11",
    "OD-2342-20" : "Sheet12",
    "OD-2342-12" : "Sheet13",
    "OD-2342-32" : "Sheet14",
    "OD-2342-42" : "Sheet15",
    "OD-2342-52" : "Sheet16",
}

async function read_vehicle_data(vh_num) {
    var sheet = sheetName[vh_num]
    console.log(sheet);

    var params = {
        spreadsheetId: '1_WKqPRuOArfiQ0JeUuiooz67vjCsoLDYA7xuT2izycg',
        range: sheet,
    };

    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response) {
        console.log(`Result Fetched for ${sheet}: `, response.result);
        processResult(response.result);
        return response.result;
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
        return "Not Found";
    });
}

function processResult(data) {
    console.log("Data in Process Result: ", data);
}

async function search_vehicle() {
    search_val = document.getElementById("search").value;
    if (search_val != "") {
        console.log("Hey! I'm in search_vehicle()", content);
        content.style.position = "absolute";
        content.style.top = "100px";
        content.style.transition = "2.4s";
        var data = await read_vehicle_data(search_val);
        console.log("Data returned: ", data);
    }
}