// Service Account: mv-soadu@mv-soadu-345819.iam.gserviceaccount.com
// Client Id: 477935952803-eokqhhu7sv5cpjdvvc5p6h0t4abk7dnf.apps.googleusercontent.com
// API Key: AIzaSyAPEZM-uh2f57W9BaQ4p4mWCb2-_LyL55g

// Your API KEY AIzaSyA2t3evClUKvKsgbXOBrAaqfLuIHjiJC3k
// const sheetId = '1_WKqPRuOArfiQ0JeUuiooz67vjCsoLDYA7xuT2izycg';
const sheetId = '16Sw_vF06dEUQ5xmRDrxWFuKqR5O3bX-OTGx83v9nlY0';

let sheets = [
  "OR 02 BH 7644",
  "OR 02 BJ 0744",
  "OR 02 BG 4344",
  "OD 02 S 3044",
  "OD 02 E 7044",
  "OD 02 G 9144",
  "OR 02 BZ 5744",
  "OR 02 AC 0242",
  "OR 02 BP 7944",
  "OR 02 AZ 0644",
  "OD 02 G 9044",
  "OR 02 BP 8144",
  "OR 02 BZ 4244",
  "OR 02 BZ 5044",
  "OR 02 AN 1119",
  "OD 02 E 5844",
  "OD 02 J 0244",
  "OD 02 E 6044",
  "OD 02 Q 2844",
  "OD 02 J 0344",
  "OD 33 C 7344",
  "OR 02 AJ 2834",
  "OR 02 BU 6144",
  "OD 02 AZ 8644",
  "OR 02 BH 7244",
  "OR 02 AD 8628",
  "OR 02 AD 9818",
  "OR 05 AG 0007",
  "OR 02 BA 8444",
  "OR 02 Q 7007",
  "OD 02 T 1344",
  "OD 02 N 6677",
  "OD 02 BS 0573",
  "OD 02 BR 9180",
  "OR 02 BQ 8944",
  "OR 02 T 7007",
  "OD 33 J 0306",
  "OR 02 BG 4383",
  "OR 02 S 0042",
  "OD 33 D 4544",
  "OD 33 D 4744",
  "OD 02 R 0744",
  "OR 02 AM 0306",
  "OR 02 AH 6624",
  "OR 02 AL 9042",
  "OR 02 AZ 1044",
  "OD 02 BE 3644",
  "OD 02 BE 4044",
  "OD 02 BE 4144",
  "OR 02 BR 3244",
  "OR 02 AZ 0144",
  "OD02 BH 9944",
  "OD 05 T 8011",
  "OD 02 Q 6544",
  "OR 04  H 7007",
  "OD 02 AE 7007",
  "OD 02 BE 7007",
  "OD 02 H 5644",
  "OD 02 AB 2844",
  "OD 02 AZ 7007",
  "OD 02 AQ 7007",
  "OD 02 AT 7007",
  "OD 02 AY 7007",
  "OD 33 C 5184",
  "OD 02 C 7733",
  "OD 02 L 8944",
  "OD 02 N 4929",
  "OD 02 AA 7990",
  "OD 02 AT 4095",
  "OD 02 E 1744",
  "OR 02 BV 6144",
  "OD 02 F 7644",
  "OD 33 D 4144",
  "OR 02 BG 1844",
  "OD 33 D 4644",
  "OD 33 D 5644",
  "OR 02 AT 6844",
  "OR 02 AH 6625",
  "OD 02 BE 3544",
  "OD 02 BE 3744",
  "OR 02 AT 8544",
  "OR 02 BR 3144",
  "OR 02 AZ 2644",
  "OR 02 AZ 2744",
  "OR 02 BZ 7044",
  "OR 02 BZ 7144",
  "OR 02 BZ 7244",
  "OD 02 AB 2344",
  "OR 02 BG 1744",
  "OR 02 BZ 8459",
  "OR 02 BP 8044",
  "OR 02 AT 5344",
  "OD 02 S 9344",
  "OD 02 S 9644",
  "OD 02 T 1244",
  "OD 02 N 9544",
  "OR 02 AP 2266",
  "OD 02 U 1544",
  "OR 02 BX 6944",
  "OD 02 AB 2944",
  "OD 02 AB 3044",
  "OD 02 E 6844",
  "OD 02 F 7444",
  "OD 02 R 0944",
  "OR 02 BZ 5844",
  "OR 02 AZ 0544",
  "OR 02 AZ 0844",
  "OR 02 BZ 0944",
  "OD 02 E 5944",
  "OD 33 J 6544",
  "OD 33 AC 1948",
  "OD 02 BM 7975",
  "OD 02 BM 7954",
  "OD 02 BJ 9593",
  "OD 02 BJ 9598",
  "OD 33 AC 9029",
  "OD02 BS 0781",
  "OD 02 BL 8244",
  "OD02 BL 8144",
  "OR 02 BX 2974",
  "OD 02 H 7244",
  "OD 02 B 9644",
  "OD 02 BA 0944",
  "OD02 BJ 2044",
  "OD 02 BH 8044",
  "OD 02 BJ 9597",
  "OD 02BJ9592",
  "OD 02 BJ 9599",
  "OD 02 BJ 9596",
  "OR 02 AS 2585",
  "OD 02 V 3002",
  "OD 02 BN 7007",
  "OD 02 BP 7007",
  "OD 33 AE 3619"
];

let vehicle_no = document.getElementById("vehicle_no");
console.log(vehicle_no);
for (let i = 0; i<sheets.length; i++) {
  let option_ = document.createElement("option");
  option_.value = sheets[i];
  option_.innerHTML = sheets[i];
  vehicle_no.appendChild(option_);
}

// function read_data() {
//   var params = {
//     // The ID of the spreadsheet to retrieve data from. 1_WKqPRuOArfiQ0JeUuiooz67vjCsoLDYA7xuT2izycg
//     spreadsheetId: '1_WKqPRuOArfiQ0JeUuiooz67vjCsoLDYA7xuT2izycg', // TODO: Update placeholder value.

//     // The A1 notation of the values to retrieve.
//     range: 'Sheet1', // TODO: Update placeholder value.

//     // How values should be represented in the output.
//     // The default render option is ValueRenderOption.FORMATTED_VALUE.
//     //valueRenderOption: '',  // TODO: Update placeholder value.

//     // How dates, times, and durations should be represented in the output.
//     // This is ignored if value_render_option is
//     // FORMATTED_VALUE.
//     // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
//     //dateTimeRenderOption: '',  // TODO: Update placeholder value.
//   };

//   // var res = "";

//   var request = gapi.client.sheets.spreadsheets.values.get(params);
//   request.then(function(response) {
//     // TODO: Change code below to process the `response` object:
//     console.log(response.result);
//     // populateSheet(response.result);
//     // res = response.result;
//   }, function(reason) {
//     console.error('error: ' + reason.result.error.message);
//   });
//   // return res;
// }

function read_data_for_len() {
  let vehicle_no = document.getElementById("vehicle_no").value;
  var params = {
    // spreadsheetId: '1_WKqPRuOArfiQ0JeUuiooz67vjCsoLDYA7xuT2izycg', // TODO: Update placeholder value.
    spreadsheetId: '16Sw_vF06dEUQ5xmRDrxWFuKqR5O3bX-OTGx83v9nlY0', // TODO: Update placeholder value.
    range: vehicle_no,
  };
  var request = gapi.client.sheets.spreadsheets.values.get(params);
  request.then(function(response) {
    console.log(response.result);
    submit_sheet_data(response.result);
  }, function(reason) {
    console.error('error: ' + reason.result.error.message);
  });
}


function submit_sheet_data(all_data) {
  let date = document.getElementById("date").value;
  let desc = document.getElementById("desc").value;
  let work = document.getElementById("work").value;
  let estimate = document.getElementById("estimate").value;
  let spare = document.getElementById("spare").value;
  let labor = document.getElementById("labor").value;
  let total = document.getElementById("total").value;

  console.log("Date: ", date, "Desc: ", desc, "Work: ", work, "Estimate: ", estimate, "Spare: ", spare, "Labor: ", labor, "Total: ", total);

  row = [[date, desc, "", "", work, estimate, spare, labor, total],];
  let last_row = all_data.values.length;
  // let merge_range = `${vehicle_no.value}!B${last_row+1}:D${last_row+1}`;
  let merge_req = [{
    "mergeCells": {
        "range": {
          "sheetId": sheetId,
          "startRowIndex": last_row,
          "endRowIndex": last_row+1,
          "startColumnIndex": 1,
          "endColumnIndex": 4
        },
        "mergeType": "MERGE_ALL"
      }
    },
  ];
  // let all_data = read_data();
  // console.log("All Data: ", all_data);
  // console.log("Last row: ", last_row);
  // let range = `${vehicle_no.value}!A${last_row+1}:J${last_row+1}`;
  let range = `${vehicle_no.value}!A53:J53`;
  let values = {values: row, requests: merge_req};
  console.log("Range: ", range, "Values: ", values);
  write_data(values, range);
}

// function write_data(values, range) {
//   gapi.client.sheets.spreadsheets.values.update({
//     spreadsheetId: sheetId,
//     range: range,
//     valueInputOption: "USER_ENTERED",
//     resource: values
//   }).then((response) => {
//    var result = response.result;
//     console.log(`${result.updatedCells} cells updated.`);
//     document.getElementById("vehicle_no").value = "";
//     document.getElementById("issue").value = "";
//     document.getElementById("oiling").value = "";

//     alert("Cool! Added the data, anything else?");
//   });
// }

function write_data(values, range) {
  log("Range: ", range, "Values: ", values);
  gapi.client.sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: range,
    valueInputOption: "USER_ENTERED",
    resource: values
  }).then((response) => {
   var result = response.result;
    console.log(`${result.updatedCells} cells updated.`);
    document.getElementById("vehicle_no").value = "";
    document.getElementById("issue").value = "";
    document.getElementById("oiling").value = "";

    alert("Cool! Added the data, anything else?");
  });
}

function populateSheet(result) {
  let array_rows = result.values.length;
  console.log("Arrays_rows: ", array_rows);
  var par_table = document.getElementById("parent_table");

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





































// const API_KEY = "AIzaSyA2t3evClUKvKsgbXOBrAaqfLuIHjiJC3k";

// function displayResult2(response) {
//   let tableHead = "";
//   let tableBody = "";
//   response.result.values.forEach((row, index) => {
//     if (index === 0) {
//       tableHead += "<tr>";
//       row.forEach((val) => (tableHead += "<th>" + val + "</th>"));
//       tableHead += "</tr>";
//     } else {
//       tableBody += "<tr>";
//       row.forEach((val) => (tableBody += "<td>" + val + "</td>"));
//       tableBody += "</tr>";
//     }
//   });
//   document.getElementById("table-head").innerHTML = tableHead;
//   document.getElementById("table-body").innerHTML = tableBody;
// }

// function loadData() {
//   // Spreadsheet ID 1MjMoMbuRJqnrfhxjetvdny-dnsFfmLJX24OWiSFUYvk
//   const spreadsheetId = "1MjMoMbuRJqnrfhxjetvdny-dnsFfmLJX24OWiSFUYvk";
//   const range = "A:Z";
//   getPublicValues({ spreadsheetId, range }, displayResult2);
// }

// window.addEventListener("load", (e) => {
//   initOAuthClient({ apiKey: API_KEY });
//   // gapi.client.init({
//   //   'apiKey': API_KEY,
//   //   // 'clientId': 'YOUR_CLIENT_ID',
//   //   'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
//   //   'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
//   // }).then(function () {
//   //     GoogleAuth = gapi.auth2.getAuthInstance();

//   //     // Listen for sign-in state changes.
//   //     GoogleAuth.isSignedIn.listen(updateSigninStatus);
//   // });
// });

// document.addEventListener("gapi-loaded", (e) => {
//   loadData();
// });